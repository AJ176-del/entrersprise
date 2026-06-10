function show(id) {
  const sections = document.querySelectorAll(".section");

  for (let i = 0; i < sections.length; i++) {
    sections[i].classList.remove("active");
  }

  document.getElementById(id).classList.add("active");
}

/* optional startup state */
window.onload = function () {
  show("home");
};
