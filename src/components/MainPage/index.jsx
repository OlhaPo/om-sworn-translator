import Image from 'next/image';

export default function MainPage() {
  return (
    <section className="flex">
      <header>
        <h1>ОЛЕНА МАРЧЕНКО</h1>
        <h2>Присяжний перекладач української мови</h2>
        <p>Законність відкриває двері до можливостей</p>
      </header>
      <Image
        src="/hero-img.jpg"
        width={536}
        height={684}
        alt="image of Olena Marchenko sworn translator"
        className="custom-img-border-radius"
      />
    </section>
  );
}
