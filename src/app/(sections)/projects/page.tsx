import { projects } from "@/utils/projects"
import ProjectCard from "@/components/ProjectCard/ProjectCard"

export default function ProjectsPage() {
    return (
        <section className="flex flex-col p-9 gap-7">
            <h1 className="text-4xl font-bold text-center">Proyectos</h1>
            <div className="flex flex-wrap justify-around gap-4">
                {projects.map((project, key) => (
                    <ProjectCard key={key} project={project} />
                ))}
            </div>
        </section>
    )
}
