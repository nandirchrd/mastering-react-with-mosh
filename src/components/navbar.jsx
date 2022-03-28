import React from 'react';

const Navbar = (props) => {
  // DESTRUCTURING PROPS
  const { totalCounters } = props;
  return (
    <nav className='navbar navbar-light bg-primary px-2 py-0'>
      <a href='#' className='navbar-brand text-light'>
        NavBar <span className='badge badge-pill'>{totalCounters}</span>
      </a>
    </nav>
  );
};

export default Navbar;
