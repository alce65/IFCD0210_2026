import { env } from '../../config/env.ts';
import debug from 'debug';
import type { UsersController } from '../controllers/users.controller.ts';
import { Router } from 'express';

const log = debug(`${env.PROJECT_NAME}:router:users`);
log('Loading users router...')


export class UsersRouter {
    #controller: UsersController;
    #router: Router;
    constructor(controller: UsersController) {
        this.#controller = controller;
        this.#router = Router();

        // Define routes and bind them to controller methods
        // For example:
        this.#router.post('/register', this.#controller.register.bind(this.#controller));
        this.#router.post('/login', this.#controller.login.bind(this.#controller));
    }

    get router() {
        return this.#router;
    }
}
