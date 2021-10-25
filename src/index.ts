import { World } from "./world"

import "../static/main.css";

const container:HTMLElement = document.body

const world:World = new World(container)
world.init()

function animation (time:number) {
  world.mesh.rotation.x = time / 2000
  world.mesh.rotation.y = time / 1000

  world.render();
}

world.renderer.setAnimationLoop(animation)
