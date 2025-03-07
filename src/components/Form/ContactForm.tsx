'use client';

import { useState, FormEvent } from 'react';

interface FormData {
    name: string;
    email: string;
    message: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        success?: boolean;
        message?: string;
    }>({});
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const validateForm = () => {
        const errors: { [key: string]: string } = {};
        if (!formData.name) errors.name = 'El nombre es obligatorio.';
        if (!formData.email) errors.email = 'El correo electrónico es obligatorio.';
        if (!formData.message) errors.message = 'El mensaje es obligatorio.';
        return errors;
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({});
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        };

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            if (!response.ok) {
                throw new Error('Error al enviar el formulario.');
            }
            const data = await response.json();
            console.log(data);
            
            setSubmitStatus({ success: true, message: 'Formulario enviado con éxito.' });
        } catch (error) {
            console.error(error);
            console.error(error instanceof Error ? error.message : 'Error desconocido');
            setSubmitStatus({ success: false, message: error instanceof Error ? error.message : 'Error desconocido' });
        } finally {
            setIsSubmitting(false);
            setFormData({
                name: '',
                email: '',
                message: '',
            });
            setTimeout(() => {
                setSubmitStatus({});
            }, 3000);
        }
    };

  return (
        <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-lg my-0 mx-auto">
            {submitStatus.message && (
                <div className={`mb-4 p-2 text-white ${submitStatus.success ? 'bg-green-300' : 'bg-red-300'}`}>
                    {submitStatus.message}
                </div>
            )}
            <div className="flex flex-col mb-2.5">
                <label className="mb-1.5" htmlFor="name">Nombre:</label>
                <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="p-2.5 text-black border border-cyan-50 border-solid rounded"
                />
                {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
            </div>
            <div className="flex flex-col mb-2.5">
                <label className="mb-1.5" htmlFor="email">Correo electrónico:</label>
                <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="p-2.5 text-black border border-cyan-50 border-solid rounded"
                />
                {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
            </div>
            <div className="flex flex-col mb-2.5">
                <label htmlFor="message">Mensaje:</label>
                <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="p-2.5 border text-black border-cyan-50 border-solid rounded"
                />
                {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
            </div>
            <button type="submit" disabled={isSubmitting} className="bg-blue-700 text-white p-4 border-none rounded cursor-pointer">
                {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>
        </form>
    )
}
