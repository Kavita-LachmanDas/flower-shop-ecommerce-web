import React from "react";

import Image from "next/image";
import { BsStarFill } from "react-icons/bs";

interface ProductProps {
  img: string;
  name: string;
  heading: string;
  del: string;
  real: string;
}

export default function Products(props: ProductProps) {
  return (
    <div className="w-full flex content-center justify-center p-[10px]">
      <div className="p-[8px] mb-[20px] text-center">
        <div className="img">
          <Image src={props.img} alt={props.name} width={300} height={300} />
        </div>
        <div className="">
          <p className="text-gray-400">{props.name}</p>
          <h2 className="font-serif font-bold text-[20px] text-black">{props.heading}</h2>
          <div className="flex justify-center">
            <BsStarFill/>
            <BsStarFill/>
            <BsStarFill/>
            <BsStarFill/>
            <BsStarFill/>
            {/* <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon /> */}
          </div>
          <del className="font-bold text-gray-500 text-[20px]">{props.del}</del>
          <span className="text-green-500 font-bold">{props.real}</span>
        </div>
      </div>
    </div>
  );
}
