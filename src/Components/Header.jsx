import React from 'react'
import './header.css'
import Logo from './Logo'
import SearchBar from './SearchBar'
import Nav from './Nav'


function Header() {
  return (
    <div>
      <header id="header" className='header fixed-top d-flex align-items-center'>
       <Logo/>
       <SearchBar/>
       <Nav/>
      </header>
    </div>
  )
}

export default Header
