import Image from 'next/image';

export default function MainPage() {
  return (
    <section className="flex flex-col md:flex-row justify-center md:justify-between md:my-16 md:max-w-[1200px] md:mx-auto">
      <div className="md:w-1/2 text-center">
        <Image
          src="/logo.svg"
          alt="logo"
          width={180}
          height={180}
          className="mx-auto md:mb-12 hidden md:block"
        />
        <h1
          className="text-5xl md:text-6xl mt-20 md:mt-0 mb-2 md:mb-5 text-[#704B40] text-shadow-lg"
          style={{ fontFamily: 'var(--font-el-messiri)' }}
        >
          <span style={{ fontFamily: 'var(--font-ballet)' }}>O</span>лена{' '}
          <span style={{ fontFamily: 'var(--font-ballet)' }}>M</span>арченко
        </h1>
        <h2
          className="text-3xl md:text-4xl text-[#704B40] mb-3 md:mb-12 "
          style={{ fontFamily: 'var(--font-el-messiri)' }}
        >
          присяжний перекладач <br /> української мови
        </h2>
        <div className="w-full md:hidden">
          <Image
            src="/hero-img.jpg"
            width={536}
            height={684}
            alt="image of Olena Marchenko sworn translator"
            priority
            className="shadow-img"
          />
        </div>
        <p
          className="text-4xl mb-10 md:mb-0 text-[#926D4C] mt-16 tracking-wide"
          style={{ fontFamily: 'var(--font-great-vibes)' }}
        >
          &quot; Законність відкриває двері до&nbsp;можливостей &quot;
        </p>
      </div>
      <div className="hidden md:block md:w-[40%]">
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
