import Link from "next/link"
export default function Footer() {
    return (
        <footer className="bg-blue-500 text-white flex flex-col p-8 items-center gap-4">
            <div className="flex gap-4">
                <Link href="https://github.com/ecc97" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub profile" />
                </Link>
                <Link href="https://www.linkedin.com/in/esteban-ca%C3%B1iza-carrillo-7507b41b8/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn profile" />
                </Link>
                <Link href="https://twitter.com/ecc97" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter profile" />
                </Link>
            </div>
            <p>2024 ©️ ecc97. Todos los derechos reservados</p>
        </footer>
    )
}
