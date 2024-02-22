import styles from '@/styles/components/FilterPostsButton.module.scss';
import FilterPostsButtonProps from '@/types/FilterPostsButtonProps';

const FilterPostsButton = ({ innerText, isActive, onClick }: FilterPostsButtonProps) => {
  return (
    <button
        className={styles.FilterPostsButton}
        {...(isActive ? {"data-active": ""} : {})}
        onClick={onClick}
    >
        { innerText }
    </button>
  )
}

export default FilterPostsButton