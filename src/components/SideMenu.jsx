import React from 'react'
import Search from './Search'
import { Link } from 'react-router'

const SideMenu = () => {
  return (
    <div className='px-4 h-max sticky top-8'>
        <h1 className='mb-4 text-sm font-medium '>Search</h1>
        <Search></Search>
        <h1 className='mb-4 text-sm font-medium '>Filter</h1>
        <h1 className='mb-4 text-sm font-medium '>Categories</h1>
        <div className='flex flex-col'>
           <Link>All</Link>
            <Link>Web Design</Link>
            <Link>Development</Link>
            <Link>Databases</Link>
            <Link>Search Engines</Link>
            <Link>Marketing</Link>
        </div>
    </div>
  )
}

export default SideMenu