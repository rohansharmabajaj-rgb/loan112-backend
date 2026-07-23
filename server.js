const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// ─── Middleware ─────────────────────────────────────────────
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve all static HTML and assets from project root
app.use(express.static(path.join(__dirname)));

// ─── Cloudinary Config (from environment variables) ────────
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Verify Cloudinary config on startup
if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
  console.warn('⚠️  WARNING: Cloudinary environment variables not fully set. Image operations will fail.');
  console.warn('   Required: CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET');
}

// ─── Multer Setup ──────────────────────────────────────────
const upload = multer({
  dest: '/tmp/uploads/',
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB max
  fileFilter: (req, file, cb) => {
    const allowed = /jpeg|jpg|png|gif|webp|pdf/;
    const extname = allowed.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowed.test(file.mimetype);
    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error('Only image files (jpg, png, gif, webp) and PDF are allowed'));
    }
  }
});

// ─── Helper: Cleanup temp file ─────────────────────────────
function cleanupTempFile(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  } catch (e) {
    // Ignore cleanup errors
  }
}

// ═════════════════════════════════════════════════════════════
// API ROUTES
// ═════════════════════════════════════════════════════════════

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    cloudinary_configured: !!(process.env.CLOUDINARY_CLOUD_NAME && process.env.CLOUDINARY_API_KEY && process.env.CLOUDINARY_API_SECRET)
  });
});

// ─── 1. Upload Screenshot (Payment Proof) ──────────────────
// POST /api/upload-screenshot
// Body: multipart form with 'file' field
// Returns: { secure_url, public_id, delete_token }
app.post('/api/upload-screenshot', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No file provided' });
    }

    const tempPath = req.file.path;

    // Upload to Cloudinary with folder for organization
    const result = await cloudinary.uploader.upload(tempPath, {
      folder: 'loan112/screenshots',
      resource_type: 'image',
      transformation: [
        { width: 800, height: 800, crop: 'limit' },
        { quality: 'auto:good' }
      ]
    });

    // Cleanup temp file
    cleanupTempFile(tempPath);

    res.json({
      success: true,
      secure_url: result.secure_url,
      public_id: result.public_id,
      delete_token: result.delete_token || ''
    });

  } catch (error) {
    console.error('Upload screenshot error:', error.message);
    if (req.file) cleanupTempFile(req.file.path);
    res.status(500).json({ success: false, message: error.message || 'Upload failed' });
  }
});

// ─── 2. Upload QR Code Image ───────────────────────────────
// POST /api/upload-qr
// Body: multipart form with 'file' field, optional 'phone' field
// Returns: { secure_url, public_id }
app.post('/api/upload-qr', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No file provided' });
    }

    const tempPath = req.file.path;
    const phone = req.body.phone || 'unknown';

    // Upload to Cloudinary with folder for organization
    const result = await cloudinary.uploader.upload(tempPath, {
      folder: 'loan112/qr_codes',
      resource_type: 'image',
      public_id: `qr_${phone}_${Date.now()}`,
      transformation: [
        { width: 500, height: 500, crop: 'limit' },
        { quality: 'auto:good' }
      ]
    });

    // Cleanup temp file
    cleanupTempFile(tempPath);

    res.json({
      success: true,
      secure_url: result.secure_url,
      public_id: result.public_id
    });

  } catch (error) {
    console.error('Upload QR error:', error.message);
    if (req.file) cleanupTempFile(req.file.path);
    res.status(500).json({ success: false, message: error.message || 'Upload failed' });
  }
});

// ─── 3. Delete Image by Public ID ──────────────────────────
// POST /api/delete-image
// Body: { public_id: "loan112/screenshots/xxx" }
// Returns: { success, result }
app.post('/api/delete-image', async (req, res) => {
  try {
    const { public_id } = req.body;

    if (!public_id) {
      return res.status(400).json({ success: false, message: 'public_id is required' });
    }

    const result = await cloudinary.uploader.destroy(public_id, {
      resource_type: 'image'
    });

    res.json({
      success: true,
      result: result
    });

  } catch (error) {
    console.error('Delete image error:', error.message);
    res.status(500).json({ success: false, message: error.message || 'Delete failed' });
  }
});

// ─── 4. Delete Screenshot (Approve/Reject Repayment) ───────
// POST /api/delete-screenshot
// Body: { public_id: "..." }
// Convenience endpoint that also logs the action
app.post('/api/delete-screenshot', async (req, res) => {
  try {
    const { public_id } = req.body;

    if (!public_id) {
      return res.status(400).json({ success: false, message: 'public_id is required' });
    }

    console.log(`🗑️  Deleting screenshot: ${public_id}`);
    const result = await cloudinary.uploader.destroy(public_id, {
      resource_type: 'image'
    });

    console.log(`✅ Screenshot deleted: ${public_id} - Result: ${result.result}`);
    res.json({
      success: true,
      result: result
    });

  } catch (error) {
    console.error('Delete screenshot error:', error.message);
    res.status(500).json({ success: false, message: error.message || 'Delete failed' });
  }
});

// ─── 5. Replace QR Code (Delete Old + Upload New) ──────────
// POST /api/replace-qr
// Body: multipart form with 'file' field, 'old_public_id' field, optional 'phone'
// Returns: { secure_url, public_id, delete_result }
app.post('/api/replace-qr', upload.single('file'), async (req, res) => {
  try {
    const { old_public_id, phone } = req.body;

    // Step 1: Delete old QR image if provided
    let deleteResult = null;
    if (old_public_id) {
      try {
        console.log(`🗑️  Deleting old QR: ${old_public_id}`);
        deleteResult = await cloudinary.uploader.destroy(old_public_id, {
          resource_type: 'image'
        });
        console.log(`✅ Old QR deleted: ${deleteResult.result}`);
      } catch (delErr) {
        console.warn('Warning: Could not delete old QR image:', delErr.message);
        // Continue with upload even if delete fails
      }
    }

    // Step 2: Upload new QR image
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No new file provided' });
    }

    const tempPath = req.file.path;
    const phoneLabel = phone || 'unknown';

    const uploadResult = await cloudinary.uploader.upload(tempPath, {
      folder: 'loan112/qr_codes',
      resource_type: 'image',
      public_id: `qr_${phoneLabel}_${Date.now()}`,
      transformation: [
        { width: 500, height: 500, crop: 'limit' },
        { quality: 'auto:good' }
      ]
    });

    cleanupTempFile(tempPath);

    res.json({
      success: true,
      secure_url: uploadResult.secure_url,
      public_id: uploadResult.public_id,
      delete_result: deleteResult
    });

  } catch (error) {
    console.error('Replace QR error:', error.message);
    if (req.file) cleanupTempFile(req.file.path);
    res.status(500).json({ success: false, message: error.message || 'Replace failed' });
  }
});

// ─── 6. Bulk Delete Multiple Images ────────────────────────
// POST /api/bulk-delete
// Body: { public_ids: ["id1", "id2", ...] }
// Returns: { success, results }
app.post('/api/bulk-delete', async (req, res) => {
  try {
    const { public_ids } = req.body;

    if (!public_ids || !Array.isArray(public_ids) || public_ids.length === 0) {
      return res.status(400).json({ success: false, message: 'public_ids array is required' });
    }

    const results = [];
    for (const id of public_ids) {
      try {
        const result = await cloudinary.uploader.destroy(id, { resource_type: 'image' });
        results.push({ public_id: id, result: result.result });
      } catch (err) {
        results.push({ public_id: id, result: 'error', message: err.message });
      }
    }

    res.json({ success: true, results });

  } catch (error) {
    console.error('Bulk delete error:', error.message);
    res.status(500).json({ success: false, message: error.message || 'Bulk delete failed' });
  }
});

// ═════════════════════════════════════════════════════════════
// CATCH-ALL: Serve index.html for unknown routes
// ═════════════════════════════════════════════════════════════
app.get('*', (req, res) => {
  // Check if the requested file exists
  const filePath = path.join(__dirname, req.path);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    res.sendFile(filePath);
  } else {
    res.sendFile(path.join(__dirname, 'index.html'));
  }
});

// ═════════════════════════════════════════════════════════════
// START SERVER
// ═════════════════════════════════════════════════════════════
app.listen(PORT, () => {
  console.log(`
╔══════════════════════════════════════════════════╗
║          🚀 Loan112 Backend Server               ║
╠══════════════════════════════════════════════════╣
║  Port: ${PORT}                                       ║
║  URL:  http://localhost:${PORT}                      ║
║                                                  ║
║  API Endpoints:                                  ║
║  • GET  /api/health          - Health check      ║
║  • POST /api/upload-screenshot - Upload payment  ║
║  • POST /api/upload-qr       - Upload QR code    ║
║  • POST /api/delete-image    - Delete any image  ║
║  • POST /api/delete-screenshot - Delete payment  ║
║  • POST /api/replace-qr      - Replace QR image  ║
║  • POST /api/bulk-delete     - Delete multiple   ║
║                                                  ║
║  Cloudinary: ${process.env.CLOUDINARY_CLOUD_NAME ? '✅ Configured' : '❌ Not configured'}            ║
╚══════════════════════════════════════════════════╝
  `);
});

module.exports = app;
