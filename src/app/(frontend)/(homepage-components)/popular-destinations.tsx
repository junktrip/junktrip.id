import Link from 'next/link'
import { PopularDestinationCard } from './popular-destination-card'
import { dataDestinations } from './popular-destinations-data'
export const PopularDestinations = () => {
  return (
    <div className="bg-muted">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-4 2xl:px-0 sm:px-8 px-4 py-16 text-primary">
        <div className="flex justify-between items-end">
          <h2 className="font-bold text-3xl">Popular Destinations</h2>
          <Link href={'/paket-wisata'} className=" text-sm">
            Lihat Paket
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 gap-4">
          {dataDestinations.map(({ name, description, src }) => (
            <PopularDestinationCard key={name} name={name} description={description} src={src} />
          ))}
        </div>
      </div>
    </div>
  )
}
