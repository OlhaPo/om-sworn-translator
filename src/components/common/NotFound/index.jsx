import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';

export default function NotFoundCustom() {
  const t = useTranslations('NotFoundPage');
  return (
    <div className="notfound flex flex-col flex-grow items-center justify-center text-center px-8 md:px-0">
      <h2 className="text-xl md:text-5xl text-[#704B40] text-center tracking-widest md:tracking-custom mt-15 md:mt-0 md:mb-5 uppercase">
        {t('page-title')}
      </h2>
      <p className="mt-5 mb-10 text-lg md:text-[22px] text-[#2D201A]">
        {t('description')}
      </p>
      <Link
        href="/"
        className="custom-shadow-card text-center block w-fit md:mx-auto p-5 bg-[#704B40]/70 hover:bg-[#ffffff]/60 rounded-md cursor-pointer hover:text-[#704B40] text-white transition duration-300 text-xl md:bg-[#ffffff]/60 md:text-[#704B40] active:text-[#704B40] active:bg-[#ffffff]/60 md:hover:text-white md:text-2xl md:hover:bg-[#704B40]/70"
      >
        {t('button')}
      </Link>
    </div>
  );
}
