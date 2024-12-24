import React from 'react'

import Header from './Header'
import AboutLike from './AboutLike'
import AboutSection2 from './AboutSection2'
import AboutSection3 from './AboutSection3'
import Contact from './Contact'
import Like from './Like'

export default function AboutSection1() {
  return (
    <div>
    

<div className="aboutbg">
<Header cartCount={0}/>
      <div className=" w-full flex flex-col justify-center content-center relative top-8">
      
      <div className=" justify-center content-center text-center text-white p-4">
   <h1 className='text-[20px] font-bold'>About Us</h1>
   <p className='font-bold text-[60px] font-serif'>Embarking on the Path to <br /> Our Dreams</p>
   <p>Share some details here. This is Flexible section where you can share anything you want. It could be details or <br />
    some information.</p>
</div></div>
</div>




<AboutLike src1='/img1.jpg' src2='/img2.jpg' width={300} height={300} about='About Florist' heading1='Blossoming Your Special' heading2='Moments with Nature&apos;s Finest' para='Welcome to Florist, where floral artistry meets passion for nature&apos;s beauty. Our story is rooted in a deep love for flowers and a commitment to creating unforgettable moments for our customers.' button='READ MORE' />

<AboutSection2/> <br />
<AboutSection3/>
<div className="bg-pink-100">
<Like  src2='/img8.jpg' width={600} height={600} about='SPECIAL OFFER' heading1='Explore Our Exquisite Floral ' heading2='Collections & Shop Now for the Perfect Blooms' button='Shop Now' para={''} />
</div>
<Contact/>

</div>
    

    
  )
}
