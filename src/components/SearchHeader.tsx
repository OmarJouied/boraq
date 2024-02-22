"use client";

import Image from "next/image"
import { useSearchParams, useRouter } from "next/navigation";
import { FormEventHandler, useEffect, useState } from "react"
import styles from '@/styles/components/SearchHeader.module.scss';
import { mobileSize } from "@/utils/constants";

const SearchHeader = () => {
  const q = useSearchParams().get('q');
  const [searchQuery, setSearchQuery] = useState(q || "");
  const route = useRouter();

  const submitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const screenSize = window.innerWidth;
    if (screenSize <= mobileSize) {
      const formElement = e.target as HTMLFormElement;
      
      formElement.toggleAttribute('data-active');
      if (formElement.hasAttribute('data-active')) {
        formElement.q.focus();
        return;
      }
    }
    if (!searchQuery) {
      return;
    }

    submit();
  }

  const submit = () => {
    route.push(`/?q=${searchQuery}`);
  }

  const resetHandler = () => {
    setSearchQuery("");
  }

  useEffect(() => {
    setSearchQuery(q || "");
  }, [q]);

  return (
    <form onSubmit={submitHandler} className={styles.SearchHeader}>
      <button type='submit'>
        <Image src={'/images/search.svg'} alt='search icon' width={16} height={16} />
      </button>
      <div>
        <input type="text" placeholder='#gaza, @channel...' name="q" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
        {
          searchQuery && (
            <button type='reset' onClick={resetHandler}>
              <Image src={'/images/clear.svg'} alt='search icon' width={16} height={16} />
            </button>
          )
        }
      </div>
    </form>
  )
}

export default SearchHeader