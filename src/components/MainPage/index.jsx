import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function MainPage() {
  const t = useTranslations('HomePage');
  return (
    <section className="flex flex-col flex-wrap justify-center xl:flex-row xl:justify-between max-w-[1200px] mx-auto 2xl:max-w-[1400px] xl:px-20 2xl:px-0">
      <div className="xl:w-1/2 flex flex-col items-center md:justify-center">
        <Image
          src="/logo.svg"
          alt="logo"
          width={120}
          height={120}
          quality={75}
          priority
          className="mx-auto mt-8 md:mt-15 xl:mt-[-25px] sm:w-[170px] sm:h-[170px] 2xl:w-[195px] 2xl:h-[195px] 3xl:w-[210px] 3xl:h-[210px] md:mb-12 block order-2 md:order-1"
        />
        <h1 className="title flex flex-wrap justify-center gap-4 text-4xl ms:text-5xl sm:text-6xl 2xl:text-7xl md:mt-0 mt-6 mb-4 md:mb-5 text-[#704B40] custom-text-shadow text-center order-2 md:tracking-wide">
          {t('title-name')} {t('title-surname')}
        </h1>
        <h2 className="title text-2xl ms:text-3xl sm:text-4xl text-[#704B40] md:mb-12 text-center order-3 leading-7 ms:leading-10 md:tracking-wide">
          {t.rich('subtitle', {
            br: () => <br />,
          })}
        </h2>
        <p className="legal-quote hidden text-center xl:block xl:text-3xl 2xl:text-4xl xl:py-0 text-[#926D4C] xl:mt-2 tracking-wide order-1 md:order-4">
          &quot; {t('quote')} &quot;
        </p>
      </div>
      <div className="w-[80%] ms:w-[75%] sm:w-[70%] md:w-[55%] m-10 md:mb-20 xl:my-0 mx-auto xl:mx-0 block lg:w-[initial] xl:w-[40%] 2xl:w-[initial] 2xl:my-4">
        <Image
          src="/hero-img.jpg"
          width={536}
          height={684}
          alt="image of Olena Marchenko sworn translator"
          priority
          className="shadow-img"
          quality={75}
        />
      </div>
    </section>
  );
}
