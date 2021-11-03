import { DoubleSide, Mesh, MeshStandardMaterial, PlaneGeometry } from "three";

export class MoPlane extends Mesh {

    constructor() {
        super();

        const width = 50;
        const height = 50;
        const geometry = new PlaneGeometry( width, height );
        const material = new MeshStandardMaterial( {color: "black"} );
        material.side = DoubleSide;

        this.geometry = geometry;
        this.material = material;

        this.rotation.x = -90 * Math.PI / 180;
        this.position.set(0, 0, 0);
    }

}