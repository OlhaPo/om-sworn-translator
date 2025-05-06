import { useTranslations } from 'next-intl';

const useNavLinks = () => {
  const t = useTranslations('HomePage.navigation');

  const navLinks = [
    { label: t('home'), href: '/' },
    { label: t('about'), href: '/about' },
    { label: t('services'), href: '/services' },
    { label: t('prices'), href: '/prices' },
    { label: t('contacts'), href: '/contacts' },
  ];
  return navLinks;
};

export default useNavLinks;
