import Link from 'next/link'
import { PopularDestinationCard } from './popular-destination-card'
import { PopularDestination } from '@/lib/utils/interfaces/PopularDestination'

interface PopularDestinationsProps {
  data: PopularDestination[]
}

export const PopularDestinations = ({ data }: PopularDestinationsProps) => {
  return (
    <div className="bg-muted">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-4 2xl:px-0 sm:px-8 px-4 py-16">
        <div className="flex justify-between items-end">
          <h2 className="font-bold sm:text-3xl text-xl">Popular Destinations</h2>
          <Link href={'/paket-wisata'} className=" text-sm">
            Lihat Paket
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 gap-4">
          {data.map((destination) => (
            <PopularDestinationCard key={destination.destinationName} data={destination} />
          ))}
        </div>
      </div>
    </div>
  )
}
