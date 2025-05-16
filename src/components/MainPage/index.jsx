import Image from 'next/image';

export default function MainPage() {
  return (
    <section className="flex flex-col wrap md:flex-row justify-center md:justify-between md:my-16 md:max-w-[1200px] md:mx-auto">
      <div className="md:w-1/2 flex flex-col items-center">
        <Image
          src="/logo.svg"
          alt="logo"
          width={180}
          height={180}
          className="mx-auto my-12 md:mb-12 block order-2 md:order-1"
        />
        <h1
          className="text-5xl md:text-6xl md:mt-0 mb-5 text-[#704B40] text-shadow-lg text-center order-2"
          style={{ fontFamily: 'var(--font-el-messiri)' }}
        >
          <span style={{ fontFamily: 'var(--font-ballet)' }}>O</span>лена{' '}
          <span style={{ fontFamily: 'var(--font-ballet)' }}>M</span>арченко
        </h1>
        <h2
          className="text-3xl md:text-4xl text-[#704B40] md:mb-12 text-center order-3"
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
      <div className="w-[80%] my-14 md:my-0 mx-auto md:mx-0 block md:w-[40%]">
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
