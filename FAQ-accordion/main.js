// Select all elements with the class "question" and an img tag
let sign = document.querySelectorAll(".question img");

// Iterate over each element
sign.forEach((s) => {
  // Add a click event listener to each element
  s.addEventListener("click", () => {
    // Check if the element has the class "rotate"
    if (s.classList.contains("rotate")) {
      // If it does, remove the class and change the image source
      s.classList.remove("rotate");
      s.src = "assets/images/icon-plus.svg";
    } else {
      // If it doesn't, add the class and change the image source
      s.classList.add("rotate");
      s.src = "assets/images/icon-minus.svg";
    }

    // Toggle the "active" class on the next sibling element of the parent element
    s.parentElement.nextElementSibling.classList.toggle("active");
  });
});
