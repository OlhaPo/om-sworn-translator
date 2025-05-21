'use client';

import { useLocale } from 'next-intl';

import { usePathname, useRouter } from '@/i18n/navigation'; // Імпортуємо з вашого файлу navigation.js

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (newLocale) => {
    if (newLocale === locale) return;

    router.replace(pathname, { locale: newLocale });
  };

  return (
    <ul className="flex text-[16px]">
      <li>
        <button
          onClick={() => handleLanguageChange('uk')}
          className={locale === 'uk' ? 'font-bold' : ''}
        >
          UK
        </button>{' '}
      </li>{' '}
      <span className="px-2">|</span>
      <li>
        <button
          onClick={() => handleLanguageChange('pl')}
          className={locale === 'pl' ? 'font-bold' : ''}
        >
          PL
        </button>
      </li>
    </ul>
  );
}
