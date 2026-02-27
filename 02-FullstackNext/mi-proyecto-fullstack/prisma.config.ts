import { defineConfig } from "prisma/config";
import * as dotenv from "dotenv";

// Forzamos la carga del archivo .env.local
dotenv.config({ path: ".env.local" });

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: process.env.PRISMA_DATABASE_URL,
  },
});