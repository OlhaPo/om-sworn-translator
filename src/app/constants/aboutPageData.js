import { useTranslations } from 'next-intl';

const useAboutPageData = () => {
  const t = useTranslations('AboutMePage');
  const aboutPagaData = [
    {
      imgUrl: '/experience.svg',
      imgAlt: 'icon experience and effectiveness',
      title: t('experience-title'),
      description: t('experience-descriprion'),
    },
    {
      imgUrl: '/fast-task-execution.svg',
      imgAlt: 'icon fast task execution',
      title: t('task-execution-title'),
      description: t('task-execution-descriprion'),
    },
    {
      imgUrl: '/qualification.svg',
      imgAlt: 'icon qualification',
      title: t('qualification-title'),
      description: [
        { label: t('qualification-descriprion-1') },
        {
          label: t('qualification-descriprion-2'),
        },
        {
          label: t('qualification-descriprion-3'),
        },
      ],
    },
  ];
  return aboutPagaData;
};

export default useAboutPageData;
