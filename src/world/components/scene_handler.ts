import { AxesHelper, Color, Scene } from "three";


export class SceneHandler {

    private _scene:Scene

    constructor() {
        this._scene = new Scene();
        this._scene.background = new Color("skyblue");
        this._scene.add(new AxesHelper());
    }

    public get scene() :Scene {
        return this._scene;
    }

}