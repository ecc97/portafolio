import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/utils/projects'
import styles from './project.module.css'

interface ProjectCardProps {
    project: Project
}

export default function ProjectCard({project}: ProjectCardProps):React.ReactElement<ProjectCardProps>{
    return (
        <article className={`max-w-sm rounded-lg overflow-hidden bg-gray-800 text-white ${styles.cardProject}`}>
            <div className='relative h-48'>
                <Image src={project.image} alt={project.title} layout='fill' objectFit='cover' className="rounded-t-lg"/>
            </div>
            <div className='px-6 py-4'>
                <h2 className='font-bold text-xl mb-2'>{project.title}</h2>
                <p className='text-gray-300 text-base'>{project.description}</p>
            </div>
            <div className='px-6 pt-4 pb-6'>
                <Link href={project.link} passHref target='_blank'>
                 <button className='w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
                    Explorar
                 </button>
                </Link>
            </div>
        </article>
    )
}