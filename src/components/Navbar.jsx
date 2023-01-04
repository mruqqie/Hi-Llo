import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">Hi-Llo</div>
      <div className="user">
        <img src="https://images.pexels.com/photos/14686959/pexels-photo-14686959.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
        <span>Ruqqie</span>
        <button>Log out</button>
      </div>
    </div>
  )
}

export default Navbar