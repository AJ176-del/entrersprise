function checkAccess() {
  const input = document.querySelector("input").value;

  if (input === "ZENTRIX") {
    alert("ACCESS GRANTED");
  } else {
    alert("ACCESS DENIED");
  }
}

/* SCROLL REVEAL */
const sections = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add("active");
    }
  });
});
