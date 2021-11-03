import { World } from "./world/world"

import "./style/main.css";

async function main() {

    const container:HTMLElement = document.body;

    const world:World = new World(container);

    await world.init();

    world.start();
    
}

main().catch((err) => {
    console.error(err);
  });