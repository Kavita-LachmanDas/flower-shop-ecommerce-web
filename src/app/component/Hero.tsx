import React from 'react'
import { Button } from './ui/button'

export default function Hero(props) {
  return (
    <div>
        <div className="w-full text-center">
<div className="text-white  p-5 my-[110px]">
    <h1 className='text-[20px]'>{props.name}</h1>  <br />
    <h1 className='leading-[60px] font-bold text-[50px] font-serif'>{props.head} <br />  {props.head2}</h1>  <br />
    <p className='leading-[30px] '>{props.para1} <br />
     {props.para2}</p>
     {/* <Button variant={'destructive'} className='my-[20px] p-6 w-[150px]'>
        {props.button}
     </Button> */}
     <button className="bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 w-[150px] p-4 rounded-lg my-6 font-bold">{props.button}</button>
</div>
        </div>
    </div>
  )
}
