// Save user information in local storage
function saveUserInformation(userInfo) {
    localStorage.setItem('user', JSON.stringify(userInfo));
  }
  
  // Retrieve user information from local storage
  function getUserInformation() {
    const userInfo = localStorage.getItem('user');
    return userInfo ? JSON.parse(userInfo) : null;
  }
  
  // Validate email format
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  // Perform signup
  function signup(event) {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
  
    // Perform form validation
    if (!fullName || !phoneNumber || !email || !password) {
      alert('Please fill in all fields');
      return;
    }
  
    if (!validateEmail(email)) {
      alert('Invalid email format');
      return;
    }
  
    const userInfo = {
      fullName,
      phoneNumber,
      email,
      password
    };
  
    saveUserInformation(userInfo);
  
    // Clear the form fields
    document.getElementById('fullName').value = '';
    document.getElementById('phoneNumber').value = '';
    document.getElementById('signupEmail').value = '';
    document.getElementById('signupPassword').value = '';
  
    // Display the login form
    document.getElementById('reg-log').checked = false;
    document.querySelector('.card-3d-wrapper').style.transform = 'rotateY(0deg)';
  }
  
  // Perform login
  function login(event) {
    event.preventDefault();
  
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
  
    // Perform form validation
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }
  
    const userInfo = getUserInformation();
  
    if (userInfo && userInfo.email === email && userInfo.password === password) {
      // Redirect to the home page or provide the desired link
      window.location.href = '/index/index.html';
    } else {
      alert('Invalid email or password');
    }
  
    // Clear the form fields
    document.getElementById('loginEmail').value = '';
    document.getElementById('loginPassword').value = '';
  }
  
  // Check if the user is already signed up
  const userInfo = getUserInformation();
  if (userInfo) {
    document.getElementById('reg-log').checked = true;
    document.querySelector('.card-3d-wrapper').style.transform = 'rotateY(180deg)';
  }
  