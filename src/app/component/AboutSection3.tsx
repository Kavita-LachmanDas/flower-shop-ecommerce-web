import Image from 'next/image'
import React from 'react'

export default function AboutSection3() {
  return (
    <>
    <div className='w-full p-9 flex justify-center '>
        <Image src={"/about.jpg"} alt='hi' width={1100} height={100} className='rounded-[30px]'/>
    </div>

    <div className="flex flex-col md:flex-row p-3 m-5 gap-4">
  {/* Vision Section */}
  <div className="flex-1">
    <h1 className="font-bold font-serif text-black text-lg md:text-xl">Our Vision</h1>
    <p className="text-gray-500 text-sm md:text-base">
      At Florist, our vision is to be the guiding light for floral elegance and creativity. We aspire to inspire, by reimagining the way flowers connect people, bring joy, and create lasting memories. We envision a world where every gesture, whether grand or subtle, is accompanied by the enchantment of flowers.
    </p>
  </div>

  {/* Mission Section */}
  <div className="flex-1">
    <h1 className="font-bold font-serif text-black text-lg md:text-xl">Our Mission</h1>
    <p className="text-gray-500 text-sm md:text-base">
      Our mission is to craft floral artistry that elevates moments into memories. With dedication and expertise, we strive to provide our customers with the freshest, most enchanting blooms and personalized service that reflects the beauty and emotions of every occasion.
    </p>
  </div>
</div>

    </>
  )
}
