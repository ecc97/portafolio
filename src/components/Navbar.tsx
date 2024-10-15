import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-center gap-4 p-5 bg-blue-500 fixed w-full">
            <Link href="/">
                Home
            </Link>
            <Link href="/about">
                About
            </Link>
            <Link href="/projects">
                Projects
            </Link>
            <Link href="/contact">
                Contact
            </Link>
        </nav>
    )
}
