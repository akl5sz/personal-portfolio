import { getProjects } from '@/sanity/sanity-utils'

export default async function Home() {
  
  const projects = await getProjects(); 

  //by default, pages under app are server side rendered

  
  return <div>
    {projects.map((project) => (
      <div key={project.id}>
        {project.name}
      </div>
    ))}
  </div>;
}