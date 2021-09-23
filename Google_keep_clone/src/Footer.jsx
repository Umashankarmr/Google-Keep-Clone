import React, {useState} from 'react';

const Footer = ()=>{
const year = new Date().getFullYear();

return(
<>
<div className='container'></div>
<footer className='footer'>
    <p>copyright &copy; {year}</p>
</footer>
</>

);
}
export default Footer;