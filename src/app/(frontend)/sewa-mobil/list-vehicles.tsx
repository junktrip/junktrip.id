// 'use client'

// import { useState } from 'react'
// import Headline from '@/components/content/headline'
// import { CardProductVehicles } from '../_card/card-product-vehicles'
// import { CarRent } from '@/lib/utils/interfaces/CarRent'
// import LoadMore from '@/components/content/loadMore'

// interface CarRentsProps {
//   data: CarRent[]
// }

// export const ListVehicles = ({ data }: CarRentsProps) => {
//   const [selectedBrand, setSelectedBrand] = useState<string>('All') //select brand state
//   console.log(data, 'mobil')
//   const handleBrandChange = (brand: string) => {
//     setSelectedBrand(brand)
//   }

//   // Filter product by brand
//   const filteredProducts =
//     selectedBrand === 'All' ? data : data.filter((product) => product.brand === selectedBrand)

//   // get product brand
//   const brands = ['All', ...new Set(data.map((product) => product.brand))]

//   const isEmpty = filteredProducts.length === 0

//   return (
//     <div className="w-full py-16 bg-muted">
//       <div className="max-w-screen-xl mx-auto 2xl:px-0 sm:px-8 px-4">
//         {!isEmpty && (
//           <Headline
//             title="Pilih mobil sesuai kebutuhan"
//             subtitle="Kami akan antarkan anda untuk menjelajah pulau Lombok"
//             level={1}
//             size="5xl"
//             align="center"
//           />
//         )}

//         <div className="flex justify-center mt-4">
//           {brands.map(
//             (brand) =>
//               // Only show "All" tab if there is data available for it
//               (brand !== 'All' || data.length > 1) && (
//                 <button
//                   key={brand}
//                   className={`py-2 px-4 rounded-md text-sm ${selectedBrand === brand && 'bg-primary text-white'}`}
//                   onClick={() => handleBrandChange(brand)}
//                 >
//                   {brand}
//                 </button>
//               ),
//           )}
//         </div>

//         {/* Product List */}
//         {isEmpty ? (
//           <div className="text-center py-8 text-lg h-96 flex items-center justify-center">
//             <p>Tidak ada data</p>
//           </div>
//         ) : (
//           <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4">
//             {filteredProducts.map((product) => (
//               <CardProductVehicles data={product} key={product.name} />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

'use client'

import { useState } from 'react'
import Headline from '@/components/content/headline'
import { CardProductVehicles } from '../_card/card-product-vehicles'
import { CarRent } from '@/lib/utils/interfaces/CarRent'
import LoadMore from '@/components/content/loadMore'
import { usePagination } from '@/lib/hooks/usePagination'

interface CarRentsProps {
  data: CarRent[]
}

export const ListVehicles = ({ data }: CarRentsProps) => {
  const [selectedBrand, setSelectedBrand] = useState<string>('All')
  const limit = 8

  const filteredItems =
    selectedBrand === 'All' ? data : data.filter((product) => product.brand === selectedBrand)
  const { visibleItems, isLoading, loadMore } = usePagination({
    data: filteredItems,
    limit,
  })

  const brands = ['All', ...new Set(data.map((product) => product.brand))]

  const isEmpty = filteredItems.length === 0

  const hasMore = filteredItems.length > visibleItems.length

  return (
    <div className="w-full py-16 bg-muted">
      <div className="max-w-screen-xl mx-auto 2xl:px-0 sm:px-8 px-4">
        {!isEmpty && (
          <Headline
            title="Pilih mobil sesuai kebutuhan"
            subtitle="Kami akan antarkan anda untuk menjelajah pulau Lombok"
            level={1}
            size="5xl"
            align="center"
          />
        )}

        <div className="flex justify-center mt-4">
          {brands.map(
            (brand) =>
              (brand !== 'All' || data.length > 1) && (
                <button
                  key={brand}
                  className={`py-2 px-4 rounded-md text-sm ${selectedBrand === brand && 'bg-primary text-white'}`}
                  onClick={() => setSelectedBrand(brand)}
                >
                  {brand}
                </button>
              ),
          )}
        </div>

        {/* Product List */}
        {isEmpty ? (
          <div className="text-center py-8 text-lg h-96 flex items-center justify-center">
            <p>Tidak ada data</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4">
            {visibleItems
              .filter((product) => selectedBrand === 'All' || product.brand === selectedBrand)
              .map((product) => (
                <CardProductVehicles data={product} key={product.name} />
              ))}
          </div>
        )}

        {/* Load More Button */}
        <LoadMore onClick={loadMore} isLoading={isLoading} hasMore={hasMore} />
      </div>
    </div>
  )
}
