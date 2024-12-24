import React from 'react'
interface TextProps {
  name: string;
  head: string;
  head2: string;
  para1: string;
  para2: string;
}

export default function Text(props:TextProps) {
  return (
    <div>
        <div className="w-full text-center bg-pink-500">
<div className="text-white  p-5 ">
    <h1 className='text-[20px]'>{props.name}</h1>  <br />
    <h1 className='leading-[60px] font-bold text-[50px] font-serif'>{props.head} <br />  {props.head2}</h1>  <br />
    <p className='leading-[30px] '>{props.para1} <br />
     {props.para2}</p>
    </div>
        </div>
    </div>
  )
}
