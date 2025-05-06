// import { useTranslations } from 'next-intl';

import Header from '@/components/common/Header';
import MainPage from '@/components/MainPage';

export default function Home() {
  // const t = useTranslations('HomePage');

  return (
    <section className="max-w-[1200px] mx-auto">
      <Header />
      <MainPage />
    </section>
  );
}
