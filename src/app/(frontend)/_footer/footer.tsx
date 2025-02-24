import Image from 'next/image'
import Link from 'next/link'
import { MapPinIcon, PhoneIcon, MailIcon } from 'lucide-react'

type IconName = 'MapPinIcon' | 'PhoneIcon' | 'MailIcon'

type FooterItem = {
  label: string
  value: string
  href?: string
  path?: string
  icon?: IconName
}

type FooterSection = {
  label: string
  list: FooterItem[]
}

const iconComponents: Record<IconName, React.ComponentType<any>> = {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
}

const dataFooter: FooterSection[] = [
  {
    label: 'Product',
    list: [
      {
        label: 'Sewa Mobil',
        value: 'Sewa Mobil',
        href: '/sewa-mobil',
      },
      {
        label: 'Sewa Motor',
        value: 'Sewa Motor',
        href: '/sewa-motor',
      },
      {
        label: 'Paket Wisata',
        value: 'Paket Wisata',
        href: '/paket-wisata',
      },
    ],
  },
  {
    label: 'Objectives',
    list: [
      {
        label: 'About',
        value: 'About',
        href: '/about',
      },
      {
        label: 'Gallery',
        value: 'Gallery',
        href: '/gallery',
      },
    ],
  },
  {
    label: 'Resources',
    list: [
      {
        label: 'Help Centre',
        value: 'Help Centre',
        href: '#',
      },
      {
        label: 'Guide',
        value: 'Guide',
        href: '#',
      },
      {
        label: 'Partner Network',
        value: 'Partner Network',
        href: '/network',
      },
      {
        label: 'Investor Relations',
        value: 'Investor Relations',
        href: '/investor',
      },
    ],
  },
  {
    label: 'Contact Us',
    list: [
      {
        label: 'Phone',
        value: '08121232434',
        href: 'tel:+6281212323434',
        icon: 'PhoneIcon',
      },
      {
        label: 'Email',
        value: 'info@example.com',
        href: 'mailto:info@example.com',
        icon: 'MailIcon',
      },
      {
        label: 'Address',
        value: '123 Main St, City, Country',
        icon: 'MapPinIcon',
      },
    ],
  },
  {
    label: 'Follow Us',
    list: [
      {
        label: 'Facebook',
        value: '/#',
        path: '/socials/facebook.svg',
      },
      {
        label: 'Instagram',
        value: '/#',
        path: '/socials/instagram.svg',
      },
      {
        label: 'Tiktok',
        value: '/#',
        path: '/socials/tiktok.svg',
      },
    ],
  },
]

export const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-screen-xl mx-auto py-16 w-full 2xl:px-0 sm:px-8 px-4">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="items-center justify-center sm:items-start sm:justify-start flex flex-col text-center sm:text-start gap-4">
            <Link href={'/'}>
              <Image
                src="/junktrip-footer.png"
                alt="Logo"
                className="h-20 w-auto"
                width={500}
                height={500}
              />
            </Link>

            <p className="max-w-xs font-thin">
              junktrip.id siap menemani setiap petualangan Anda! Ciptakan perjalanan seru dan nyaman
              bersama kami
            </p>

            <ul className="">
              {dataFooter.map(
                (data, index) =>
                  data.label === 'Follow Us' && (
                    <div key={index} className="flex gap-4">
                      {data.list.map((social, i) => (
                        <li key={i}>
                          <Link href={social.value} target="_blank" rel="noopener noreferrer">
                            <Image
                              src={social.path || ''}
                              alt={social.label}
                              width={15}
                              height={15}
                            />
                          </Link>
                        </li>
                      ))}
                    </div>
                  ),
              )}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4 sm:text-start text-center">
            {dataFooter.map(
              (data, index) =>
                data.label !== 'Follow Us' && (
                  <div key={index}>
                    <p className="font-medium">{data.label}</p>
                    <ul className="sm:mt-4 mt-2 space-y-2 text-sm flex flex-col items-center sm:items-start">
                      {data.list.map((item, i) => {
                        const IconComponent = iconComponents[item.icon as IconName] || null
                        return data.label === 'Contact Us' ? (
                          <li key={i} className="flex items-center gap-2">
                            {IconComponent && <IconComponent size={15} />}
                            <p className="text-white">{item.value}</p>
                          </li>
                        ) : (
                          <li key={i} className="flex items-center gap-2">
                            <Link href={item.href || '#'}>
                              <p className="text-white transition hover:opacity-75">{item.value}</p>
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                ),
            )}
          </div>
        </div>

        <div className="mt-8 border-t-[0.01px] border-muted sm:text-start text-center">
          <p className="font-thin text-xs pt-2">
            &copy; Copyright 2024. junktrip.id All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
