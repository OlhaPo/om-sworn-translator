import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('AboutPage');
  return (
    <div className="about h-screen">
      <p>{t('title')}</p>
    </div>
  );
}
