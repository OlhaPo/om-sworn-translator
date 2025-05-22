import { useTranslations } from 'next-intl';

const useNavLinks = () => {
  const t = useTranslations('HomePage.navigation');

  const navLinks = [
    { label: t('home'), href: '/' },
    { label: t('about'), href: '/about' },
    {
      label: t('services'),
      isDropdownMenu: true,
      children: [
        { label: t('translations'), href: '/translations' },
        { label: t('legalization'), href: '/legalization' },
      ],
    },
    { label: t('prices'), href: '/prices' },
    { label: t('contacts'), href: '/contacts' },
  ];
  return navLinks;
};

export default useNavLinks;
