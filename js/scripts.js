// Funksjon for å sette tema
function setTheme(theme) {
    if (theme === 'star-wars') {
        document.body.classList.add('star-wars');
    } else {
        document.body.classList.remove('star-wars');
    }
}

// Funksjon for å oppdatere HTML-forhåndsvisning
function updatePreview() {
    const htmlContent = document.getElementById("html-editor").value;
    const iframe = document.getElementById("preview");
    iframe.srcdoc = htmlContent;
}

// For quizen
document.getElementById('submit-quiz').addEventListener('click', function () {
    let score = 0;
    const answers = {
        q1: '1',
        q2: '1',
        q3: '1',
        q4: '1',
        q5: '1',
        q6: '1',
        q7: '1',
        q8: '1',
        q9: '1',
        q10: '1',
    };

    // Beregn poengsum
    for (let question in answers) {
        const selected = document.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === answers[question]) {
            score++;
        }
    }

    // Vis resultatet
    document.getElementById('score-value').innerText = `${score}`;
    document.getElementById('quiz-result').style.display = 'block';
});

// Tilbakestill quiz-funksjon
document.getElementById('reset-quiz').addEventListener('click', function () {
    // Fjern valgte svar
    const inputs = document.querySelectorAll('input[type="radio"]');
    inputs.forEach(input => input.checked = false);

    // Skjul resultatvindu
    document.getElementById('quiz-result').style.display = 'none';

    // Rull opp til toppen av siden (valgfritt)
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
