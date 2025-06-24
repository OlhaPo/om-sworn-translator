'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import { IoCloseOutline, IoMenu } from 'react-icons/io5';

import LanguageSwitcher from '@/components/LanguageSwitcher';
import NavDropdown from '@/components/NavDropdown';
import { usePathname } from '@/i18n/navigation';
import { Link } from '@/i18n/navigation';

import useNavLinks from './hooks/useNavLinks';
import useSocialLinks from './hooks/useSocialLinks';

export default function Header() {
  const links = useNavLinks();
  const pathname = usePathname();
  const { socialSvgContacts } = useSocialLinks();
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
            className={`hover-state ${pathname === link.href ? 'text-[#f0ebe8] font-semibold' : ''}`}
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
    <nav className="custom-shadow bg-[#A98573] text-white">
      <div className="w-full hidden items-center lg:flex lg:justify-between md:px-10 lg:px-20 2xl:px-0 py-6 3xl:py-8 mx-auto max-w-[1200px] 2xl:max-w-[1400px]">
        <LanguageSwitcher />
        <ul className="flex text-[16px] lg:text-lg 2xl:text-xl 3xl:text-2xl gap-8 lg:gap-10 2xl:gap-22 uppercase">
          {links.map((link, i) =>
            link.isDropdownMenu ? (
              <li key={i}>
                <NavDropdown link={link} />
              </li>
            ) : (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`hover-state ${pathname === link.href ? 'text-[#f0ebe8] font-semibold' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>

      <div className="lg:hidden flex justify-between items-center py-4 px-5 xs:px-8 ms:px-10 sm:px-15 md:px-20 sm:py-6 z-1000">
        <p className="legal-quote text-[16.5px] xs:text-[19px] ms:text-2xl md:text-3xl text-[#2D201A] custom-shadow-mobile px-2 py-2 xs:px-3 sm:px-5">
          {t('quote')}
        </p>
        <button onClick={handleMobileMenu} className="icon hover-state">
          <IoMenu size={25} />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute bg-[#A98573] w-full top-0 bottom-0 flex flex-col pt-4 px-5 xs:px-8 ms:px-10 sm:px-15 md:px-20 h-screen z-1000 sm:py-6">
          <div className="flex justify-between items-start">
            <Image
              src="/logo.svg"
              alt="logo"
              width={80}
              height={80}
              className="sm:w-24 sm:h-24 ml-[-12px]"
              quality={75}
            />
            <button
              onClick={handleMobileMenu}
              className="mt-[9px] hover-state icon"
            >
              <IoCloseOutline size={25} />
            </button>
          </div>
          <ul className="mobile-nav-menu flex flex-col text-lg ms:text-xl sm:text-[22px] gap-3 xs:gap-5 my-8 xs:my-12">
            {links.map((link) => renderMobileNavItem(link))}
          </ul>
          <LanguageSwitcher />
          <ul className="flex gap-5 mt-8 xs:mt-15">
            {socialSvgContacts.map((socialLink) => (
              <li
                key={socialLink.href}
                className="hover-state flex gap-2 items-center"
              >
                <a
                  href={socialLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={socialLink.label}
                    width={28}
                    height={28}
                    alt="social svg"
                    className="sm:w-8 sm:h-8"
                    quality={75}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
