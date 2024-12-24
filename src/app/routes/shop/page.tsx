

import Contact from '@/app/component/Contact'
import Header from '@/app/component/Header'
import HomeD from '@/app/component/HomeD'
import React from 'react'

export default function page() {
  return (
    <div>
      <div className="bg-amber-950">
      <Header cartCount={0}/>
      </div>
        {/* <Shop/> */}
        <HomeD/>
        <Contact/>
    </div>
  )
}
      

