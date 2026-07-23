$(document).ready(function () {
  $("#mobile").keypress(function (e) {
    $("#errormobile").html("");

    var regex = /^[0-5][0-9]{0}$/;
    if (regex.test($(this).val())) {
      $(this).val("");
      $("#errormobile")
        .html("Please enter the valid mobile number.")
        .show()
        .css({ color: "red" });
      return false;
    }

    if ($(this).val().length >= 10) {
      $("#errormobile").html("").css({ color: "#0070c0" });
      return false;
    }

    if ($(this).val().length < 9) {
      $("#errormobile")
        .html("Please enter the 10 digit.")
        .show()
        .css({ color: "red" });
    } else {
      $("#errormobile").html("").css({ color: "#0070c0" });
    }
  });

  $("#alternate_mobile").keypress(function (e) {
    $("#erroraltmobile").html("");

    var regex = /^[0-5][0-9]{0}$/;

    if (regex.test($(this).val())) {
      $(this).val("");
      $("#erroraltmobile")
        .html("Please enter the valid alternate mobile number.")
        .show()
        .css({ color: "red" });
      return false;
    }

    //        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
    //            $('#error_altmobile').html('Number Only!').show().css({'color': 'red'});
    //            return false;
    //        }
    if ($(this).val().length >= 10) {
      $("#erroraltmobile").html("").show().css({ color: "#0070c0" });
      return false;
    }
    if ($(this).val().length < 9) {
      $("#erroraltmobile")
        .html("Please enter the 10 digit.")
        .show()
        .css({ color: "red" });
    } else {
      $("#erroraltmobile").html("").show().css({ color: "#0070c0" });
    }
  });

  $(".counter-value").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 3500,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });

  $("#pincode").keypress(function (e) {
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
      return false;
    }
    if ($(this).val().length >= 6) {
      return false;
    }
    if ($(this).val().length < 5) {
      $("#error_pincode")
        .html("Please enter the valid pincode.")
        .show()
        .css({ color: "red" });
    } else {
      $("#error_pincode").html("").show().css({ color: "green" });
    }
  });

  $("#full_name").keypress(function (event) {
    var inputValue = event.which;
    if (
      !(inputValue >= 65 && inputValue <= 122) &&
      inputValue != 32 &&
      inputValue != 0
    ) {
      $("#errorname")
        .html("Please enter the alphabat only.")
        .show()
        .css({ color: "red" });
      event.preventDefault();
    } else {
      $("#errorname").html("").show().css({ color: "red" });
    }
  });

  $("#loan_amount").keypress(function (e) {
    $("#errorloanamount").html("");

    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
      $("#errorloanamount")
        .html("Please enter the digit only.")
        .show()
        .css({ color: "red" });
      return false;
    }

    if ($(this).val().length > 6) {
      $("#errorloanamount")
        .html("Maximum 6 digit allowed.")
        .show()
        .css({ color: "red" });
      return false;
    }

    if ($(this).val().length < 5) {
      $("#errorloanamount")
        .html("Minimum 4 digit requried.")
        .show()
        .css({ color: "red" });
    } else {
      $("#errorloanamount").html("").css({ color: "#0070c0" });
    }
  });

  $("#ContactEnquiry").on("submit", function () {
    $("#overlay").fadeIn(300);
  });

  $("#FormVerify").on("submit", function () {
    $("#overlay").fadeIn(300);
  });

  $("#OTPVerify").on("submit", function () {
    $("#overlay").fadeIn(300);
  });

  $("#FormApplyNow").on("submit", function () {
    $("#overlay").fadeIn(300);
  });

  $("#FormLoanDetails").on("submit", function () {
    $("#overlay").fadeIn(300);
  });

  $("#FormDocumentsUpload").on("submit", function () {
    //            $("#overlay").fadeIn(300);
  });

  $("#FormCareer").on("submit", function () {
    $("#overlay").fadeIn(300);
  });

  $("#ContactUSEnquiry").on("submit", function () {
    $("#overlay").fadeIn(300);
  });

  $("#subscribeemail").on("submit", function () {
    $("#overlay").fadeIn(300);
  });

  $("#FormDocumentsUploadFinish").on("submit", function () {
    $("#overlay").fadeIn(300);
  });

  $("#submit").click(function () {
    if ($(".checkbox_check").prop("checked") == false) {
      $("#error_checked")
        .html("Please check the checkbox first!")
        .show()
        .css({ color: "red" });
      return false;
    }
  });

  $("#applyForm").submit(function () {
    $("#applybutton")
      .css({ color: "white", "background-color": "black" })
      .prop("disabled", true);
  });
});

//Detecting user device
var userAgent = navigator.userAgent || navigator.vendor || window.opera;
var device;
{
  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    device = "Windows";
  }

  if (/android/i.test(userAgent)) {
    device = "Android";
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    device = "iOS";
  }
}

window.onscroll = function () {
  myFunction();
};

var header = document.getElementsByTagName("body");
if (header[0]) {
  var sticky = header.offsetTop;
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
}

function FirstNameValidate(name) {
  let valid_name = $(name).val();
  if (valid_name.length < 3 || valid_name.length > 40) {
    $("#errorname")
      .html("Name length should be in between 3 to 40 characters.")
      .show()
      .css({ color: "red" });
    $(name).val("");
    return false;
  } else {
    $("#errorname").html("").show().css({ color: "#ffc107" });
  }
  var letters = /^[A-Za-z ]+$/;
  if (valid_name.match(letters)) {
    $("#errorname").html("").show().css({ color: "#ffc107" });
  } else {
    $("#errorname")
      .html("Name can only contain alphabets.")
      .show()
      .css({ color: "red" });
    $(name).val("");
    return false;
  }
}

function IsEmail_personal(email) {
  var regex = /([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})/;
  let valid_email = $(email).val();
  if (valid_email.match(regex)) {
    $("#erroremail").html("").show().css({ color: "#0070c0" });
  } else {
    $("#erroremail")
      .html("Please enter the valid email.")
      .show()
      .css({ color: "red" });
    $(email).val("");
    return false;
  }
}

function validloanamount(amount) {
  var loan_amount = $(amount).val();
  if (loan_amount < 5000) {
    $("#errorloanamount")
      .html("Minimum loan amount can be Rs 5,000/-")
      .show()
      .css({ color: "red" });
    $(amount).val("");
    return false;
  }
  if (loan_amount > 100000) {
    $("#errorloanamount")
      .html("Maximum loan amount can be Rs 1,00,000/-")
      .show()
      .css({ color: "red" });
    $(amount).val("");
    return false;
  } else {
    $("#errorloanamount").html("").css({ color: "#0070c0" });
  }
}

function income_type_label(obj) {
  var income_type = $(obj).val();

  $("#lbl_income_type").text("Monthly Salary");
  $("#monthly_salary").attr("placeholder", "Monthly Salary");

  if (income_type == 2) {
    $("#lbl_income_type").text("Monthly Income");
    $("#monthly_salary").attr("placeholder", "Monthly Income");
  }

  //    $("#lbl_income_type").text("Monthly Salary");
  //    $("#monthly_salary").attr('placeholder', 'Monthly Salary');
  //    $(".disbbl-input").removeAttr('disabled');
  //    if (income_type == 2) {
  //        $(".disbbl-input").attr('disabled', 'disabled');
  //    }
}

function valid_monthly_income(amount) {
  var monthly_income = $(amount).val();
  if (monthly_income < 25000) {
    $("#errormonthlysalary")
      .html("Minimum income required is Rs 25,000/-")
      .show()
      .css({ color: "red" });
    $(amount).val("");
    return false;
  } else {
    $("#errormonthlysalary").html("").css({ color: "#0070c0" });
  }
}

function loan_obligation(amount) {
  var loan_obligations = $(amount).val();
  if (loan_obligations < 0) {
    $("#error_loan_obligation")
      .html("For no obligations, mention 0")
      .show()
      .css({ color: "red" });
    $(amount).val("");
    return false;
  } else {
    $("#error_loan_obligation").html("").css({ color: "#0070c0" });
  }
}

function validatePanNumber(pan) {
  let pannumber = $(pan).val();
  var regex = /[a-zA-Z]{3}[p-pP-P]{1}[a-zA-Z]{1}\d{4}[a-zA-Z]{1}/;

  if (pannumber.length == 10) {
    if (pannumber.match(regex)) {
      $("#errorpancard").html("").show().css({ color: "#0070c0" });
    } else {
      $("#errorpancard")
        .html("Please enter valid pan number..")
        .show()
        .css({ color: "red" });
      $(pan).val("").focus();
      return false;
    }
  } else {
    $("#errorpancard")
      .html("Please enter valid pan number.")
      .show()
      .css({ color: "red" });
    $(pan).val("").focus();
    return false;
  }
}

function IsEmail_office(email) {
  var regex = /([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})/;
  let valid_email = $(email).val();
  if (valid_email.match(regex)) {
    $("#erroremailoffice").html("").show().css({ color: "#0070c0" });
  } else {
    $("#erroremailoffice")
      .html("Please enter the valid email.")
      .show()
      .css({ color: "red" });
    $(email).val("");
    return false;
  }
}

function toUnicode(elmnt, content) {
  if (content.length == elmnt.maxLength) {
    next = elmnt.tabIndex;
    if (next < document.forms[0].elements.length) {
      document.forms[0].elements[next].focus();
    }
  }
}

function clockTimer() {
  var i = 1 * 180;
  var timer1 = "";

  (function timer() {
    if (--i < 0) return;
    setTimeout(function () {
      if (i == 0) {
        $("#resend-otp").html("Session Expired.");
      } else {
        $("#timer").html("Session will expire in " + i + " seconds");
        timer1 = i;
        timer();
      }
    }, 1000);
  })();
}

function Filevalidation(fileid) {
  const fi = document.getElementById(fileid);
  if (fi.files.length > 0) {
    for (const i = 0; i <= fi.files.length - 1; i++) {
      const fsize = fi.files.item(i).size;
      const file = Math.round(fsize / 1024);
      // The size of the file.
      if (file >= 2048) {
        $("#size")
          .html("File too Big, please select a file less than 2mb")
          .show()
          .css({ color: "red" });
        $("#submit").attr("disabled", "disabled");
        return false;
      } else {
        $("#submit").removeAttr("disabled");
        $("#size").html("").show().css({ color: "#0070c0" });
      }
    }
  }
}
function validateDocumentUpload(f) {
  var maxUploadSize = 2; //8MB
  var maxUploadSizeChk = maxUploadSize * 1024 * 1024;
  //        console.log("Step 1");
  if (f == undefined) return false;
  //        console.log("Step 2");
  var mp = document.getElementById("docs_error");
  mp.style.display = "none";

  var frm = f;

  //        alert(f);
  //        console.log("Step 3");

  var docUpload = frm["docs_type"].value;

  //        console.log("Step 4");
  //        alert(docUpload);
  //        console.log("Step 5");
  var willPost = 1;
  var error_msg = "";

  if (frm["docs_type"].value == "") {
    error_msg = "Please select document type from dropdown";
    willPost = 0;
  } else if (
    frm["doc_file"].value == "" ||
    frm["doc_file"].files == undefined
  ) {
    error_msg = "Please select file to upload";
    willPost = 0;
  } else if (
    (frm["docs_type"].value == "6" ||
      frm["docs_type"].value == "7" ||
      frm["docs_type"].value == "13") &&
    !frm["doc_file"].value.match(/(\.pdf)$/i)
  ) {
    error_msg = "Please upload pdf file only.";
    willPost = 0;
  } else if (
    frm["docs_type"].value == "18" &&
    !frm["doc_file"].value.match(/(\.jpg|\.jpeg|\.png)$/i)
  ) {
    error_msg = "Please upload jpeg, jpg, png file only.";
    willPost = 0;
  } else if (!frm["doc_file"].value.match(/(\.pdf|\.jpg|\.jpeg|\.png)$/i)) {
    error_msg = "Invalid file format selected";
    willPost = 0;
  } else if (
    frm["doc_file"].files != undefined &&
    frm["doc_file"].files[0].size > maxUploadSizeChk
  ) {
    error_msg = "File size is greater than " + maxUploadSize + " MB";
    willPost = 0;
  }

  if (willPost == 1) {
    mp.style.display = "none";
    $("#overlay").fadeIn(300);
    return true;
  } else {
    mp.style.display = "block";
    $("#docs_error .alert").text(error_msg);
    return false;
  }

  return false;
}

$("#login-form").submit(function (e) {
  e.preventDefault();
  //    login_sbm();
});

$("#login-sbm").click(function () {
  login_sbm();
});

$("#tnccheck").click(function () {
  var tnc = tnccheck();
  if (tnc === false) {
    catchError("Please accept Terms and Conditions");
  }
});

$("#otp-sbm").click(function () {
  otp_verify_sbm();
});

function tnccheck() {
  if ($("#tnccheck").is(":checked")) {
    return true;
  } else {
    return false;
  }
}

function existing_customer_check(id, switch_type) {
  $("#" + switch_type + "_id").val(id);
  if (id == 1) {
    $("." + switch_type + "_1").addClass("active");
    $("." + switch_type + "_2").removeClass("active");
    $(".login_box").addClass("hidden");
    $(".pan_box").removeClass("hidden");
  } else if (id == 2) {
    $("." + switch_type + "_2").addClass("active");
    $("." + switch_type + "_1").removeClass("active");
    $(".login_box").removeClass("hidden");
    $(".pan_box").addClass("hidden");
  }
}

function getLocationAndExecute() {
  // console.log("ok")
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        localStorage.setItem("latitude", latitude);
        localStorage.setItem("longitude", longitude);
      },
      function (error) {
        console.error("Error fetching location: ", error.message);
        return false;
        //callback(null, null);
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
    return false;
    //callback(null, null);
  }
}

$(function () {
  var base_url = window.location.pathname;
  var split_url = base_url.split("/");
  if (split_url[1] == "apply-now" || split_url[1] == "login") {
    var latitude = localStorage.getItem("latitude");
    var longitude = localStorage.getItem("longitude");
    console.log(latitude, longitude);
    if (latitude == null && longitude == null) {
      if (split_url[1] == "get-location") {
        $("#getloactionbtn").show();
        getFetchLocationAndExecute();
      } else {
        getLocationAndExecute();
      }
    }
  }
});

function getFetchLocationAndExecute() {
  const $btn = $("#getloactionbtn");

  $btn.prop("disabled", true).text("Loading...");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        localStorage.setItem("latitude", latitude);
        localStorage.setItem("longitude", longitude);

        var getLocationLeadId = $("#getLocationLeadId").val();

        let dataSet = {
          current_page: "update-geolocation",
          geo_long: longitude,
          geo_lat: latitude,
          lead_id: getLocationLeadId,
        };

        $.ajax({
          type: "POST",
          url: "/update-location",
          data: dataSet,
          dataType: "json",
          success: function (result) {
            if (result.status == 1) {
              catchSuccess(result.message);
              $btn.hide();
            } else {
              catchError(result.message);
              $btn.prop("disabled", false).text("Get Geo Location");
            }
          },
          error: function (xhr) {
            console.log(xhr.status + " " + xhr.statusText);
            catchError("Unable to update your location. Please try again.");
            $btn.prop("disabled", false).text("Get Geo Location");
          },
        });
      },

      function (error) {
        let message = "";

        switch (error.code) {
          case error.PERMISSION_DENIED:
            message =
              "Location permission denied. Please allow location access and try again.";
            break;

          case error.POSITION_UNAVAILABLE:
            message =
              "Location information is unavailable. Please turn on your GPS.";
            break;

          case error.TIMEOUT:
            message = "Location request timed out. Please try again.";
            break;

          default:
            message =
              "Unable to fetch your location. Please enable location services.";
        }

        alert(message); // Browser alert
        // catchError(message);  // Use this instead if you have a custom alert

        $btn.prop("disabled", false).text("Get Geo Location");
      },

      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  } else {
    alert("Geolocation is not supported by this browser.");
    // catchError("Geolocation is not supported by this browser.");
    $btn.prop("disabled", false).text("Get Geo Location");
  }
}

function login_sbm() {
  let dataSet;
  var mobile = $("#login-inp").val();
  var uuid = $("#device_id").val();
  var latitude = localStorage.getItem("latitude");
  var longitude = localStorage.getItem("longitude");

  if (latitude == null && longitude == null) {
    getLocationAndExecute();
  }

  var tnc = tnccheck();
  if (mobile.trim() == "") {
    catchError("Mobile number cannot be empty");
    return false;
  } else if (mobile.length != 10) {
    catchError("Mobile number must contain 10 digits only");
    return false;
  } else if (isNaN(mobile)) {
    catchError("Mobile number must contain numbers only");
    return false;
  } else if (!/^[6-9][0-9]{9}$/.test(mobile)) {
    catchError("Enter valid 10-digit mobile number starting with 6–9");
    return false;
  } else if (tnc === false) {
    catchError("Please accept Terms and Conditions");
    return false;
  } else {
    dataSet = {
      mobile: mobile,
      current_page: "login",
      is_existing_customer: 2,
      device_id: uuid,
    };
    $.ajax({
      type: "POST",
      url: "/login-sbm",
      data: dataSet,
      dataType: "json",
      success: function (result) {
        if (result.status == 1) {
          catchSuccess(result.message);
          //pushEventCleverTap("OTP_Sent","Success");
          $("#pages").html(result.data);
          $("#otp1").focus();
        } else {
          catchError(result.message);
          //pushEventCleverTap("OTP_Sent","Failed");
        }
      },
      error: function (xhr) {
        console.log(xhr.status + " " + xhr.statusText);
      },
    });
  }
}

function otp_validate(count) {
  if (event.key === "Backspace" || event.keyCode === 8) {
    if ($("#otp" + count).val() == "") {
      $("#otp" + (count - 1)).focus();
    }
  }

  if ($("#otp" + count).val() == "") {
    catchError("OTP cannot be empty");
    return false;
  }

  if (isNaN($("#otp" + count).val())) {
    catchError("OTP must contain numbers only");
    $("#otp" + count).select();
    $("#otp" + count).val("");
    return false;
  }
  if (
    $("#otp" + count).length == 1 &&
    $("#otp" + count)
      .val()
      .trim() != ""
  ) {
    $("#otp" + (count + 1)).focus();
  }
}

$("#otp-verify-form").submit(function (e) {
  e.preventDefault();
  otp_verify_sbm();
});

function otp_verify_sbm() {
  var otp1 = $("#otp1").val();
  var otp2 = $("#otp2").val();
  var otp3 = $("#otp3").val();
  var otp4 = $("#otp4").val();
  var mobile = $("#mobile").val();

  var otp = otp1 + "" + otp2 + "" + otp3 + "" + otp4;
  var cust_profile_id = $("#cust-profile-id").val();
  if (otp.trim() == "") {
    catchError("OTP cannot be empty");
  } else if (otp.length != 4) {
    catchError("OTP must contain 4 digits only");
  } else if (isNaN(otp)) {
    catchError("OTP must contain numbers only");
  } else {
    let dataSet = {
      otp: otp,
      current_page: "otp_verify",
      mobile: mobile,
      cust_profile_id: cust_profile_id,
    };
    $.ajax({
      type: "POST",
      url: "/otp-verify",
      data: dataSet,
      dataType: "json",
      success: function (result) {
        if (result.status == 1) {
          catchSuccess(result.message);
          window.location.href =
            location.protocol + "//" + location.host + "/my-dashboard";
        } else {
          catchError(result.message);
        }
      },
      error: function (xhr) {
        console.log(xhr.status + " " + xhr.statusText);
      },
    });
  }
}

function resend_otp() {
  var mobile = $("#mobile").val();
  var cust_profile_id = $("#cust-profile-id").val();
  let dataSet = {
    cust_profile_id: cust_profile_id,
    mobile: mobile,
    current_page: "resend_otp",
  };
  $.ajax({
    type: "POST",
    url: "/resend-otp",
    data: dataSet,
    dataType: "json",
    success: function (result) {
      if (result.status == 1) {
        catchSuccess(result.message);
      } else {
        catchError(result.message);
      }
    },
    error: function (xhr) {
      console.log(xhr.status + " " + xhr.statusText);
    },
  });
}

function pincode_validation(event) {
  var pincode = $("#pincode").val();
  console.log(pincode);

  var charCode = event.which || event.keyCode;

  if (event.key === "Backspace" || charCode === 8) {
    $("#residence_city").val("");
    $("#residence_state").val("");
    return;
  }

  if (pincode.length === 6 && /^\d+$/.test(pincode)) {
    let dataSet = { pincode: pincode };
    $.ajax({
      type: "POST",
      url: "/get-pincode-details",
      data: dataSet,
      dataType: "json",
      success: function (result) {
        if (result.status == 1) {
          catchSuccess(result.message);
          $("#residence_city").val(result.data.city_name);
          $("#residence_state").val(result.data.state_name);
          $("#city_id").val(result.data.city_id);
          $("#state_id").val(result.data.state_id);
        } else if (result.status == 4) {
          catchError(result.message);
          user_session_expired();
        } else {
          catchError(result.message);
        }
      },
      error: function (xhr) {
        console.log(xhr.status + " " + xhr.statusText);
      },
    });
  }
}
function pancard_validate(count) {
  if (event.key === "Backspace" || event.keyCode === 8) {
    if ($("#pancard" + count).val() == "") {
      $("#pancard" + (count - 1)).focus();
      return false;
    }
  }

  if ($("#pancard" + count).val() == "") {
    catchError("Pancard cannot be empty");
    $("#residence_city").val("");
    $("#residence_state").val("");
    return false;
  }

  if (
    $("#pancard" + count).length == 1 &&
    $("#pancard" + count)
      .val()
      .trim() != ""
  ) {
    $("#pancard" + (count + 1)).focus();
  }
}

function income_details_sbm(save_type) {
  var income_type_id = $("#income_type_id").val();
  var salary_mode_id = $(
    "#income_details input[name='salary_mode_id']:checked"
  ).val();
  var monthly_income = $("#monthly_income").val();
  var salary_date = $("#salary_date").val();

  if (salary_date != "") {
    salary_date = new Date(salary_date);
    var today = new Date();
    var date45DaysAfter = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 45
    );
  }

  if (income_type_id == "") {
    catchError("Please select employment type");
  } else if (monthly_income.trim() == "") {
    catchError("Monthly Salary cannot be empty");
  } else if (monthly_income.trim() <= 15000) {
    catchError("Monthly Income must be greater than Rs. 15,000");
  } else if (monthly_income.trim() > 900000) {
    catchError("Monthly Income must be less than Rs. 9,00,000");
  } else if (salary_date == "") {
    catchError("Salary date cannot be empty");
  } else if (salary_date.length != "10") {
    catchError("Salary date should be valid");
  } else if (salary_date < today) {
    catchError("Salary date cannot be today or previous date");
  } else if (salary_date > date45DaysAfter) {
    catchError("Salary date must be in 45 days");
  } else if (!salary_mode_id) {
    catchError("Please select mode of income");
  } else {
    salary_date = salary_date.toISOString().slice(0, 10);
    let dataSet = {
      income_type_id: income_type_id,
      salary_mode_id: salary_mode_id,
      monthly_income: monthly_income,
      salary_date: salary_date,
      current_page: "income_details",
    };
    $.ajax({
      type: "POST",
      url: "/income-details-sbm",
      data: dataSet,
      dataType: "json",
      beforeSend: function () {
        $(".loader-box").removeClass("hidden");
      },
      success: function (result) {
        if (result.status == 1) {
          catchSuccess(result.message);
          if (save_type == 1) {
            window.location.reload();
          } else {
            scollToTop("registration");
            $("#registration").html(result.data);
          }
        } else if (result.status == 4) {
          catchError(result.message);
          user_session_expired();
        } else {
          catchError(result.message);
        }
      },
      complete: function () {
        $(".loader-box").addClass("hidden");
      },
      error: function (xhr) {
        console.log(xhr.status + " " + xhr.statusText);
      },
    });
  }
}

// function check_eligibility() {
//     function getLocationAndExecute(callback) {
//         if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//         function (position) {
//         var latitude = position.coords.latitude;
//         var longitude = position.coords.longitude;
//         callback(latitude, longitude);
//         },
//         function (error) {
//         console.error("Error fetching location: ", error.message);
//         callback(null, null); // Proceed even if location fails
//         }
//         );
//         } else {
//         console.error("Geolocation is not supported by this browser.");
//         callback(null, null); // Proceed if geolocation is not supported
//         }
//         }
//     var income_type_id = $("#income_type_id").val();
//     // var salary_mode_id = $("#income_details input[name='salary_mode_id']:checked").val();
//     var monthly_income = $("#monthly_income").val();
//     var salary_date = $("#salary_date").val();
//     var pancard1 = $("#pancard1").val();
//     var pancard2 = $("#pancard2").val();
//     var pancard3 = $("#pancard3").val();
//     var pancard4 = $("#pancard4").val();
//     var pancard5 = $("#pancard5").val();
//     var pancard6 = $("#pancard6").val();
//     var pancard7 = $("#pancard7").val();
//     var pancard8 = $("#pancard8").val();
//     var pancard9 = $("#pancard9").val();
//     var pancard10 = $("#pancard10").val();

//     var empName = $("#empName").val();
//     var dob = $("#dob").val();
//     var personal_email = $("#personal_email").val();
//     var mobile = $("#mobile").val();
//     var gender = $("#gender_id").val();

//     var pancard = pancard1 + '' + pancard2 + '' + pancard3 + '' + pancard4 + '' + pancard5 + '' + pancard6 + '' + pancard7 + '' + pancard8 + '' + pancard9 + '' + pancard10;

//     // var pincode1 = $("#pincode1").val();
//     // var pincode2 = $("#pincode2").val();
//     // var pincode3 = $("#pincode3").val();
//     // var pincode4 = $("#pincode4").val();
//     // var pincode5 = $("#pincode5").val();
//     // var pincode6 = $("#pincode6").val();

//     // var pincode = pincode1 + '' + pincode2 + '' + pincode3 + '' + pincode4 + '' + pincode5 + '' + pincode6;
//     var pincode = $("#pincode").val();

//     var city_id = $("#city_id").val();
//     var state_id = $("#state_id").val();

//     var city_name = $("#residence_city").val();
//     var state_name = $("#residence_state").val();

//     if (dob != '') {
//         dob = new Date(dob);
//         var today = new Date(); // Get the current date
//         var YearsAgoDate55 = new Date(today.getFullYear() - 55, today.getMonth(), today.getDate());
//         var YearsAgoDate21 = new Date(today.getFullYear() - 21, today.getMonth(), today.getDate());
//     }

//     if (pancard == "") {
//         catchError('Pancard cannot be empty');
//     } else if (pancard.length != 10) {
//         catchError('Pancard must contain 10 characters');
//     } else if (income_type_id == '') {
//         catchError('Please select employment type');
//     } else if (monthly_income.trim() == '') {
//         catchError('Monthly Salary cannot be empty');
//     } else if (monthly_income.trim() <= 15000) {
//         catchError("Monthly Income must be greater than Rs. 15,000");
//     } else if (monthly_income.trim() > 900000) {
//         catchError("Monthly Income must be less than Rs. 9,00,000");
//     } else if (salary_date == ""){
//         catchError("Next Salary Date cannot be empty");
//     } else if(empName == ""){
//         catchError("Company Name cannot be empty");
//     }
//     // else if (!salary_mode_id) {
//     //     catchError('Please select mode of income');
//     // }
//     else if (dob == '') {
//         catchError('DOB cannot be empty');
//     } else if (dob < YearsAgoDate55) {
//         catchError('Age cannot be greater than 55 Years');
//     } else if (dob > YearsAgoDate21) {
//         catchError('Age cannot be less than 21 Years');
//     }
//     else if (personal_email.trim() == '') {
//         catchError('Personal email cannot be empty');
//     } else {
//         dob = dob.toISOString().slice(0, 10);
//         // salary_date = salary_date.toISOString().slice(0, 10);
//         let dataSet = { income_type_id: income_type_id, monthly_income: monthly_income, residence_pincode: pincode, cityId: city_id, stateId: state_id, cityName: city_name, stateName: state_name, pancard: pancard, mobile: mobile, personal_email: personal_email, salaryDate:salary_date, emp_company_name: empName, gender:gender, dob:dob};
//         $.ajax({
//             type: "POST",
//             url: '/check-eligiblity-sbm',
//             data: dataSet,
//             dataType: 'json',
//             beforeSend: function () {
//                 $(".loader-box").removeClass("hidden");
//             },
//             success: function (result) {
//                 if (result.status == 1) {
//                     window.location.href = location.protocol + '//' + location.host + '/loan-application';
//                 } else if (result.status == 3) {
//                     catchError(result.message);
//                     window.location.href = location.protocol + '//' + location.host + '/eligibility-failed';
//                 } else if (result.status == 4) {
//                     catchError(result.message);
//                     user_session_expired();
//                 } else {
//                     catchError(result.message);
//                 }
//             }, complete: function () {
//                 $(".loader-box").addClass("hidden");
//             }, error: function (xhr) {
//                 console.log(xhr.status + " " + xhr.statusText);
//             }
//         });
//     }

// }
/*==========pancard structure validate=========*/

$("#pancard-updated").keyup(function () {
  var pancard = $(this).val();
  if (pancard.length == 10) {
    var regpan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
    if (regpan.test(pancard)) {
      $("#pancard-updated").removeClass("inp-error");
      var dataSet = {
        pancard: pancard,
        current_page: "pancard_verification",
      };
      $.ajax({
        type: "POST",
        url: "/pancard-verify",
        data: dataSet,
        dataType: "json",
        beforeSend: function () {
          $(".loader-box").removeClass("hidden");
        },
        success: function (result) {
          console.log(result);
          if (result.status == 1) {
            $("#dob").val(result.data.dob);
            if (result.data.gender == 1) {
              $(".gender_1").addClass("active");
              $(".gender_2").removeClass("active");
              $("#gender_id").val(1);
            } else if (result.data.gender == 2) {
              $(".gender_2").addClass("active");
              $(".gender_1").removeClass("active");
              $("#gender_id").val(2);
            }
          } else {
            $("#pancard-updated").addClass("inp-error");
            return false;
          }
        },
        complete: function () {
          $(".loader-box").addClass("hidden");
        },
        error: function (xhr) {
          console.log(xhr.status + " " + xhr.statusText);
        },
      });
    } else {
      $("#pancard-updated").addClass("inp-error");
      return false;
    }
  }
});

function validateblankInput() {
  var isvalid = true;
  $("input").each(function () {
    if ($(this).val() == "") {
      $(this).addClass("inp-error");
      isvalid = false;
    } else {
      $(this).removeClass("inp-error");
      isvalid = true;
    }
  });
  if (isvalid == true) {
    return true;
  } else {
    return false;
  }
}

function check_eligibility() {
  var income_type_id = $("#income_type_id").val();
  var monthly_income = $("#monthly_income").val();
  var salary_date = $("#salary_date").val();
  var empName = $("#empName").val();
  var dob = $("#dob").val();
  var personal_email = $("#personal_email").val();
  var mobile = $("#mobile").val();
  var gender = $("#gender_id").val();
  var pincode = $("#pincode").val();
  var city_id = $("#city_id").val();
  var state_id = $("#state_id").val();
  var city_name = $("#residence_city").val();
  var state_name = $("#residence_state").val();
  var latitude = localStorage.getItem("latitude");
  var longitude = localStorage.getItem("longitude");

  var pancard = $("#pancard-updated").val();

  if (dob != "") {
    dob = new Date(dob);
    var today = new Date();
    var YearsAgoDate55 = new Date(
      today.getFullYear() - 60,
      today.getMonth(),
      today.getDate()
    );
    var YearsAgoDate21 = new Date(
      today.getFullYear() - 20,
      today.getMonth(),
      today.getDate()
    );
  }

  //console.log(validateblankInput());

  if (validateblankInput() == true) {
    if (pancard == "") {
      return catchError("Pancard cannot be empty");
    } else if (pancard.length != 10) {
      return catchError("Pancard must contain 10 characters");
    } else if (income_type_id == "") {
      return catchError("Please select employment type");
    } else if (monthly_income.trim() == "") {
      return catchError("Monthly Salary cannot be empty");
    } else if (monthly_income.trim() <= 15000) {
      return catchError("Monthly Income must be greater than Rs. 15,000");
    } else if (monthly_income.trim() > 900000) {
      return catchError("Monthly Income must be less than Rs. 9,00,000");
    } else if (salary_date == "") {
      return catchError("Next Salary Date cannot be empty");
    } else if (empName == "") {
      return catchError("Company Name cannot be empty");
    } else if (dob == "") {
      return catchError("DOB cannot be empty");
    } else if (dob < YearsAgoDate55) {
      return catchError("Age cannot be greater than 55 Years");
    } else if (dob > YearsAgoDate21) {
      return catchError("Age cannot be less than 21 Years");
    } else if (personal_email.trim() == "") {
      return catchError("Personal email cannot be empty");
    }

    dob = dob.toISOString().slice(0, 10);

    let dataSet = {
      income_type_id: income_type_id,
      monthly_income: monthly_income,
      residence_pincode: pincode,
      cityId: city_id,
      stateId: state_id,
      cityName: city_name,
      stateName: state_name,
      pancard: pancard,
      mobile: mobile,
      personal_email: personal_email,
      salary_date: salary_date,
      emp_company_name: empName,
      gender: gender,
      dob: dob,
      geo_lat: latitude,
      geo_long: longitude,
    };

    $.ajax({
      type: "POST",
      url: "/check-eligiblity-sbm",
      data: dataSet,
      dataType: "json",
      beforeSend: function () {
        $(".loader-box").removeClass("hidden");
      },
      success: function (result) {
        if (result.status == 1) {
          window.location.href =
            location.protocol + "//" + location.host + "/loan-application";
        } else if (result.status == 3) {
          catchError(result.message);
          window.location.href =
            location.protocol + "//" + location.host + "/eligibility-failed";
        } else if (result.status == 4) {
          catchError(result.message);
          user_session_expired();
        } else {
          catchError(result.message);
        }
      },
      complete: function () {
        $(".loader-box").addClass("hidden");
      },
      error: function (xhr) {
        console.log(xhr.status + " " + xhr.statusText);
      },
    });
  }
}

function pancard_verify(save_type) {
  var pancard1 = $("#pancard1").val();
  var pancard2 = $("#pancard2").val();
  var pancard3 = $("#pancard3").val();
  var pancard4 = $("#pancard4").val();
  var pancard5 = $("#pancard5").val();
  var pancard6 = $("#pancard6").val();
  var pancard7 = $("#pancard7").val();
  var pancard8 = $("#pancard8").val();
  var pancard9 = $("#pancard9").val();
  var pancard10 = $("#pancard10").val();

  var pancard =
    pancard1 +
    "" +
    pancard2 +
    "" +
    pancard3 +
    "" +
    pancard4 +
    "" +
    pancard5 +
    "" +
    pancard6 +
    "" +
    pancard7 +
    "" +
    pancard8 +
    "" +
    pancard9 +
    "" +
    pancard10;

  let regex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;

  if (pancard.trim() == "") {
    catchError("Pancard cannot be empty");
  } else if (pancard.length != 10) {
    catchError("Pancard must contain 10 characters");
  } else {
    pacard = pancard.toUpperCase();
    let dataSet = { pancard: pancard, current_page: "pancard_verification" };
    $.ajax({
      type: "POST",
      url: "/pancard-verify",
      data: dataSet,
      dataType: "json",
      beforeSend: function () {
        $(".loader-box").removeClass("hidden");
      },
      success: function (result) {
        if (result.status == 1) {
          catchSuccess(result.message);
          if (save_type == 1) {
            window.location.reload();
          } else {
            scollToTop("registration");
            $("#registration").html(result.data);
          }
        } else if (result.status == 4) {
          catchError(result.message);
          user_session_expired();
        } else {
          catchError(result.message);
        }
      },
      complete: function () {
        $(".loader-box").addClass("hidden");
      },
      error: function (xhr) {
        console.log(xhr.status + " " + xhr.statusText);
      },
    });
  }
}

function personal_details_sbm(save_type) {
  var gender = $("#gender_id").val();
  var marital_status_id = $("#marital_status_id").val();
  var dob = $("#dob").val();
  var spouse_name = $("#spouse_name").val();
  var personal_email = $("#personal_email").val();
  var cName = $("#cname").val();

  if (dob != "") {
    dob = new Date(dob);
    var today = new Date(); // Get the current date
    var YearsAgoDate55 = new Date(
      today.getFullYear() - 55,
      today.getMonth(),
      today.getDate()
    );
    var YearsAgoDate21 = new Date(
      today.getFullYear() - 21,
      today.getMonth(),
      today.getDate()
    );
  }

  if (gender.trim() == "") {
    catchError("Please select gender");
  } else if (dob == "") {
    catchError("DOB cannot be empty");
  } else if (dob < YearsAgoDate55) {
    catchError("Age cannot be greater than 55 Years");
  } else if (dob > YearsAgoDate21) {
    catchError("Age cannot be less than 21 Years");
  } else if (!marital_status_id || marital_status_id == "") {
    catchError("Please select marital status");
  } else if (marital_status_id == 2 && spouse_name.trim() == "") {
    catchError("Please enter spouse name");
  } else if (personal_email.trim() == "") {
    catchError("Personal email cannot be empty");
  } else {
    dob = dob.toISOString().slice(0, 10);
    let dataSet = {
      gender: gender,
      marital_status_id: marital_status_id,
      dob: dob,
      spouse_name: spouse_name,
      personal_email: personal_email,
      current_page: "personal_details",
    };
    $.ajax({
      type: "POST",
      url: "/personal-details-sbm",
      data: dataSet,
      dataType: "json",
      beforeSend: function () {
        $(".loader-box").removeClass("hidden");
      },
      success: function (result) {
        if (result.status == 1) {
          catchSuccess(result.message);
          if (save_type == 1) {
            window.location.reload();
          } else {
            scollToTop("registration");
            $("#registration").html(result.data);
          }
        } else if (result.status == 4) {
          catchError(result.message);
          user_session_expired();
        } else {
          catchError(result.message);
        }
      },
      complete: function () {
        $(".loader-box").addClass("hidden");
      },
      error: function (xhr) {
        console.log(xhr.status + " " + xhr.statusText);
      },
    });
  }
}

function marital_status() {
  var marital_status_id = $("#marital_status_id").val();
  if (marital_status_id.trim() == "") {
    catchError("Please select marital status");
  } else if (marital_status_id == 2) {
    $("#spouse_name").parent().removeClass("hidden");
  } else {
    $("#spouse_name").parent().addClass("hidden");
  }
}

function residence_details_sbm(residence_button_type) {
  if (residence_button_type == 1) {
    var residence_type_id = 0;
    var residence_address_1 = $("#address_line_1").val();
    var residence_address_2 = $("#address_line_2").val();
    var residence_landmark = $("#landmark").val();
    var pincode = $("#pincode").val();
    var direct_open_residence_skip = $("#direct_open_residence_skip").val();

    if (residence_address_1.trim() == "") {
      catchError("Address Field 1 cannot be empty");
    } else if (residence_address_2.trim() == "") {
      catchError("Address Field 2 cannot be empty");
    } else if (pincode.trim() == "") {
      catchError("Pincode cannot be empty");
    } else if (isNaN(pincode)) {
      catchError("Pincode must contain numbers only");
    } else if (pincode.length != 6) {
      catchError("Pincode must contain 6 digits");
    } else {
      let dataSet = {
        residence_type_id: residence_type_id,
        residence_address_1: residence_address_1,
        residence_address_2: residence_address_2,
        residence_landmark: residence_landmark,
        residence_pincode: pincode,
        residence_button_type: 1,
        current_page: "residence_details",
      };
      $.ajax({
        type: "POST",
        url: "/residence-details-sbm",
        data: dataSet,
        dataType: "json",
        beforeSend: function () {
          $(".loader-box").removeClass("hidden");
        },
        success: function (result) {
          console.log(result);
          if (result.status == 1) {
            if (direct_open_residence_skip == 1) {
              window.location.href =
                location.protocol + "//" + location.host + "/loan-application";
            }

            var pop_up_flag = result.data.show_popup_flag;
            if (pop_up_flag == 1) {
              $("#residece_skip_text").text(result.data.residece_skip_text);
              $("#new_loan_amount_offer").text(
                "₹" + result.data.max_loan_amount
              );
              $("#loan_amount_offer").val(result.data.max_loan_amount);
              $("#residance_proof_skip_modal").modal("show");
            } else {
              window.location.href =
                location.protocol + "//" + location.host + "/loan-application";
            }
          } else if (result.status == 4) {
            catchError(result.message);
            user_session_expired();
          } else {
            catchError(result.message);
          }
        },
        complete: function () {
          $(".loader-box").addClass("hidden");
        },
        error: function (xhr) {
          console.log(xhr.status + " " + xhr.statusText);
        },
      });
    }
  } else if (residence_button_type == 2) {
    var residence_type_id = 0;
    var residence_address_1 = $("#address_line_1").val();
    var residence_address_2 = $("#address_line_2").val();
    var residence_landmark = $("#landmark").val();
    var pincode = $("#pincode").val();

    if (residence_address_1.trim() == "") {
      catchError("Address Field 1 cannot be empty");
    } else if (residence_address_2.trim() == "") {
      catchError("Address Field 2 cannot be empty");
    } else if (pincode.trim() == "") {
      catchError("Pincode cannot be empty");
    } else if (isNaN(pincode)) {
      catchError("Pincode must contain numbers only");
    } else if (pincode.length != 6) {
      catchError("Pincode must contain 6 digits");
    } else {
      let dataSet = {
        residence_type_id: residence_type_id,
        residence_address_1: residence_address_1,
        residence_address_2: residence_address_2,
        residence_landmark: residence_landmark,
        residence_pincode: pincode,
        residence_button_type: 2,
        current_page: "residence_details",
      };
      $.ajax({
        type: "POST",
        url: "/residence-details-sbm",
        data: dataSet,
        dataType: "json",
        beforeSend: function () {
          $(".loader-box").removeClass("hidden");
        },
        success: function (result) {
          if (result.status == 1) {
            window.location.href =
              location.protocol + "//" + location.host + "/loan-application";
          } else if (result.status == 4) {
            catchError(result.message);
            user_session_expired();
          } else {
            catchError(result.message);
          }
        },
        complete: function () {
          $(".loader-box").addClass("hidden");
        },
        error: function (xhr) {
          console.log(xhr.status + " " + xhr.statusText);
        },
      });
    }
  } else if (residence_button_type == 3) {
    get_next_loan_page("residence_proof_upload");
  }
}

function selfie_upload_sbm() {
  var fileInput = $("#selfie")[0];
  var file = fileInput.files[0];
  var formData = new FormData();
  formData.append("file", file);
  formData.append("current_page", "selfie_upload");
  if (file) {
    $.ajax({
      url: "/selfie-upload",
      type: "POST",
      data: formData,
      processData: false,
      contentType: false,
      beforeSend: function () {
        $(".loader-box").removeClass("hidden");
      },
      success: function (response) {
        var result = JSON.parse(response);
        if (result.status == 1) {
          catchSuccess(result.message);
          scollToTop("registration");
          $("#registration").html(result.data);
          window.location.href =
            location.protocol + "//" + location.host + "/eligibility-confirmed";
        } else if (result.status == 4) {
          catchError(result.message);

          user_session_expired();
        } else {
          catchError(result.message);
        }
      },
      complete: function () {
        $(".loader-box").addClass("hidden");
      },
      error: function (xhr) {
        console.log(xhr.status + " " + xhr.statusText);
      },
    });
  } else {
    catchError("Please select a file to upload");
  }
}

function get_next_registration_page(next_step) {
  if (next_step == "") {
    catchError("Next page name cannot be empty");
    return false;
  } else {
    $.ajax({
      url: "/get_next_registration_page",
      method: "post",
      data: { next_step: next_step },
      dataType: "json",
      beforeSend: function () {
        $(".loader-box").removeClass("hidden");
      },
      success: function (result) {
        if (result.status == 1) {
          // scollToTop('registration');
          // $("#registration").html(result.data);
          scollToTop("loan-application");
          $("#loan-application").html(result.data);

          if (next_step == "preview_profile") {
            changeDynamic();
          }
        } else {
          catchError(result.message);
        }
      },
      complete: function () {
        $(".loader-box").addClass("hidden");
      },
      error: function (xhr) {
        console.log(xhr.status + " " + xhr.statusText);
      },
    });
  }
}

function get_next_loan_page(next_step) {
  if (next_step == "") {
    catchError("Next page name cannot be empty");
    return false;
  } else {
    $.ajax({
      url: "/get_next_loan_page",
      method: "post",
      data: { next_step: next_step },
      dataType: "json",
      beforeSend: function () {
        $(".loader-box").removeClass("hidden");
      },
      success: function (result) {
        if (result.status == 1) {
          scollToTop("loan-application");
          $("#loan-application").html(result.data);
        } else {
          catchError(result.message);
        }
      },
      complete: function () {
        $(".loader-box").addClass("hidden");
      },
      error: function (xhr) {
        console.log(xhr.status + " " + xhr.statusText);
      },
    });
  }
}

function register_now() {
  if (confirm("Are you sure you want to submit this page?")) {
    $.ajax({
      url: "/register_now",
      method: "post",
      data: { current_page: "register_now" },
      dataType: "json",
      beforeSend: function () {
        $(".loader-box").removeClass("hidden");
      },
      success: function (result) {
        if (result.status == 1) {
          catchSuccess(result.message);
          scollToTop("registration");
          window.location.href =
            location.protocol + "//" + location.host + "/eligibility-confirmed";
        } else if (result.status == 3) {
          catchError(result.message);
          window.location.href =
            location.protocol + "//" + location.host + "/eligibility-failed";
        } else {
          catchError(result.message);
        }
      },
      complete: function () {
        $(".loader-box").addClass("hidden");
      },
      error: function (xhr) {
        console.log(xhr.status + " " + xhr.statusText);
      },
    });
  } else {
    return false;
  }
}

function generate_loan_quote() {
  let dataSet = { current_page: "generate_loan_quote" };
  $.ajax({
    type: "POST",
    url: "/generate-loan-quote",
    data: dataSet,
    dataType: "json",
    beforeSend: function () {
      $(".loader-box").removeClass("hidden");
    },
    success: function (result) {
      if (result.status == 1) {
        scollToTop("loan-application");
        $("#loan-application").html(result.data);
      } else if (result.status == 3) {
        window.location.href =
          location.protocol + "//" + location.host + "/application-rejected";
        catchError(result.message);
      } else if (result.status == 4) {
        catchError(result.message);
        user_session_expired();
      } else {
        catchError(result.message);
      }
    },
    complete: function () {
      $(".loader-box").addClass("hidden");
    },
    error: function (xhr) {
      console.log(xhr.status + " " + xhr.statusText);
    },
  });
}

// function loan_quote_sbm(quote_accepted_id) {
//     var loan_quote_accepted_id = quote_accepted_id;
//     var loan_amount = $("#loan_amount_emi").val();
//     var loan_tenure = $("#loan_period_emi").val();
//     var loan_purpose_id = $("#loan_purpose_id").val();
//    // alert(loan_purpose_id);
//     if (loan_quote_accepted_id == 1) {
//         if(loan_purpose_id==null){
//             catchError("Please select purpose of loan");
//         }else if (loan_amount.trim() == '') {
//             catchError("Please choose loan amount");
//         } else if (loan_tenure.trim() == '') {
//             catchError("Please select loan tenure");
//         } else {
//             let formData = {
//             			loan_quote_accepted_id: parseInt(loan_quote_accepted_id),
//             			loan_amount: loan_amount,
//             			loan_tenure: loan_tenure,
//             			current_page: "loan_quote",
//             			loan_purpose_id: loan_purpose_id
//             		};
//             $.ajax({
//                 url: '/loan-quote-sbm',
//                 type: 'POST',
//                 data: formData,
//                 beforeSend: function () {
//                     $(".loader-box").removeClass("hidden");
//                 },
//                 success: function (response) {
//                     var result = JSON.parse(response);
//                     if (result.status === 1) {
//                         catchSuccess(result.message);
//                         scollToTop('registration');
//                         window.location.reload();
//                     } else if (result.status == 2) {
//                         catchError(result.message);
//                         // var application_rejected = setInterval(function () {
//                             window.location.href = location.protocol + '//' + location.host + '/loan-application';
//                             // clearInterval(application_rejected);
//                         // }, 2000);
//                     } else if (result.status == 4) {
//                         catchError(result.message);
//                         user_session_expired();
//                     } else {
//                         catchError(result.message);
//                     }
//                 },
//                 complete: function () {
//                     $(".loader-box").addClass("hidden");
//                 },
//                 error: function (xhr) {
//                     console.log(xhr.status + " " + xhr.statusText);
//                 }
//             });
//         }
//     } else if (loan_quote_accepted_id == 2) {
//         let formData = { loan_quote_accepted_id: parseInt(loan_quote_accepted_id), loan_amount: loan_amount, loan_tenure: loan_tenure, current_page: "loan_quote" };
//         console.log(formData);
//         $.ajax({
//             url: '/loan-quote-sbm',
//             type: 'POST',
//             data: formData,
//             beforeSend: function () {
//                 $(".loader-box").removeClass("hidden");
//             },
//             success: function (response) {
//                 var result = JSON.parse(response);
//                 if (result.status === 1) {
//                     catchSuccess(result.message);

//                     scollToTop('loan-application');
//                     $("#loan-application").html(result.data);
//                 } else if (result.status == 3) {
//                     catchError(result.message);

//                     var application_rejected = setInterval(function () {
//                         window.location.href = location.protocol + '//' + location.host + '/my-dashboard';
//                         clearInterval(application_rejected);
//                     }, 2000);
//                 } else if (result.status == 4) {
//                     catchError(result.message);

//                     user_session_expired();
//                 } else {
//                     catchError(result.message);

//                 }
//             },
//             complete: function () {
//                 $(".loader-box").addClass("hidden");
//             },
//             error: function (xhr) {
//                 console.log(xhr.status + " " + xhr.statusText);
//             }
//         });
//     } else if (loan_quote_accepted_id == 3){
//         get_next_loan_page('bank_statement_upload');
//     }
// }

let isProcessing = false;
function loan_quote_sbm(quote_accepted_id) {
  var loan_quote_accepted_id = quote_accepted_id;
  var loan_amount = $("#loan_amount_emi").val();
  var loan_tenure = $("#loan_period_emi").val();
  var loan_purpose_id = $("#loan_purpose_id").val();
  var previous_loan_amount = $("#previous_loan_amount").val();
  var generated_max_loan = $("#generated_max_loan").val();

  console.log(previous_loan_amount);
  console.log(loan_amount);
  console.log(generated_max_loan);

  if (isProcessing) return;

  // alert(loan_purpose_id);
  if (loan_quote_accepted_id == 1) {
    if (loan_purpose_id == null) {
      catchError("Please select purpose of loan");
    } else if (loan_amount.trim() == "") {
      catchError("Please choose loan amount");
    } else if (loan_tenure.trim() == "") {
      catchError("Please select loan tenure");
    } else if (
      parseInt(previous_loan_amount) > parseInt(loan_amount) &&
      parseInt(generated_max_loan) > parseInt(previous_loan_amount)
    ) {
      $("#amountConfirmModel").modal("show");
      return;
    } else {
      isProcessing = true;
      let formData = {
        loan_quote_accepted_id: parseInt(loan_quote_accepted_id),
        loan_amount: loan_amount,
        loan_tenure: loan_tenure,
        current_page: "loan_quote",
        loan_purpose_id: loan_purpose_id,
      };
      $.ajax({
        url: "/loan-quote-sbm",
        type: "POST",
        data: formData,
        beforeSend: function () {
          $(".loader-box").removeClass("hidden");
        },
        success: function (response) {
          var result = JSON.parse(response);
          if (result.status === 1) {
            catchSuccess(result.message);
            scollToTop("registration");
            window.location.reload();
          } else if (result.status == 2) {
            catchError(result.message);
            // var application_rejected = setInterval(function () {
            window.location.href =
              location.protocol + "//" + location.host + "/loan-application";
            // clearInterval(application_rejected);
            // }, 2000);
          } else if (result.status == 4) {
            catchError(result.message);
            user_session_expired();
          } else {
            catchError(result.message);
          }
        },
        complete: function () {
          $(".loader-box").addClass("hidden");
        },
        error: function (xhr) {
          console.log(xhr.status + " " + xhr.statusText);
        },
      });
    }
  } else if (loan_quote_accepted_id == 2) {
    let formData = {
      loan_quote_accepted_id: parseInt(loan_quote_accepted_id),
      loan_amount: loan_amount,
      loan_tenure: loan_tenure,
      current_page: "loan_quote",
    };
    console.log(formData);
    $.ajax({
      url: "/loan-quote-sbm",
      type: "POST",
      data: formData,
      beforeSend: function () {
        $(".loader-box").removeClass("hidden");
      },
      success: function (response) {
        var result = JSON.parse(response);
        if (result.status === 1) {
          catchSuccess(result.message);

          scollToTop("loan-application");
          $("#loan-application").html(result.data);
        } else if (result.status == 3) {
          catchError(result.message);

          /*
          var application_rejected = setInterval(function () {
            window.location.href =
              location.protocol + "//" + location.host + "/my-dashboard";
            clearInterval(application_rejected);
          }, 2000);
        */

          var application_rejected = setInterval(function () {
            window.location.href =
              location.protocol +
              "//" +
              location.host +
              "/application-rejected";
            clearInterval(application_rejected);
          }, 2000);
        } else if (result.status == 4) {
          catchError(result.message);

          user_session_expired();
        } else {
          catchError(result.message);
        }
      },
      complete: function () {
        $(".loader-box").addClass("hidden");
      },
      error: function (xhr) {
        console.log(xhr.status + " " + xhr.statusText);
      },
    });
  } else if (loan_quote_accepted_id == 3) {
    get_next_loan_page("bank_statement_upload");
  } else if (loan_quote_accepted_id == 4) {
    if (loan_purpose_id == null) {
      catchError("Please select purpose of loan");
    } else if (loan_amount.trim() == "") {
      catchError("Please choose loan amount");
    } else if (loan_tenure.trim() == "") {
      catchError("Please select loan tenure");
    } else {
      loan_quote_accepted_id = 1;
      let formData = {
        loan_quote_accepted_id: loan_quote_accepted_id,
        loan_amount: loan_amount,
        loan_tenure: loan_tenure,
        current_page: "loan_quote",
        loan_quote_lower_amount_flag: 1,
        loan_purpose_id: loan_purpose_id,
      };
      $.ajax({
        url: "/loan-quote-sbm",
        type: "POST",
        data: formData,
        beforeSend: function () {
          $(".loader-box").removeClass("hidden");
        },
        success: function (response) {
          var result = JSON.parse(response);
          if (result.status === 1) {
            catchSuccess(result.message);
            scollToTop("registration");
            window.location.reload();
          } else if (result.status == 2) {
            catchError(result.message);
            // var application_rejected = setInterval(function () {
            window.location.href =
              location.protocol + "//" + location.host + "/loan-application";
            // clearInterval(application_rejected);
            // }, 2000);
          } else if (result.status == 4) {
            catchError(result.message);
            user_session_expired();
          } else {
            catchError(result.message);
          }
        },
        complete: function () {
          $(".loader-box").addClass("hidden");
        },
        error: function (xhr) {
          console.log(xhr.status + " " + xhr.statusText);
        },
      });
    }
  }
}

function bank_statement_upload() {
  var password = $("#bank-password").val();

  var fileInput = $("#bank-statement")[0];
  var file = fileInput.files[0];
  var formData = new FormData();
  formData.append("file", file);
  formData.append("current_page", "bank_statement_upload");
  formData.append("file_password", password);
  if (file) {
    $.ajax({
      url: "/bank-statement-upload",
      type: "POST",
      data: formData,
      processData: false,
      contentType: false,
      beforeSend: function () {
        $(".loader-box").removeClass("hidden");
      },
      success: function (response) {
        var result = JSON.parse(response);
        $(".loader-box").addClass("hidden");
        if (result.status === 1) {
          catchSuccess(result.message);

          scollToTop("loan-application");
          $("#loan-application").html(result.data);
        } else if (result.status == 4) {
          catchError(result.message);

          user_session_expired();
        } else {
          catchError(result.message);
        }
      },
      complete: function () {
        $(".loader-box").addClass("hidden");
      },
      error: function (xhr) {
        console.log(xhr.status + " " + xhr.statusText);
      },
    });
  } else {
    catchError("Please select a file to upload");
  }
}

function pay_slip_upload() {
  var password = $("#pay-slip-password").val();

  var fileInput = $("#pay-slip")[0];
  var file = fileInput.files[0];
  var formData = new FormData();
  formData.append("file", file);
  formData.append("current_page", "pay_slip_upload");
  formData.append("file_password", password);
  if (file) {
    $.ajax({
      url: "/pay-slip-upload",
      type: "POST",
      data: formData,
      processData: false,
      contentType: false,
      beforeSend: function () {
        $(".loader-box").removeClass("hidden");
      },
      success: function (response) {
        var result = JSON.parse(response);
        if (result.status == 1) {
          catchSuccess(result.message);
          scollToTop("registration");
          $("#registration").html(result.data);
        } else if (result.status == 4) {
          catchError(result.message);
          user_session_expired();
        } else {
          catchError(result.message);
        }
      },
      complete: function () {
        $(".loader-box").addClass("hidden");
      },
      error: function (xhr) {
        console.log(xhr.status + " " + xhr.statusText);
      },
    });
  } else {
    catchError("Please select a file to upload");
  }
}

function pan_upload() {
  var fileInput = $("#pan-document")[0];
  var file = fileInput.files[0];
  var maxFileSize = 2 * 1024 * 1024;
  var formData = new FormData();
  formData.append("file", file);
  formData.append("current_page", "pan_upload");
  if (file) {
    if (file.size > maxFileSize) {
      catchError("Please select file less than 2MB in size");
    } else {
      $.ajax({
        url: "/pan-upload",
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        beforeSend: function () {
          $(".loader-box").removeClass("hidden");
        },
        success: function (response) {
          var result = JSON.parse(response);
          if (result.status == 1) {
            catchSuccess(result.message);
            // pushEventCleverTap("Documentation_PanCard","Success");
            scollToTop("loan-application");
            $("#loan-application").html(result.data);
          } else if (result.status == 4) {
            catchError(result.message);
            // pushEventCleverTap("Documentation_PanCard","Failed");
            user_session_expired();
          } else {
            catchError(result.message);
            //  pushEventCleverTap("Documentation_PanCard","Failed");
          }
        },
        complete: function () {
          $(".loader-box").addClass("hidden");
        },
        error: function (xhr) {
          console.log(xhr.status + " " + xhr.statusText);
        },
      });
    }
  } else {
    catchError("Please select a file to upload");
  }
}

function residence_proof_upload() {
  var doc_type = $("#search-select").val();
  var file_password = $("#residence-proof-password").val();
  var options = $("#search-select option");
  var fileInput = $("#residence-proof")[0];
  var file = fileInput.files[0];
  var formData = new FormData();
  formData.append("file", file);
  formData.append("current_page", "residence_proof_upload");
  formData.append("doc_type", doc_type);
  formData.append("file_password", file_password);
  if (doc_type.trim() == "") {
    catchError("Please select document type.");
  } else if (file) {
    $.ajax({
      url: "/residence-proof-upload",
      type: "POST",
      data: formData,
      processData: false,
      contentType: false,
      beforeSend: function () {
        $(".loader-box").removeClass("hidden");
      },
      success: function (response) {
        var result = JSON.parse(response);
        if (result.status == 1) {
          options.each(function () {
            if ($(this).val() == doc_type) {
              $(this).prop("disabled", true);
            }
          });
          catchSuccess(result.message);
          //  pushEventCleverTap("Documentation_ResidenceProof","Success");
          $("#residence-proof").val("");
          $("#residence_proof_upload_btn").hide();
          $("#residence-proof-password").val("");
          $("#search-select").val("");
          $("#residence_proof_skip_btn").remove();
        } else if (result.status == 4) {
          catchError(result.message);
          //  pushEventCleverTap("Documentation_ResidenceProof","Failed");
          user_session_expired();
        } else {
          catchError(result.message);
          //  pushEventCleverTap("Documentation_ResidenceProof","Failed");
        }
      },
      complete: function () {
        $(".loader-box").addClass("hidden");
      },
      error: function (xhr) {
        console.log(xhr.status + " " + xhr.statusText);
      },
    });
  } else {
    catchError("Please select a file to upload");
  }
}

function residence_proof_sbm() {
  let formData = { current_page: "residence_proof_upload" };
  $.ajax({
    url: "/residence-proof-sbm",
    type: "POST",
    data: formData,
    beforeSend: function () {
      $(".loader-box").removeClass("hidden");
    },
    success: function (response) {
      var result = JSON.parse(response);
      if (result.status == 1) {
        scollToTop("loan-application");
        if (result.data?.document_uploaded) {
          residence_proof_sbm();
        }
        $("#loan-application").html(result.data);
      } else if (result.status == 4) {
        catchError(result.message);
        user_session_expired();
      } else {
        catchError(result.message);
      }
    },
    complete: function () {
      $(".loader-box").addClass("hidden");
    },
    error: function (xhr) {
      console.log(xhr.status + " " + xhr.statusText);
    },
  });
}

function aadhaar_upload() {
  var formData = new FormData();

  var frontInput = $("#aadhaar-front")[0];
  var frontfile = frontInput.files[0];
  formData.append("aadhaar_front", frontfile);

  var backInput = $("#aadhaar-back")[0];
  var backfile = backInput.files[0];
  formData.append("aadhaar_back", backfile);

  formData.append("current_page", "aadhaar_upload");
  if (frontfile) {
    if (backfile) {
      $.ajax({
        url: "/aadhaar-upload",
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        beforeSend: function () {
          $(".loader-box").removeClass("hidden");
        },
        success: function (response) {
          var result = JSON.parse(response);
          if (result.status == 1) {
            catchSuccess(result.message);
            //    pushEventCleverTap("Documentation_AadhaarCard","Success");
            scollToTop("loan-application");
            $("#loan-application").html(result.data);
          } else if (result.status == 4) {
            catchError(result.message);
            //   pushEventCleverTap("Documentation_AadhaarCard","Failed");
            user_session_expired();
          } else {
            catchError(result.message);
            //   pushEventCleverTap("Documentation_AadhaarCard","Failed");
          }
        },
        complete: function () {
          $(".loader-box").addClass("hidden");
        },
        error: function (xhr) {
          console.log(xhr.status + " " + xhr.statusText);
        },
      });
    } else {
      catchError("Please upload Aadhaar back photo");
    }
  } else {
    catchError("Please upload aadhaar front photo");
  }
}

function employment_details_sbm(save_type) {
  var emp_work_mode_id = $("#emp_work_mode_id").val();
  var office_email = $("#office_email").val();
  var emp_company_name = $("#emp_company_name").val();
  var emp_designation = $("#emp_designation").val();
  var emp_company_type_id = $("#emp_company_type_id").val();
  var emp_address_1 = $("#emp_address_1").val();
  var emp_address_2 = $("#emp_address_2").val();
  var emp_landmark = $("#emp_landmark").val();
  var pincode1 = $("#pincode1").val();
  var pincode2 = $("#pincode2").val();
  var pincode3 = $("#pincode3").val();
  var pincode4 = $("#pincode4").val();
  var pincode5 = $("#pincode5").val();
  var pincode6 = $("#pincode6").val();

  var pincode =
    pincode1 +
    "" +
    pincode2 +
    "" +
    pincode3 +
    "" +
    pincode4 +
    "" +
    pincode5 +
    "" +
    pincode6;

  if (emp_work_mode_id == "") {
    catchError("Please select work mode");
  } else if (emp_company_name.trim() == "") {
    catchError("Please enter company name");
  } else if (!emp_company_type_id || emp_company_type_id == "") {
    catchError("Please select company type");
  } else if (emp_designation.trim() == "") {
    catchError("Please enter designation");
  } else if (emp_address_1.trim() == "") {
    catchError("Address Field 1 cannot be empty");
  } else if (emp_address_2.trim() == "") {
    catchError("Address Field 2 cannot be empty");
  } else if (pincode.trim() == "") {
    catchError("Pincode cannot be empty");
  } else if (isNaN(pincode)) {
    catchError("Pincode must contain numbers only");
  } else if (pincode.length != 6) {
    catchError("Pincode must contain 6 digits");
  } else {
    let dataSet = {
      emp_work_mode: emp_work_mode_id,
      office_email: office_email,
      emp_company_name: emp_company_name,
      emp_designation: emp_designation,
      emp_company_type_id: emp_company_type_id,
      emp_address_1: emp_address_1,
      emp_address_2: emp_address_2,
      emp_landmark: emp_landmark,
      emp_pincode: pincode,
      current_page: "employment_details",
    };
    $.ajax({
      type: "POST",
      url: "/employment-details-sbm",
      data: dataSet,
      dataType: "json",
      beforeSend: function () {
        $(".loader-box").removeClass("hidden");
      },
      success: function (result) {
        if (result.status == 1) {
          catchSuccess(result.message);
          // pushEventCleverTap("Employment_Information","Success");
          if (save_type == 1) {
            window.location.reload();
          } else {
            scollToTop("loan-application");
            $("#loan-application").html(result.data);
          }
        } else if (result.status == 4) {
          catchError(result.message);
          // pushEventCleverTap("Employment_Information","Failed");
          user_session_expired();
        } else {
          catchError(result.message);
          //   pushEventCleverTap("Employment_Information","Api_Error");
        }
      },
      complete: function () {
        $(".loader-box").addClass("hidden");
      },
      error: function (xhr) {
        console.log(xhr.status + " " + xhr.statusText);
      },
    });
  }
}

function aadhaar_validate(count) {
  var aadhaar_digit = $("#aadhaar" + count).val();
  //    console.log(count);
  //    console.log(aadhaar_digit);
  if (aadhaar_digit.trim() == "") {
    catchError("Aadhaar number cannot be empty");
    $("#aadhaar" + (count - 1)).focus();
    return false;
  }

  if (isNaN(aadhaar_digit)) {
    catchError("Aadhaar must contain numbers only");
    $("#aadhaar" + count).select();
    $("#aadhaar" + count).val("");
    return false;
  }
  if (aadhaar_digit.length == 1) {
    $("#aadhaar" + (count + 1)).focus();
  }
}

function initiate_ekyc(run_ekyc_flag) {
  var aadhaar1 = $("#aadhaar1").val();
  var aadhaar2 = $("#aadhaar2").val();
  var aadhaar3 = $("#aadhaar3").val();
  var aadhaar4 = $("#aadhaar4").val();

  var aadhaar = aadhaar1 + "" + aadhaar2 + "" + aadhaar3 + "" + aadhaar4;

  if (aadhaar.trim() == "") {
    if (run_ekyc_flag == 2) {
      catchError(
        "Aadhaar number is required as it will be matched with the Aadhaar Card in documentation"
      );
    } else {
      catchError("Aadhaar cannot be empty");
    }
  } else if (isNaN(aadhaar)) {
    catchError("Aadhaar must contain numbers only");
  } else if (aadhaar.length != 4) {
    catchError("Aadhaar must contain 4 digits");
  } else {
    if (run_ekyc_flag == 1) {
      if (
        confirm(
          "NOTE : Please tick give your consent for aadhaar and pan to complete ekyc verification." +
            "\n\nConfirm your last 4 digit of aadhaar before proceeding: " +
            aadhaar
        ) == false
      ) {
        return false;
      }
    } else if (run_ekyc_flag == 2) {
      if (confirm("Are you sure you want to skip this step?") == false) {
        return false;
      }
    }

    let dataSet = {
      aadhaar_no: aadhaar,
      current_page: "ekyc_initiated",
      type: parseInt(run_ekyc_flag),
    };
    $.ajax({
      type: "POST",
      url: "/initiate-ekyc",
      data: dataSet,
      dataType: "json",
      success: function (result) {
        if (result.status == 1) {
          if (result.data.is_ekyc_done == 1) {
            catchSuccess(result.message);
            // pushEventCleverTap("eKYC_Initiated","Success");
          } else if (run_ekyc_flag == 2) {
            window.location.href =
              location.protocol + "//" + location.host + "/registration";
          } else {
            $("#ekyc_url").addClass("loaded_url");
            window.location.href = result.data.ekyc_url;
            // pushEventCleverTap("eKYC_Initiated","Success");
          }
        } else if (result.status == 4) {
          catchError(result.message);
          //  pushEventCleverTap("eKYC_Initiated","Failed");
          user_session_expired();
        } else {
          catchError(result.message);
          // pushEventCleverTap("eKYC_Initiated","Api_Error");
        }
      },
      error: function (xhr) {
        console.log(xhr.status + " " + xhr.statusText);
      },
    });
  }
}

function verify_ekyc() {
  let dataSet = { current_page: "ekyc_verified" };
  $.ajax({
    type: "POST",
    url: "/ekyc-verified",
    data: dataSet,
    dataType: "json",
    beforeSend: function () {
      $(".loader-box").removeClass("hidden");
    },
    success: function (result) {
      if (result.status == 1) {
        catchSuccess(result.message);
        //      pushEventCleverTap("eKYC_Verified","Success");
        scollToTop("loan-application");
        $("#ekyc_initiated p").html(
          result.message + " You will be redirected to your application."
        );
        //                setTimeout(function () {
        window.location.href =
          location.protocol + "//" + location.host + "/registration";
        //                }, 2000);
      } else if (result.status == 4) {
        catchError(result.message);
        //  pushEventCleverTap("eKYC_Verified","Failed");
        user_session_expired();
      } else {
        catchError(result.message);
        //  pushEventCleverTap("eKYC_Verified","Failed");
        $("#skip-ekyc").css("display", "block");
        $("#aadhaar-no").css("display", "block");
      }
    },
    complete: function () {
      $(".loader-box").addClass("hidden");
    },
    error: function (xhr) {
      console.log(xhr.status + " " + xhr.statusText);
    },
  });
}

function get_bank_ifsc_list() {
  var bank_account_ifsc_char = $("#bank_account_ifsc").val();
  var list_data, item_list, item_data;
  if (bank_account_ifsc_char.length >= 3) {
    let dataSet = { bank_account_ifsc: bank_account_ifsc_char };
    $.ajax({
      type: "POST",
      url: "/get-bank-ifsc-list",
      data: dataSet,
      dataType: "json",
      success: function (result) {
        if (result.status == 1) {
          list_data = result.data;
          $("#ifsc-list").removeClass("hidden");
          $("#ifsc-list").html("");
          $("#bank_account_name").val("");
          $.each(list_data, function (index, myarr) {
            item_list = JSON.stringify(myarr.bank_account_ifsc);
            item_data = item_list.replace(/"/g, "");
            $("#ifsc-list").append(
              $(
                "<li onclick='get_bank_details(&quot;" +
                  item_data +
                  "&quot;)'></li>"
              )
                .attr("value", item_data)
                .text(item_data)
            );
            $("#ifsc-list").show();
          });
        } else if (result.status == 4) {
          catchError(result.message);
          user_session_expired();
        } else {
          catchError(result.message);
        }
      },
      error: function (xhr) {
        console.log(xhr.status + " " + xhr.statusText);
      },
    });
  } else {
    $("#ifsc-list").hide();
    $("#ifsc-list").html("");
    $("#bank_account_name").val("");
  }
}

function get_bank_details(ifsc) {
  if (ifsc == "") {
    catchError("Please select IFSC Code");
    $("#bank_account_name").val("");
  } else {
    $("#ifsc-list").addClass("hidden");
    $("#ifsc-list").html("");
    $("#bank_account_ifsc").val(ifsc);
    let dataSet = { bank_account_ifsc: ifsc };
    $.ajax({
      type: "POST",
      url: "/get-bank-details",
      data: dataSet,
      dataType: "json",
      success: function (result) {
        if (result.status == 1) {
          catchSuccess(result.message);
          $("#bank_account_name").val(result.data.bank_account_name);
        } else if (result.status == 4) {
          catchError(result.message);
          user_session_expired();
        } else {
          catchError(result.message);
        }
      },
      error: function (xhr) {
        console.log(xhr.status + " " + xhr.statusText);
      },
    });
  }
}

function banking_details_sbm(verify_account_check) {
  let dataSet, bank_verification_consent;
  var bank_account_number = $("#bank_account_number").val();
  var cnf_bank_account_number = $("#cnf_bank_account_number").val();
  var bank_account_ifsc = $("#bank_account_ifsc").val();
  var bank_account_type_id = $("#bank_account_type_id").val();
  bank_verification_consent = verify_account_check;

  if (bank_verification_consent == 1) {
    if (bank_account_number.trim() == "") {
      catchError("Please enter bank account number");
      return false;
    } else if (cnf_bank_account_number.trim() == "") {
      catchError("Please confirm bank account number");
      return false;
    } else if (bank_account_number != cnf_bank_account_number) {
      catchError("Bank account number do not match");
      return false;
    } else if (bank_account_ifsc.trim() == "") {
      catchError("Please enter IFSC Code");
      return false;
    } else if (bank_account_type_id == "") {
      catchError("Please select bank account type");
      return false;
    } else {
      dataSet = {
        bank_account_number: bank_account_number,
        cnf_bank_account_number: cnf_bank_account_number,
        bank_account_ifsc: bank_account_ifsc,
        bank_account_type_id: bank_account_type_id,
        bank_verification_consent: bank_verification_consent,
        current_page: "banking_details",
      };
    }
  } else if (bank_verification_consent == 2) {
    dataSet = {
      current_page: "banking_details",
      type: bank_verification_consent,
    };
  }

  $.ajax({
    type: "POST",
    url: "/banking-details-sbm",
    data: dataSet,
    dataType: "json",
    beforeSend: function () {
      $(".loader-box").removeClass("hidden");
    },
    success: function (result) {
      console.log(result);
      if (result.status == 1) {
        var reference_no = result.data.reference_no;
        reference_no = reference_no.replace("#", "");
        catchSuccess(result.message);
        window.location.href =
          location.protocol +
          "//" +
          location.host +
          "/loan-application?reference_id=" +
          reference_no;
      } else if (result.status == 4) {
        catchError(result.message);
        // pushEventCleverTap("Bank_Details","Failed");
        // pushEventCleverTap("Application_Submitted","Failed");
        user_session_expired();
      } else {
        catchError(result.message);
        // pushEventCleverTap("Bank_Details","Failed");
      }
    },
    complete: function () {
      $(".loader-box").addClass("hidden");
    },
    error: function (xhr) {
      console.log(xhr.status + " " + xhr.statusText);
    },
  });
}

function switch_classes(id, switch_type) {
  $("#" + switch_type + "_id").val(id);
  if (id == 1) {
    $("." + switch_type + "_1").addClass("active");
    $("." + switch_type + "_2").removeClass("active");
  } else if (id == 2) {
    $("." + switch_type + "_2").addClass("active");
    $("." + switch_type + "_1").removeClass("active");
  }
  if (switch_type == "bank_statement_type") {
    if (id == 1) {
      account_aggregator(1);
    } else {
      // account_aggregator(2);
      $(".bank_upload .hidden").removeClass("hidden");
    }
  }
}

function openfileinput(open_input) {
  $("#" + open_input).click();
}

function getfilename(fileInput, file_name) {
  var fileName = fileInput.value.split(/(\\|\/)/g).pop();
  $("input." + file_name).val(fileName);
}

function loanEmiCalculate() {
  var loan_amount = $("#loan_amount_emi").val();
  var loan_period = $("#loan_period_emi").val();
  var loan_interest = $("#loan_interest_emi").val();
  var product_id = $("#product_id").val();

  if (product_id == 1) {
    var total_interest_amount =
      (Number(loan_amount) * Number(loan_period) * Number(loan_interest)) / 100;
    var total_payable_amount = Number(loan_amount) + total_interest_amount;

    $("#range-amount").html(loan_amount);
    $("#range-tenure").html(loan_period);
    $("#total-principle-amount").html(loan_amount);
    $("#total-interest-amount").html(total_interest_amount);
    $("#total-payable-amount").html(total_payable_amount);
  } else if (product_id == 2) {
    let roi = loan_interest * 12;
    let monthly_roi = roi / 100 / 12;
    let emi =
      (loan_amount * monthly_roi * Math.pow(1 + monthly_roi, loan_period)) /
      (Math.pow(1 + monthly_roi, loan_period) - 1);
    let total_repayment = 0;
    // for (var i = 1; i <= loan_period; i++) {
    //     total_repayment += Math.round(emi);
    // }
    total_repayment = Math.round(emi) * Number(loan_period);
    $("#range-amount").html(loan_amount);
    $("#total-principle-amount").html(loan_amount);
    $("#total-interest-amount").html(Math.round(emi));
    $("#total-payable-amount").html(total_repayment);
  }
}

function catchSuccess(success) {
  flash(success, {
    bgColor: "#2d6f36",
    ftColor: "#fff",
    vPosition: "bottom",
    hPosition: "right",
    fadeIn: 400,
    fadeOut: 400,
    autohide: true,
    duration: 1000,
  });
}

function catchError(error) {
  flash(error, {
    bgColor: "#C0392B",
    ftColor: "#fff",
    vPosition: "bottom",
    hPosition: "right",
    fadeIn: 400,
    fadeOut: 400,
    autohide: true,
    duration: 1000,
  });
}

var webcamStream, canvas;

function startCamera() {
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(function (stream) {
      $("#myModal").modal("show");
      $("#capturedImage").hide();
      $("#webcam").show();

      $("#capture").removeClass("hidden");
      $("#retake").addClass("hidden");
      $("#use").addClass("hidden");

      webcamStream = stream;

      var video = document.getElementById("webcam");
      video.srcObject = stream;
    })
    .catch((error) => {
      if (
        error.name === "NotAllowedError" ||
        error.name === "PermissionDeniedError"
      ) {
        catchError("Camera permission denied");
      } else {
        catchError("Error accessing webcam:", error);
      }
    });
}

function captureImage() {
  var video = document.getElementById("webcam");
  canvas = document.createElement("canvas");
  var context = canvas.getContext("2d");
  var capturedImage = document.getElementById("capturedImage");
  var fileInput = $("#selfie");

  $("#capture").addClass("hidden");
  $("#retake").removeClass("hidden");
  $("#use").removeClass("hidden");

  // Set canvas dimensions to match video stream
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  // Capture the current frame from the video stream
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  if (webcamStream) {
    const tracks = webcamStream.getTracks();
    tracks.forEach(function (track) {
      track.stop();
    });
  }

  canvas.style.display = "block";

  // Convert the captured frame to a data URL
  var imageDataURL = canvas.toDataURL("image/jpeg"); // You can choose a different format

  // Display the captured image
  capturedImage.src = imageDataURL;
  video.style.display = "none";
  capturedImage.style.display = "block";

  canvas.toBlob(function (blob) {
    // Create a File object from the Blob
    const capturedImageFile = new File([blob], "captured-image.jpg", {
      type: "image/jpeg",
    });

    // Update the file input field with the captured image File
    fileInput.files = [capturedImageFile];
  }, "image/jpeg");

  // Set the data URL as the value of the hidden input field
  //$('#imageFile').val(imageDataURL);
}

function useCapturedImage() {
  canvas.toBlob(function (blob) {
    // Create a FormData object to send the image file
    const formData = new FormData();
    formData.append("file", blob, "captured-image.jpg");
    formData.append("current_page", "selfie_upload");
    $("#myModal").modal("hide");
    // Send the captured image to the server using AJAX
    $.ajax({
      url: "/selfie-upload",
      method: "POST",
      data: formData,
      processData: false, // Prevent jQuery from processing the data
      contentType: false,
      beforeSend: function () {
        $(".loader-box").removeClass("hidden");
      },
      success: function (response) {
        var result = JSON.parse(response);
        if (result.status == 1) {
          catchSuccess(result.message);
          window.location.href =
            location.protocol + "//" + location.host + "/eligibility-confirmed";
        } else if (result.status == 3) {
          catchError(result.message);
          $(".attr-nav ul li.sign-up").html(
            "<a href='/apply-now'>Instant Journey</a>"
          );
          $("#registration").html(result.data);
          activate_class("selfie-upload-tab", "");
        } else if (result.status == 4) {
          catchError(result.message);
          user_session_expired();
        } else if (result.status == 5) {
          catchError(result.message);
          window.location.href =
            location.protocol + "//" + location.host + "/application-rejected";
        } else {
          catchError(result.message);
        }
      },
      complete: function () {
        $(".loader-box").addClass("hidden");
      },
      error: function (error) {
        console.error("Error:", error);
      },
    });
  }, "image/jpeg");
  if (webcamStream) {
    const tracks = webcamStream.getTracks();
    tracks.forEach(function (track) {
      track.stop();
    });
  }
}

function stopCamera() {
  if (webcamStream) {
    const tracks = webcamStream.getTracks();
    tracks.forEach(function (track) {
      track.stop();
    });
  }
  $("#myModal").modal("hide");
}

function office_email_confirm_check(check_type) {
  if (check_type == 1) {
    if ($("#office_email_confirm").is(":checked")) {
      $("#office_email").prop("readonly", false);
      $("#office_email").focus();
    } else {
      $("#office_email").val("");
      $("#office_email").prop("readonly", true);
    }
  } else if (check_type == 2) {
    if ($("#office_email").prop("readonly")) {
      $("#office_email_confirm").prop("checked", true);
      $("#office_email").prop("readonly", false);
    }
  }
}

function change_bill_image() {
  var imgPath;
  var bill_image = $("#search-select").val();
  $("#residence-proof").val("");
  const linked_image = {
    landline_bill: "bill_1.png",
    gas_bill: "bill_2.png",
    credit_card_statement: "bill_4.png",
    electricity_bill: "bill_3.png",
    rent_agreement: "bill_5.png",
    water_bill: "bill_6.png",
  };
  if (bill_image.trim() == "") {
    catchError("Please select residence proof");
    $("#residence-default-image").show();
    $("#residence-bill-image").hide();
  } else {
    $("#residence-default-image").hide();
    $("#residence-bill-image").show();
    imgPath = "/public/images/instant/" + linked_image[bill_image];
    $("#residence-bill-image img").attr("src", imgPath);
  }
}

function isNumeric(event) {
  var charCode = event.which || event.keyCode;

  // Allow numeric digits and certain special characters
  if (charCode >= 48 && charCode <= 57) {
    return true;
  }

  // Disallow all other characters
  return false;
}

function isAlpha(event) {
  var charCode = event.which || event.keyCode;

  // Allow numeric digits and certain special characters
  if (
    (charCode >= 65 && charCode <= 90) ||
    (charCode >= 97 && charCode <= 122)
  ) {
    return true;
  }

  // Disallow all other characters
  return false;
}

function isAlphaNumeric(event) {
  var charCode = event.which || event.keyCode;

  // Allow numeric digits and certain special characters
  if (
    (charCode >= 48 && charCode <= 57) ||
    (charCode >= 65 && charCode <= 90) ||
    (charCode >= 97 && charCode <= 122)
  ) {
    return true;
  }

  // Disallow all other characters
  return false;
}

function user_session_expired() {
  var intervalId = setInterval(function () {
    window.location.href =
      location.protocol + "//" + location.host + "/session-expired";
    clearInterval(intervalId);
  }, 2000);
}

function viewImageInModal() {
  $(".img-thumbnail").click(function () {
    var imgSrc = $(this).attr("src");
    $("#image-gallery-image").attr("src", imgSrc);
    $("#image-gallery").modal("show");
  });
}

function account_aggregator(run_account_aggregator) {
  if (run_account_aggregator == 2) {
    if (confirm("Are you sure you want to skip this step?") == false) {
      return false;
    }
  }

  if (run_account_aggregator == 3) {
    if (
      confirm("lease upload your bank statements for the last three months") ==
      false
    ) {
      return false;
    }
  }

  if (run_account_aggregator == 1) {
    if (
      confirm(
        "You will be redirected to the OneMoney Portal for Bank Statement Consent. Please click OK to proceed."
      ) == false
    ) {
      return false;
    }
  }

  if (run_account_aggregator == 1) {
    let dataSend = {
      run_account_aggregator: run_account_aggregator,
      current_page: "account_aggregator",
    };
    $.ajax({
      url: "account-aggregator-init",
      type: "POST",
      data: dataSend,
      dataType: "json",
      beforeSend: function () {
        $(".loader-box").removeClass("hidden");
      },
      success: function (result) {
        if (result.status == 1) {
          if (result.data.aa_run_flag == 2) {
            window.location.href = "/documentation";
          } else {
            window.location.href = result.data.aa_url;
          }
        } else if (result.status == 4) {
          catchError(result.message);
          user_session_expired();
        } else {
          catchError(result.message);
        }
      },
      complete: function () {
        $(".loader-box").addClass("hidden");
      },
      error: function (error) {
        console.error("Error:", error);
      },
    });
  } else if (run_account_aggregator == 3) {
    get_next_loan_page("bank_statement_upload");
  }
}

function account_aggregator_verify() {
  $.ajax({
    url: "account-aggregator-verify",
    type: "POST",
    data: { current_page: "account_aggregator_verify" },
    beforeSend: function () {
      $(".loader-box").removeClass("hidden");
    },
    success: function (response) {
      var result = JSON.parse(response);
      console.log(result);
      if (result.status == 1) {
        if (
          result.data.aa_consent_status == 1 &&
          result.data.bank_statement_fetched == 1
        ) {
          //$(".thanks-you-text").text("Thank You");
          $("#consent-text").text(
            "Successfully validated your Consent. You’re good to go!"
          );
          $("#verify-consent").html(
            '<a class="btn btn_upload" href="loan-application">Go back to journey</a>'
          );
          redirectToUrl("loan-application");
        } else if (
          result.data.aa_consent_status == 1 &&
          result.data.bank_statement_fetched == 0
        ) {
          //$(".thanks-you-text").text("OOPS!");
          $("#consent-text").text(
            "Consent acknowledged, but unable to retrieve the bank statement."
          );
          $("#verify-consent").html(
            '<a class="btn btn_upload" href="loan-application">Go back to journey</a>'
          );
          $(".skip-button").removeClass("hidden");
          redirectToUrl("loan-application");
        } else if (result.data.aa_consent_status == 3) {
          //$(".thanks-you-text").text("OOPS!");
          $("#consent-text").text(
            "You have denied the access to your bank account statement, kindly go through the process again to authenticate your consent."
          );
          $("#verify-consent").html(
            '<a class="btn btn_upload" href="loan-application">Go back to journey to provide consent</a>'
          );
          // pushEventCleverTap("Account_Aggregator_Re_initialte","Success");
          //$(".skip-button").removeClass("hidden");
          redirectToUrl("loan-application");
        } else {
          //$(".thanks-you-text").text("Thank You");
          $("#consent-text").text(
            "Status of your consent is pending. Click here to re-evaluate and ensure a smooth process."
          );
          $(".skip-button").removeClass("hidden");
          // pushEventCleverTap("Account_Aggregator_Verify","Success");
        }
      } else if (result.status == 4) {
        catchError(result.message);
        // pushEventCleverTap("Account_Aggregator_Verify","Failed");
        user_session_expired();
      } else {
        catchError(result.message);
        // pushEventCleverTap("Account_Aggregator_Verify","Failed");
      }
    },
    complete: function () {
      $(".loader-box").addClass("hidden");
    },
    error: function (xhr) {
      console.log(xhr.status + " " + xhr.statusText);
    },
  });
}

function saveReferences() {
  var customer_reference_name = $("#reference_name").val();
  var customer_reference_no = $("#reference_mobile").val();
  var customer_reference_relation = $("#reference_relation_type").val();
  var current_page = "add_reference";

  if (customer_reference_name == "") {
    catchError("Customer Reference Name cannot be empty");
  } else if (customer_reference_no == "") {
    catchError("Customer Reference Number cannot be empty");
  } else if (customer_reference_relation == "") {
    catchError("Customer Reference Relation cannot be empty");
  } else {
    let dataSet = {
      customer_reference_name: customer_reference_name,
      customer_reference_no: customer_reference_no,
      customer_reference_relation: customer_reference_relation,
      current_page: current_page,
    };
    $.ajax({
      type: "POST",
      url: "/save-customer-references",
      data: dataSet,
      dataType: "json",
      beforeSend: function () {
        $(".loader-box").removeClass("hidden");
      },
      success: function (result) {
        if (result.status == 1) {
          window.location.href =
            location.protocol + "//" + location.host + "/loan-application";
        } else if (result.status == 3) {
          catchError(result.message);
        } else if (result.status == 4) {
          catchError(result.message);
          user_session_expired();
        } else {
          catchError(result.message);
        }
      },
      complete: function () {
        $(".loader-box").addClass("hidden");
      },
      error: function (xhr) {
        console.log(xhr.status + " " + xhr.statusText);
      },
    });
  }
}

function redirectToUrl(redirect_url) {
  var intervalId = setInterval(function () {
    window.location.href =
      location.protocol + "//" + location.host + "/" + redirect_url;
    clearInterval(intervalId);
  }, 4000);
}

function toggleSidebar() {
  //$('.dashboard_nav flow_clr').toggleClass('hideSidebar');
  $(".dashboard_nav.flow_clr").toggleClass("menu_navleft");
  $(".dashboard_nav.flow_clr nav a").toggleClass("menu_navleft");
  $(".dashboard_content").toggleClass("expandContainer");
  $("#nav-toggle").toggleClass("close-icon");
  //    $("#nav-toggle").toggleClass('hidden');
  //    $("#close-btn").toggleClass('hidden');
}

if (["Android", "iOS"].includes(device)) {
  $(".dashboard_nav.flow_clr").addClass("menu_navleft");
  $(".dashboard_nav.flow_clr nav a").addClass("menu_navleft");
  $(".dashboard_content").addClass("expandContainer");
  $("#nav-toggle").removeClass("close-icon");
  //    $("#nav-toggle").removeClass('hidden');
  //    $("#close-btn").addClass('hidden');
}

function launch_chatbot() {
  $("#ymDivBar").click();
}

function close_chatbot() {
  document.getElementById("chatModal").style.display = "none";
}

function scollToTop(id) {
  //    if (id == '') {
  $("html, body").animate({ scrollTop: "0px" }, 0);
  //    } else {
  //        $('html, body').animate({
  //            scrollTop: $("#" + id).offset().top
  //        }, 500);
  //    }
}

function edit_profile_page(page_name) {
  if (page_name != "") {
    $("#profile-data").addClass("hidden");
    $(".main_journey_panel").removeClass("hidden");
    get_next_registration_page(page_name);
  }
}

function changeTab(id) {
  $(".nav-tabs a[href='#" + id + "']").tab("show");
}

function changeDynamic() {
  console.log("ran");
  $(document).on("click", ".sideways a", function (e) {
    e.preventDefault();
    $(this).tab("show");
  });
}

function hideSidebar() {
  $(document).click(function (e) {
    var sidebar = $(".flow_clr");
    var nav_toggle = $("#nav-toggle");
    if (
      !sidebar.is(e.target) &&
      sidebar.has(e.target).length === 0 &&
      !nav_toggle.is(e.target) &&
      nav_toggle.has(e.target).length === 0
    ) {
      $(".dashboard_nav.flow_clr").addClass("menu_navleft");
      $(".dashboard_nav.flow_clr nav a").addClass("menu_navleft");
      $(".dashboard_content").addClass("expandContainer");
      $("#nav-toggle").removeClass("close-icon");
    }
  });
}

function control_video_player(control_id) {
  if (control_id == 1) {
    $("iframe.ytplayer-player").attr("src", "#");

    // $("iframe.ytplayer-player").attr('src', 'https://www.youtube.com/embed/-6808pupAv4?si=_qRnezjxTGefxXFN/');
  } else if (control_id == 2) {
    $("iframe.ytplayer-player").attr("src", "");
  }
}

function getBlogsUsingAjax() {
  let blog_view = "";
  var image_url = "https://loan112fintech.com/direct-document-file";
  if (["/", "/home"].includes(window.location.pathname)) {
    $.ajax({
      url: "/get-blogs-for-home",
      type: "POST",
      success: function (response) {
        var result = JSON.parse(response);
        if (result.status == 1) {
          let blogs = result.blog_arr;
          for (var i = 0; i <= blogs.length - 1; i++) {
            let slug = blogs[i].wb_slug;
            let title = blogs[i].wb_title;
            let thumb_image_url = image_url + "/" + blogs[i].wb_thumb_image_url;
            let blog_date = blogs[i].wb_publish_date;

            blog_view +=
              '<div class="col-md-4">' +
              '<div class="post-slide">' +
              '<div class="post-img">' +
              '<a href="' +
              "/blog/" +
              slug +
              '"><img src="' +
              thumb_image_url +
              '" alt=""></a>' +
              "</div>" +
              '<div class="post-review" style="height:135px !important;">' +
              '<h3 class="post-title" style="height: 40px;"><a href="' +
              "/blog/" +
              slug +
              '" target="_blank">' +
              title +
              '</a></h3><hr class="hr-liness">' +
              '<ul class="post-info">' +
              "<li>" +
              blog_date +
              "</li>" +
              "</ul>" +
              "</div>" +
              "</div>" +
              "</div>";
          }
          $("#view_blogs .margin-prte").html(blog_view);
          $("#view_blogs").show();
        }
      },
      error: function (error) {
        console.error("Error:", error);
      },
    });
  }
}

getBlogsUsingAjax();

function getNewsUsingAjax() {
  let news_view = "";
  if (["/"].includes(window.location.pathname)) {
    $.ajax({
      url: "/get-news-for-home/Home",
      type: "POST",
      success: function (response) {
        //console.log(response);
        var result = JSON.parse(response);
        if (result.Status == 1) {
          let news_data = result.news_data;
          for (var i = 0; i <= news_data.length - 1; i++) {
            let title = news_data[i].wn_title;
            let url = news_data[i].wn_hyperlink;
            let thumb_image =
              "https://loan112fintech.com/direct-document-file/" +
              news_data[i].wn_thumb_image;
            var date = new Date(news_data[i].wn_publish_date);
            var options = { year: "numeric", month: "long", day: "numeric" };
            var news_date = date.toLocaleDateString("en-US", options);
            news_view +=
              '<div class="col-md-4 col-sm-6"><div class="post-slide"><a href=" ' +
              url +
              ' " target="_blank"><div class="post-img"><img src=" ' +
              thumb_image +
              ' " class="img-responsive thumbnail" alt=""></div><div class="post-review"><p>' +
              title +
              '</p><hr class="hr-liness"></a><ul class="news-info"><li>' +
              news_date +
              "</li></ul></div></div></div>";
          }
          //alert(news_view);
          $(".news_list_area").show();
          document.getElementById("view_news").innerHTML = news_view;
        }
      },
      error: function (error) {
        //alert(error);
      },
    });
  }
}
getNewsUsingAjax();

$(function () {
  $(".esign_init_btn").click(function () {
    if (!confirm("Are you sure want to esign loan agreement")) {
      return false;
    } else {
      let dataSend = { current_page: "esign_init" };
      $.ajax({
        url: "esign-initiated",
        type: "POST",
        data: dataSend,
        dataType: "json",
        beforeSend: function () {
          $(".loader-box").removeClass("hidden");
        },
        success: function (result) {
          console.log(result);
          if (result.status == 1) {
            window.location.href = result.data.esign_url;
          } else {
            catchError(result.message);
          }
        },
        complete: function () {
          $(".loader-box").addClass("hidden");
        },
        error: function (error) {
          console.error("Error:", error);
        },
      });
    }
  });
});

function bank_statement_verify() {
  let dataSend = { current_page: "bank_statement_verify" };
  $.ajax({
    url: "bank-statement-verify",
    type: "POST",
    data: dataSend,
    dataType: "json",
    beforeSend: function () {
      $(".loader-box").removeClass("hidden");
    },
    success: function (result) {
      //console.log(result);
      if (result.status == 1) {
        window.location.href =
          location.protocol + "//" + location.host + "/loan-application";
      } else {
        catchError(result.message);
      }
    },
    complete: function () {
      $(".loader-box").addClass("hidden");
    },
    error: function (error) {
      console.error("Error:", error);
    },
  });
}

const dateInput = document.getElementById("salary_date");
dateInput.addEventListener("click", function () {
  this.showPicker && this.showPicker();
});

// function test1(){
//     alert("pol")
// }

function initiate_preview_ekyc(run_ekyc_flag) {
  const aadhaar = [
    $("#aadhaar1").val(),
    $("#aadhaar2").val(),
    $("#aadhaar3").val(),
    $("#aadhaar4").val(),
  ].join("");

  const callEkycApi = (payload, onSuccess) => {
    $.ajax({
      type: "POST",
      url: "/initiate-ekyc",
      data: payload,
      dataType: "json",
      success: onSuccess,
      error: function (xhr) {
        console.log(xhr.status + " " + xhr.statusText);
      },
    });
  };

  // First API call
  callEkycApi(
    {
      aadhaar_no: aadhaar,
      current_page: "ekyc_preview",
      ekyc_preview_action: Number(run_ekyc_flag),
    },
    function (result) {
      console.log("result", result);
      if (result.status !== 1) {
        catchError(result.message);
        //return;
      } else {
        if (run_ekyc_flag === 2) {
          const decisionId =
            result?.data?.lastLoanDetails?.lead_bureau_credau_decision_id;
          const incomeFlag = result?.data?.lastLoanIncomeFlag;

          if (decisionId == 2) {
            if (incomeFlag === true) {
              get_next_loan_page("bank_statement_upload");
            } else {
              get_next_loan_page("preview_income_details");
            }
            return;
          }

          console.log("lead_bureau_credau_decision_id nothing");
          generate_loan_quote();
        }
      }

      // Second API call (EKYC initiation)
      if (run_ekyc_flag === 3) {
        callEkycApi(
          {
            aadhaar_no: aadhaar,
            current_page: "ekyc_initiated",
            type: 1,
          },
          function (result) {
            if (result.status === 1) {
              if (result.data.is_ekyc_done === 1) {
                catchSuccess(result.message);
              } else {
                $("#ekyc_url").addClass("loaded_url");
                window.location.href = result.data.ekyc_url;
              }
            } else if (result.status === 4) {
              catchError(result.message);
              user_session_expired();
            } else {
              catchError(result.message);
            }
          }
        );
      }
    }
  );
}

function account_aggregator_preview(run_account_aggregator) {
  // Reusable AJAX helper
  const callAAApi = (payload, onSuccess) => {
    $.ajax({
      url: "account-aggregator-init",
      type: "POST",
      data: payload,
      dataType: "json",
      beforeSend: function () {
        $(".loader-box").removeClass("hidden");
      },
      success: onSuccess,
      error: function (error) {
        console.error("Error:", error);
      },
      complete: function () {
        $(".loader-box").addClass("hidden");
      },
    });
  };

  // First API call (Preview)
  callAAApi(
    {
      run_account_aggregator,
      current_page: "bank_statement_preview",
      bank_statement_preview_action: run_account_aggregator,
    },
    function (result) {
      if (result.status !== 1) {
        catchError(result.message);
      } else {
        if (run_account_aggregator === 2) {
          window.location.href = "/loan-application";
        }
      }

      // Consent & AA initiation flow
      if (run_account_aggregator === 3) {
        callAAApi(
          {
            run_account_aggregator: 1,
            current_page: "account_aggregator",
          },
          function (result) {
            if (result.status === 1) {
              if (result.data.aa_run_flag === 2) {
                window.location.href = "/documentation";
              } else {
                window.location.href = result.data.aa_url;
              }
            } else if (result.status === 4) {
              catchError(result.message);
              user_session_expired();
            } else {
              catchError(result.message);
            }
          }
        );
      }
    }
  );
}
function saveReferencesPreview(reference_preview_action) {
  var customer_reference_name = $("#reference_name").val();
  var customer_reference_no = $("#reference_mobile").val();
  var customer_reference_relation = $("#reference_relation_type").val();
  var current_page = "reference_preview";

  if (customer_reference_name == "") {
    catchError("Customer Reference Name cannot be empty");
  } else if (customer_reference_no == "") {
    catchError("Customer Reference Number cannot be empty");
  } else if (customer_reference_relation == "") {
    catchError("Customer Reference Relation cannot be empty");
  } else {
    let dataSet = {
      customer_reference_name: customer_reference_name,
      customer_reference_no: customer_reference_no,
      customer_reference_relation: customer_reference_relation,
      current_page: current_page,
      reference_preview_action: reference_preview_action,
    };
    $.ajax({
      type: "POST",
      url: "/save-customer-references",
      data: dataSet,
      dataType: "json",
      beforeSend: function () {
        $(".loader-box").removeClass("hidden");
      },
      success: function (result) {
        if (result.status == 1) {
          if (reference_preview_action == "2") {
            window.location.href =
              location.protocol + "//" + location.host + "/loan-application";
          } else if (reference_preview_action == "3") {
            get_next_loan_page("employment_details");
          }
        } else {
          catchError(result.message);
        }
      },
      complete: function () {
        $(".loader-box").addClass("hidden");
      },
      error: function (xhr) {
        console.log(xhr.status + " " + xhr.statusText);
      },
    });
  }
}
function banking_details_preview(verify_account_check) {
  $(".banking-btn, .btn").prop("disabled", true);

  var bank_verification_consent = verify_account_check;

  var dataSet = {
    current_page: "bank_details_preview",
    type: bank_verification_consent,
    bank_details_preview_action: bank_verification_consent,
  };

  $.ajax({
    type: "POST",
    url: "/banking-details-sbm",
    data: dataSet,
    dataType: "json",
    beforeSend: function () {
      $(".loader-box").removeClass("hidden");
    },
    success: function (result) {
      if (result.status == 1) {
        if (bank_verification_consent == "2") {
          var bank_account_number = $("#bank_account_number").val().trim();
          var cnf_bank_account_number = $("#cnf_bank_account_number")
            .val()
            .trim();
          var bank_account_ifsc = $("#bank_account_ifsc").val().trim();
          var bank_account_type_id = $("#bank_account_type_id").val();

          /* Empty checks */
          if (bank_account_number === "") {
            catchError("Please enter bank account number");
            return;
          }

          if (cnf_bank_account_number === "") {
            catchError("Please confirm bank account number");
            return;
          }

          /* Numeric check (NO characters allowed) */
          if (!/^\d+$/.test(bank_account_number)) {
            catchError("Bank account number must contain only numbers");
            return;
          }

          if (!/^\d+$/.test(cnf_bank_account_number)) {
            catchError("Confirm bank account number must contain only numbers");
            return;
          }

          /* Match check */
          if (bank_account_number !== cnf_bank_account_number) {
            catchError("Bank account number does not match");
            return;
          }

          if (bank_account_ifsc === "") {
            catchError("Please enter IFSC Code");
            return;
          }

          if (bank_account_type_id === "") {
            catchError("Please select bank account type");
            return;
          }

          var submitData = {
            bank_account_number: bank_account_number,
            cnf_bank_account_number: cnf_bank_account_number,
            bank_account_ifsc: bank_account_ifsc,
            bank_account_type_id: bank_account_type_id,
            bank_verification_consent: 1,
            current_page: "banking_details",
          };

          $.ajax({
            type: "POST",
            url: "/banking-details-sbm",
            data: submitData,
            dataType: "json",
            success: function (res) {
              if (res.status == 1) {
                closeConfirmModal();

                var reference_no = res.data.reference_no.replace("#", "");
                catchSuccess(res.message);

                setTimeout(function () {
                  window.location.href =
                    location.protocol +
                    "//" +
                    location.host +
                    "/loan-application?reference_id=" +
                    reference_no;
                }, 300);
              } else if (res.status == 4) {
                catchError(res.message);
                user_session_expired();
              } else {
                catchError(res.message);
              }
            },
            complete: function () {
              $(".loader-box").addClass("hidden");
            },
          });
        } else if (bank_verification_consent == "3") {
          closeConfirmModal();
          get_next_loan_page("banking_details");
        }
      } else {
        catchError(result.message);
      }
    },
    complete: function () {
      $(".loader-box").addClass("hidden");
    },
  });
}
function closeConfirmModal() {
  $("#confirmModal").modal("hide");
  $("body").removeClass("modal-open");
  $(".modal-backdrop").remove();
}

function validateMobile(event, input) {
  let char = String.fromCharCode(event.which);
  if (!/[0-9]/.test(char)) {
    return false;
  }
  if (input.value.length === 0 && !/[6-9]/.test(char)) {
    return false;
  }
  return true;
}

function enforceFirstDigit(input) {
  let value = input.value;
  value = value.replace(/[^0-9]/g, "");
  if (value.length > 0 && !/^[6-9]/.test(value)) {
    value = value.substring(1);
  }
  input.value = value;
}

function residence_proof_form() {
  var address_line_1 = $("#address_line_1").val();
  if (address_line_1 == "" || address_line_1 == null) {
    catchError("Address line 1 is required");
    return false;
  }
  var address_line_2 = $("#address_line_2").val();
  if (address_line_2 == "" || address_line_2 == null) {
    catchError("Address line 2 is required");
    return false;
  }

  var landmark = $("#landmark").val();
  var pincode = $("#pincode").val();
  if (pincode == "" || pincode == null) {
    catchError("Pincode is required");
    return false;
  }
  var formData = {
    residence_address_1: address_line_1,
    residence_address_2: address_line_2,
    residence_landmark: landmark,
    residence_pincode: pincode,
    residence_type_id: 0,
    residence_type_id: 0,
  };

  $.ajax({
    url: "/residence-proof-form",
    type: "POST",
    data: formData,
    beforeSend: function () {
      $(".loader-box").removeClass("hidden");
    },
    success: function (response) {
      var result = JSON.parse(response);
      console.log(result);

      if (result.status == 1) {
        residence_proof_skip(1);
      } else {
        catchError(result.message);
      }
    },
    complete: function () {
      $(".loader-box").addClass("hidden");
    },
    error: function (xhr) {
      console.log(xhr.status + " " + xhr.statusText);
    },
  });
}

function residence_proof_skip(residence_button_type) {
  if (residence_button_type == 2) {
    var loan_amount = $("#loan_amount_offer").val();
    var formData = {
      loan_amount: loan_amount,
      residence_button_type: residence_button_type,
    };
  } else {
    var formData = {
      residence_button_type: residence_button_type,
    };
  }

  $.ajax({
    url: "/residence-proof-skip",
    type: "POST",
    data: formData,
    beforeSend: function () {
      $(".loader-box").removeClass("hidden");
    },
    success: function (response) {
      console.log(response);

      var result = JSON.parse(response);
      console.log(result);

      if (result.status == 1) {
        if (residence_button_type == 0) {
          scollToTop("loan-application");
          $("#residance_proof_skip_modal").modal("hide");
          $("body").removeClass("modal-open");
          $(".modal-backdrop").remove();
          $("#loan-application").html(result.data);
        } else if (residence_button_type == 1) {
          $("#residece_skip_text").text(result.data.residece_skip_text);
          $(".amountConfirmModel").show();
          $("#new_loan_amount_offer").text(
            "₹" + result.data.loan_data.max_loan_amount
          );
          $("#loan_amount_offer").val(result.data.loan_data.max_loan_amount);
          $("#residance_proof_skip_modal").modal("show");
        } else if (residence_button_type == 2) {
          $("#residance_proof_skip_modal").modal("hide");
          $(".modal-backdrop").remove();
          $(".amountConfirmModel").hide();
          scollToTop("loan-application");
          $("#loan-application").html(result.data);
        }
      } else {
        catchError(result.message);
      }
    },
    complete: function () {
      $(".loader-box").addClass("hidden");
    },
    error: function (xhr) {
      console.log(xhr.status + " " + xhr.statusText);
    },
  });
}

function prefill_details() {
  var formData = { current_page: "eligibility_initiate" };
  $.ajax({
    url: "/prefill-details",
    type: "POST",
    data: formData,
    beforeSend: function () {
      $(".loader-box").removeClass("hidden");
    },
    success: function (response) {
      console.log(response);

      var result = JSON.parse(response);
      console.log(result);

      if (result.status == 1) {
      } else {
        catchError(result.message);
      }
    },
    complete: function () {
      $(".loader-box").addClass("hidden");
    },
    error: function (xhr) {
      console.log(xhr.status + " " + xhr.statusText);
    },
  });
}
