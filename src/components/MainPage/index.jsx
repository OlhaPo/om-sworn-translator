import Image from 'next/image';

export default function MainPage() {
  return (
    <section className="flex flex-col">
      <div>
        <h1>ОЛЕНА МАРЧЕНКО</h1>
        <h2>Присяжний перекладач української мови</h2>
        <p>Законність відкриває двері до можливостей</p>
      </div>
      <Image
        src="/hero-img.jpg"
        width={536}
        height={684}
        alt="image of Olena Marchenko sworn translator"
        className="custom-img-border-radius"
        priority
      />
    </section>
  );
}
