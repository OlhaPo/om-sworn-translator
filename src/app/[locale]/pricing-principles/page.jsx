import Image from 'next/image';
import { useTranslations } from 'next-intl';

import usePricingPrinciplesData from '@/hooks/usePricingPrinciplesData';

export default function PricingPrinciplesPage() {
  const t = useTranslations('PricingPrinciples');
  const principles = usePricingPrinciplesData();
  return (
    <div className="prices flex flex-col md:flex-row flex-grow items-center">
      <div className="mx-auto max-w-[1200px] 2xl:max-w-[1400px] px-5 xs:px-8 ms:px-10 sm:px-15 md:px-20 2xl:px-0 mb-20 2xl:mb-0">
        <h2 className="title text-[28px] md:text-5xl text-[#2D201A] text-center tracking-widest md:tracking-custom mt-15 mb-10 md:mt-20 md:mb-15 uppercase md:normal-case font-medium md:font-light">
          {t('page-title')}
        </h2>
        {principles.map((principle) => (
          <div
            className="flex items-start mb-6 md:mb-4 3xl:mb-8"
            key={principle.title}
          >
            <span className="w-2 h-2 xs:w-3 xs:h-3 bg-[#704B40] transform rotate-45 flex-shrink-0"></span>
            <p className="-mt-2 ml-4">{principle.title}</p>
          </div>
        ))}
        <p>{t('paragraph-final')}</p>
        <div className="relative">
          <div className="border-[#615c5a] border mt-10 md:mt-20 w-[80%] xs:w-[75%] md:w-[85%] lg:w-[90%]"></div>{' '}
          <Image
            src="/calculator.svg"
            width={50}
            height={50}
            alt="icon calculator"
            className="absolute -top-6 xs:-top-8 right-0 icon"
            quality={75}
          />
        </div>
      </div>
    </div>
  );
}
