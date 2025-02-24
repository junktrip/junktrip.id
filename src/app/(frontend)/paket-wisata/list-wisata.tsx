'use client'

import { useState } from 'react'
import { CardProductWisata } from './card-product-wisata'
import Headline from '@/components/content/headline'
import { TourPackage } from '@/lib/utils/interfaces/TourPackage'
import LoadMore from '@/components/content/loadMore'
import { usePagination } from '@/lib/hooks/usePagination'

interface TourPackagesProps {
  data: TourPackage[]
}

export const ListWisata = ({ data }: TourPackagesProps) => {
  const limit = 8 // Number of products to load per click

  // Menggunakan hook usePagination untuk data TourPackage
  const { visibleItems, isLoading, loadMore } = usePagination({
    data,
    limit,
  })

  const isEmpty = data.length === 0

  return (
    <div className="w-full py-16 bg-muted">
      <div className="max-w-screen-xl mx-auto 2xl:px-0 sm:px-8 px-4">
        {!isEmpty && (
          <Headline
            title="Tentukan destinasi liburan anda"
            subtitle="Kami akan antarkan anda untuk menjelajah pulau Lombok"
            level={1}
            size="5xl"
            align="center"
          />
        )}
        {isEmpty ? (
          <div className="text-center py-8 text-lg h-96 flex items-center justify-center">
            <p>Tidak ada data</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 pt-16">
            {visibleItems.map((tour) => (
              <CardProductWisata key={tour.slug} data={tour} />
            ))}
          </div>
        )}

        {/* Load More Button */}
        <LoadMore
          onClick={loadMore}
          isLoading={isLoading}
          hasMore={data.length > visibleItems.length}
        />
      </div>
    </div>
  )
}
