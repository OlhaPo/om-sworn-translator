import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { GiCheckMark } from 'react-icons/gi';

import useLegalizationPageData from '@/app/hooks/useLegalizationPageData';

export default function LegalizationPage() {
  const t = useTranslations('LegalizationPage');
  const { services, advantages } = useLegalizationPageData();
  return (
    <div className="legalization flex flex-col md:flex-row flex-grow">
      <div className="mx-auto md:max-w-[1200px] my-15 md:my-20">
        <div className="md:max-h-[400px]">
          <Image
            src="/sworn-translator-stamp.jpg"
            width={1200}
            height={800}
            alt="sworn translator stamp"
            className="md:w-full md:h-[400px] object-cover object-right-bottom md:rounded-xl"
            priority
          />
        </div>
        <h2
          className="text-[24px] md:text-5xl 3xl:text-5xl text-[#704B40] text-center tracking-wide md:tracking-custom my-10 md:my-15 uppercase md:normal-case font-medium md:font-light px-8 md:px-0"
          style={{ fontFamily: 'var(--font-playfair-display)' }}
        >
          {t('page-title')}
        </h2>
        <p className="pb-10 px-8 md:px-0">{t('paragraph-1')}</p>
        <p className="pb-10 px-8 md:px-0">{t('paragraph-2')}</p>
        <div className="px-10 md:px-15">
          {services.map((service) => (
            <div className="flex mb-8 items-center" key={service.title}>
              <span className="legalization-page-icon">{service.icon}</span>
              <p className="pl-10">{service.title}</p>
            </div>
          ))}
        </div>
        <h3
          className="text-[#704B40] uppercase font-semibold text-center md:text-left text-2xl md:text-3xl py-6 tracking-widest px-8 md:px-0"
          style={{ fontFamily: 'var(--font-playfair-display)' }}
        >
          {t('advantages-title')}
        </h3>
        <ul className="px-8 md:px-0">
          {advantages.map((advantage) => (
            <li className="flex items-center mb-3" key={advantage.title}>
              <span className="pr-4">
                <GiCheckMark size={20} color="#704B40" />
              </span>
              {advantage.title}
            </li>
          ))}
        </ul>
        <p className="pt-10 px-8 md:px-0">{t('paragraph-3')}</p>
      </div>
    </div>
  );
}
