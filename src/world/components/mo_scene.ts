import { AxesHelper, Color, Scene } from "three";


export class MoScene extends Scene {

    constructor() {
        super();

        this.background = new Color("skyblue");
        this.add(new AxesHelper());
    }

}