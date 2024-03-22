function generateBubbles() {
  const bubbles = document.getElementById("bubbles");
  for (let i = 0; i < 21; i++) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.innerHTML = `
    <svg class="heart" viewBox="0 0 32 32">
        <title>heart22</title>
        <path
          d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z">
        </path>
      </svg>
    `
    bubbles.appendChild(bubble);
  }
}


document.addEventListener("DOMContentLoaded", function () {
  generateBubbles()
  document.body.classList.remove("container");
})