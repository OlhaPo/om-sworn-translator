'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { IoCloseOutline } from 'react-icons/io5';

import useNavLinks from './hooks/useNavLinks';

export default function Header() {
  const links = useNavLinks();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className="custom-shadow relative bg-[#A98573] text-white">
      <div className="w-full hidden md:flex md:justify-between md:py-6 md:max-w-[1200px] md:mx-auto">
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
      <div className="flex justify-between px-8 py-2">
        <Image
          src="/logo.svg"
          alt="logo"
          width={100}
          height={100}
          className="md:hidden"
        />
        <button onClick={handleMobileMenu} className="md:hidden">
          <HiOutlineMenu size={30} />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="flex flex-col items-center justify-center">
          <IoCloseOutline size={30} />
          <ul className="flex flex-col text-[16px] uppercase">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <ul className="flex text-[16px]">
            <li>UK </li>
            <span className="px-2">|</span>
            <li>PL</li>
          </ul>
        </div>
      )}
    </nav>
  );
}
