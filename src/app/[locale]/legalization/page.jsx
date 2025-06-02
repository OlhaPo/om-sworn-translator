import { useTranslations } from 'next-intl';

export default function Legalization() {
  const t = useTranslations('LegalizationPage');
  return (
    <div className="legalization flex flex-col md:flex-row flex-grow">
      <div className="mx-auto max-w-[1200px] my-15 md:my-20  px-8 md:px-0">
        <h2
          className="text-[21px] md:text-5xl 3xl:text-5xl text-[#704B40] text-center tracking-widest md:tracking-custom mb-5 md:mb-10 uppercase md:normal-case font-medium md:font-light"
          style={{ fontFamily: 'var(--font-playfair-display)' }}
        >
          {t('page-title')}
        </h2>
        <p>{t('paragraph-1')}</p>
        <p>{t('paragraph-2')}</p>
        <h3>{t('services-types-title')}</h3>
        <ul>
          <li>{t('services.temporary-residence')}</li>
          <li>{t('services.permanent-residence')}</li>
          <li>{t('services.support')}</li>
          <li>{t('services.preparation-complaints')}</li>
          <li>{t('services.case-monitoring')}</li>
        </ul>
        <p>{t('paragraph-3')}</p>
        <h3>{t('advantages-title')}</h3>
        <ul>
          <li>{t('advantages.compliance')}</li>
          <li>{t('advantages.optimization-processing')}</li>
          <li>{t('advantages.handling-remotely')}</li>
          <li>{t('advantages.accuracy-confidentiality')}</li>
        </ul>
        <p>{t('paragraph-4')}</p>
      </div>
    </div>
  );
}
