import { Group } from "three";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


export class GLTF_Model {

    private _model: string;
    
    protected _root: Group;

    protected static gltfLoader: GLTFLoader = new GLTFLoader();

    constructor(model: string) {
        this._model = model;
        this._root = new Group();
    }

    public get root(): Group {
        return this._root;
    }

    public async init() {
        const gltf: GLTF = await GLTF_Model.gltfLoader.loadAsync(this._model);
        this._root = gltf.scene;  
    }

}