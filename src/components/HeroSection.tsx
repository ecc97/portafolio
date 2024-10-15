import React from 'react'
import styles from './HeroSection/hero.module.css'
import Link from 'next/link'

export default function HeroSection() {
    return (
        <section className={`flex flex-col items-center justify-center p-8 h-full ${styles.heroContainer}`}>
            <h1 className='text-5xl'>Edwin Carmona</h1>
            <h2 className='text-2xl'>Frontend Developer</h2>
            <img src='https://via.placeholder.com/200x200' alt='Profile Pic' className='mt-8 rounded-full' />
            <Link href='/about' className='mt-8 text-xl font-bold'>
                Learn More
            </Link>
        </section>
    )
}
