import { Router } from "express";
import type { Pool } from "pg";
import { env } from "../.././config/env.ts";
import debug from 'debug';


export const animalRouter = (pool: Pool) => {
    const log = debug(`${env.PROJECT_NAME}:router:animal`);
    log("Starting animal router...");

    const router = Router();
    log(pool.ending);

    router.get('/', async (_req, res) => {
        // Aquí puedes realizar la consulta 
        // a la base de datos utilizando el pool
        return res.json({
            message: 'List of animals',
        });
    });

    router.get('/:id', async (req, res) => {
        const { id } = req.params;
        // Aquí puedes realizar la consulta a la base de datos utilizando el pool
        return res.json({
            message: `Details of animal with ID ${id}`,
        });
    });

    return router;
};
