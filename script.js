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

  noBtn.style.pointerEvents = "none";
  setTimeout(() => {
    noBtn.style.pointerEvents = "auto";
  }, 300);
});

noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();

  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "%";
  noBtn.style.top = Math.random() * 80 + "%";

  noBtn.style.pointerEvents = "none";
  setTimeout(() => {
    noBtn.style.pointerEvents = "auto";
  }, 300);
});

noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
});


yesBtn.addEventListener("click", () => {
    launchFireworks();

    const ring = document.createElement("div");
  ring.className = "ring";
  ring.innerHTML = "💍";
  document.body.appendChild(ring);

    setTimeout(() => {
        document.body.innerHTML = `
    <h1 style="color:white;text-align:center;padding:40px;">
      I knew it, Bubu 😍❤️<br><br>
      From best friends to lovers…<br>
      and forever after 💍💖<br><br>
      Take a screenshot 📸<br>
      This moment is ours 🤍
    </h1>
    <p class="secret">
        Even after all the ups and downs…<br>
        choosing you was always easy 🤍
      </p>
  `;
}, 3000);
});
  
function launchFireworks() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];

  function createFirework(x, y) {
    for (let i = 0; i < 80; i++) {
      particles.push({
        x,
        y,
        vx: Math.cos(i) * Math.random() * 6,
        vy: Math.sin(i) * Math.random() * 6,
        alpha: 1,
        size: Math.random() * 4 + 2
      });
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, index) => {
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= 0.01;

      ctx.fillStyle = `rgba(255, 77, 109, ${p.alpha})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();

      if (p.alpha <= 0) particles.splice(index, 1);
    });

    requestAnimationFrame(animate);
  }

  animate();

  // Launch multiple fireworks
  let launches = 0;
  const interval = setInterval(() => {
    createFirework(
      Math.random() * canvas.width,
      Math.random() * canvas.height / 2
    );
    launches++;
    if (launches > 6) clearInterval(interval);
  }, 500);
}
