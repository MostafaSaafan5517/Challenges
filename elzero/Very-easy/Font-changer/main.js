let select = document.querySelector("select");
let element = document.querySelector("p");

select.addEventListener("change", () => {
  element.style.fontFamily = `${select.value}`;
});
