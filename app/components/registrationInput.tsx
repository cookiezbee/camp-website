'use client';

import { useState } from 'react';

export default function RegistrationInput() {
    const [name, setName] = useState('');

    return (
        <div className="p-6 border rounded-lg shadow-md w-full max-w-sm">
            <label htmlFor="nameInput" className="block text-sm font-medium text-gray-700 mb-1">
                Введите ваше имя:
            </label>
            
            <input id="nameInput" type="text" placeholder="Например, Алиса"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            value={name}
            onChange={(event) => setName(event.target.value)}
            />

            <div className="mt-4 p-4 bg-gray-50 rounded">
                <p className="text-sm text-gray-500">Текущее значение в `state`:</p>
                <p className="text-lg font-semibold text-blue-600">{name}</p>
            </div>
        </div>
    );
}