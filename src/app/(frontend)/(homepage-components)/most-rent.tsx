// import Link from 'next/link'
// import { CardProductVehicles } from '../_card/card-product-vehicles'
// import { mostDataCarRents } from './most-car-rent-data'
// import { mostDataMotorRents } from './most-motor-rent-data'
// import { CardProductMotor } from '../_card/card-product-motor'
// export const MostRent = () => {
//   return (
//     <div className="bg-muted">
//       <div className="max-w-screen-xl mx-auto flex flex-col gap-4 2xl:px-0 sm:px-8 px-4 py-16">
//         <div className="flex justify-between items-end">
//           <h2 className="font-bold text-3xl">Paling Laris</h2>
//           <Link href={'/sewa-mobil'} className=" text-sm">
//             Lihat Semua
//           </Link>
//         </div>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 gap-4">
//           {mostDataCarRents.map((product) => (
//             <CardProductVehicles data={product} />
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CardProductVehicles } from '../_card/card-product-vehicles'
import { mostDataCarRents } from './most-car-rent-data'
import { mostDataMotorRents } from './most-motor-rent-data'
import { CardProductMotor } from '../_card/card-product-motor'

export const MostRent = () => {
  const [selectedTab, setSelectedTab] = useState<'car' | 'motor'>('car') //choose tab state

  const handleTabChange = (tab: 'car' | 'motor') => {
    setSelectedTab(tab)
  }

  return (
    <div className="bg-muted">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-4 2xl:px-0 sm:px-8 px-4 py-16 text-primary">
        {/* Title Section */}
        <h2 className="font-bold text-3xl">Paling Laris</h2>

        {/* Tab Navigation and "Lihat Semua" */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <button
              className={`text-sm font-medium py-2 px-4 rounded-md ${selectedTab === 'car' ? 'bg-primary text-white' : 'text-primary'}`}
              onClick={() => handleTabChange('car')}
            >
              Mobil
            </button>
            <button
              className={`text-sm font-medium py-2 px-4 rounded-md ${selectedTab === 'motor' ? 'bg-primary text-white' : 'text-primary'}`}
              onClick={() => handleTabChange('motor')}
            >
              Motor
            </button>
          </div>
          {/* Lihat Semua Link */}
          <Link
            href={selectedTab === 'car' ? '/sewa-mobil' : '/sewa-motor'}
            className="text-sm text-primary"
          >
            Lihat Semua
          </Link>
        </div>

        {/* Display Products Based on Selected Tab */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 gap-4">
          {selectedTab === 'car'
            ? mostDataCarRents.map((product) => (
                <CardProductVehicles key={product.id} data={product} />
              ))
            : mostDataMotorRents.map((product) => (
                <CardProductMotor key={product.id} data={product} />
              ))}
        </div>
      </div>
    </div>
  )
}
