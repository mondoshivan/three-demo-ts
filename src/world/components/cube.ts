
import {
    BufferGeometry,
    Material,
    MathUtils,
    Mesh,
} from "three";

import { Updateable } from "../interfaces/updateable";

export class Cube extends Mesh implements Updateable {

    private _radiansPerSecond:number

    constructor(geometry?: BufferGeometry, material?: Material) {
        super(geometry, material);

        // rotate the cube 30 degrees per second.
        const degree = 30;
        this._radiansPerSecond = MathUtils.degToRad(degree);
    }

    tick(delta:number):void {
        this.rotation.x += this._radiansPerSecond * delta;
        this.rotation.y += this._radiansPerSecond * delta;
        this.rotation.z += this._radiansPerSecond * delta;
    }

}