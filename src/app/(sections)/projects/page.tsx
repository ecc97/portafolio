import { projects } from "@/utils/projects"
import ProjectsCarousel from "@/components/Carrusel/ProjectCarousel"

export default function ProjectsPage() {
    return (
        <section className="flex flex-col p-9 gap-7">
            <h1 className="text-4xl font-bold text-center">Proyectos</h1>
            <ProjectsCarousel projects={projects} />
        </section>
    )
}
