import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { TourPackage } from '@/lib/utils/interfaces/TourPackage'

interface TourPackagesProps {
  data: TourPackage
}

export const CardProductWisata = ({ data }: TourPackagesProps) => {
  return (
    <div className="shadow-sm bg-white relative cursor-pointer rounded-md flex flex-col h-full">
      <Image
        src={data?.image_url.url}
        alt={data?.image_url.alt}
        width={500}
        height={500}
        loading="lazy"
        className="aspect-square rounded-t-md"
      />

      <div className="flex flex-col gap-2 p-4 flex-grow">
        <p className="font-bold">{data?.name}</p>
        <hr />
        <div className="flex flex-col flex-grow">
          <div className="flex flex-col">
            <p className="font-semibold text-sm">Itinerary</p>
            {data.itinerary.map((item, index) => (
              <p key={index} className="text-sm font-thin leading-6">
                Hari {item.day}: {item.tour_name}
              </p>
            ))}
          </div>
          {/* blank space */}
          <div className="flex-grow"></div> {/*  */}
          <Link href={`paket-wisata/${data.slug}`} className="w-full mt-4">
            <Button variant={'secondary'} className="hover:bg-primary hover:text-white w-full">
              Detail Paket
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
