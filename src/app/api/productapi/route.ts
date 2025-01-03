

import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({productList :[  { id: "1", img: "/product-1.jpg", name: "Flower", heading :"Custom Floral Designs", del: "$127.00", real: "$86.00" },
    { id: "2", img: "/product-2.jpg", name: "Bouquet",heading: "Periwinkle Flower", del: "$239.00", real: "$199.00" },
    {id: "3", img: "/product-3.jpg", name: "Bouquet",heading: "Periwinkle Flower Bouquet", del: "$79.00", real: "$56.00" },
    { id: "4", img: "/product-4.jpg", name: "Bouquet",heading: "Rose Flower Bouquet", del: "$210.00", real: "$199.00" },
    { id: "5", img: "/product-5.jpg", name: "Bouquet",heading: "Tulip Custom Flower", del: "$159.00", real: "$129.00" },
    { id: "6", img: "/product-6.jpg", name: "Bouquet",heading: "Tulip Flower", del: "$129.00", real: "$99.00" },
   
]},{status:200});
}
