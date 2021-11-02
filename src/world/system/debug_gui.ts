import "../../style/debug-gui.css";

export class DebugGUI {

    private _debugElement:HTMLDivElement;
    private _header:string;
    private _text:string;

    constructor(id="debug1") {
        this._debugElement = document.createElement("div") as HTMLDivElement;
        this._debugElement.setAttribute("id", id);
        this._header = "DebugGUI";
        this._text = "";
        document.body.appendChild(this._debugElement);
    }

    /**
     * Replaces the text of the HTML element.
     * @param text The text to be displayed.
     */
    public setText(text:string) {
        this._text = text;
        this._debugElement.innerHTML = `${this._header}<br><br>${this._text}`;
    }

    /**
     * Adds text to the HTML element.
     * @param text The text to be added to the HTML element.
     */
    public appendText(text:string) {
        const breadElement = this._text === "" ? "" : "<br>"
        this.setText(`${this._text}${breadElement}${text}`);
    }

}