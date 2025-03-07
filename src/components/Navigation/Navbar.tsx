"use client"
import React from "react";
import { NavLinkItem } from "./NavLinkItem"; 
import styles from './Navbar.module.css'

const navBarItems = [
    { path: "/", title: "Inicio" },
    { path: "/about", title: " Acerca de Mí" },
    { path: "/projects", title: "Proyectos" },
    { path: "/contact", title: "Contacto" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState<boolean>(false)

    const toggleMenu = (): void => setIsOpen(!isOpen)
    return (
        <nav className="flex justify-start gap-4 p-0 bg-blue-500 fixed w-full z-10 md:justify-center md:p-3">
            <div className={styles.mobileNav}>
                <button className={styles.menuHamburguerBtn} onClick={toggleMenu}>
                    {isOpen ? "✕" : "☰"}
                </button>
            </div>
            <aside className={`bg-blue-500 ${styles.menuOverlay} ${isOpen ? styles.open : ''}`}>
                <div className={styles.menuContent}>
                    <div className={styles.navLinks}>
                        {navBarItems.map((navItem, key) => (
                            <NavLinkItem key={key} path={navItem.path} title={navItem.title} />
                        ))}
                    </div>
                </div>
            </aside>
        </nav>
    )
}