// import Image from 'next/image'
// import React from 'react'

// export default function AboutSection2() {
//   return (
//     <div className=' w-full bg-pink-950'>
//       <div className='flex   content-center justify-between'>
//         <div className=" justify-center content-center w-[700px] p-7">
// <h1 className='text-orange-600 font-bold text-[20px]'>Our Story</h1> <br />
// <p className='text-white font-bold text-[40px] font-serif'>A Journey from Passion to <br /> Florist</p> <br />
// <p className='text-white'>Our journey began with a seed of passion that blossomed into a flourishing business. Allow us to share the story of our founder's deep-rooted love for flowers and how it led to the creation of your trusted floral destination. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
//     <br /> <br />
//     Explore the tale of dedication, creativity, and a vision to spread the joy of nature&apos;s beauty through the art of floral design. Discover the moments that shaped our founder’s path and paved the way for Florist to become a symbol of floral excellence.

// </p>
//         </div>
// <div className="justify-center content-center w-[600px] relative bottom-[90px]">
// <Image src={"/our-story.jpg"} alt='hello' width={600} height={500} className='rounded-t-full'/>
// </div>
//       </div>

//     </div>
//   )
// }
import Image from 'next/image'
import React from 'react'

export default function AboutSection2() {
  return (
    <div className='w-full bg-pink-950'>
      <div className='flex flex-col md:flex-row items-center justify-between md:space-x-5 px-5 py-10'>
        {/* Text Section */}
        <div className='md:w-1/2 w-full p-5'>
          <h1 className='text-orange-600 font-bold text-lg md:text-xl'>Our Story</h1> 
          <br />
          <p className='text-white font-bold text-2xl md:text-4xl font-serif'>
            A Journey from Passion to <br className='hidden md:block' /> Florist
          </p> 
          <br />
          <p className='text-white text-sm md:text-base'>
            Our journey began with a seed of passion that blossomed into a flourishing business. Allow us to share the story of our founder&apos;s deep-rooted love for flowers and how it led to the creation of your trusted floral destination. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            <br /> <br />
            Explore the tale of dedication, creativity, and a vision to spread the joy of nature&apos;s beauty through the art of floral design. Discover the moments that shaped our founder&apos;s path and paved the way for Florist to become a symbol of floral excellence.
          </p>
        </div>

        {/* Image Section */}
        <div className='md:w-1/2 w-full flex justify-center mt-5 md:mt-0'>
          <Image
            src="/our-story.jpg"
            alt="Our Story"
            width={600}
            height={500}
            className='rounded-t-full max-w-full h-auto'
          />
        </div>
      </div>

      
    </div>
  );
}
