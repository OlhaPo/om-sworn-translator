import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';

import { Link } from '@/i18n/navigation';

export default function NavDropdown({ link }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu.Root open={isOpen} onOpenChange={(val) => setIsOpen(val)}>
      <DropdownMenu.Trigger asChild>
        <span className="flex hover-state">
          {link.label} <MdArrowDropDown size={30} className="mt-[-4px]" />
        </span>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="bg-[#A98573] uppercase pt-2 2xl:pt-4 text-white text-[16px] lg:text-lg 2xl:text-xl 3xl:text-2xl px-3 2xl:px-4">
          {link.children.map((item, i) => (
            <DropdownMenu.Item
              key={i}
              className="outline-0 pb-3 2xl:pb-4 hover-state"
            >
              <Link href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
