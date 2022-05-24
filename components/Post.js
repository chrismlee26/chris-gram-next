import Image from "next/image"

function Post({id, img, caption}) {
  return (
    <div className="flex flex-col items-center">
      <div className='flex flex-col relative items-center w-96 h-96 mx-10 my-10' >
        <Image  
          src={img} 
          id={id}
          alt={id}
          layout="fill"
          />
      </div>
      <p>{caption}</p>

    </div>
  )
}

export default Post