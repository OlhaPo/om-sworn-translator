import { GrMap } from 'react-icons/gr';
import { MdOutlineMail, MdOutlinePhone } from 'react-icons/md';

import {
  PHONE_NUMBER,
  EMAIL,
  ADDRESS_STREET,
  ADDRESS_POSTAL_CODE,
  GOOGLE_MAP_LOCATION,
} from '@/constants/contacts';

const useContactInfo = () => {
  const contactInfo = [
    {
      label: <GrMap size={25} />,
      title: `${ADDRESS_STREET}${ADDRESS_POSTAL_CODE}`,
      href: GOOGLE_MAP_LOCATION,
    },
    {
      label: <MdOutlinePhone size={25} />,
      title: PHONE_NUMBER,
    },
    { label: <MdOutlineMail size={25} />, title: EMAIL },
  ];
  return contactInfo;
};

export default useContactInfo;
