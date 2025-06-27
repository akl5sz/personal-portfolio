import { createClient, groq } from "next-sanity";

export async function getProjects(){
    
    //client to read data from our studio
    const client = createClient({
        projectId: "7fjdr0vo",
        dataset: "production",
        apiVersion: "2025-06-27",
    });

    //groq query for projects in our db
    return client.fetch(
        groq`*[_type = "project"]{
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