import Link from 'next/link';

import useNavLinks from './hooks/useNavLinks';

export default function Header() {
  const links = useNavLinks();
  return (
    <nav className="custom-shadow relative bg-[#A98573] text-white">
      <div className="flex justify-between py-6 max-w-[1200px] mx-auto">
        <ul className="flex text-[16px]">
          <li>UK </li>
          <span className="px-2">|</span>
          <li>PL</li>
        </ul>
        <ul className="flex text-[16px] gap-20 uppercase">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
