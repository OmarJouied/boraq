"use client";

import styles from '@/styles/components/Posts.module.scss'
import Post from './Post'
import { memo } from 'react';

const Posts = () => {//{ posts }
  return (
    <main className={styles.Posts}>
      <div>
        {/* { posts.map(post => <Post post={post} />) } */}
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  )
}

export default memo(Posts);