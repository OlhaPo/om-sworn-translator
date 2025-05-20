import Image from 'next/image';

export default function MainPage() {
  return (
    <section className="flex flex-col wrap md:flex-row justify-center md:justify-between md:my-16 md:max-w-[1200px] md:mx-auto">
      <div className="md:w-1/2 flex flex-col items-center">
        <Image
          src="/logo.svg"
          alt="logo"
          width={120}
          height={120}
          className="mx-auto mt-8 md:mt-[-25px] md:w-[195px] md:h-[195px] md:mb-12 block order-2 md:order-1"
        />
        <h1
          className="text-4xl md:text-6xl md:mt-0 mt-6 mb-3 text-[#704B40] custom-text-shadow text-center order-2"
          style={{ fontFamily: 'var(--font-el-messiri)' }}
        >
          <span style={{ fontFamily: 'var(--font-ballet)' }}>O</span>лена{' '}
          <span style={{ fontFamily: 'var(--font-ballet)' }}>M</span>арченко
        </h1>
        <h2
          className="text-2xl md:text-4xl text-[#704B40] md:mb-12 text-center order-3 leading-7 md:leading-10"
          style={{ fontFamily: 'var(--font-el-messiri)' }}
        >
          присяжний перекладач <br /> української мови
        </h2>
        <p
          className="hidden md:block md:text-4xl md:py-0 text-[#926D4C] md:mt-2 tracking-wide order-1 md:order-4"
          style={{ fontFamily: 'var(--font-great-vibes)' }}
        >
          &quot; Законність відкриває двері до&nbsp;можливостей &quot;
        </p>
      </div>
      <div className="w-[80%] m-10 md:my-0 mx-auto md:mx-0 block md:w-[40%]">
        <Image
          src="/hero-img.jpg"
          width={536}
          height={684}
          alt="image of Olena Marchenko sworn translator"
          priority
          className="shadow-img"
        />
      </div>
    </section>
  );
}
