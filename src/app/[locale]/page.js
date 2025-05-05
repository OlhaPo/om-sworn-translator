// import { useTranslations } from 'next-intl';

import Header from '@components/components/common/Header';
import MainPage from '@components/components/MainPage';

export default function Home() {
  // const t = useTranslations('HomePage');

  return (
    <section className="bg-custom-gradient h-screen">
      <Header />
      <MainPage />
    </section>
  );
}
