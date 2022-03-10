import React from 'react'
import { ContactForm } from './ContactForm';
import { ContactItem } from './ContactItem'

export const Contact = () => {

    const contacts = [
        {
            name: 'Encúentrame',
            icon: 'fa-solid fa-location-dot',
            description: 'Bogotá, Colombia',
        },
        {
            name: 'Llámame',
            icon: 'fa-solid fa-phone',
            description: '+57 3115413369',
        },
        {
            name: 'Entrar en línea',
            icon: 'fa-solid fa-envelope',
            description: 'julian1918@hotmail.es',
        },
    ];

    return (
        <section className="d-flex flex-column justify-content-center align-items-center bg-primary text-white py-5" id="contact">
            <h2 className="text-center pb-4">Contáctame</h2>
            <div className="container px-4">
                <div className="row d-flex justify-content-center pb-4">
                    {
                        contacts.map(item => (
                            <ContactItem
                                key={item.name}
                                {...item}
                            />
                        ))
                    }
                </div>
                <ContactForm />
            </div>
        </section>
    )
}
