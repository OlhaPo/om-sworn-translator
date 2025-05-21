import './globals.css';
import {
  Inter,
  Bad_Script,
  El_Messiri,
  Ballet,
  Great_Vibes,
} from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, hasLocale } from 'next-intl';

import Header from '@/components/common/Header';
import { routing } from '@/i18n/routing';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'cyrillic'],
});

const bad_script = Bad_Script({
  variable: '--font-bad-script',
  subsets: ['latin', 'cyrillic'],
  weight: '400',
});

const el_messiri = El_Messiri({
  variable: '--font-el-messiri',
  subsets: ['latin', 'cyrillic'],
});

const great_vibes = Great_Vibes({
  variable: '--font-great-vibes',
  subsets: ['latin'],
  weight: '400',
});

const ballet = Ballet({
  variable: '--font-ballet',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Олена Марченко — присяжний перекладач української мови',
  description:
    'Переклад документів та комплексна підтримка легалізації перебування і роботи в Польщі згідно з чинним законодавством.',
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale} className="min-h-full">
      <body
        className={`${inter.variable} ${bad_script.variable}  ${great_vibes.variable} ${el_messiri.variable} ${ballet.variable} antialiased bg-custom-gradient min-h-full`}
      >
        <NextIntlClientProvider locale={locale}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
