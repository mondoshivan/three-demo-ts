import {
    WebGLRenderer
  } from "three"

export class Renderer {

    private _webGLRenderer:WebGLRenderer

    constructor() {
        this._webGLRenderer = new WebGLRenderer({ antialias: true });
        
        // turn on the physically correct lighting model
        this._webGLRenderer.physicallyCorrectLights = true;
    }

    public get webGLRenderer() {
        return this._webGLRenderer;
    }

  }