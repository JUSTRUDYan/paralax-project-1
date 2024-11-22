<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const canvas = document.querySelector(".rain");
  if (!canvas) {
    console.error("Canvas element not found");
    return;
  }

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const c = canvas.getContext("2d");

  function randomNum(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function RainDrops(x, y, endy, velocity, opacity) {
    this.x = x;
    this.y = y;
    this.endy = endy;
    this.velocity = velocity;
    this.opacity = opacity;

    this.draw = function () {
      c.beginPath();
      c.moveTo(this.x, this.y);
      c.lineTo(this.x, this.y - this.endy);
      c.lineWidth = 1;
      c.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
      c.stroke();
    };

    this.update = function () {
      const rainEnd = window.innerHeight + 100;
      if (this.y >= rainEnd) {
        this.y = this.endy - 100;
      } else {
        this.y += this.velocity;
      }
      this.draw();
    };
  }

  const rainArray = [];
  for (let i = 0; i < 140; i++) {
    const rainXLocation = Math.random() * window.innerWidth;
    const rainYLocation = Math.random() * -500;
    const randomRainHeight = randomNum(10, 2);
    const randomSpeed = randomNum(20, 0.2);
    const randomOpacity = Math.random() * 0.55;
    rainArray.push(
        new RainDrops(rainXLocation, rainYLocation, randomRainHeight, randomSpeed, randomOpacity)
    );
  }

  function animateRain() {
    requestAnimationFrame(animateRain);
    c.clearRect(0, 0, canvas.width, canvas.height);
    rainArray.forEach((drop) => drop.update());
  }

  animateRain();

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
});
</script>



<style scoped>
.rain {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Ensures it stays in the background */
}
</style>
