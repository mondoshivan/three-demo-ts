import {
  AmbientLight,
  BoxGeometry,
  DirectionalLight,
  MeshStandardMaterial,
  PerspectiveCamera, 
  Vector3, 
  WebGLRenderer
  } from "three"

  import { Resizer } from "./system/resizer"
  import { Renderer } from "./system/renderer"
  import { Light } from "./components/light"
  import { Loop } from "./system/loop"
  import { Cube } from "./components/cube"
  import { MoPlane } from "./components/mo_plane"
  import { MoControls } from "./system/mo_controls"
  import { Statistics } from "./system/statistics"
  import { Camera } from "./components/camera"
  import { GUI_Handler } from "./system/gui_handler"
  import { MoScene } from "./components/mo_scene"
  import { DebugGUI } from "./system/debug_gui"
  import { Donut } from "./components/donut"
  import DonutGLB from "./models/donut.glb";
  import { GLTFLoaderHandler } from "./system/gltf_loader_handler"

export class World {

    private _camera:PerspectiveCamera
    private _renderer:WebGLRenderer
    private _scene: MoScene
    private _cube:Cube
    private _resizer:Resizer
    private _sun:DirectionalLight
    private _ambientLight:AmbientLight
    private _loop:Loop
    private _plane:MoPlane
    private _controls:MoControls
    private _guiHandler:GUI_Handler
    private _debugGUI:DebugGUI
    private _donut:Donut
  
    constructor(container:HTMLElement) {
      this._camera = new Camera(container).perspectiveCamera;
      this._scene = new MoScene();
      const statistics:Statistics = new Statistics(container);

      // Renderer
      this._renderer = new Renderer().webGLRenderer;
      container.appendChild(this._renderer.domElement);
      
      // DebugGUI
      this._debugGUI = new DebugGUI();
      this._debugGUI.appendText("test");

      this._controls = new MoControls(this._camera, this._renderer.domElement);
      this._controls.listenToKeyEvents(container); // needs to be done to get keys working

      // Cube
      const geometry = new BoxGeometry(0.2, 0.2, 0.2)

      // As the name suggests, MeshStandardMaterial should be your go-to “standard” material 
      // for nearly all situations. With the addition of well-crafted textures, we can recreate 
      // nearly any common surface using the MeshStandardMaterial.
      const material = new MeshStandardMaterial({color: "purple"});
      this._cube = new Cube(geometry, material);

      // Loop
      this._loop = new Loop(this._camera, this._scene, this._renderer);

      // Donut
      this._donut = new Donut(DonutGLB);

      // GUI
      this._guiHandler = new GUI_Handler();
      this._guiHandler.addParameter("Cube Rotation", this._cube.rotation, "x", 0, Math.PI * 2);
      this._guiHandler.addParameter("Cube Rotation", this._cube.rotation, "y", 0, Math.PI * 2);
      this._guiHandler.addParameter("Cube Rotation", this._cube.rotation, "z", 0, Math.PI * 2);

      this._guiHandler.addParameter("Cube Position", this._cube.position, "x", 0, 10);
      this._guiHandler.addParameter("Cube Position", this._cube.position, "y", 0, 10);
      this._guiHandler.addParameter("Cube Position", this._cube.position, "z", 0, 10);

      this._guiHandler.addParameter("Cube Visible", this._cube, "visible");


      // Resizer
      this._resizer = new Resizer(container, this._camera, this._renderer);
      this._resizer.resize();      

      this._sun = new Light().sun;
      this._ambientLight = new Light().ambientLight;
      this._plane = new MoPlane();

      this._camera.position.z = 1;
      this._camera.lookAt(new Vector3(0, 0, 0));
      
      // move the light right, up, and towards us
      this._sun.position.set(10, 10, 10);

      // add to the sceen
      this._scene.add(
        // this._cube,
        this._sun,
        // this._ambientLight,
        this._plane,
        );
     
      // add updateables to the loop
      this._loop.updatables.push(this._cube);
      this._loop.updatables.push(this._controls);
      this._loop.updatables.push(statistics);
    }

    /**
     * Asynchron initializing:
     * Splitting the setup into synchronous and asynchronous stages like this 
     * gives us full control over the setup of our app. In the synchronous stage, 
     * we will create everything that doesn’t rely on loaded assets, 
     * and in the asynchronous stage, we’ll create everything that does.
     */
    public async init() {

      // Loading all glTF Models.
      const gltfModels = [this._donut];
      const loadedGLTFModels = await GLTFLoaderHandler.loadModels(gltfModels);

      // Initializing all glTF Models.
      for (const model of loadedGLTFModels) {
        model.init();
        this._scene.add(model.root);
      }

      // On which target do you want to look?
      this._controls.target.copy(this._donut.root.position);
    }

    public start() {
      this._loop.start();
    }

    public stop() {
      this._loop.stop();
    }
  
  }