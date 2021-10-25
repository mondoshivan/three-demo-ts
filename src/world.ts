import {
  AmbientLight,
    BoxGeometry,
    Color,
    DirectionalLight,
    Mesh,
    MeshStandardMaterial,
    PerspectiveCamera,
    Scene, 
    Vector3,
    WebGLRenderer
  } from "three"

  import {Resizer} from "./resizer"
  import {Renderer} from "./renderer"
  import {Light} from "./light"

export class World {

    private _container:HTMLElement
    private _camera:THREE.PerspectiveCamera
    private _renderer:WebGLRenderer
    private _scene:THREE.Scene
    private _mesh:Mesh
    private _resizer:Resizer
    private _sun:DirectionalLight
    private _ambientLight:AmbientLight
  
    constructor(container:HTMLElement) {
      this._container = container;
      this._camera = this.createCamera();
      this._renderer = new Renderer().webGLRenderer;
      this._scene = this.createScene();
      this._mesh = this.createMesh();
      this._resizer = new Resizer(this._container, this._camera, this._renderer);
      this._sun = new Light().sun;
      this._ambientLight = new Light().ambientLight;
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

    private createMesh(): Mesh {
        const geometry = new BoxGeometry(0.2, 0.2, 0.2)

        // As the name suggests, MeshStandardMaterial should be your go-to “standard” material 
        // for nearly all situations. With the addition of well-crafted textures, we can recreate 
        // nearly any common surface using the MeshStandardMaterial.
        const material = new MeshStandardMaterial({color: "purple"});
        const mesh:Mesh = new Mesh(geometry, material)
        return mesh
    }
  
    public init():void {
      this._camera.position.z = 1;
      this._camera.lookAt(new Vector3(0, 0, 0));
      
      // move the light right, up, and towards us
      this._sun.position.set(10, 10, 10);

      // add to the sceen
      this._scene.add(
        this._mesh,
        this._sun,
        this._ambientLight
        );
      this._container.appendChild(this._renderer.domElement);
    }

    public render(): void {
        this._renderer.render(this._scene, this._camera);
    }
  
    public get camera():PerspectiveCamera {
      return this._camera;
    }
  
    public get renderer():WebGLRenderer {
      return this._renderer;
    }
  
    public get scene():Scene {
      return this._scene;
    }

    public get mesh():Mesh {
        return this._mesh;
    }
  
  }