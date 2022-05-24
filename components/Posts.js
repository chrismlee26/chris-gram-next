import Post from './Post'

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


]


function Posts() {
  return (
    <div>
      {posts.map((post) => 
        <Post 
          id={post.id}
          key={post.id}
          img={post.img}
          caption={post.caption}
          />
      )}
    </div>
  )
}

export default Posts