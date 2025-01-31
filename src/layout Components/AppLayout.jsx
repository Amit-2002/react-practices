import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet, useNavigation } from 'react-router-dom'

function AppLayout() {
    const navigation = useNavigation();
    console.log(navigation);

    if(navigation === 'loading') return <h1>loodding.......</h1>


  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default AppLayout