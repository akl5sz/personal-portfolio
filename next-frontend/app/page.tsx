import { getProjects } from '@/sanity/sanity-utils'
import { Project } from '@/types/Project';

export default async function Home() {
  
  const projects = await getProjects(); 

  //by default, pages under app are server side rendered

  
  return (
    <div>
      {projects.map((project) => (
        <div key={project._id}>
          {project.name}
        </div>
      ))}
    </div>
  );
}