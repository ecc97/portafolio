import * as React from 'react';

interface EmailTemplateProps {
    name: string;
    email: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name,
    email,
    message,
}) => (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
        <h2 style={{ color: '#333', fontSize: '24px' }}>Nuevo mensaje de contacto</h2>
        <hr style={{ borderTop: '1px solid #eee', margin: '20px 0' }} />
        <p><strong>Nombre:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <div>
            <p><strong>Mensaje:</strong></p>
            <p style={{
                backgroundColor: '#f5f5f5',
                padding: '15px',
                borderRadius: '4px',
                whiteSpace: 'pre-wrap'
            }}>
                {message}
            </p>
        </div>
    </div>
);