import  Stats  from "three/examples/jsm/libs/stats.module";
import { Updateable } from "../interfaces/updateable";

export class Statistics implements Updateable {

    private _stats:Stats;

    constructor(container:HTMLElement) {
        this._stats = Stats();
        container.appendChild(this._stats.dom);
    }

    tick(delta: number): void {
        this._stats.update();
    }

}
