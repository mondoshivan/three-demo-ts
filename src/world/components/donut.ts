import { Mesh } from "three";
import { GLTF_Model } from "./gltf_model";

export class Donut extends GLTF_Model {

    constructor(model: string) {
        super(model);
    }

    public async init() {
        await super.init();

        this._root.position.y = 0.5;
        
        this._root.traverse((child) => {
            if ((child as Mesh).isMesh) {
                const m = child as Mesh;
                m.receiveShadow = true;
                m.castShadow = true;
            }

        });
    }

}