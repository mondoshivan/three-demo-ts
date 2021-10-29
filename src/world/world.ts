import {
  AmbientLight,
  Color,
  DirectionalLight,
  PerspectiveCamera,
  Scene, 
  Vector3,
  WebGLRenderer
  } from "three"

  import {Resizer} from "./system/resizer"
  import {Renderer} from "./system/renderer"
  import {Light} from "./components/light"
  import {Loop} from "./system/loop"
  import {Cube} from "./components/cube"
  import {Plane} from "./components/plane"
  import {Controls} from "./system/controls"

export class World {

    private _container:HTMLElement
    private _camera:PerspectiveCamera
    private _renderer:WebGLRenderer
    private _scene:Scene
    private _cube:Cube
    private _resizer:Resizer
    private _sun:DirectionalLight
    private _ambientLight:AmbientLight
    private _loop:Loop
    private _plane:Plane
    private _controls:Controls
  
    constructor(container:HTMLElement) {
      this._container = container;
      this._camera = this.createCamera();
      this._scene = this.createScene();

      // Renderer
      this._renderer = new Renderer().webGLRenderer;
      this._container.appendChild(this._renderer.domElement);
      
      this._controls = new Controls(this._camera, this._renderer.domElement);
      this._cube = new Cube();
      this._loop = new Loop(this._camera, this._scene, this._renderer);

      // Resizer
      this._resizer = new Resizer(this._container, this._camera, this._renderer);
      this._resizer.resize();      

      this._sun = new Light().sun;
      this._ambientLight = new Light().ambientLight;
      this._plane = new Plane();

      // this._camera.position.z = 1;
      // this._camera.lookAt(new Vector3(0, 0, 0));
      
      // move the light right, up, and towards us
      this._sun.position.set(10, 10, 10);

      // add to the sceen
      this._scene.add(
        this._cube.mesh,
        this._sun,
        // this._ambientLight,
        this._plane.mesh
        );
     
      // add updateables to the loop
      // this._loop.updatables.push(this._cube);
      this._loop.updatables.push(this._controls);

      // controls
      this._controls.setTarget(this._cube.mesh.position);
      this._controls.setDomElement(this._container);
    }

    private createScene(): Scene {
        const scene:Scene = new Scene();
        scene.background = new Color("skyblue");
        return scene;
    }
  
    private createCamera(): PerspectiveCamera {
      const fov = 70; // AKA Field of View
      const aspect = this._container.clientWidth / this._container.clientHeight;
      const near = 0.01; // the near clipping plane
      const far = 10; // the far clipping plane
  
      return new PerspectiveCamera(fov, aspect, near, far);
    }

    public start() {
      this._loop.start();
    }

    public stop() {
      this._loop.stop();
    }
  
  }