const joinButtons = document.querySelectorAll(
  ".join-btn, .volunteer-btn"
);

joinButtons.forEach(button => {

  button.addEventListener("click", () => {

    alert("Thank you for showing interest in volunteering!");

  });

});