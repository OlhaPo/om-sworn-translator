import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { BsArrowRight } from 'react-icons/bs';
import { GiCheckMark } from 'react-icons/gi';

import useTranslationsPageData from '@/app/hooks/useTranslationsPageData';
import CallToAction from '@/components/common/ui/CallToAction';

export default function TranslationsPage() {
  const t = useTranslations('TranslationsPage');
  const { places, offers } = useTranslationsPageData();
  return (
    <div className="translations flex flex-col md:flex-row flex-grow">
      <div className="mx-auto md:max-w-[1200px] my-15 md:my-20">
        <Image
          src="/sworn-translator-stamp.jpg"
          width={600}
          height={400}
          alt="sworn translator stamp"
          priority
          className="mx-auto md:max-h-[400px] object-contain md:custom-shadow"
        />

        <h2
          className="text-[24px] md:text-[44px] 3xl:text-5xl text-[#704B40] mt-10 md:mt-15 text-center tracking-wide md:tracking-custom uppercase md:normal-case font-medium md:font-light px-8 md:px-0 leading-15"
          style={{ fontFamily: 'var(--font-playfair-display)' }}
        >
          {t('page-title')}
        </h2>
        <p>
          {t.rich('paragraph-1', {
            em: (chunks) => <em>{chunks}</em>,
          })}
        </p>
        <p>
          {t('paragraph-2')}
          <a
            href="https://arch-bip.ms.gov.pl/pl/rejestry-i-ewidencje/tlumacze-przysiegli/lista-tlumaczy-przysieglych/translator,11846.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-state underline underline-offset-4 decoration-[#704B40]"
          >
            {t('link-to-sworn-traslators-list')}
          </a>
          .
        </p>

        <p className="mb-10">{t('paragraph-3')}</p>
        <h3
          className="text-[#704B40] uppercase font-semibold text-center md:text-left text-[22px] md:text-3xl pb-6 tracking-widest px-8 md:px-0"
          style={{ fontFamily: 'var(--font-playfair-display)' }}
        >
          {t('where-required-title')}
        </h3>
        <ul className="mb-10">
          {places.map((place) => (
            <li className="flex mb-3" key={place.title}>
              <span className="pr-4">
                <BsArrowRight size={28} color="#704B40" />
              </span>
              {place.title}
            </li>
          ))}
        </ul>
        <h3
          className="text-[#704B40] uppercase font-semibold text-center md:text-left text-[22px] md:text-3xl py-6 tracking-widest px-8 md:px-0"
          style={{ fontFamily: 'var(--font-playfair-display)' }}
        >
          {t('we-offer-title')}
        </h3>
        <ul>
          {offers.map((offer) => (
            <li className="flex mb-3" key={offer.title}>
              <span className="pr-4">
                <GiCheckMark size={22} color="#704B40" />
              </span>
              {offer.title}
            </li>
          ))}
        </ul>
        <p className="quote-translations-page">&quot; {t('quote')} &quot;</p>
        <CallToAction />
      </div>
    </div>
  );
}
