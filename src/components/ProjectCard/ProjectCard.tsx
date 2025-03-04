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
        <article className={`max-w-sm rounded-lg overflow-hidden bg-gray-800 text-white transition-all duration-300 transform hover:scale-105 ${styles.cardProject}`}>
            <div className='relative h-48'>
                <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    className="rounded-t-lg transition-transform duration-700 hover:scale-110"
                    priority
                />
                <div className='absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60'></div>
            </div>
            <div className='px-6 py-4'>
                <h2 className='font-bold text-xl mb-2 text-indigo-300'>{project.title}</h2>
                <p className='text-gray-300 text-base'>{project.description}</p>
            </div>
            <div className='px-6 pt-4 pb-6'>
                <div className='flex gap-2 mb-4'>
                    <span className='bg-indigo-900 text-indigo-200 text-xs px-2 py-1 rounded-full'>Next.js</span>
                    <span className='bg-blue-900 text-blue-200 text-xs px-2 py-1 rounded-full'>TypeScript</span>
                </div>
                <Link href={project.link} passHref target='_blank'>
                 <button className='w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:translate-y-[-3px] hover:shadow-lg'>
                    Explorar Proyecto
                 </button>
                </Link>
            </div>
        </article>
    )
}