import React from 'react'
import Header from './header'
import Footer from './footer'

export default function Layout({children}) {
  return (
<div className="min-h-screen h-full w-full flex flex-col bg-no-repeat bg-[url('/car.jpg')] bg-cover">
  <div className="flex-grow">
  <Header/>
<main>
    {children}
</main>
</div>
<Footer/>
</div>
  )
}