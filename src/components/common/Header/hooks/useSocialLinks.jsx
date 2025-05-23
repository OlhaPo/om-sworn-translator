import { FaFacebook, FaInstagram, FaViber } from 'react-icons/fa';

import {
  FACEBOOK_LINK,
  INSTAGRAM_LINK,
  VIBER_LINK,
} from '@/app/constants/contacts';

const useSocialLinks = () => {
  const socialLinks = [
    { label: <FaFacebook size={25} />, href: FACEBOOK_LINK },
    {
      label: <FaInstagram size={25} />,
      href: INSTAGRAM_LINK,
    },
    { label: <FaViber size={25} />, href: VIBER_LINK },
  ];
  return socialLinks;
};

export default useSocialLinks;
