import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function MainPage() {
  const t = useTranslations('HomePage');
  return (
    <section className="flex flex-col flex-wrap justify-center md:flex-row md:justify-between max-w-[1200px] mx-auto 2xl:max-w-[1400px]">
      <div className="md:w-1/2 flex flex-col items-center 2xl:justify-center">
        <Image
          src="/logo.svg"
          alt="logo"
          width={120}
          height={120}
          className="mx-auto mt-8 md:mt-[-25px] md:w-[195px] md:h-[195px] 3xl:w-[210px] 3xl:h-[210px] md:mb-12 block order-2 md:order-1"
        />
        <h1
          className="flex flex-wrap justify-center gap-4 text-4xl md:text-6xl 2xl:text-7xl md:mt-0 mt-6 mb-3 text-[#704B40] custom-text-shadow text-center order-2"
          style={{ fontFamily: 'var(--font-el-messiri)' }}
        >
          {t('title-name')} {t('title-surname')}
        </h1>
        <h2
          className="text-2xl md:text-4xl text-[#704B40] md:mb-12 text-center order-3 leading-7 md:leading-10"
          style={{ fontFamily: 'var(--font-el-messiri)' }}
        >
          {t.rich('subtitle', {
            br: () => <br />,
          })}
        </h2>
        <p className="legal-quote hidden md:block md:text-4xl md:py-0 text-[#926D4C] md:mt-2 tracking-wide order-1 md:order-4">
          &quot; {t('quote')} &quot;
        </p>
      </div>
      <div className="w-[80%] m-10 md:my-0 mx-auto md:mx-0 block md:w-[40%] 2xl:w-[initial] 2xl:my-4">
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
