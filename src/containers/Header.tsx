import Image from 'next/image'
import Link from 'next/link'

import styles from '@/styles/containers/Header.module.scss';
import SearchHeader from '@/components/SearchHeader';

const Header = () => {
    return (
        <header className={styles.Header}>
            <Link href={'/'}>
                <div>
                    <Image src={'/images/qouraq-logo.svg'} alt='Bouraq Logo' fill />
                </div>
                <h1>Bouraq</h1>
            </Link>
            {/* <form>
            <label>
                <Image src={'/images/search.svg'} alt='search icon' width={16} height={16} />
                <input type='checkbox' />
            </label>
            <button type='submit'>
                <Image src={'/images/search.svg'} alt='search icon' width={16} height={16} />
            </button>
            <input type="text" placeholder='#gaza, @channel...' />
        </form> */}
            <SearchHeader />
            <div>
                <div>
                    <button>
                        <Image src={'/images/dark-mode.svg'} alt={'dark mode icon'} aria-label={'dark mode icon'} fill />
                    </button>
                    <Link href={'/'}>
                        <Image src={'/images/notification.svg'} alt={'dark mode icon'} aria-label={'dark mode icon'} fill />
                    </Link>
                </div>
                <button>
                    <Image src={'/images/user-logo.svg'} alt={`{userLogo} avatar`} aria-label={`{userLogo} avatar`} fill />
                </button>
            </div>
        </header>
    )
}

export default Header