let text = "Want a Co-working Space?, Conference Room?, Hall?, Amphitheater?";
let index = 0;

function animateText() {
    document.querySelector(".animated-text").textContent += text[index];
    index++;
    if (index === text.length) {
        index = 0;
        setTimeout(() => {
            document.querySelector(".animated-text").textContent = "";
        }, 2000);
    }
    setTimeout(animateText, 100);
}

animateText();