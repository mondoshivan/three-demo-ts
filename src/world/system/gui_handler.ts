import { GUI } from "three/examples/jsm/libs/dat.gui.module";

/**
 * Adds a simple and easy configurable GUI,
 * which offers sliders for manipulating object parameters.
 */
export class GUI_Handler {

    private _gui:GUI;

    constructor() {
        this._gui = new GUI();
    }

    /**
    * @param name  The group name of the parameter.
    * @param target The object wich offers properties which can be controlled.
    * @param propName The property name which will be controlled.
    * @param min The minimum value of the parameter.
    * @param max The maximum value of the parameter.
    */
    public addParameter(name:string, target:Object, propName:string, min?:number, max?:number) {
        
        // Checking if the folder already exists
        let folder = this._gui.__folders[name];
        let folderExisted = true; // default

        if(folder === undefined) {
        
            // the folder does not exist.
            folderExisted = false;
            
            // creating a new folder for the GUI.
            folder = this._gui.addFolder(name);
        }

        // adding a parameter.
        folder.add(target, propName, min, max);

        // if the folder existed?
        if (!folderExisted) {
            
            // activate the folder.
            folder.open();
 
        }
    }
}