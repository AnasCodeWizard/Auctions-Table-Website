function showForm(formNumber) {
  // Hide all forms
  var forms = document.getElementsByClassName('sell-form');
  for (var i = 0; i < forms.length; i++) {
    forms[i].style.display = 'none';
  }

  // Show the selected form
  var formId = 'form' + formNumber;
  var form = document.getElementById(formId);
  if (form) {
    form.style.display = 'block';
  }
}

function showPopup(form) {
  var requiredFields = form.querySelectorAll('input[required]');
  var isFormValid = true;

  for (var i = 0; i < requiredFields.length; i++) {
    if (requiredFields[i].value === '') {
      isFormValid = false;
      break;
    }
  }

  if (!isFormValid) {
    alert('Please fill in all the required fields.');
  } else {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';

    setTimeout(function() {
      // Redirect to the index page
      window.location.href = "/index/index.html";
    }, 1000);
  }
}

// Get all the forms on the page
var forms = document.getElementsByClassName('sell-form');

// Attach form submission event listener to each form
for (var i = 0; i < forms.length; i++) {
  forms[i].addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    showPopup(this); // Call showPopup function and pass the current form
  });
}

// Get all the submit buttons on the page
var submitButtons = document.querySelectorAll('.sell-form button[type="submit"]');

// Attach click event listener to each submit button
for (var i = 0; i < submitButtons.length; i++) {
  submitButtons[i].addEventListener('click', function() {
    var form = this.closest('form');
    showPopup(form); // Pass the current form to the showPopup function
  });
}
