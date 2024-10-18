"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import styles from './hero.module.css'

export default function HeroSection() {
    return (
        <section className={`flex flex-col container-fluid justify-center items-center py-36 gap-2`}>
            <h1 className='text-5xl'>Edwin Carmona</h1>
            <h2 className='text-2xl'>Frontend Developer</h2>
            <Image src='https://w0.peakpx.com/wallpaper/165/445/HD-wallpaper-neon-mask-hacker-hackers-lonely-hacker-neon-mask-thumbnail.jpg' alt='Avatar Picture' className={`mt-8 rounded-full ${styles.imgAvatar}`} width={200} height={200} />
            <div className='flex gap-3'>
                <p className={`${styles.heroIconSocialNetwork} w-12 h-12`}>
                    <a href='https://github.com/ecc97' target='_blank'>
                        <FaGithub className='w-full h-full'/>
                    </a>
                </p>
                <p className={`${styles.heroIconSocialNetwork} w-12 h-12`}>
                    <Link href='https://www.linkedin.com/in/edwin-carmona-c/' target='_blank'>
                        <FaLinkedin className='w-full h-full'/>
                    </Link>
                </p>
                <p className={`${styles.heroIconSocialNetwork} w-12 h-12`}>
                    <Link href='https://x.com/ecckyo97' target='_blank'>
                        <FaXTwitter className='w-full h-full'/>
                    </Link>
                </p>
            </div>
            <Link href='/about' className='mt-8 text-xl font-bold rounded-xl p-3 bg-sky-700 hover:bg-sky-500 hover:shadow-lg hover:shadow-cyan-500'>
                Saber más
            </Link>
        </section>
    )
}
