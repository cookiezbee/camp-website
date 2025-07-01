'use client'; // Этот компонент — Клиентский

import { useState } from 'react';

export default function InteractiveCounter() {
    const [count, setCount] = useState(0);

    // Функция, которая будет вызываться при клике на кнопку
    const handleIncrement = () => {
    // Мы используем функцию setCount, чтобы обновить состояние
        setCount(count + 1);
    };

    return (
        <div className="p-6 border rounded-lg shadow-md text-center">
            <p className="text-xl">Текущий счет: <span className="font-bold text-2xl">{count}</span></p>
            
            <button onClick={handleIncrement} className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Увеличить
            </button>
        </div>
    );
}