import React from 'react'

import Logo from "@/../public/logo.svg"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className='absolute inset-x-0 top-0 flex justify-between items-center px-20 bg-gradient-to-b from-black to-black/0'>
        <Logo className='w-60'/>
        <div className='flex gap-6'>
            <Link href='#'>Air</Link>
            <Link href='#'>Gravity</Link>
            <Link href='#'>Experience</Link>
            <Link href='#'>Shop</Link>
        </div>

    </div>
  )
}

export default Navbar