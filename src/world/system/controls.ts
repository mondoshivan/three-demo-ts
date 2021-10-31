import { Camera, Vector3 } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Updateable } from "../interfaces/updateable";

export class Controls implements Updateable {
    
    private _orbitControls: OrbitControls;

    constructor(camera: Camera, domElement: HTMLElement) {

        this._orbitControls = new OrbitControls(camera, domElement);

        this._orbitControls.enabled = true;
        this._orbitControls.enableZoom = true;
        this._orbitControls.enablePan = true;
        this._orbitControls.enableRotate = true;
        this._orbitControls.enableKeys = true;

        this._orbitControls.enableDamping = true;
        // this._orbitControls.autoRotate = true;
        // this._orbitControls.autoRotateSpeed = 2.0 // default: 2.0, which equates to 30 seconds per orbit at 60fps.
        
        // this._orbitControls.keys = {
        //     LEFT: "a", //left arrow
        //     UP: "ArrowUp", // up arrow
        //     RIGHT: "ArrowRight", // right arrow
        //     BOTTOM: "ArrowDown" // down arrow
        // }
    }

    tick(delta: number): void {
        this._orbitControls.update();
    }

    public setTarget(target: Vector3) {
        this._orbitControls.target = target;
        this._orbitControls.enableKeys = true;
    }

    public setDomElement(domElement:HTMLElement) {
        this._orbitControls.listenToKeyEvents(domElement);
    }

}