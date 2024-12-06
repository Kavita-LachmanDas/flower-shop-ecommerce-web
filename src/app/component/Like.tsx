import Image from 'next/image'
import React from 'react'

export default function AboutLike(props) {
  return (
    <div>
        <section className="text-gray-600 body-font ">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
    <div className="flex gap-6">
  
    <Image className="object-cover object-center rounded-t-[400px]" alt="hero"  src={props.src2} height={props.height} width={props.width}/>
    </div>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
    <p className='text-red-500 text-xl'>{props.about}</p> <br />
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{props.heading1}
        <br className="hidden lg:inline-block"/>{props.heading2}
      </h1>
      <p className="mb-8 leading-relaxed">{props.para}</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-800 rounded text-lg">{props.button}</button>
       
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
