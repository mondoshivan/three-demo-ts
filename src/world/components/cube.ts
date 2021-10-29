
import {
    BoxGeometry,
    MathUtils,
    Mesh,
    MeshStandardMaterial
} from "three";

import { WorldObject } from "./world_object";
import { Updateable } from "../interfaces/updateable";

export class Cube extends WorldObject implements Updateable {

    protected _mesh:Mesh
    private _radiansPerSecond:number

    constructor() {
        super();
        
        const geometry = new BoxGeometry(0.2, 0.2, 0.2)

        // As the name suggests, MeshStandardMaterial should be your go-to “standard” material 
        // for nearly all situations. With the addition of well-crafted textures, we can recreate 
        // nearly any common surface using the MeshStandardMaterial.
        const material = new MeshStandardMaterial({color: "purple"});
        this._mesh = new Mesh(geometry, material);

        // rotate the cube 30 degrees per second.
        const degree = 30;
        this._radiansPerSecond = MathUtils.degToRad(degree);

        this._mesh.position.y = 1;
    }

    tick(delta:number):void {
        this._mesh.rotation.x += this._radiansPerSecond * delta;
        this._mesh.rotation.y += this._radiansPerSecond * delta;
        this._mesh.rotation.z += this._radiansPerSecond * delta;
    }

}