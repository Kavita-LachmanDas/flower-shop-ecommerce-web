// import React from 'react'

// export default function Afterhero(props) {
//   return (
//     <div className='bg-pink-50'>
// <div className='p-8 border-l-2 border-orange-500 m-4 '>
//     <p className='font-bold'>{props.number}</p>
//     <h1 className='font-semibold'>{props.order}</h1>
//     <p className='text-gray-500'>{props.para}</p>
//     <br />
//     <br />
// </div>
//     </div>
//   )
// }
import React from 'react';

export default function Afterhero(props) {
  return (
    <div className="bg-pink-50">
      <div className="p-4 sm:p-6 md:p-8 border-l-2 border-orange-500 m-4 sm:m-6 md:m-8">
        <p className="font-bold text-lg sm:text-xl md:text-2xl">{props.number}</p>
        <h1 className="font-semibold text-md sm:text-lg md:text-xl">{props.order}</h1>
        <p className="text-gray-500 text-sm sm:text-base md:text-lg">{props.para}</p>
        <br />
        <br />
      </div>
    </div>
  );
}
