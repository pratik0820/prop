const music = document.getElementById("music");
const title = document.getElementById("title");
const text = document.getElementById("text");
const nextBtn = document.getElementById("next");
const timeline = document.getElementById("timeline");
const buttons = document.querySelector(".buttons");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

let step = 0;

const story = [
  "We met back in 2019… not knowing what destiny had planned 💫",
  "We became best friends, shared laughs, pain, silence, everything 💞",
  "We faced ups and downs… even moments where we almost lost each other 💔",
  "But somehow, we found our way back… stronger than before 🤍",
  "And then… on 29th October, our story changed forever 💍",
  "So Bubu… here’s what my heart wants to ask… 🌹"
];

nextBtn.addEventListener("click", () => {

  if (music.paused) {
    music.play().catch(() => {});
  }

  if (step < story.length) {
    text.innerText = story[step];
    step++;
  }

  if (step === 3) {
    timeline.classList.remove("hidden");
    timeline.innerHTML = `
      <p>✨ 2019 – We met</p>
      <p>💞 Best friends</p>
      <p>💔 Almost lost contact</p>
      <p>🤍 Found each other again</p>
      <p>💍 29 Oct – Together</p>
    `;
  }

  if (step === story.length) {
    nextBtn.classList.add("hidden");
    buttons.classList.remove("hidden");
    title.innerText = "Will you be my Valentine? ❤️";
  }
});

noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "%";
  noBtn.style.top = Math.random() * 80 + "%";
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <h1 style="color:white;text-align:center;padding:40px;">
      I knew it, Bubu 😍❤️<br><br>
      From best friends to lovers…<br>
      and forever after 💍💖<br><br>
      Take a screenshot 📸<br>
      This moment is ours 🤍
    </h1>
  `;
});
