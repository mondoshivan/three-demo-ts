import { World } from "./world/world"

import "./style/main.css";

const container:HTMLElement = document.body

const world:World = new World(container)
world.start();
const running = true;

// window.addEventListener("click", () => {
//   running ? world.stop() : world.start();
//   running = !running;
// });