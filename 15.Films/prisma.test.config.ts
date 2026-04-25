import { config } from "dotenv";
import { defineConfig, env } from "prisma/config";

config({ path: ".env.test" });

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "node --env-file=.env.test ./src/config/db-test.seed.ts",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});
