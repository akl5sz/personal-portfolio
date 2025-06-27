import { defineConfig } from 'sanity';
import { deskTool } from "sanity/desk";

const config = defineConfig({
    projectId: "7fjdr0vo",
    dataset: "production",
    title: "My Portfolio Website",
    apiVersion: "2025-06-27",
    basePath: "/admin",
    plugins: [deskTool()],
})

export default config;