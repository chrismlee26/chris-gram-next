import Image from "next/image"

function Post({id, img, caption}) {
  return (
    <div className="mx-auto flex flex-col items-center p-1">
        <div className='flex flex-row relative items-center w-96 h-96 grid-page-item' >
          <Image  
            src={img} 
            id={id}
            alt={id}
            layout="fill"
            />
        </div>
          <p className="font-main text-bone absolute"
            >{caption}
          </p>
          <div className="flex items-center justify-between">
            <p>Username</p>
            <p>Upload Time</p>
          </div>

    </div>
  )
}

export default Post