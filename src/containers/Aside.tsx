import AsideSection from '@/components/AsideSection';
import Footer from '@/components/Footer';
import Switcher from '@/components/Switcher';
import styles from '@/styles/containers/Aside.module.scss';

const Aside = () => {
  return (
    <aside className={styles.Aside}>
      <Switcher />
      <main>
        <AsideSection />
        <AsideSection isClosed />
      </main>
      <Footer />
    </aside>
  )
}

export default Aside