import {
    PerspectiveCamera,
    WebGLRenderer
  } from "three"

export class Resizer {

    private _container:HTMLElement
    private _camera:THREE.PerspectiveCamera
    private _renderer:THREE.WebGLRenderer

    constructor(container:HTMLElement, camera:PerspectiveCamera, renderer:WebGLRenderer) {
        this._container = container;
        this._camera = camera;
        this._renderer = renderer;

        this.resize();

        window.addEventListener("resize", () => { this.resize() }, false);
    }

    public resize() {
        // Set the camera's aspect ratio
        this._camera.aspect = this._container.clientWidth / this._container.clientHeight;
        
        // update the camera's frustum
        this._camera.updateProjectionMatrix();

        // update the size of the renderer AND the canvas
        this._renderer.setSize(this._container.clientWidth, this._container.clientHeight);

        // prevent blurring on HiDPI displays
        this._renderer.setPixelRatio(window.devicePixelRatio);
    }
}