


document.addEventListener("DOMContentLoaded", function() {
    // Get elements
    const placeBidBtn = document.getElementById("place-bid-btn");
    const successPopup = document.getElementById("bid-success-popup");
    const failurePopup = document.getElementById("bid-failure-popup");
    const closeSuccessPopupBtn = document.getElementById("close-success-popup-btn");
    const closeFailurePopupBtn = document.getElementById("close-failure-popup-btn");
    const homePageLink = "/index/index.html"; // Replace with your home page URL
  
    // Place a Bid button click event
    placeBidBtn.addEventListener("click", function() {
      const amount = prompt("Enter your bid amount:");
      const parsedAmount = parseFloat(amount);
  
      if (parsedAmount >= 30 && parsedAmount <= 100) {
        // Show success popup
        successPopup.style.display = "flex";
        document.body.style.overflow = "hidden"; // Disable scrolling
  
        // Redirect to home page after 2 seconds
        setTimeout(function() {
          window.location.href = homePageLink;
        }, 2000);
      } else {
        // Show failure popup
        failurePopup.style.display = "flex";
        document.body.style.overflow = "hidden"; // Disable scrolling
      }
    });
  
    // Close success popup button click event
    closeSuccessPopupBtn.addEventListener("click", function() {
      successPopup.style.display = "none";
      document.body.style.overflow = "auto"; // Enable scrolling
    });
  
    // Close failure popup button click event
    closeFailurePopupBtn.addEventListener("click", function() {
      failurePopup.style.display = "none";
      document.body.style.overflow = "auto"; // Enable scrolling
    });
  });


   // NAVBAR Collection + Logo Java 
 function redirectToHomePage() {
  window.location.href = "/index/index.html";
}


  