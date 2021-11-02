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
  import {Statistics} from "./system/statistics"
  import {Camera} from "./components/camera"
  import { GUI_Handler } from "./system/gui_handler"
  import { SceneHandler } from "./components/scene_handler"
  import { DebugGUI } from "./system/debug_gui"
  import { Donut } from "./components/donut"

export class World {

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
    private _guiHandler:GUI_Handler
    private _debugGUI:DebugGUI
    private _donut:Donut
  
    constructor(container:HTMLElement) {
      this._camera = new Camera(container).perspectiveCamera;
      this._scene = new SceneHandler().scene;
      const statistics:Statistics = new Statistics(container);

      // Renderer
      this._renderer = new Renderer().webGLRenderer;
      container.appendChild(this._renderer.domElement);
      
      // DebugGUI
      this._debugGUI = new DebugGUI();
      this._debugGUI.appendText("test");

      this._controls = new Controls(this._camera, this._renderer.domElement);
      this._cube = new Cube();
      this._loop = new Loop(this._camera, this._scene, this._renderer);

      // Donut
      this._donut = new Donut(this._scene);

      // GUI
      this._guiHandler = new GUI_Handler();
      this._guiHandler.addParameter("Cube Rotation", this._cube.mesh.rotation, "x", 0, Math.PI * 2);
      this._guiHandler.addParameter("Cube Rotation", this._cube.mesh.rotation, "y", 0, Math.PI * 2);
      this._guiHandler.addParameter("Cube Rotation", this._cube.mesh.rotation, "z", 0, Math.PI * 2);

      this._guiHandler.addParameter("Cube Position", this._cube.mesh.position, "x", 0, 10);
      this._guiHandler.addParameter("Cube Position", this._cube.mesh.position, "y", 0, 10);
      this._guiHandler.addParameter("Cube Position", this._cube.mesh.position, "z", 0, 10);

      this._guiHandler.addParameter("Cube Visible", this._cube.mesh, "visible");


      // Resizer
      this._resizer = new Resizer(container, this._camera, this._renderer);
      this._resizer.resize();      

      this._sun = new Light().sun;
      this._ambientLight = new Light().ambientLight;
      this._plane = new Plane();

      this._camera.position.z = 1;
      this._camera.lookAt(new Vector3(0, 0, 0));
      
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
      this._loop.updatables.push(statistics);

      // controls
      // this._controls.setTarget(this._cube.mesh.position);
      this._controls.setDomElement(container);
    }

    public start() {
      this._loop.start();
    }

    public stop() {
      this._loop.stop();
    }
  
  }