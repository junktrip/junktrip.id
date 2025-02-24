'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CardProductVehicles } from '../_card/card-product-vehicles'
import { CardProductMotor } from '../_card/card-product-motor'
import { CarRent } from '@/lib/utils/interfaces/CarRent'
import { MotorRent } from '@/lib/utils/interfaces/MotorRent'

interface MostCarRentsProps {
  data: CarRent[]
}

interface MostMotorRentsProps {
  data: MotorRent[]
}

interface MostRentProps {
  carData: MostCarRentsProps['data']
  motorData: MostMotorRentsProps['data']
}

export const MostRent = ({ carData, motorData }: MostRentProps) => {
  const [selectedTab, setSelectedTab] = useState<'car' | 'motor'>('car') //choose tab state

  const handleTabChange = (tab: 'car' | 'motor') => {
    setSelectedTab(tab)
  }

  return (
    <div className="bg-muted">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-4 2xl:px-0 sm:px-8 px-4 py-16">
        {/* Title Section */}
        <h2 className="font-bold text-3xl">Paling Laris</h2>

        {/* Tab Navigation and "Lihat Semua" */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            {carData.length > 0 && (
              <button
                className={`text-sm font-medium py-2 px-4 rounded-md ${selectedTab === 'car' && 'bg-primary text-white'}`}
                onClick={() => handleTabChange('car')}
              >
                Mobil
              </button>
            )}
            {motorData.length > 0 && (
              <button
                className={`text-sm font-medium py-2 px-4 rounded-md ${selectedTab === 'motor' && 'bg-primary text-white'}`}
                onClick={() => handleTabChange('motor')}
              >
                Motor
              </button>
            )}
          </div>
          {/* Lihat Semua Link */}
          <Link href={selectedTab === 'car' ? '/sewa-mobil' : '/sewa-motor'} className="text-sm">
            Lihat Semua
          </Link>
        </div>

        {/* Display Products Based on Selected Tab */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 gap-4">
          {selectedTab === 'car'
            ? carData.map((product) => <CardProductVehicles key={product.name} data={product} />)
            : motorData.map((product) => <CardProductMotor key={product.name} data={product} />)}
        </div>
      </div>
    </div>
  )
}
