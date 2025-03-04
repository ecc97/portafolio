export interface Project {
    title: string;
    description: string;
    linkRepo: string;
    linkDemo?: string;
    image: string; 
    badges: string[];
}

export const projects: Project[] = [
    {
        title: "Galería de imagenes",
        description: "Creación de una galería de imagenes usando Next.js y consumiendo la API de Pexels para mostrar una galería de imágenes dinámicas y filtrables",
        linkRepo: "https://github.com/ecc97/visionPx",
        linkDemo: "https://vision-px.vercel.app",
        image: "/assets/img/projects-web.png",
        badges: ["Next.js", "TypeScript", "Tailwind", "Sass"],
    },
    {
        title: "Login/Register Auth",
        description: "Creación de un sistema de autenticación con nextauth y firebase, que permite a los usuarios registrarse, iniciar sesión y acceder a una página de perfil protegida",    
        linkRepo: "https://github.com/ecc97/auth-basic-next-firebase",
        linkDemo: "https://auth-basic-next-firebase.vercel.app",
        image: "/assets/img/projects-web.png", 
        badges: ["Next.js", "React", "Sass", "Firebase", "NextAuth"],
    },
    {
        title: "Next.js Prisma CRUD de Notas",
        description: "Creación de un CRUD de notas usando Next.js, Prisma y TypeScript",
        linkRepo: "https://github.com/ecc97/nextjs-prisma-crud",
        linkDemo: "https://nextjs-prisma-crud-tan.vercel.app",
        image: "/assets/img/projects-web.png",
        badges: ["Next.js", "React", "Tailwind", "Prisma", "Supabase"],
    },
    {
        title: "Api de DB",
        description: "Integración de una API, que obtiene una lista de personajes, usando TypeScript y permite navegación por paginación",
        linkRepo: "https://github.com/ecc97/api-db",
        linkDemo: "https://api-db-a324.netlify.app",
        image: "/assets/img/projects-web.png", 
        badges: ["TypeScript", "CSS", "JavaScript", "Api Fetch"],
    },
    {
        title: "Tienda de carrito de productos",
        description: "Este es un proyecto de un store de productos con carrito de compras usando NextJs y TypeScript, adicionando NextAuth y Redux",
        linkRepo: "https://github.com/ecc97/ecommerce-shop-cart",
        linkDemo: "https://ecommerce-shop-cart.vercel.app",
        image: "/assets/img/projects-web.png", 
        badges: ["Next.js", "React", "TypeScript", "NextAuth", "Redux"],
    },
    {
        title: "Lista de tareas",
        description: "Un proyecto práctico con Next.js y Typescript, que permite crear y leer tareas, con opción de completado y pendiente",
        linkRepo: "https://github.com/ecc97/to-do-nextjs-pra",
        linkDemo: "",
        image: "/assets/img/projects-web.png", 
        badges: ["Next.js", "React", "TypeScript", "Tailwind", "Sass"],
    },
    {
        title: "siekGPT",
        description: "Proyecto en conjunto de una aplicación web permite a los usuarios interactuar con el modelo GPT de OpenAI",
        linkRepo: "https://github.com/sebas1913/api-openai",
        linkDemo: "https://api-openai.vercel.app/",
        image: "/assets/img/projects-web.png",
        badges: ["Next.js", "TypeScript", "Prisma", "OpenAI API"],
    }
];