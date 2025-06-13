import Image from 'next/image';
import { useTranslations } from 'next-intl';

import {
  ADDRESS_POSTAL_CODE,
  ADDRESS_STREET,
  EMAIL,
  PHONE_NUMBER,
} from '@/app/constants/contacts';
import useSocialLinks from '@/components/common/Header/hooks/useSocialLinks';
import GoogleMapLocation from '@/components/GoogleMapLocation';

export default function Contacts() {
  const { socialSvgContacts } = useSocialLinks();
  const t = useTranslations('ContactPage');

  return (
    <div className="contacts flex flex-grow text-lg md:text-2xl items-center overflow-x-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-8 md:gap-15 w-full px-8 md:px-0">
        <div className="md:pr-40">
          <h2
            className="text-3xl md:text-5xl text-[#704B40] text-left tracking-widest md:tracking-custom mt-15 mb-10 md:mt-0 md:mb-15 uppercase md:normal-case font-medium md:font-light"
            style={{ fontFamily: 'var(--font-playfair-display)' }}
          >
            {t('page-title')}
          </h2>
          <ul>
            <li className="pb-8">
              {ADDRESS_STREET} <br /> {ADDRESS_POSTAL_CODE}
            </li>
            <li className="pb-8">
              <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </li>
          </ul>
          <ul className="mt-10 md:mt-15 flex gap-5 md:gap-8">
            {socialSvgContacts.map((socialLink) => (
              <li
                key={socialLink.href}
                className="hover-state flex gap-2 items-center"
              >
                <a
                  href={socialLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={socialLink.label}
                    width={28}
                    height={28}
                    alt="social svg"
                    className="md:w-8 md:h-8"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <GoogleMapLocation />
      </div>
    </div>
  );
}
