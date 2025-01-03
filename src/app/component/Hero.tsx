// import Link from 'next/link';
// import React from 'react'
// interface HeroProps {
//   name: string;
//   head: string;
//   head2: string;
//   para1: string;
//   para2: string;
//   button: string;
// }

// export default function Hero(props:HeroProps) {
//   return (
//     <div>
//         <div className="w-full text-center overflow-x-hidden">
// <div className="text-white  p-5 my-[110px]">
//     <h1 className='text-[20px]'>{props.name}</h1>  <br />
//     <h1 className='leading-[60px] font-bold text-[50px] font-serif'>{props.head} <br />  {props.head2}</h1>  <br />
//     <p className='leading-[30px] '>{props.para1} <br />
//      {props.para2}</p>
   
//      <Link href="/routes/shop"> <button className="bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 w-[150px] p-4 rounded-lg my-6 font-bold">{props.button}</button></Link>
// </div>
//         </div>
//     </div>
//   )
// }
// 'use client'
import Link from 'next/link';
import React from 'react';

interface HeroProps {
  name: string;
  head: string;
  head2: string;
  para1: string;
  para2: string;
  button: string;
}

export default function Hero(props: HeroProps) {
  return (
    <div className="w-full overflow-x-hidden"> {/* Prevent horizontal overflow */}
      <div className="w-full text-center">
        <div className="text-white px-5 my-[110px]"> {/* Changed `p-5` to `px-5` */}
          <h1 className="text-[20px]">{props.name}</h1>
          <br />
          <h1 className="leading-[60px] font-bold text-[50px] font-serif">
            {props.head} <br /> {props.head2}
          </h1>
          <br />
          <p className="leading-[30px]">
            {props.para1} <br />
            {props.para2}
          </p>

          <Link href="/routes/shop">
            <button className="bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 w-[150px] p-4 rounded-lg my-6 font-bold">
              {props.button}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
