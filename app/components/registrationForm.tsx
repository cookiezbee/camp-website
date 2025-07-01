'use client';

import { useState, FormEvent } from 'react';

export default function RegistrationForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // отменяем стандартное поведение браузера (перезагрузку)

        const formData = {
            name: name,
            email: email,
        };
        
        console.log('Данные формы отправлены:', formData);
        alert(`Спасибо за регистрацию, ${name}! Мы свяжемся с вами по email: ${email}`);
    };

    return (
        <form onSubmit={handleSubmit} className="p-8 border rounded-lg shadow-xl w-full max-w-md bg-white">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Регистрация на смену</h2>

            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Ваше имя</label>
                <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                required // Добавим простую браузерную валидацию
                />
            </div>

            <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                required
                />
            </div>
        
            <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
                Отправить заявку
            </button>
        </form>
    );
}