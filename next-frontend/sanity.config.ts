import { defineConfig } from 'sanity';
import { deskTool } from "sanity/desk";
import schemas from './sanity/schemas';

const config = defineConfig({
    projectId: "7fjdr0vo",
    dataset: "production",
    title: "My Portfolio Website",
    apiVersion: "2025-06-27",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas}
});

export default config;