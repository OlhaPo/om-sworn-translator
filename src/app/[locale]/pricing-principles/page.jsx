import Image from 'next/image';
import { useTranslations } from 'next-intl';

import usePricingPrinciplesData from '@/hooks/usePricingPrinciplesData';

export default function PricingPrinciplesPage() {
  const t = useTranslations('PricingPrinciples');
  const principles = usePricingPrinciplesData();
  return (
    <div className="prices flex flex-col md:flex-row flex-grow">
      <div className="mx-auto max-w-[1200px] px-5 xs:px-8 ms:px-10 mb-20 md:mb-0">
        <h2
          className="text-[28px] md:text-5xl text-[#2D201A]  text-center tracking-widest md:tracking-custom mt-15 mb-10 md:mt-20  md:mb-15 uppercase md:normal-case font-medium md:font-light"
          style={{ fontFamily: 'var(--font-playfair-display)' }}
        >
          {t('page-title')}
        </h2>
        {principles.map((principle) => (
          <div className="flex items-start mb-6 md:mb-4" key={principle.title}>
            <span className="w-2 h-2 xs:w-3 xs:h-3 bg-[#704B40] transform rotate-45 flex-shrink-0"></span>
            <p className="-mt-2 ml-4">{principle.title}</p>
          </div>
        ))}
        <p>{t('paragraph-final')}</p>
        <div className="relative">
          <div className="border-[#615c5a] border mt-10 md:mt-20 w-[80%] xs:w-[75%] md:w-[90%]"></div>{' '}
          <Image
            src="/calculator.svg"
            width={50}
            height={50}
            alt="icon calculator"
            className="absolute -top-6 xs:-top-8 right-0 icon"
          />
        </div>
      </div>
    </div>
  );
}
