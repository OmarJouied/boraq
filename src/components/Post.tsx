import styles from '@/styles/components/Post.module.scss';
import Image from 'next/image';
import Paragraph from './Paragraph';
import Link from 'next/link';
import { UserLayer } from './UserLayer';

const Post = () => {console.log("post")
  return (
    <article className={styles.Post}>
        <header>
            <UserLayer
                userLogoUrl='/images/user-logo.svg'
                username='username'
                additionalElement={(
                    <Link href="">@channelName</Link>
                )}
            >
                <div>
                    <span>43min</span>
                    <div>
                        <button>Follow</button>
                        <div>
                            <button>
                                <Image src={'/images/more-action-post.svg'} alt='more action post' width={4} height={18} />
                            </button>
                            <ul></ul>
                        </div>
                    </div>
                </div>
            </UserLayer>
        </header>
        <main>
            <Paragraph content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore quos, sed aspernatur consequuntur fugiat, vero eveniet, in ab labore natus ipsa qui officia sunt. Cum cupiditate accusamus minima consequatur voluptatum?' />
        </main>
        <footer>
            <button>
                <div>
                    <Image src={'/images/comments.svg'} alt='comments' fill />
                </div>
                <span>567k</span>
            </button>
            <button>
                <div>
                    <Image src={'/images/share.svg'} alt='share' fill />
                </div>
                <span>235k</span>
            </button>
            <button>
                <div>
                    <Image src={'/images/like.svg'} alt='like' fill />
                </div>
                <span>639k</span>
            </button>
            <button>
                <div>
                    <Image src={'/images/save.svg'} alt='save' fill />
                </div>
                <span>save</span>
            </button>
        </footer>
    </article>
  )
}

export default Post