import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]>{ //we do this ": Promise<Project[]>" so we dont have to specify the alias we are using every time in a file when calling this method
    
    //client to read data from our studio
    const client = createClient({
        projectId: "7fjdr0vo",
        dataset: "production",
        apiVersion: "2025-06-27",
    });

    //groq query for projects in our db
    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
    )
}