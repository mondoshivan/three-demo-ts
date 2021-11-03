import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { GLTF_Model } from "../components/gltf_model";

export class GLTFLoaderHandler {
    
    private static gltfLoader: GLTFLoader = new GLTFLoader();

    public static async loadModel(model: string) {
        return await GLTFLoaderHandler.gltfLoader.loadAsync(model);
    }

    public static async loadModels(models: GLTF_Model[]): Promise<GLTF_Model[]> {
        const promises = models.map(model => GLTFLoaderHandler.gltfLoader.loadAsync(model.path));

        /**
         * Promise.all() will reject immediately upon any of the input promises rejecting. 
         * In comparison, the promise returned by Promise.allSettled() will wait 
         * for all input promises to complete, regardless of whether or not one rejects. 
         * Consequently, it will always return the final result of every promise and 
         * function from the input iterable.
         */
        const modelData = await Promise.all(promises);

        models.forEach((model, i) => {
            model.root = modelData[i].scene;
        });

        return models;
    }



}