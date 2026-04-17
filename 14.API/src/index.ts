import { env } from "./config/env.ts";
import debug from 'debug';
const log = debug(`${env.PROJECT_NAME}:index`);
log("Starting API server...");

import { connectDB } from "./config/db-config.ts";

connectDB()

