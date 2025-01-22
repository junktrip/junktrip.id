'use client'

import { useState } from 'react'
import { CardProductMotor } from '../_card/card-product-motor'
import Headline from '@/components/content/headline'
import { dataMotorProducts } from './data-product-motor'
export const ListMotor = () => {
  const [selectedBrand, setSelectedBrand] = useState<string>('All') //select brand state

  const handleBrandChange = (brand: string) => {
    setSelectedBrand(brand)
  }

  // Filter product by brand
  const filteredProducts =
    selectedBrand === 'All'
      ? dataMotorProducts
      : dataMotorProducts.filter((product) => product.brand === selectedBrand)

  // get product brand
  const brands = ['All', ...new Set(dataMotorProducts.map((product) => product.brand))]

  return (
    <div className="w-full py-16 bg-muted">
      <div className="max-w-screen-xl mx-auto 2xl:px-0 sm:px-8 px-4">
        <Headline
          title="Pilih motor sesuai kebutuhan"
          subtitle="Kami akan antarkan anda untuk menjelajah pulau Lombok"
          level={1}
          size="5xl"
          align="center"
        />

        {/* Brand Filter Tabs */}
        <div className="flex justify-center mt-4">
          {brands.map((brand) => (
            <button
              key={brand}
              className={`py-2 px-4 rounded-md text-sm ${selectedBrand === brand ? 'bg-primary text-white' : 'text-primary'}`}
              onClick={() => handleBrandChange(brand)}
            >
              {brand}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4">
          {filteredProducts.map((product) => (
            <CardProductMotor data={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  )
}
