"use client";

import { useState } from 'react';
import FilterPosts from '@/components/FilterPosts';
import Posts from '@/components/Posts';
import styles from '@/styles/containers/Main.module.scss';

const Main = () => {// { posts }: MainProps
  const [typeFilter, setTypeFilter] = useState("all");
  // const postsFiltered = posts.filter(post => post.type === typeFilter);

  return (
    <main className={styles.Main}>
      <FilterPosts typeFilter={typeFilter} setTypeFilter={setTypeFilter} />
      <Posts />
      {/* postsFiltered={postsFiltered} /> */}
    </main>
  )
}

export default Main