'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import { IoCloseOutline, IoMenu } from 'react-icons/io5';

import LanguageSwitcher from '@/components/LanguageSwitcher';
import NavDropdown from '@/components/NavDropdown';
import { Link } from '@/i18n/navigation';

import useNavLinks from './hooks/useNavLinks';
import useSocialLinks from './hooks/useSocialLinks';

export default function Header() {
  const links = useNavLinks();
  const socialLinks = useSocialLinks();
  const t = useTranslations('HomePage');

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  const handleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const renderMobileNavItem = (link) => {
    return (
      <li key={link.href}>
        {link.href ? (
          <Link
            href={link.href}
            onClick={handleMobileMenu}
            className="block hover-state"
          >
            {link.label}
          </Link>
        ) : (
          <span>{link.label}:</span>
        )}

        {link.children && (
          <ul>{link.children?.map((child) => renderMobileNavItem(child))}</ul>
        )}
      </li>
    );
  };

  return (
    <nav className="custom-shadow bg-[#A98573] text-white z-1000">
      <div className="w-full hidden items-center md:flex md:justify-between py-6 3xl:py-8 mx-auto max-w-[1200px] 2xl:max-w-[1400px]">
        <LanguageSwitcher />
        <ul className="flex text-[16px] 2xl:text-xl 3xl:text-2xl gap-20 2xl:gap-22 uppercase">
          {links.map((link, i) =>
            link.isDropdownMenu ? (
              <li key={i}>
                <NavDropdown link={link} />
              </li>
            ) : (
              <li key={link.href}>
                <Link href={link.href} className="hover-state">
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>

      <div className="md:hidden flex justify-between items-center py-4 px-8">
        <p className="legal-quote text-[19px] text-[#422F27] custom-shadow-mobile px-3 py-2">
          {t('quote')}
        </p>
        <button onClick={handleMobileMenu} className="hover-state">
          <IoMenu size={27} />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute bg-[#A98573] w-full top-0 bottom-0 flex flex-col pt-4 px-8 h-screen">
          <div className="flex justify-between items-start">
            <Image
              src="/logo.svg"
              alt="logo"
              width={80}
              height={80}
              className="ml-[-12px]"
            />
            <button onClick={handleMobileMenu} className="mt-[9px] hover-state">
              <IoCloseOutline size={27} />
            </button>
          </div>
          <ul className="mobile-nav-menu flex flex-col text-lg gap-3 my-8">
            {links.map((link) => renderMobileNavItem(link))}
          </ul>
          <LanguageSwitcher />
          <ul className="flex gap-5 mt-12">
            {socialLinks.map((socialLink) => (
              <li key={socialLink.href} className="hover-state">
                <a
                  href={socialLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {socialLink.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
