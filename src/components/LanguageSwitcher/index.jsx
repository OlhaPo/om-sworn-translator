'use client';

import { useLocale } from 'next-intl';

import { usePathname, useRouter } from '@/i18n/navigation';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (newLocale) => {
    if (newLocale === locale) return;

    router.replace(pathname, { locale: newLocale });
  };

  return (
    <ul className="flex text-lg 2xl:text-xl 3xl:text-2xl">
      <li className="hover-state">
        <button
          onClick={() => handleLanguageChange('uk')}
          className={locale === 'uk' ? 'text-[#2D201A]' : ''}
        >
          UK
        </button>{' '}
      </li>{' '}
      <span className="px-2">|</span>
      <li className="hover-state">
        <button
          onClick={() => handleLanguageChange('pl')}
          className={locale === 'pl' ? 'text-[#2D201A]' : ''}
        >
          PL
        </button>
      </li>
    </ul>
  );
}
