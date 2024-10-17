"use client"
import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import styles from './hero.module.css'

export default function HeroSection() {
    return (
        <section className={`flex flex-col container-fluid justify-center items-center py-36 gap-2`}>
            <h1 className='text-5xl'>Edwin Carmona</h1>
            <h2 className='text-2xl'>Frontend Developer</h2>
            <img src='https://via.placeholder.com/200x200' alt='Profile Pic' className='mt-8 rounded-full' />
            <div className='flex gap-3'>
                <p className={`${styles.heroIconSocialNetwork} w-12 h-12`}>
                    <FaGithub className='w-full h-full'/>
                </p>
                <p className={`${styles.heroIconSocialNetwork} w-12 h-12`}>
                    <FaLinkedin className='w-full h-full'/>
                </p>
                <p className={`${styles.heroIconSocialNetwork} w-12 h-12`}>
                    <FaXTwitter className='w-full h-full'/>
                </p>
            </div>
            <Link href='/about' className='mt-8 text-xl font-bold rounded-xl p-3 bg-sky-700 hover:bg-sky-500 hover:shadow-lg hover:shadow-cyan-500'>
                Saber más
            </Link>
        </section>
    )
}
