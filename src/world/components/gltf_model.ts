import { Group } from "three";

export abstract class GLTF_Model {

    private _path: string;
    
    protected _root: Group;

    constructor(path: string) {
        this._path = path;
        this._root = new Group();
    }

    public get path(): string {
        return this._path;
    }

    public get root(): Group {
        return this._root;
    }

    public set root(root: Group) {
        this._root = root;
    }

    public abstract init(): GLTF_Model;

}