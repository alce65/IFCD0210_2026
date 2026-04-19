import { Router } from "express";
import { env } from "../../config/env.ts";
import debug from 'debug';
import type { AnimalsController } from "../controllers/animals.ts";
import { validateBody, validateId } from "../../middleware/validations.ts";
import { AnimalCreateSchema, AnimalUpdateSchema } from "../entities/animal.ts";
        
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
        this._router.get('/:id', validateId(), this.controller.getAnimalById.bind(this.controller));
        this._router.post('/', validateBody(AnimalCreateSchema), this.controller.createAnimal.bind(this.controller));
        this._router.patch('/:id', validateId(), validateBody(AnimalUpdateSchema), this.controller.updateAnimal.bind(this.controller));
        this._router.delete('/:id', validateId(), this.controller.deleteAnimal.bind(this.controller));
    } 

    get router () {
        return this._router;
    }


}