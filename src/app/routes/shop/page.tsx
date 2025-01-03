

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
import HomeD from "@/app/component/HomeD";


interface Product {
  id: string;
  img: string;
  name: string;
  heading: string;
  del: string;
  real: string;
}

const ShopPage = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  
  let products: Product[] = [];
  try {
    const fetchapi = await fetch(apiUrl || '', { cache: "no-store" }); // Disable caching for fresh data
    if (fetchapi.ok) {
      const jsonData = await fetchapi.json();
      products = jsonData.productList || [];
    } else {
      console.error('API request failed:', fetchapi.status);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }

  return (
    <div>
      <div className="bg-amber-950">
        <Header cartCount={0} />
      </div>

    <HomeD/>
              <Contact />
            </div>
          
   
    
  );
};

export default ShopPage;
