import {
    WebGLRenderer
  } from "three"

export class Renderer {

    private _webGLRenderer:WebGLRenderer

    constructor() {
        const options = {
          // for higher fps on mobile devices, this could be switched off: 
          // https://discoverthreejs.com/book/first-steps/responsive-design/
          antialias: true
        };
        this._webGLRenderer = new WebGLRenderer(options);
        
        // turn on the physically correct lighting model
        this._webGLRenderer.physicallyCorrectLights = true;
    }

    public get webGLRenderer() {
        return this._webGLRenderer;
    }

  }