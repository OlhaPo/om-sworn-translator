import { FaFacebook, FaInstagram, FaViber } from 'react-icons/fa';

import {
  FACEBOOK_LINK,
  INSTAGRAM_LINK,
  VIBER_LINK,
} from '@/constants/contacts';

const useSocialLinks = () => {
  const socialLinksFooter = [
    { label: <FaFacebook size={25} />, href: FACEBOOK_LINK },
    {
      label: <FaInstagram size={25} />,
      href: INSTAGRAM_LINK,
    },
    { label: <FaViber size={25} />, href: VIBER_LINK },
  ];

  const socialSvgContacts = [
    { label: '/viber.svg', href: VIBER_LINK },
    {
      label: '/instagram.svg',
      href: INSTAGRAM_LINK,
    },
    { label: '/facebook.svg', href: FACEBOOK_LINK },
  ];

  return { socialLinksFooter, socialSvgContacts };
};

export default useSocialLinks;
