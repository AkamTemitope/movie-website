import React from 'react';

interface NavbarItemProps {
  link?: string;
  label: string;
  active?: boolean;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ link = "/", label, active }) => {
  return (
    <a href={link} className={active ? 'text-white cursor-default' : 'text-gray-200 hover:text-gray-300 transition'}>
      {label}
    </a>
  )
}

export default NavbarItem;