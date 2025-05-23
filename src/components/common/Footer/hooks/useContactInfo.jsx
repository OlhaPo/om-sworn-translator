import { GrMap } from 'react-icons/gr';
import { MdOutlineMail, MdOutlinePhone } from 'react-icons/md';

import { PHONE_NUMBER, EMAIL, ADDRESS } from '@/app/constants/contacts';

const useContactInfo = () => {
  const contactInfo = [
    { label: <GrMap size={25} />, title: ADDRESS },
    {
      label: <MdOutlinePhone size={25} />,
      title: PHONE_NUMBER,
    },
    { label: <MdOutlineMail size={25} />, title: EMAIL },
  ];
  return contactInfo;
};

export default useContactInfo;
