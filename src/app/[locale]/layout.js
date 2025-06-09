import './globals.css';
import {
  Inter,
  Great_Vibes,
  Playfair_Display,
  Bad_Script,
} from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, hasLocale } from 'next-intl';

import Footer from '@/components/common/Footer';
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

const playfair_display = Playfair_Display({
  variable: '--font-playfair-display',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

const great_vibes = Great_Vibes({
  variable: '--font-great-vibes',
  subsets: ['latin'],
  weight: '400',
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
    <html lang={locale} className="min-h-full scroll-smooth">
      <body
        className={`${inter.variable} ${great_vibes.variable} ${playfair_display.variable} ${bad_script.variable} antialiased bg-custom-gradient min-h-screen flex flex-col flex-nowrap justify-between`}
      >
        <NextIntlClientProvider locale={locale}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
