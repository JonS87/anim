const text = document.querySelector(".text");

document.querySelector(".button").addEventListener("click", () => {
  if (text.classList.contains("open")) {
    text.classList.remove("open");
  } else {
    text.classList.add("open");
  }
});
