import Post from './Post'
import { useRouter } from 'next/router'

// Connect to db, map post

// dummy data
const posts = [
  {
    id: 123,
    img: '/../public/images/IMG_1144.jpg',
    caption: 'post 1 test caption',
  },
  {
    id: 234,
    img: '/../public/images/IMG_1144.jpg',
    caption: 'post 2 test caption',
  },
  {
    id: 345,
    img: '/../public/images/IMG_1144.jpg',
    caption: 'post 3 test caption',
  },
  {
    id: 456,
    img: '/../public/images/IMG_1144.jpg',
    caption: 'post 4 test caption',
  },
  {
    id: 567,
    img: '/../public/images/IMG_1144.jpg',
    caption: 'post 5 test caption',
  },
  {
    id: 678,
    img: '/../public/images/IMG_1144.jpg',
    caption: 'post 6 test caption',
  },
  {
    id: 789,
    img: '/../public/images/IMG_1144.jpg',
    caption: 'post 7 test caption',
  },
]

// Add props to push href-prop
// Decide how to name url's 

function Posts() {
  const router = useRouter()
  
  const handleClick = (e) => {
    e.preventDefault()
    router.push('/')
    // router.push('/chrisgram/' + {href-prop})

  }


  return (
    <div className="grid grid-cols-3 grid-rows-3">

      {posts.map((post) => 
        <div>
          <a onClick={handleClick}>
          <Post 
            id={post.id}
            key={post.id}
            img={post.img}
            caption={post.caption}
            />
          </a>
        </div>
      )}
    </div>
  )
}

export default Posts