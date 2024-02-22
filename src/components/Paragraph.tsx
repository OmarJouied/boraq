"use client";

import styles from '@/styles/components/Paragraph.module.scss';
import { MouseEventHandler } from 'react';

const Paragraph = ({ content }: { content: string }) => {
  const showMore: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.currentTarget.parentElement!.toggleAttribute('data-show');
  }

  return (
    <div className={styles.Paragraph}>
        <p>{content}</p>
        <button onClick={showMore}></button>
    </div>
  )
}

export default Paragraph