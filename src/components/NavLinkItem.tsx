"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface MenuItemProps {
    path: string,
    title: string,
}

export const NavLinkItem: React.FC<MenuItemProps> = ({ path, title }) => {
    const currentPath = usePathname()
    return (
        <Link href={path} className={`hover:text-slate-950 ${currentPath === path && "underline"}`}>{title}</Link>
    )
}
