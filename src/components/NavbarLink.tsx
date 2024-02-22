"use client";

import styles from '@/styles/components/NavbarLink.module.scss';
import NavbarLinkProps from '@/types/NavbarLinkProps';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavbarLink = ({ text, link, iconLink }: NavbarLinkProps) => {
  const route = usePathname();

  return (
    <Link href={link} className={`${styles.NavbarLink} ${route === link ? styles.active : ''}`}>
      <div>
        <Image src={iconLink} alt={`${text} icon`} fill />
      </div>
      <span>{text}</span>
    </Link>
  )
}

export default NavbarLink;