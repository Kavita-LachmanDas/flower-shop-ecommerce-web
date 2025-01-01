// import { Linkedin } from 'lucide-react'
// import Link from 'next/link'
// import React from 'react'
// import { BsArrow90DegUp, BsGithub, BsLinkedin } from 'react-icons/bs'

// export default function Contact() {
//   return (
//     <div>
//         <div className=" bg-red-50">
//             <div className="flex ">
// <div className="text1 w-[600px] p-[20px] gap-6">
//     <h1 className='font-bold text-2xl'>Flower Shop</h1> <br />
//     <p className='text-gray-600'>Welcome to the world of Florist, where flowers come to life with love  <br />
//     and creativity. Discover our story, our passion for flowers, and our <br />
//      commitment to making every moment memorable.
//     </p>
// </div>

// <div className="text1 w-[300px] p-[20px] gap-6">
//     <h1 className='font-bold text-2xl'>Links</h1> <br />
// <Link href={"/"} className='text-gray-600'>Home</Link> <br />
// <Link href={"/"} className='text-gray-600'>About</Link> <br />
// <Link href={"/"} className='text-gray-600'>Shop</Link> <br />
// <Link href={"/"} className='text-gray-600'>Contact</Link> <br />
// </div>

// <div className="text1 w-[400px] p-[20px] gap-6">
//     <h1 className='font-bold text-2xl'>Contact Us</h1>  <br />
//     <p className='text-gray-600'>Address: 13 Fifth Avenue, New York 101660 </p>
//  <a href="mailto:kavitaluhana11@gmail.com" className='text-gray-600'>Email: kavitaluhana11@gmail.com</a> <br />
// <a href="tel:+923197946724" className='text-gray-600'>Phone: 003197946724</a>
    
// </div>
// <br />

//             </div>
//             <br /><br /><br />
//             <div className="w-full bg-gray-700 h-[1px]"></div>
          
            
// <div className="flex justify-between p-8">
// <p className='text-gray-600'>Copyright © 2024 Flower Shop</p>
// <div className="flex gap-4 text-[25px]">
// <BsLinkedin/><BsGithub/>
// <Link href={"#top"} ><BsArrow90DegUp className='bg-red-400 p-1 text-white'/></Link>
// </div>
// </div>
//         </div>
//     </div>
//   )
// }

import Link from 'next/link';
import React from 'react';
import { BsArrow90DegUp, BsGithub, BsLinkedin } from 'react-icons/bs';

export default function Contact() {
  return (
    <div className="bg-red-50">
      {/* Main Content Section */}
      <div className="flex flex-wrap lg:flex-nowrap p-6 gap-6">
        {/* Flower Shop Section */}
        <div className="flex-1 p-4">
          <h1 className="font-bold text-2xl">Flower Shop</h1>
          <p className="text-gray-600 mt-4">
            Welcome to the world of Florist, where flowers come to life with love and creativity. Discover our story, our
            passion for flowers, and our commitment to making every moment memorable.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex-1 p-4">
          <h1 className="font-bold text-2xl">Links</h1>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/" className="text-gray-600 hover:text-red-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/routes/about" className="text-gray-600 hover:text-red-400">
                About
              </Link>
            </li>
            <li>
              <Link href="/routes/shop" className="text-gray-600 hover:text-red-400">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/routes/contact" className="text-gray-600 hover:text-red-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="flex-1 p-4">
          <h1 className="font-bold text-2xl">Contact Us</h1>
          <p className="text-gray-600 mt-4">Address: 13 Fifth Avenue, New York 101660</p>
          <p>
            <a href="mailto:kavitaluhana11@gmail.com" className="text-gray-600 hover:text-red-400">
              Email: kavitaluhana11@gmail.com
            </a>
          </p>
          <p>
            <a href="tel:+923197946724" className="text-gray-600 hover:text-red-400">
              Phone: 03197946724
            </a>
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full bg-gray-700 h-[1px]"></div>

      {/* Footer Section */}
      <div className="flex flex-wrap justify-between items-center p-6">
        <p className="text-gray-600 text-sm">Copyright © 2024 Flower Shop</p>
        <div className="flex gap-4 text-[25px]">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <BsLinkedin className="hover:text-red-400" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <BsGithub className="hover:text-red-400" />
          </a>
          <Link href="#top">
            <BsArrow90DegUp className="bg-red-400 p-1 text-white hover:bg-red-500" />
          </Link>
        </div>
      </div>
    </div>
  );
}
