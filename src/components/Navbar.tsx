"use client"
import { NavLinkItem } from "./NavLinkItem"

const navBarItems = [
    {path: "/", title: "Inicio"},
    { path: "/about", title: " Acerca de Mí" },
    { path: "/projects", title: "Proyectos" },
    { path: "/contact", title: "Contacto" },
  ];

export default function Navbar() {
    return (
        <nav className="flex justify-center gap-4 p-5 bg-blue-500 fixed w-full">
            {navBarItems.map((navItem, key) => (
                <NavLinkItem key={key} path={navItem.path} title={navItem.title}/>
            ))}
        </nav>
    )
}