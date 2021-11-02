import { Mesh, Scene } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import DonutGLB from "../models/donut.glb";

export class Donut {

    private _gltfLoader: GLTFLoader;

    constructor(scene:Scene) {
        this._gltfLoader = new GLTFLoader();
        this._gltfLoader.load(DonutGLB, (gltf) => {
            gltf.scene.traverse((child) => {
                if ((child as Mesh).isMesh) {
                    const m = child as Mesh;
                    m.receiveShadow = true;
                    m.castShadow = true;
                }
            });

            gltf.scene.position.y = 1;

            scene.add(gltf.scene);
        });
    }

}