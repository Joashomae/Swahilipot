const words = ["Hall?", "Work-Space?", "Board/Conference Room?", "Amphitheatre?"];
let index = 0;

function changeWord() {
  const text = document.querySelector(".multiple-text");
  text.textContent = words[index];
  index++;

  if (index === words.length) {
    index = 0;
  }

  setTimeout(() => {
    changeWord();
  }, 4000);
}

changeWord();
