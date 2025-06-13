import { useTranslations } from 'next-intl';

const usePricingPrinciplesData = () => {
  const t = useTranslations('PricingPrinciples');

  const pricingPrinciplesData = [
    { title: t('principles.principle-1') },
    { title: t('principles.principle-2') },
    { title: t('principles.principle-3') },
    { title: t('principles.principle-4') },
    { title: t('principles.principle-5') },
    { title: t('principles.principle-6') },
  ];

  return pricingPrinciplesData;
};

export default usePricingPrinciplesData;
