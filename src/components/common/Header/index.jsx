import Link from 'next/link';

import useNavLinks from './hooks/useNavLinks';

export default function Header() {
  const links = useNavLinks();
  return (
    <nav className="flex justify-between my-10">
      <ul className="flex text-lg">
        <li>UK </li>
        <span className="px-2">|</span>
        <li>PL</li>
      </ul>
      <ul className="flex text-lg gap-6 font-medium">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
