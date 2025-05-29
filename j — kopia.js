// Simple quiz data
const quizData = [
   {
    question: "wot eiry metal ger Guns of the Patriots in tam lain?",
    options: ["1964 ", "2005", "2014 ", "2007/09"],
    answer: 2
  },
  {
    question: "wot eiry metal ger Peace Walker in tam lain?",
    options: ["1975", "1995", "1984", "1974"],
    answer: 3
  },
  {
    question: "wot eiry metal ger The Phantom Pain in tam lain?",
    options: ["1984", "1995 ", "1964", "2014 "],
    answer: 0
  },
  {
    question: "wot eiry metal ger Sons of Liberty in tam lain?",
    options: ["2014", "2007/09", "1974", "1975"],
    answer: 1
  }
];

function loadQuiz() {
  const container = document.querySelector('.container');
  if (!container) return;

  container.innerHTML = ""; // Clear previous content

  quizData.forEach((q, idx) => {
    const qDiv = document.createElement('div');
    qDiv.className = 'quiz-question';
    qDiv.innerHTML = `<p>${q.question}</p>`;

    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.textContent = opt;
      btn.onclick = () => {
        if (i === q.answer) {
          btn.style.background = 'lightgreen';
        } else {
          btn.style.background = 'salmon';
        }
      };
      qDiv.appendChild(btn);
    });

    container.appendChild(qDiv);
  });
}

// Zamiast sprawdzać tytuł, po prostu ładuj quiz:
loadQuiz();