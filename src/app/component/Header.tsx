import React from "react";
import {  Menu, ShoppingCart } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Hero from "./Hero";
import Link from "next/link";

const Header = () => {
  return (
    <>
  
    <div
      className=" w-full flex justify-between text-white p-7"
      
    >
      {/* Logo */}
      <div className="font-bold text-xl">Flower Shop</div>
      
      {/* Navigation for desktop */}
      <ul className="hidden md:flex gap-8 font-sans font-bold list-none">
       <Link href="/"> <li>Home</li> </Link>
       <Link href="/routes/about"> <li>About</li> </Link>
       <Link href="/routes/shop">  <li>Shop</li> </Link>
       <Link href="/routes/contact"><li>Contact</li> </Link>
      </ul>
      
      {/* Mobile Navigation (Hamburger menu) */}
      <div className="md:hidden flex  gap-4">
        <Sheet>
          <SheetTrigger>
            <Menu className="text-white relative bottom-[417px]" />
          </SheetTrigger>
          <SheetContent className="bg-black text-white font-bold hover:text-pink-600">
            <ul className="flex flex-col gap-1 list-none">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </SheetContent>
        </Sheet>

        {/* Cart Icon */}
        <ShoppingCart className="text-white" />
      </div>
      
      {/* Cart Icon for Desktop */}
      <div className="hidden md:flex ">
        <ShoppingCart className="text-white" />
      </div>
    </div>


</>
  );
};

export default Header;
