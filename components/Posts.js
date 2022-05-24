import Post from './Post'

// Connect to db, map post

// dummy data
const posts = [
  {
    id: 123,
    img: '/../public/images/IMG_1144.jpg',
    caption: 'test caption',
  }
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