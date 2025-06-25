import Image from 'next/image';
import { useTranslations } from 'next-intl';

import useSocialLinks from '@/components/common/Header/hooks/useSocialLinks';
import GoogleMapLocation from '@/components/GoogleMapLocation';
import {
  ADDRESS_POSTAL_CODE,
  ADDRESS_STREET,
  EMAIL,
  PHONE_NUMBER,
} from '@/constants/contacts';

export default function ContactsPage() {
  const { socialSvgContacts } = useSocialLinks();
  const t = useTranslations('ContactPage');

  return (
    <div className="contacts flex flex-grow text-lg md:text-xl xl:text-[22px] 2xl:text-2xl 3xl:text-3xl items-center ">
      <div className="mx-auto max-w-[1200px] 2xl:max-w-[1400px] flex flex-col xl:flex-row gap-8 md:gap-15 w-full px-5 xs:px-8 ms:px-10 sm:px-15 md:px-20 2xl:px-0">
        <div className="xl:pr-40 3xl:pr-10">
          <h2 className="title text-3xl md:text-5xl text-[#704B40] text-left tracking-widest md:tracking-custom mt-15 mb-10 xl:mt-0 md:mb-15 uppercase md:normal-case font-medium md:font-light">
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
                    quality={75}
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
