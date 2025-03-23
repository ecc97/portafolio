import { IconSocialMedia } from "../Icons/iconSocialMedia"
import Link from "next/link"
export default function Footer() {
    return (
        <footer className="bg-blue-500 text-white flex flex-col p-8 items-center gap-4">
            <div className="flex flex-col gap-4 lg:flex-row w-full items-center">
                <p className="flex lg:flex-auto order-2">{new Date().getFullYear()} ©️ ecc97. Todos los derechos reservados</p>
                <div className="flex gap-4 lg:order-2">
                    <Link href="https://github.com/ecc97" target="_blank" rel="noopener noreferrer">
                        {IconSocialMedia.GithubIcon({ className: "w-8 h-8" })}
                    </Link>
                    <Link href="https://www.linkedin.com/in/edwin-carmona-c/" target="_blank" rel="noopener noreferrer">
                        {IconSocialMedia.LinkedinIcon({ className: "w-8 h-8" })}
                    </Link>
                    <Link href="https://x.com/ecckyo97" target="_blank" rel="noopener noreferrer">
                        {IconSocialMedia.TwitterIcon({ className: "w-8 h-8" })}
                    </Link>
                </div>
            </div>
        </footer>
    )
}
