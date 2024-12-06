// import Link from "next/link";
// import Products from "./component/Products";
// import { Productt } from "./types/Productt";

// // Sample Product Data

// // home page pr card display krne hai aska data hai yeh
// const productsData: Productt[] = [
//   { id: "1", img: "/product-1.jpg", name: "Flower", heading: "Custom Floral Designs", del: "$127.00", real: "$86.00" },
//   { id: "2", img: "/product-2.jpg", name: "Bouquet", heading: "Periwinkle Flower", del: "$239.00", real: "$199.00" },
//   { id: "3", img: "/product-3.jpg", name: "Bouquet", heading: "Periwinkle Flower Bouquet", del: "$79.00", real: "$56.00" },
//   { id: "4", img: "/product-4.jpg", name: "Bouquet", heading: "Rose Flower Bouquet", del: "$210.00", real: "$199.00" },
//   { id: "5", img: "/product-5.jpg", name: "Bouquet", heading: "Tulip Custom Flower", del: "$159.00", real: "$129.00" },
//   { id: "6", img: "/product-6.jpg", name: "Bouquet", heading: "Tulip Flower", del: "$129.00", real: "$99.00" },
// ];

// export default function HomePage() {
//   return (
//     <div className="flex flex-wrap justify-center">
//       {productsData.map((product) => (
//         <Link key={product.id} href={`/product/${product.id}`}>
//           <Products {...product} />
//         </Link>
//       ))}
//     </div>
//   );
// }
// import React from 'react'
// import HomeD from './component/HomeD'

// export default function page() {
//   return (
//     <div>
//       <HomeD/>
//     </div>
//   )
// }


// import { Button } from '@/components/ui/button'

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
// import { Menu } from "lucide-react"


// export default function page() {
//   return (
    // <div className="bg-black text-white h-screen flex justify-center content-center ">
    //   {/* <h2>hello</h2> */}
    //   {/* <Button>hii</Button> */}
    //   <Carousel>
    //     <CarouselContent>
    //       <CarouselItem>hi</CarouselItem>
    //       <CarouselItem>abc</CarouselItem>
    //       <CarouselItem>123</CarouselItem>
    //     </CarouselContent>
    //     <CarouselPrevious/>
    //     <CarouselNext />
    //   </Carousel>

    // </div>
    // <div>

//      import React from "react";
// import { Menu, ShoppingCart } from "lucide-react";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";


// const Header = () => {
//   return (
//     <div className="w-full flex justify-between bg-none p-7 " style={{
//       backgroundImage: `linear-gradient(rgba(128, 0, 0, 0.3), rgba(0, 0, 0, 0.8)), url('/bg-img.jpg')`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       height: '100vh',
     
//     }}>
//       <div className="font-bold text-xl">Flower Shop
//       </div>
//       <ul className="hidden md:flex gap-8 font-sans font-bold list-none ">
//         <li>Home</li>
//         <li>About</li>
//         <li>Contact</li>
//         <li>Careers</li>
//       </ul>
//       <Sheet>
//         <SheetTrigger className="">
//           <ShoppingCart className="relative bottom-[314px]" />
//         </SheetTrigger>
//         <SheetContent className="bg-black text-white font-bold hover:text-pink-600">
//           <ul className="flex flex-col gap-1 list-none ">
//             <li>Home</li>
//             <li>About</li>
//             <li>Contact</li>
//             <li>Careers</li>
//           </ul>
//         </SheetContent>
//       </Sheet>
//     </div>
//   );
// };

// export default Header;


import React from 'react'
import Header from './component/Header'
import Afterhero from './component/Afterhero'
import Hero from './component/Hero'
import AboutLike from './component/AboutLike'
import HomeD from './component/HomeD'
import Like from './component/Like'
import Text from './component/Text'
import Info from './component/Info'
import Contact from './component/Contact'

export default function page() {
  return (
    <>
    <div className='header'>
      <Header/>
     
  <Hero name='Welcome to Florist' head='Let&apos;s Make Beautiful Flowers' head2='a Part of Your Life.' para1='Explore a vibrant tapestry of blooms and arrangements that add color, fragrance, and elegance to your life.'
  para2='Discover the perfect floral expression for every moment and occasion.' button='Shop Now'/>
   
</div>

<div className="flex  flex-wrap lg:flex-nowrap justify-center gap-4 p-4">
  <Afterhero number='01' order='Order Online' para='Share some details here. This is Flexible section where you can share anything you want.'/>
  <Afterhero number='02' order='Free Shipping' para='Share some details here. This is Flexible section where you can share anything you want.'/>
  <Afterhero number='03' order='More Freshness' para='Share some details here. This is Flexible section where you can share anything you want.'/>
  <Afterhero number='03' order='Safe Payment' para='Share some details here. This is Flexible section where you can share anything you want.'/>

</div>
<AboutLike src1='/img1.jpg' src2='/img2.jpg' width='300' height='300' about='About Florist' heading1='Blossoming Your Special' heading2='Moments with Nature&apos;s Finest' para='Welcome to Florist, where floral artistry meets passion for nature&apos;s beauty. Our story is rooted in a deep love for flowers and a commitment to creating unforgettable moments for our customers.' button='READ MORE' />

<div className="w-full">
<div className='bg-pink-300'>
<Text className='text-black' name='NEW ARRIVAL' head='Discover the Latest Additions at Your' head2='Top Choice Flower Shop'
            para1='Share some details here. This is Flexible section where you can share anything you want.'  />





















<HomeD/>





{/* <div className="flex  flex-wrap justify-center">
<Products img='/product-1.jpg' name='Flower' heading='Custom Floral Designs' del='$127.00' real='$86.00'/>
<Products img='/product-2.jpg' name='Bouquet' heading='Periwinkle Flower' del='$239.00' real='$199.00'/> 
<Products img='/product-3.jpg' name='Bouquet' heading='Periwinkle Flower Bouquet' del='$79.00' real='$56.00'/> 
</div> */}

{/* /////////second portion of cards
{/* <div className="flex  flex-wrap justify-center"> */}
{/* <Products img='/product-4.jpg' name='Bouquet' heading='Rose Flower Bouguet' del='$210.00' real='$199.00'/>
<Products img='/product-5.jpg' name='Bouquet' heading='Tulip Custom Flower' del='$159.00' real='$129.00'/>  */}
{/* <Products img='/product-6.jpg' name='Bouquet' heading='Tulip Flower' del='$129.00' real='$99.00'/>  */}
{/* </div> } */}

</div>
</div>
<div className=""> 
<Like  src2='/img3.jpg' width='800' height='900' about='SPECIAL OFFER' heading1='Your Floral Journey Begins Here: ' heading2='Get 20% Off Your First Order!' button='Shop Now' />
</div>

<Text className='text-black' name='TESTIMONAIL' head='Hear From Our Happy Customers'
            para1='Share some details here. This is Flexible section where you can share anything you want.' />

<Info/>

<div className="bg-red-300 ">
<Like  src2='/img8.jpg' width='600' height='600' about='SPECIAL OFFER' heading1='Explore Our Exquisite Floral ' heading2='Collections & Shop Now for the Perfect Blooms' button='Shop Now' />
</div>

<Contact/>


    </>
  )
}
