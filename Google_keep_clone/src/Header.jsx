import React, {useState} from 'react';
import logo from './image/images.jpg'

const Header = ()=>{

return(
<>
<div className='header'>
    <img src={logo} alt='logo' with='70' height='50'/>
    <h1>Google Keep Clone</h1>
</div>
</>

);
}
export default Header;      