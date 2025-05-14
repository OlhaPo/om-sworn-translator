import Image from 'next/image';

export default function MainPage() {
  return (
    <section className="flex justify-between my-16 max-w-[1200px] mx-auto">
      <div className="w-1/2 text-center">
        <Image
          src="/logo.svg"
          alt="logo"
          width={180}
          height={180}
          className="mx-auto mb-12"
        />
        <h1
          className="text-6xl mb-5 text-[#704B40] text-shadow-lg"
          style={{ fontFamily: 'var(--font-el-messiri)' }}
        >
          <span style={{ fontFamily: 'var(--font-ballet)' }}>O</span>лена{' '}
          <span style={{ fontFamily: 'var(--font-ballet)' }}>M</span>арченко
        </h1>
        <h2
          className="text-4xl text-[#704B40] mb-12 "
          style={{ fontFamily: 'var(--font-el-messiri)' }}
        >
          присяжний перекладач <br /> української мови
        </h2>
        <p
          className="text-4xl text-[#926D4C] mt-16 tracking-wide"
          style={{ fontFamily: 'var(--font-great-vibes)' }}
        >
          &quot; Законність відкриває двері до можливостей &quot;
        </p>
      </div>
      <div className="w-[40%]">
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
