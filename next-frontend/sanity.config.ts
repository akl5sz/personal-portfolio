import { defineConfig } from 'sanity';
import { deskTool } from "sanity/desk";
import project from './sanity/schemas/project-schemas';

const config = defineConfig({
    projectId: "7fjdr0vo",
    dataset: "production",
    title: "My Portfolio Website",
    apiVersion: "2025-06-27",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: [project]  }
});

export default config;