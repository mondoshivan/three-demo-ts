import { DoubleSide, Mesh, MeshStandardMaterial, PlaneGeometry } from "three";
import { WorldObject } from "./world_object"

export class Plane extends WorldObject {

    protected _mesh: Mesh;

    constructor() {
        super();

        const width = 50;
        const height = 50;
        const geometry = new PlaneGeometry( width, height );
        const material = new MeshStandardMaterial( {color: "black"} );
        material.side = DoubleSide;
        this._mesh = new Mesh( geometry, material );
        this._mesh.rotation.x = -90 * Math.PI / 180;
        this._mesh.position.set(0, 0, 0);
    }

}