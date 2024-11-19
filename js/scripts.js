document.addEventListener("DOMContentLoaded", () => {
  const normalModeButton = document.getElementById("normalModeButton");
  const starWarsModeButton = document.getElementById("starWarsModeButton");
  const lightsaberOffSound = document.getElementById("lightsaberOffSound");
  const lightsaberOnSound = document.getElementById("lightsaberOnSound");
  const body = document.body; // Reference to the body element

  normalModeButton.addEventListener("click", () => {
    // Check if the 'star-wars' class is currently set
    if (body.classList.contains("star-wars")) {
      lightsaberOffSound.play(); // Only play the off sound if in Star Wars mode
    }
    body.classList.remove("star-wars"); // Remove the class if it's there
  });

  starWarsModeButton.addEventListener("click", () => {
    // Check if the 'star-wars' class is not set
    if (!body.classList.contains("star-wars")) {
      lightsaberOnSound.play(); // Only play the on sound if not currently in Star Wars mode
    }
    body.classList.add("star-wars");
  });
});

// Kode for HTML og CSS editor - inspirasjon: https://www.geeksforgeeks.org/how-to-make-live-coding-editor-using-html-css-and-javascript/
function updatePreview() {
  const htmlContent = document.getElementById("html-editor").value;
  const cssContent = document.getElementById("css-editor").value;
  const iframe = document.getElementById("preview");

  // Combine HTML and CSS
  const combinedContent = `
    <html>
      <head>
        <style>${cssContent}</style>
      </head>
      <body>
        ${htmlContent}
      </body>
    </html>
  `;

  // Update the iframe
  iframe.srcdoc = combinedContent;
}

// For quizen
document.getElementById("submit-quiz").addEventListener("click", function () {
  let score = 0;
  const answers = {
    q1: "1",
    q2: "1",
    q3: "1",
    q4: "1",
    q5: "1",
    q6: "1",
    q7: "1",
    q8: "1",
    q9: "1",
    q10: "1",
  };

  // Beregn poengsum
  for (let question in answers) {
    const selected = document.querySelector(
      `input[name="${question}"]:checked`
    );
    if (selected && selected.value === answers[question]) {
      score++;
    }
  }

  // Vis resultatet
  document.getElementById("score-value").innerText = `${score}`;
  document.getElementById("quiz-result").style.display = "block";

  // Scroll til toppen for å vise resultatet
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Tilbakestill quiz-funksjon
document.getElementById("reset-quiz").addEventListener("click", function () {
  // Fjern valgte svar
  const inputs = document.querySelectorAll('input[type="radio"]');
  inputs.forEach((input) => (input.checked = false));

  // Skjul resultatvindu
  document.getElementById("quiz-result").style.display = "none";

  // Scroll til toppen (valgfritt)
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Parallax-effekt
window.addEventListener("scroll", function () {
  const parallax = document.querySelector(".hero");
  let scrollPosition = window.pageYOffset;

  // Juster bakgrunnsposisjon
  parallax.style.backgroundPositionY = scrollPosition * 0.5 + "px";
});


document.addEventListener("DOMContentLoaded", function () {
  // Hent hash fra URL
  const hash = window.location.hash.substring(1); // Fjerner #
  
  if (hash) {
    const targetElement = document.getElementById(hash);
    if (targetElement) {
      // Legg til highlight-stil
      targetElement.style.backgroundColor = "#f0f8ff";
      targetElement.style.border = "2px solid #1e88e5";

      // Fjern highlight etter 4 sekunder
      setTimeout(() => {
        targetElement.style.backgroundColor = "";
        targetElement.style.border = "";
      }, 4000);
    }
  }
});
