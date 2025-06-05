import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function CallToAction() {
  const t = useTranslations('LegalizationPage');
  return (
    <Link
      href="/contacts"
      className="mx-8 text-center mt-15 md:mt-20 block w-fit md:mx-auto p-5 bg-[#704B40]/70 hover:bg-[#ffffff]/60 custom-shadow-card rounded-md cursor-pointer hover:text-[#704B40] text-white transition duration-300 text-xl md:bg-[#ffffff]/60 md:text-[#704B40] active:text-[#704B40] active:bg-[#ffffff]/60 md:hover:text-white md:text-2xl md:hover:bg-[#704B40]/70"
    >
      {t('call-to-action')}
    </Link>
  );
}
