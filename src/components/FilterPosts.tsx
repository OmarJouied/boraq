"use client";

import styles from '@/styles/components/FilterPosts.module.scss'
import FilterPostsButton from './FilterPostsButton'
import { postTypes } from '@/utils/constants'
import FilterPostsProps from '@/types/FilterPostsProps';

const FilterPosts = ({ typeFilter, setTypeFilter }: FilterPostsProps) => {

  return (
    <nav className={styles.FilterPosts}>
        {
            postTypes.map(postType => <FilterPostsButton key={postType} innerText={postType} isActive={typeFilter === postType} onClick={() => setTypeFilter(postType)} />)
        }
    </nav>
  )
}

export default FilterPosts