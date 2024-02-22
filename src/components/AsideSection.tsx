"use client";

import styles from '@/styles/components/AsideSection.module.scss';
import Image from 'next/image';
import { MouseEventHandler } from 'react';

const AsideSection = ({ isClosed }: { isClosed?: boolean }) => {
  const toggleOpen: MouseEventHandler<HTMLButtonElement> | undefined = isClosed ? (e) => {
    e.currentTarget.parentElement?.parentElement?.toggleAttribute('data-close');
  } : undefined;

  return (
    <section className={styles.AsideSection} {...(isClosed ? { "data-close": "" } : {})}>
      <header>
        {
          isClosed && (
            <button onClick={toggleOpen}>
              <Image src={'/images/arrow.svg'} alt='arrow open/close' width={24} height={24} />
            </button>
          )
        }
        <h3>Communicators</h3>
      </header>
      <div>
        <div>
          {/* <a href="">user1</a>
          <a href="">user2</a>
          <a href="">user3</a> */}
          <span>nothing yet!</span>
        </div>
      </div>
    </section>
  )
}

export default AsideSection