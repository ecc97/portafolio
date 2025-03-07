import ContactForm from "@/components/Form/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contacto"
}

export default function ContactPage() {
    return (
        <section className="flex flex-col p-8 justify-center gap-8">
            <h1 className="text-3xl font-bold text-center">Contacto</h1>
            <ContactForm />
        </section>
    )
}
