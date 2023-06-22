$(document).ready(function () {
  $(".star").click(function () {
    const ratingValue = $(this).data("value");

    // Mengaktifkan bintang sesuai urutan yang diklik
    $(".star").removeClass("active");
    $(this).addClass("active");
    $(this).prevAll(".star").addClass("active");

    $(".pe").text(`Terima kasih atas rating ${ratingValue} bintang Anda!`);
  });
});

// // Get all checkout button elements
// const checkoutBtns = document.getElementsByClassName("checkoutBtn");

// // Get the popup element
// const popup = document.getElementById("popup");

// // Get the close button element
// const closeBtn = document.getElementsByClassName("close")[0];

// // Show the popup when a checkout button is clicked
// Array.from(checkoutBtns).forEach(function (btn) {
//   btn.addEventListener("click", function () {
//     popup.style.display = "block";
//   });
// });

// // Hide the popup when the close button is clicked
// closeBtn.addEventListener("click", function () {
//   popup.style.display = "none";
// });

// // Hide the popup when the user clicks outside of it
// window.addEventListener("click", function (event) {
//   if (event.target == popup) {
//     popup.style.display = "none";
//   }
// });

// // Handle form submission
// const checkoutForm = document.getElementById("checkoutForm");
// checkoutForm.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const date = document.getElementById("date").value;
//   const numberOfPeople = document.getElementById("numberOfPeople").value;
//   const creditCard = document.getElementById("creditCard").value;

//   // Add your code to process the form data and complete the checkout
//   console.log("Name:", name);
//   console.log("Email:", email);
//   console.log("Date:", date);
//   console.log("Number of People:", numberOfPeople);
//   console.log("Credit Card:", creditCard);
// });
