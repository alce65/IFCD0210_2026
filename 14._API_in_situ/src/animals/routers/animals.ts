import { Router } from "express";
import { env } from "../../config/env.ts";
import debug from 'debug';
import type { AnimalsController } from "../controllers/animals.ts";
        
const log = debug(`${env.PROJECT_NAME}:router:animal`);
log ("Loading animal router...");
        
export class AnimalsRouter {
    private _router: Router;
    private controller: AnimalsController
    constructor(controller: AnimalsController) {
        log("Starting animal router...");
        this.controller = controller;
        this._router = Router();

        this._router.get('/', this.controller.getAllAnimals.bind(this.controller));
        this._router.get('/:id', this.controller.getAnimalById.bind(this.controller));
        this._router.post('/', this.controller.createAnimal.bind(this.controller));
        this._router.patch('/:id', this.controller.updateAnimal.bind(this.controller));
        this._router.delete('/:id', this.controller.deleteAnimal.bind(this.controller));
    } 

    get router () {
        return this._router;
    }


}
