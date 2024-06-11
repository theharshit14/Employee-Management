import React from 'react';
// import Blogs from './Blogs';
// import Profile from './Profile';

const Header = () => {
  return (
    <div className='font-abc bg-blue-950 text-white'>
      <ul className='flex py-3'>
        <li className='px-4'><a href='/blogs.js'>Blogs</a></li>
        <li className='px-4'><a href='/profile.js'>Profile</a></li>
      </ul>
    </div>
  )
}

export default Header;
