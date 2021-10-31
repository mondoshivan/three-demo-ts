import { 
    Camera, 
    Clock,
    WebGLRenderer, 
    Scene
} from "three";

import { Updateable } from "../interfaces/updateable";

export class Loop {
    
    private _camera:Camera;
    private _scene:Scene;
    private _renderer:WebGLRenderer;
    private _updatables:Array<Updateable>;
    private _clock:Clock;

    constructor(camera:Camera, scene:Scene, renderer:WebGLRenderer) {
        this._camera = camera;
        this._scene = scene;
        this._renderer = renderer;
        this._updatables = [];
        this._clock = new Clock();
    }

    public start() {
        this._renderer.setAnimationLoop(() => {

            // tell every animated object to tick forward one frame
            this.tick();

            // render a frame
            this._renderer.render(this._scene, this._camera);
          });
    }

    public stop() {
        this._renderer.setAnimationLoop(null);
    }

    // Take careful note of the fact that Loop.tick will run every frame, 
    // which means it will run sixty times per second. 
    // It’s important to keep the amount of work done here to a minimum, 
    // which means that each animated object’s .tick method method must be as simple as possible.
    private tick() {

        // .getDelta tells us how much time has passed since the last time we called .getDelta. 
        // If we call it once, and only once, at the start of each frame, 
        // it will tell us how long the previous frame took. 
        // Note: if you call it .getDelta more than once per frame, 
        // subsequent calls will measure close to zero. Only call .getDelta once at the very start of a frame!
        const delta = this._clock.getDelta();

        for(const object of this._updatables) {
            object.tick(delta);
        }
    }

    public get updatables() {
        return this._updatables;
    }
}