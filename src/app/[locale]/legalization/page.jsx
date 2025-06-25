import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { GiCheckMark } from 'react-icons/gi';

import CallToAction from '@/components/common/ui/CallToAction';
import useLegalizationPageData from '@/hooks/useLegalizationPageData';

export default function LegalizationPage() {
  const t = useTranslations('LegalizationPage');
  const { services, advantages } = useLegalizationPageData();
  return (
    <div className="legalization flex flex-col md:flex-row flex-grow">
      <div className="mx-auto md:max-w-[1200px] 2xl:max-w-[1400px] my-15 md:my-20">
        <Image
          src="/legalization.jpg"
          width={600}
          height={400}
          alt="legalization img passport card permission to work"
          className="mx-auto md:max-h-[400px] object-contain md:custom-shadow sm:px-5 md:px-0"
          priority
        />

        <h2 className="title text-2xl md:text-[44px] xl:text-5xl text-[#704B40] text-center tracking-wide md:tracking-custom mt-10 md:mt-15 uppercase md:normal-case font-medium md:font-light px-5 xs:px-8 ms:px-10 md:px-20 xl:px-0">
          {t('page-title')}
        </h2>
        <p>{t('paragraph-1')}</p>
        <p>{t('paragraph-2')}</p>
        <div className="px-5 xs:px-8 ms:px-10 sm:px-15 md:px-20 lg:px-25 2xl:px-5 3xl:px-10 mt-10">
          {services.map((service) => (
            <div className="flex mb-8 items-center" key={service.title}>
              <span className="legalization-page-icon">{service.icon}</span>
              <span className="pl-6 xs:pl-10">{service.title}</span>
            </div>
          ))}
        </div>
        <h3 className="title text-[#704B40] uppercase font-semibold text-center md:text-left text-xl xs:text-[22px] md:text-[28px] xl:text-3xl py-6 tracking-widest px-5 xs:px-8 ms:px-10 md:px-20 lg:px-25 2xl:px-5 3xl:px-10">
          {t('advantages-title')}
        </h3>
        <ul className="px-5 xs:px-8 ms:px-10 sm:px-15 md:px-20 lg:px-25 2xl:px-5 3xl:px-10">
          {advantages.map((advantage) => (
            <li className="flex items-center mb-3" key={advantage.title}>
              <span className="pr-4">
                <GiCheckMark className="w-[18px] h-[18px] xs:w-[22px] xs:h-[22px] text-[#704B40]" />
              </span>
              {advantage.title}
            </li>
          ))}
        </ul>
        <p>{t('paragraph-3')}</p>
        <CallToAction />
      </div>
    </div>
  );
}
