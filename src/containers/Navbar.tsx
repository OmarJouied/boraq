import NavbarLink from '@/components/NavbarLink';
import styles from '@/styles/containers/Navbar.module.scss';
import { navLinks } from '@/utils/constants';

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      {
        navLinks.map(link => <NavbarLink key={link.text} text={link.text} iconLink={link.iconLink} link={link.link} />)
      }
    </nav>
  )
}

export default Navbar