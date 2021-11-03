import { BufferGeometry, Material, Mesh, Object3D } from "three";

export abstract class WorldObject {

    protected abstract _mesh: Mesh<BufferGeometry, Material | Material[]>;

    public get mesh(): Mesh {
        return this._mesh;
    }

    public get object3D(): Object3D {
        return this._mesh;
    }


}