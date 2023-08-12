import React from 'react';
import { useState } from 'react';
// import link
import { Link } from 'react-router-dom';
// import logo
import Logo from '../assets/img/home-icon.svg';
import { Menu } from '@headlessui/react';
import {  RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className='py-3 mb-12 border-b'>
      <div className='w-full px-2 flex justify-between items-center'>
        <div className='flex items-center gap-8'>
          <Link to='/' className='flex flex-row justify-center items-center'>
            <img src={Logo} alt='' className=" w-14" />
            <h1 className='text-3xl font-semibold'>Estatery</h1>
          </Link>
          <Link to='/' className='text-xl font-medium hover:bg-violet-400 hover:text-white p-1 w-fit rounded'>
            Rent
          </Link>
          <Link to='/' className='text-xl font-medium hover:bg-violet-400 hover:text-white p-1 w-fit rounded'>
            Buy
          </Link>
          <Link to='/' className='text-xl font-medium hover:bg-violet-400 hover:text-white p-1 w-fit rounded'>
            Sell
          </Link>
          <Menu as='div' className='dropdown w-auto text-xl'>
            <Menu.Button
              onClick={() => setIsOpen(!isOpen)}
              className='dropdown-btn border-none'
            >
              <div>
                <div className=''>Manage properties</div>
              </div>
              {isOpen ? (
                <RiArrowUpSLine className='dropdown-icon-secondary' />
              ) : (
                <RiArrowDownSLine className='dropdown-icon-secondary' />
              )}
            </Menu.Button>

            <Menu.Items className='dropdown-menu w-auto'>
              <Menu.Item
                as='li'
                className='cursor-pointer hover:text-violet-700 transition'
              >
                <Link to='/add-property'>Add Property</Link>
              </Menu.Item>
              <Menu.Item
                as='li'
                className='cursor-pointer hover:text-violet-700 transition'
              >
                <Link to='/manage-properties'>My Favouites</Link>
              </Menu.Item>
            </Menu.Items>
          </Menu>

          <Menu as='div' className='dropdown w-auto text-xl'>
            <Menu.Button
              onClick={() => setIsOpen(!isOpen)}
              className='dropdown-btn border-none'
            >
              <div>
                <div className=''>Resources</div>
              </div>
              {isOpen ? (
                <RiArrowUpSLine className='dropdown-icon-secondary' />
              ) : (
                <RiArrowDownSLine className='dropdown-icon-secondary' />
              )}
            </Menu.Button>

            <Menu.Items className='dropdown-menu w-auto'>
              <Menu.Item
                as='li'
                className='cursor-pointer hover:text-violet-700 transition'
              >
                <Link to='/add-property'>Blog</Link>
              </Menu.Item>
              <Menu.Item
                as='li'
                className='cursor-pointer hover:text-violet-700 transition'
              >
                <Link to='/manage-properties'>About</Link>
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
        <div className='flex items-center gap-6'>
          <Link className='hover:text-violet-900 transition' to='/'>
            Log in
          </Link>
          <Link
            className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition'
            to='/'
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
