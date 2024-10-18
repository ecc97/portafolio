export interface Project {
    title: string;
    description: string;
    link: string;
    image: string; 
}

export const projects: Project[] = [
    {
        title: "Tienda de carrito de productos",
        description: "Este es un proyecto de un store de productos usando NextJs y TypeScript, adicionando NextAuth y Redux",
        link: "https://github.com/ecc97/prueba-next",
        image: "/assets/img/projects-web.png", 
    },
    {
        title: "Lista de tareas",
        description: "Un proyecto práctico con Next.js y Typescript, que permite crear y leer tareas, con opción de completado y pendiente",
        link: "https://github.com/ecc97/to-do-nextjs-pra",
        image: "/assets/img/projects-web.png", 
    },
    {
        title: "Api de DB",
        description: "Integración de una API, que obtiene una lista de personajes, usando TypeScript y permite navegación por paginación",
        link: "https://github.com/ecc97/api-db",
        image: "/assets/img/projects-web.png", 
    },
];