import { useTranslations } from 'next-intl';
import { BsBuildingCheck } from 'react-icons/bs';
import { FaRegAddressCard } from 'react-icons/fa6';
import { FiUsers } from 'react-icons/fi';
import { IoHomeOutline, IoDocumentTextOutline } from 'react-icons/io5';
import { LuHandshake } from 'react-icons/lu';

const useLegalizationPageData = () => {
  const t = useTranslations('LegalizationPage');
  const services = [
    {
      icon: <FaRegAddressCard />,
      title: t('services.temporary-residence'),
    },
    {
      icon: <IoHomeOutline />,
      title: t('services.permanent-residence'),
    },
    {
      icon: <FiUsers />,
      title: t('services.support'),
    },
    {
      icon: <IoDocumentTextOutline />,
      title: t('services.case-monitoring'),
    },
    {
      icon: <BsBuildingCheck />,
      title: t('services.preparation-complaints'),
    },
    {
      icon: <LuHandshake />,
      title: t('services.others'),
    },
  ];

  const advantages = [
    {
      title: t('advantages.compliance'),
    },
    {
      title: t('advantages.personal-support'),
    },
    {
      title: t('advantages.optimization-processing'),
    },
    {
      title: t('advantages.accuracy-confidentiality'),
    },
    {
      title: t('advantages.handling-remotely'),
    },
  ];
  return { services, advantages };
};

export default useLegalizationPageData;
