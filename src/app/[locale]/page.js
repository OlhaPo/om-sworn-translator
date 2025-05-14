// import { useTranslations } from 'next-intl';

import MainPage from '@/components/MainPage';

export default function Home() {
  // const t = useTranslations('HomePage');

  return (
    <main style={{ fontFamily: 'var(--font-inter)' }}>
      <MainPage />
    </main>
  );
}
