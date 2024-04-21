let btn = document.querySelector("button");
let el = document.querySelector("p");

btn.addEventListener("click", () => {
  window.getComputedStyle(el).display === "none"
    ? (el.style.display = "block")
    : (el.style.display = "none");
});
