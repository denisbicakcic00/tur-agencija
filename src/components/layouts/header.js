import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <header style={{height: '100px', backgroundColor: "#43AA8B"}}>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'stretch'}}>
          <a href='/'> 
            <div style={{height: '90px', width: '35%', display: 'flex', alignItems: 'center'}}>
                <img src='/logo.png' alt='Logo' style={{height: 50}}></img>
                <h2 style={{color: 'white'}}>TURISTIČKA AGENCIJA</h2>
            </div>
          </a>
            <div style={{height: '90px', width: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <input type='text' placeholder='Pretraži...' style={{borderRadius: '10px', border: 'none', outline: 'none', padding: '5px', width: '100%'}}></input>
            </div>
            <div style={{height: '90px', width: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', margin: '10px'}}>
                <Link href='/users/login'>
                  <img src='/profile.png' alt='Profil'></img>
                </Link>
            </div>
        </div>    
    </header>
  );
}

export default Header;