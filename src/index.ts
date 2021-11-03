import { World } from "./world/world"

import "./style/main.css";

async function main() {

    const container:HTMLElement = document.body;

    const world = new World(container);

    await world.init();

    world.start();
    
}

/**
 *  In a real app, you might want to do more sophisticated error handling, 
 * such as displaying a message to the user to let them know that something went wrong. 
 */
main().catch((err) => {
    console.error(err);
  });