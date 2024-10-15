import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
    return (
        <section className="flex flex-col p-8 justify-center gap-8 h-screen">
            <h1 className="text-3xl font-bold text-center">Contacto</h1>
            <ContactForm />
        </section>
    )
}
