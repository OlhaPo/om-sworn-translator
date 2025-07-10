import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function CallToAction() {
  const t = useTranslations('LegalizationPage');
  return (
    <Link
      href="/contacts"
      className="mx-8 text-center mt-15 md:mt-20 block w-fit ms:mx-auto p-5 custom-shadow-card rounded-md cursor-pointer transition duration-300 text-lg xs:text-xl bg-[#ffffff]/60 text-[#704B40] active:text-[#704B40] active:bg-[#ffffff]/60 hover:text-white md:text-2xl hover:bg-[#704B40]/70"
    >
      {t('call-to-action')}
    </Link>
  );
}
