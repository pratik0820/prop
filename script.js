const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const msg = document.getElementById("message");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * window.innerWidth * 0.8;
  const y = Math.random() * window.innerHeight * 0.8;
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <h1 style="color:white;text-align:center;">
      I knew it 😍❤️<br><br>
      You just made me the happiest person 💍💖
    </h1>
  `;
});
