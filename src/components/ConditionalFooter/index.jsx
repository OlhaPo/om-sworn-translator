'use client';
import { usePathname } from 'next/navigation';

import Footer from '@/components/common/Footer/index';

export default function ConditionalFooter() {
  const pathname = usePathname();
  const hideFooter = pathname.endsWith('/contacts');

  if (hideFooter) return null;
  return <Footer />;
}
