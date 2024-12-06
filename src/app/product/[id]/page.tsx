// import { Productt } from "@/app/types/Productt";
// import Image from "next/image";

// // Same Product Data

// // product data on click 
// // product ke andhar ka data
// const productsData: Productt[] = [
//   { id: "1", img: "/product-1.jpg", name: "Flower", heading: "Custom Floral Designs", del: "$127.00", real: "$86.00" },
//   { id: "2", img: "/product-2.jpg", name: "Bouquet", heading: "Periwinkle Flower", del: "$239.00", real: "$199.00" },
//   { id: "3", img: "/product-3.jpg", name: "Bouquet", heading: "Periwinkle Flower Bouquet", del: "$79.00", real: "$56.00" },
//   { id: "4", img: "/product-4.jpg", name: "Bouquet", heading: "Rose Flower Bouquet", del: "$210.00", real: "$199.00" },
//   { id: "5", img: "/product-5.jpg", name: "Bouquet", heading: "Tulip Custom Flower", del: "$159.00", real: "$129.00" },
//   { id: "6", img: "/product-6.jpg", name: "Bouquet", heading: "Tulip Flower", del: "$129.00", real: "$99.00" },
// ];

// interface ProductDetailProps {
//   params: { id: string };
// }

// export default function ProductDetail({ params }: ProductDetailProps) {
//   const product = productsData.find((p) => p.id === params.id);

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     // <div className="text-center">
//     //   <h1 className="text-2xl font-bold">{product.heading}</h1>
//     //   <Image src={product.img} alt={product.name} width={400} height={400} />
//     //   <p className="text-gray-600">{product.name}</p>
//     //   <p className="text-gray-400 line-through">{product.del}</p>
//     //   <p className="text-green-500 font-bold">{product.real}</p>
//     // </div>



//     <section className="text-gray-600 body-font overflow-hidden">
//   <div className="container px-5 py-24 mx-auto">
//     <div className="lg:w-4/5 mx-auto flex flex-wrap">
//       <Image alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="/product-1.jpg" width={300} height={300}/>
//       <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//         <h2 className="text-sm title-font text-gray-500 tracking-widest">hello</h2>
//         <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
        
//         <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
//         <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
//           <div className="flex">
//             <span className="mr-3">Color</span>
//             <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
//             <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
//             <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
//           </div>
//           <div className="flex ml-6 items-center">
//             <span className="mr-3">Size</span>
//             <div className="relative">
//               <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
//                 <option>SM</option>
//                 <option>M</option>
//                 <option>L</option>
//                 <option>XL</option>
//               </select>
             
//             </div>
//           </div>
//         </div>
//         <div className="flex">
//           <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>
//           <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
          
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
//   );
// }



import { Productt } from "@/app/types/Productt";
import Image from "next/image";
 import Card1Data from "../Card1Data";
import Increment from "@/app/component/Increment";
import Products from "@/app/component/Products";
import Contact from "@/app/component/Contact";
import Header from "@/app/component/Header";
// Same Product Data

// product data on click 
// product ke andhar ka data
const productsData: Productt[] = [
  { id: "1", img: "/product-1.jpg", name: "Flower", heading: "Custom Floral Designs", del: "$127.00", real: "$86.00" },
  { id: "2", img: "/product-2.jpg", name: "Bouquet", heading: "Periwinkle Flower", del: "$239.00", real: "$199.00" },
  { id: "3", img: "/product-3.jpg", name: "Bouquet", heading: "Periwinkle Flower Bouquet", del: "$79.00", real: "$56.00" },
  { id: "4", img: "/product-4.jpg", name: "Bouquet", heading: "Rose Flower Bouquet", del: "$210.00", real: "$199.00" },
  { id: "5", img: "/product-5.jpg", name: "Bouquet", heading: "Tulip Custom Flower", del: "$159.00", real: "$129.00" },
  { id: "6", img: "/product-6.jpg", name: "Bouquet", heading: "Tulip Flower", del: "$129.00", real: "$99.00" },
];

interface ProductDetailProps {
  params: { id: string };
}

export default function ProductDetail({ params }: ProductDetailProps) {
  const product = Card1Data.find((p) => p.id === params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
  
<div>
  <div className="bg-amber-950">
  <Header/>
  </div>
    <section className="text-gray-600 body-font overflow-hidden">
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <Image alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={product.img} width={300} height={300}/>
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 className="text-sm title-font text-gray-500 tracking-widest">{product.heading1}</h2>
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.heading2}</h1>
          <div className="flex mb-4">
            <span className="flex items-center">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <span className="text-gray-600 ml-3">4 Reviews</span>
            </span>
            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
              <a className="text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
          <p className="leading-relaxed">{product.para1}</p>
          <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          
            <div className="flex ml-6 items-center">
              
              <div className="relative">
               
                <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="flex">
            <span className="title-font font-medium text-2xl text-gray-900">{product.price} </span>
            
          
            <span className="title-font font-medium text-2xl text-gray-900 relative left-8"><Increment/> </span>
           <br /> <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-center">Add To Cart</button>
            <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
              </svg>
            </button>
          </div>
          <Image className="mt-11" alt="ecommerce"  src="/visa.PNG" width={800} height={800}/>
        </div>

        
      </div>




<div className="des my-[30px]">
  <div className="text p-5">
    <h1 className="text-black text-[40px] font-serif">Description</h1>
    <p>Dive into the charm of nature with our exquisite flower bouquet, a perfect blend of vibrant colors and mesmerizing fragrances. Each bloom is handpicked with care, ensuring a luxurious experience for you or your loved ones.
<br />
🌸 Free Shipping on orders above $50
<br />
💰 No-Risk Money-Back Guarantee
<br />
🤝 Hassle-Free Refunds
<br />
🔒 100% Secure Payments <br />
Elevate every moment with nature’s finest creations. Order now and indulge in beauty with confidence!

    </p>

  </div>

  
</div>
     
    </div>

    <Contact/>
  </section>
  </div>
);
}