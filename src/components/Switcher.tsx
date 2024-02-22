"use client";

import Image from "next/image";
import styles from '@/styles/components/Switcher.module.scss';

const Switcher = () => {
  const toggleHandler = () => {
    document.body.toggleAttribute('data-open');
  }

  return (
    <button className={styles.Switcher} onClick={toggleHandler}>
      <Image src={'/images/arrow.svg'} alt="" width={24} height={24} />
    </button>
  )
}

export default Switcher