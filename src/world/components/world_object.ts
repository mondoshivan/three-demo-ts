import { Mesh } from "three";

export abstract class WorldObject {

    protected abstract _mesh: Mesh;

    public get mesh():Mesh {
        return this._mesh;
    }

}