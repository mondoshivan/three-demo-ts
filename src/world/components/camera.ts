import { PerspectiveCamera } from "three";


export class Camera {

    private _perspectiveCamera:PerspectiveCamera;

    constructor(container:HTMLElement) {
        const fov = 70; // AKA Field of View
        const aspect = container.clientWidth / container.clientHeight;
        const near = 0.01; // the near clipping plane
        const far = 10; // the far clipping plane
  
        this._perspectiveCamera = new PerspectiveCamera(fov, aspect, near, far);
    }

    public get perspectiveCamera() : PerspectiveCamera {
        return this._perspectiveCamera;
    }
}