import ListSkillsTech from "@/components/Skills/ListSkillsTech";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Acerca de mi"
}

export default function AboutPage() {
  return (
    <section className="flex flex-col justify-center items-center w-full px-8 py-16 md:flex-row md:justify-between md:py-36">
      <div className="w-1/2 flex flex-col items-center justify-center gap-4">
        <h2 className=" text-2xl">Acerca de mi</h2>
        <p className="text-lg mb-4">Soy un coder enfocado en el desarrollo web frontend, actualmente me encuentro en adquirir experiencia trabajando con tecnologías modernas que se ajusten a los problemas en el mundo real.</p>
        <p className="text-lg mb-4">Soy una persona curiosa y apasionada por la tecnología, en la que pueda aportar lo más posible en crear sitios y apps web intuitivas e interactivas, también focalizado al aspecto visual bien diseñado que pueda brindar una excelente experiencia de usuario.</p>
        <p className="text-lg mb-4">Constantemente me esfuerzo en ampliar mis conocimientos y comprender conceptos que antes eran desconocidos para mí. Buscando maneras que pueda adaptarse a las necesidades de mis capacidades estimulantes, aplicando mis conocimientos a la práctica, también a la mejora continua.</p>
        <div className="flex flex-col gap-4 w-full">
          <h3 className="text-xl text-center">Algunas Skills clave</h3>
          <ListSkillsTech />
        </div>
      </div>
      <div className="w-1/2">
        <Image src='/assets/img/dev-coffee.jpg' alt="dev-front" width={350} height={350} className="hidden w-full h-full rounded-lg object-cover md:block" />
      </div>
    </section>
  );
}
