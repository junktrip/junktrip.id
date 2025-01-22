// import Headline from '@/components/content/headline'
// import { dataVehiclesProducts } from './data-product'
// import { CardProductVehicles } from '../_card/card-product-vehicles'

// export const ListVehicles = () => {
//   return (
//     <div className="w-full py-16 bg-muted">
//       <div className="max-w-screen-xl mx-auto 2xl:px-0 sm:px-8 px-4">
//         <Headline
//           title="Pilih mobil sesuai kebutuhan"
//           subtitle="Kami akan antarkan anda untuk menjelajah pulau Lombok"
//           level={1}
//           size="5xl"
//           align="center"
//         />
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 pt-16">
//           {dataVehiclesProducts.map((product) => (
//             <CardProductVehicles data={product} key={product.id} />
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

'use client'

import { useState } from 'react'
import Headline from '@/components/content/headline'
import { dataVehiclesProducts } from './data-product'
import { CardProductVehicles } from '../_card/card-product-vehicles'

export const ListVehicles = () => {
  const [selectedBrand, setSelectedBrand] = useState<string>('All') //select brand state

  const handleBrandChange = (brand: string) => {
    setSelectedBrand(brand)
  }

  // Filter product by brand
  const filteredProducts =
    selectedBrand === 'All'
      ? dataVehiclesProducts
      : dataVehiclesProducts.filter((product) => product.brand === selectedBrand)

  // get product brand
  const brands = ['All', ...new Set(dataVehiclesProducts.map((product) => product.brand))]

  return (
    <div className="w-full py-16 bg-muted">
      <div className="max-w-screen-xl mx-auto 2xl:px-0 sm:px-8 px-4">
        <Headline
          title="Pilih mobil sesuai kebutuhan"
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

        {/* Product List */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4">
          {filteredProducts.map((product) => (
            <CardProductVehicles data={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  )
}
