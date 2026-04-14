import debug from "debug";
import { env } from "./config/env.ts";
import   { connectDB } from "./config/db.ts";

const log = debug(`${env.PROJECT_NAME}:index`);
log("Starting application...");     
connectDB()
