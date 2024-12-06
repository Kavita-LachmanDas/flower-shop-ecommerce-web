import React from 'react'
import Header from './Header'
import Products from './Products'
import Contact from './Contact'


export default function Shop() {
  return (
    <>
    <div className='bg-amber-950 '>
        <Header/>
       
    </div>
     <br />
   
     <h1 className='text-3xl font-bold p-4'>Shop</h1> 
     <hr className='h-1 w-full text-gray-900'/> 

     <div className="flex  flex-wrap justify-center">
<Products img='/product-1.jpg' name='Flower' heading='Custom Floral Designs' del='$127.00' real='$86.00'/>
<Products img='/product-2.jpg' name='Bouquet' heading='Periwinkle Flower' del='$239.00' real='$199.00'/> 
<Products img='/product-3.jpg' name='Bouquet' heading='Periwinkle Flower Bouquet' del='$79.00' real='$56.00'/> 
</div>

{/* /////////second portion of cards */}
<div className="flex  flex-wrap justify-center">
<Products img='/product-4.jpg' name='Bouquet' heading='Rose Flower Bouguet' del='$210.00' real='$199.00'/>
<Products img='/product-5.jpg' name='Bouquet' heading='Tulip Custom Flower' del='$159.00' real='$129.00'/> 
<Products img='/product-6.jpg' name='Bouquet' heading='Tulip Flower' del='$129.00' real='$99.00'/> 
</div>

<Contact/>
     </>
  )
}