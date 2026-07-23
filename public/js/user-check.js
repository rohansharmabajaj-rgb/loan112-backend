// Shared user check function - checks Firestore if user has form data
function checkUserAndRedirect(callback) {
    var phone = localStorage.getItem('loan112_mobile');
    if (!phone) {
        // No phone = new user, go to check-eligibility
        window.location.href = 'check-eligibility.html';
        return;
    }

    // Check Firestore for user data
    if (typeof firebase !== 'undefined' && firebase.apps.length) {
        var db = firebase.firestore();
        db.collection('users').doc(phone).get().then(function(doc) {
            if (doc.exists && doc.data().company_name) {
                // User has form data filled
                callback(true);
            } else {
                // User is new, no form data
                callback(false);
            }
        }).catch(function() {
            // Error, treat as new user
            callback(false);
        });
    } else {
        // Firebase not loaded, check localStorage fallback
        callback(false);
    }
}

// Check Eligibility click handler for loan-application.html
function handleCheckEligibility() {
    checkUserAndRedirect(function(hasData) {
        if (hasData) {
            window.location.href = 'user-report.html';
        } else {
            window.location.href = 'check-eligibility.html';
        }
    });
}

// My Account click handler for sidebar
function handleMyAccount() {
    checkUserAndRedirect(function(hasData) {
        if (hasData) {
            window.location.href = 'my-profile.html';
        } else {
            window.location.href = 'check-eligibility.html';
        }
    });
}