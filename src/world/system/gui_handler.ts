import { GUI } from "three/examples/jsm/libs/dat.gui.module";

export class GUI_Handler {

    private _gui:GUI;

    constructor() {
        this._gui = new GUI();
    }

    public addParameter(name:string, target:Object, propName:string, min?:number, max?:number) {
        let folder = this._gui.__folders[name];

        if(folder === undefined) {
            folder = this._gui.addFolder(name);
        }

        folder.add(target, propName, min, max);
        folder.open();
    }
}