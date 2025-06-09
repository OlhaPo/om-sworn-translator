import { useTranslations } from 'next-intl';

const useTranslationsPageData = () => {
  const t = useTranslations('TranslationsPage');
  const places = [
    {
      title: t('places.government-offices'),
    },
    {
      title: t('places.residence-visa'),
    },
    {
      title: t('places.education-notary'),
    },
    {
      title: t('places.court-police-prosecution'),
    },
  ];

  const offers = [
    {
      title: t('offers.certifiedTranslation'),
    },
    {
      title: t('offers.standardTranslation'),
    },
    {
      title: t('offers.documentPreparation'),
    },
    {
      title: t('offers.formFillingHelp'),
    },
    {
      title: t('offers.interpretation'),
    },
    {
      title: t('offers.deadlineCompliance'),
    },
    {
      title: t('offers.confidentiality'),
    },
  ];
  return { places, offers };
};

export default useTranslationsPageData;
