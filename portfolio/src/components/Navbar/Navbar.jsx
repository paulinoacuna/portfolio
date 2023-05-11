import React, { useState } from 'react'


import "./Navbar.css"


const Navbar = () => {
    const [fun, setfun] = useState();





  return (
    <div className='navbar'>
      <div>
        Home
      </div>
      <div>
        Projects
      </div>
      <div>
        Contact
      </div>
    </div>
  )
}

export default Navbar
