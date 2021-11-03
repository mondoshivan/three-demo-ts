import { Camera, Vector3 } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Updateable } from "../interfaces/updateable";

export class MoControls extends OrbitControls implements Updateable {

    constructor(camera: Camera, domElement: HTMLElement) {

        super(camera, domElement);

        this.enabled = true;
        this.enableZoom = true;
        this.enablePan = true;
        this.enableRotate = true;
        this.enableKeys = true;

        this.enableDamping = true;
        // this.autoRotate = true;
        // this.autoRotateSpeed = 2.0 // default: 2.0, which equates to 30 seconds per orbit at 60fps.
        
        // this.keys = {
        //     LEFT: "a", //left arrow
        //     UP: "ArrowUp", // up arrow
        //     RIGHT: "ArrowRight", // right arrow
        //     BOTTOM: "ArrowDown" // down arrow
        // }
    }

    tick(delta: number): void {
        this.update();
    }

}