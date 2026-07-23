// Hidden Admin Access - 12 clicks on logo
(function() {
    var clickCount = 0;
    var lastClickTime = 0;

    $(document).ready(function() {
        // Add admin overlay HTML to body
        var overlayHTML = '<div id="admin-access-overlay" style="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.7);z-index:999999;justify-content:center;align-items:center;">' +
            '<div style="background:#fff;border-radius:16px;padding:40px 50px;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,0.3);animation:popIn 0.3s ease;max-width:400px;width:90%;">' +
            '<div style="margin-bottom:15px;"><i class="fa fa-shield" style="font-size:40px;color:#1e2754;"></i></div>' +
            '<h3 style="color:#1e2754;font-weight:800;margin-bottom:5px;">Admin Access</h3>' +
            '<p style="color:#64748b;font-size:13px;margin-bottom:20px;">Enter admin password to continue</p>' +
            '<input type="password" id="admin-pass-input" placeholder="Enter Password" style="width:100%;padding:12px 16px;border:2px solid #e2e8f0;border-radius:8px;font-size:15px;font-family:Manrope,sans-serif;margin-bottom:15px;text-align:center;" onkeypress="if(event.key===\'Enter\')checkAdminPass()">' +
            '<button onclick="checkAdminPass()" style="width:100%;padding:12px;background:linear-gradient(135deg,#1e2754,#0c93cd);color:#fff;border:none;border-radius:8px;font-size:15px;font-weight:700;cursor:pointer;margin-bottom:10px;">Login</button>' +
            '<button onclick="closeAdminOverlay()" style="width:100%;padding:10px;background:#e2e8f0;color:#475569;border:none;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;">Cancel</button>' +
            '</div></div>';
        $('body').append(overlayHTML);

        // Add click handler to logo parent anchor to prevent page refresh
        $('.logo').closest('a').on('click', function(e) {
            e.preventDefault();
            var now = Date.now();
            if (now - lastClickTime > 3000) {
                clickCount = 0;
            }
            lastClickTime = now;
            clickCount++;
            console.log('Logo click count: ' + clickCount);

            if (clickCount >= 12) {
                clickCount = 0;
                e.stopPropagation();
                $('#admin-access-overlay').css('display', 'flex');
                $('#admin-pass-input').val('').focus();
            }
        });
    });

    window.checkAdminPass = function() {
        var pass = $('#admin-pass-input').val();
        if (pass === 'loan@123') {
            localStorage.setItem('admin_auth', 'true');
            window.location.href = 'admin.html';
        } else {
            alert('Incorrect password!');
            $('#admin-pass-input').val('').focus();
        }
    };

    window.closeAdminOverlay = function() {
        $('#admin-access-overlay').css('display', 'none');
        clickCount = 0;
    };
})();