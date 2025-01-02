// import Link from "next/link";
// // import { Productt } from "../types/Productt";
// import Products from "./Products";


// // Sample Product Data

// // home page pr card display krne hai aska data hai yeh
// // const productsData: Productt[] = [
// //   { id: "1", img: "/product-1.jpg", name: "Flower", heading: "Custom Floral Designs", del: "$127.00", real: "$86.00" },
// //   { id: "2", img: "/product-2.jpg", name: "Bouquet", heading: "Periwinkle Flower", del: "$239.00", real: "$199.00" },
// //   { id: "3", img: "/product-3.jpg", name: "Bouquet", heading: "Periwinkle Flower Bouquet", del: "$79.00", real: "$56.00" },
// //   { id: "4", img: "/product-4.jpg", name: "Bouquet", heading: "Rose Flower Bouquet", del: "$210.00", real: "$199.00" },
// //   { id: "5", img: "/product-5.jpg", name: "Bouquet", heading: "Tulip Custom Flower", del: "$159.00", real: "$129.00" },
// //   { id: "6", img: "/product-6.jpg", name: "Bouquet", heading: "Tulip Flower", del: "$129.00", real: "$99.00" },
// // ];

// export default async function HomePage() {
//   const fetchapi = await fetch('http://localhost:3000/api/productapi');
//   const jsonData = await fetchapi.json();
//   return (
//     <div className="flex flex-wrap justify-center">
//   {jsonData.productList.map((product)=>(
//     <div className="flex flex-wrap justify-center">
//       {/* {productsData.map((product) => ( */}
//         <Link key={product.id} href={`/product/${product.id}`}>
//           <Products {...product} />
//         </Link>
//         </div>
//   ))}
  
//       {/* ))} */}
//     </div>
//   );
// }

import Link from "next/link";
import Products from "./Products";

// Define a proper type for the product data
const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:3000';
interface Product {
  id: string;
  img: string;
  name: string;
  heading: string;
  del: string;
  real: string;
}

export default async function HomePage() {
  // Fetch product data from the API
  // const fetchapi = await fetch("http://localhost:3000/api/productapi");
  const fetchapi = await fetch(`${apiUrl}/api/productapi`);
  const jsonData: { productList: Product[] } = await fetchapi.json(); // Ensure proper typing

  return (
    <div className="flex flex-wrap justify-center">
      {jsonData.productList.map((product) => (
        <Link key={product.id} href={`/product/${product.id}`}>
          <Products {...product} />
        </Link>
      ))}
    </div>
  );
}
