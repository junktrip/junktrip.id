import { MapPinIcon, PhoneIcon, MailIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type FooterItem = {
  name: string
  href: string
  path?: string
}

type FooterSection = {
  label: string
  list: FooterItem[]
}

const dataFooter: FooterSection[] = [
  {
    label: 'Product',
    list: [
      {
        name: 'Sewa Mobil',
        href: '/sewa-mobil',
      },
      {
        name: 'Sewa Motor',
        href: '/sewa-motor',
      },
      {
        name: 'Paket Wisata',
        href: '/paket-wisata',
      },
    ],
  },
  {
    label: 'Objectives',
    list: [
      {
        name: 'About',
        href: '/about',
      },
      {
        name: 'Gallery',
        href: '/gallery',
      },
      {
        name: 'Blog',
        href: '/blog',
      },
    ],
  },
  {
    label: 'Resources',
    list: [
      {
        name: 'Help Centre',
        href: '/#',
      },
      {
        name: 'Guide',
        href: '/#',
      },
      {
        name: 'Partner Network',
        href: '/network',
      },
      {
        name: 'Investor Relations',
        href: '/investor',
      },
    ],
  },
  {
    label: 'Follow Us',
    list: [
      {
        name: 'Facebook',
        href: '/#',
        path: '/socials/facebook.svg',
      },
      {
        name: 'Instagram',
        href: '/#',
        path: '/socials/instagram.svg',
      },
      {
        name: 'Tiktok',
        href: '/#',
        path: '/socials/tiktok.svg',
      },
    ],
  },
]

export const Footer = () => {
  return (
    <footer className="w-full bg-primary text-white">
      <div className="flex flex-col max-w-screen-xl mx-auto py-16 w-full 2xl:px-0 sm:px-8 px-4">
        <div className="pb-12 grid lg:grid-cols-6 gap-4 lg:gap-0">
          <div className="col-span-2">
            {/* logo */}
            <div className="pb-2">
              <Image
                src="/logo-junktrip-white.png"
                alt="Logo"
                className="h-6 w-auto"
                width={500}
                height={500}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm font-thin">
                <PhoneIcon size={15} />
                <p>+6281212929511</p>
              </div>
              <div className="flex items-center gap-2 text-sm font-thin">
                <MailIcon size={15} />
                <p>semravvut@gmail.com</p>
              </div>
              <div className="flex items-center gap-2 text-sm font-thin">
                <MapPinIcon size={15} />
                <p>Jl. Aneka 1 No 2 Mataram</p>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="grid lg:grid-cols-4 lg:gap-0 gap-4">
              {dataFooter.map((data, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <p className="font-bold">{data.label}</p>
                  {data.label === 'Follow Us' ? (
                    <div className="flex gap-4">
                      {data.list.map((social, index) => (
                        <Link href={social.href} key={index} passHref>
                          {social.path && (
                            <Image
                              src={social.path}
                              alt={social.name}
                              width={15}
                              height={15}
                              className="transition-transform duration-200 hover:scale-110"
                            />
                          )}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    data.list.map((dataList, idx) => (
                      <Link href={dataList.href} key={idx} passHref>
                        <p className="font-thin text-sm">{dataList.name}</p>
                      </Link>
                    ))
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t-[0.01px] border-muted">
          <p className="font-thin text-xs pt-2">
            &copy; Copyright 2024. JunkTrip All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
