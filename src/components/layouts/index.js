import React from 'react'
import Header from './header'
import LoggedHeader from './loggedheader'
import Footer from './footer'
import useIsLogged from '@/hooks/is-logged'

export default function Layout({children}) {
  const isLogged = useIsLogged();
  return (
<div className="min-h-screen h-full w-full flex flex-col bg-no-repeat bg-[url('/car.jpg')] bg-cover">
  <div className="flex-grow">
  { isLogged ? <LoggedHeader/> : <Header/>}
<main>
    {children}
</main>
</div>
<Footer/>
</div>
  )
}