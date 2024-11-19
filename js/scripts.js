function setTheme(theme) {
  if (theme === "star-wars") {
    document.body.classList.add("star-wars");
  } else {
    document.body.classList.remove("star-wars");
  }
}

window.addEventListener("scroll", function () {
  const parallax = document.querySelector(".hero");
  let scrollPosition = window.pageYOffset;

  // Adjust the background position
  parallax.style.backgroundPositionY = scrollPosition * 0.5 + "px";
});
