import React from 'react'
import './header.css'
import Logo from './Logo'
import SearchBar from './SearchBar'


function Header() {
  return (
    <div>
      <header id="header" className='header fixed-top d-flex align-items-center'>
       <Logo/>
       <SearchBar/>
      </header>
    </div>
  )
}

export default Header
