import ListSkillsTech from "@/components/Skills/ListSkillsTech";
import { Metadata } from "next";
import styles from '@/app/styles/about.module.css'

export const metadata: Metadata = {
  title: "Acerca de mi"
}

export default function AboutPage() {
  return (
      <section className={`${styles.aboutContainer} flex flex-col justify-center items-center w-full px-8 py-16 md:flex-row md:justify-between md:py-36`}>
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-3xl font-bold">Acerca de mi</h2>
          <p className="text-lg mb-4">Soy un programador enfocado en el desarrollo web frontend, actualmente me encuentro en adquirir experiencia trabajando con tecnologías modernas que se ajusten a los problemas en el mundo real.</p>
          <p className="text-lg mb-4">Soy una persona curiosa y apasionada por la tecnología, en la que pueda aportar lo más posible en crear sitios y apps web intuitivas e interactivas, también focalizado al aspecto visual bien diseñado que pueda brindar una excelente experiencia de usuario.</p>
          <p className="text-lg mb-4">Constantemente me esfuerzo en ampliar mis conocimientos y comprender conceptos que antes eran desconocidos para mí. Buscando maneras que pueda adaptarse a las necesidades de mis capacidades estimulantes, aplicando mis conocimientos a la práctica, también a la mejora continua.</p>
          <div className="flex flex-col gap-4 w-full">
            <h3 className="text-xl italic text-center">Algunas Tecnologías clave</h3>
            <ListSkillsTech />
            <h3 className="text-xl italic text-center">Mis habilidades y conocimientos</h3>
            <article className="flex md:flex-row flex-col gap-4 w-full justify-evenly items-center">
              <ul className={`${styles.ul} list-disc list-inside text-lg`}>
                <li>Desarrollo de sitios web.</li>
                <li>Desarrollo de landing pages.</li>
                <li>Desarrollo de componentes reutilizables.</li>
                <li>Desarrollo de sitios web responsive.</li>
                <li>Desarrollo de sitios web con el framework Next.js.</li>
                <li>Desarrollo de sitios web con el framework React.</li>
              </ul>
              <ul className={`${styles.ul} list-disc list-inside text-lg`}>
                <li>Trabajo en equipo.</li>
                <li>Comunicación efectiva.</li>
                <li>Resolución de problemas.</li>
                <li>Adaptabilidad.</li>
                <li>Flexibilidad.</li>
                <li>Creatividad.</li>
                <li>Pensamiento lógico.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>
  );
}
