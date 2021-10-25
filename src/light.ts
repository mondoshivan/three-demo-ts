import {
    DirectionalLight,
    AmbientLight
  } from "three"

export class Light {

    private _sun:DirectionalLight;
    private _ambientLight:AmbientLight

    constructor() {
        this._sun = new DirectionalLight("white", 8);
        this._ambientLight = new AmbientLight("white", 3);
    }

    public get sun() {
        return this._sun;
    }

    public get ambientLight() {
        return this._ambientLight;
    }

}