import ProjectsCarousel from "@/components/Carrusel/ProjectCarousel"
import { getProjects } from "@/firebase/services"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Proyectos"
}

export const revalidate = 3600 

export default async function ProjectsPage() {
    const projects = await getProjects();
    
    return (
        <section className="flex flex-col p-9 gap-7">
            <h1 className="text-4xl font-bold text-center">Proyectos</h1>
            <ProjectsCarousel projects={projects} />
        </section>
    )
}
