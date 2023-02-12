import React from 'react';
import Logo from '../assets/logo.avif';

export const Header = () => {

  return (
    <header>
        <div className='logo'>
            <img src={Logo} alt=""></img>
            <span>Check List</span>
        </div>
       
    </header>
  )
}

    
