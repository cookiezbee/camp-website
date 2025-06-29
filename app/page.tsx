import Header from './components/header';
import Footer from './components/footer';
import Button from './components/button';

export default function Home() {
  return (
    <>
      <Header title="Летний IT-лагерь для школьников"/>

      <main className="flex flex-col items-center p-12 gap-8">
        <img src="/vercel.svg" alt="Логотип" width={200} height={100}/>

        <p className="text-lg text-gray-700 max-w-2xl text-center">
          Погрузись в мир веб-разработки! Мы научим тебя создавать современные сайты с нуля, используя самые востребованные технологии.
        </p>

        <div className="flex gap-4">
          <Button text="Записаться на смену"/>
          <Button text="Узнать больше"/>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Что тебя ждет:</h2>
          <ul className="list-disc list-inside">
            <li>Основы HTML, CSS и JavaScript</li>
            <li>Глубокое погружение в React и Next.js</li>
            <li>Работа с базами данных и API</li>
            <li>Создание и запуск собственного проекта</li>
          </ul>
        </div>
      </main>

      <Footer/>
    </>
  );
}