'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MenuIcon, XIcon, PhoneIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'

const navigationMenu = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Sewa Mobil',
    href: '/sewa-mobil',
  },
  {
    label: 'Sewa Motor',
    href: '/sewa-motor',
  },
  {
    label: 'Paket Wisata',
    href: '/paket-wisata',
  },
]

export const Navbar = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="sticky top-0 w-full bg-white py-4 z-50">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto 2xl:px-0 sm:px-8 px-4">
        {/* Logo */}
        <Link href={'/'} className="flex items-center space-x-2">
          <Image
            src="/junktrip-header.png"
            alt="Logo"
            className="md:h-16 h-10 w-auto"
            width={500}
            height={500}
          />
        </Link>

        {/* Menu */}
        <nav className="hidden lg:flex space-x-8">
          {navigationMenu.map((navItem, index) => (
            <Link
              href={navItem.href}
              key={index}
              className={`${pathname === navItem.href && 'bg-primary text-white'} p-2 rounded-lg`}
            >
              {navItem.label}
            </Link>
          ))}
        </nav>

        {/* Call to Action (CTA) */}
        <Link
          href={'http://wa.me/+6287839761812?text=Halo admin'}
          target="_blank"
          className="lg:flex hidden items-center"
        >
          <Button onClick={toggleMenu} variant={'default'} className="flex items-center">
            <PhoneIcon /> <p>081212929511</p>
          </Button>
        </Link>

        {/* Menu Mobile Toggle */}
        <div className="lg:hidden flex items-center">
          <Button onClick={toggleMenu} size={'icon'} variant={'default'}>
            {isMenuOpen ? <XIcon /> : <MenuIcon />}
          </Button>
        </div>
      </div>

      {/* Menu Mobile */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4 space-y-4 px-8`}>
        <ul className="space-y-4">
          {navigationMenu.map((navItem, index) => (
            <li key={index} className="text-gray-700 hover:text-blue-500">
              <Link href={navItem.href} onClick={() => setIsMenuOpen(false)}>
                {navItem.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Call to Action - Mobile */}
        <div className="mt-4">
          <Button onClick={toggleMenu} variant={'default'} className="flex items-center">
            <PhoneIcon /> <p>081212929511</p>
          </Button>
        </div>
      </div>
    </header>
  )
}
