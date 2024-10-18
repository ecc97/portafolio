"use client"
import React from 'react'
import { RiJavascriptFill, RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { BiLogoTypescript } from "react-icons/bi";
import { FaFigma, FaGitAlt, FaReact } from "react-icons/fa";
import styles from './skills.module.css'

const skills = [
    { icon: <RiNextjsFill className="h-12 w-12" />, text: 'Next.js' },
    { icon: <BiLogoTypescript className="h-12 w-12" />, text: 'Typescript' },
    { icon: <RiJavascriptFill className="h-12 w-12" />, text: 'JavaScript' },
    { icon: <FaReact className="h-12 w-12" />, text: 'React' },
    { icon: <RiTailwindCssFill className="h-12 w-12" />, text: 'Tailwind CSS' },
    { icon: <FaGitAlt className="h-12 w-12" />, text: 'Git' },
    { icon: <FaFigma className="h-12 w-12" />, text: 'Figma' },
];

const ListSkillsTech = () => {
    return (
        <ul className="flex flex-wrap p-4 gap-4 justify-center">
            {skills.map((skill, index) => (
                <li key={index} className={`flex flex-col justify-center items-center ${styles.skillItem}`}>
                    {skill.icon}
                    <span>{skill.text}</span>
                </li>
            ))}
        </ul>
    );
}

export default ListSkillsTech
