function checkAccess() {
  const input = document.querySelector("input").value;

  if (input === "ZENTRIX") {
    alert("ACCESS GRANTED");
  } else {
    alert("ACCESS DENIED");
  }
}

/* FIXED SCROLL REVEAL SYSTEM */
const sections = document.querySelectorAll(".reveal");

function revealOnScroll() {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
