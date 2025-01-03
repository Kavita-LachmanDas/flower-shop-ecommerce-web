

// import Contact from '@/app/component/Contact'
// import Header from '@/app/component/Header'
// // import HomePage from '@/app/component/HomeD'
// // import HomeD from '@/app/component/HomeD'
// import React from 'react'

// export default function page() {
//   return (
//     <div>
//       <div className="bg-amber-950">
//       <Header cartCount={0}/>
//       </div>
//         {/* <Shop/> */}
//         {/* <HomeD/> */}
//         {/* <HomePage/> */}

//         <Contact/>
//     </div>
//   )
// }

import Contact from "@/app/component/Contact";
import Header from "@/app/component/Header";
import Products from "@/app/component/Products";
import Link from "next/link";




interface Product {
  id: string;
  img: string;
  name: string;
  heading: string;
  del: string;
  real: string;
}
export default async function page() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  
  let products = [];

  try {
    const fetchapi = await fetch(apiUrl || '');
    console.log('API Response:', fetchapi); // Log the fetch response
    if (!fetchapi.ok) {
      console.error('API request failed', fetchapi.status);
      return <div>Failed to load products</div>;
    }
    const contentType = fetchapi.headers.get("Content-Type");
    if (!contentType || !contentType.includes("application/json")) {
      console.error("Expected JSON, but received", contentType);
      return <div>Invalid API response</div>;
    }
    const jsonData = await fetchapi.json();
    console.log('Parsed JSON:', jsonData); // Log the parsed JSON
    products = jsonData.productList || [];  // Ensure it's an empty array if no data
  } catch (error) {
    console.error("Error fetching data:", error);
    products = []; // Fallback to an empty array on error
  }

  return (
    <div>
      
       <div className="bg-amber-950">
      <Header cartCount={0}/>
      </div>
    
    <div className="flex flex-wrap justify-center">
      {(!products || products.length === 0) ? (
        <div>Failed to load products</div>
      ) : (
        products.map((product: Product) => (
          <div key={product.id} className="flex flex-wrap justify-center">
            <Link href={`/product/${product.id}`}>
              <Products {...product} />
            </Link>
            {/* <Contact/> */}
          </div>
         
        ))
        
      )}
      <Contact/>
    </div>
    </div>
  );
}
