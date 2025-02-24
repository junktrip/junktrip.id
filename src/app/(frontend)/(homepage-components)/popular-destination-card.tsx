import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { PopularDestination } from '@/lib/utils/interfaces/PopularDestination'

interface PopularDestinationsProps {
  data: PopularDestination
}

export const PopularDestinationCard = ({ data }: PopularDestinationsProps) => {
  return (
    <div className="flex flex-col gap-4 shadow-sm bg-white rounded-md">
      {/* image */}
      <div className="w-full">
        <Image
          src={data.destinationImage.url}
          alt={data.destinationImage.alt}
          loading="lazy"
          width={500}
          height={500}
          className="object-cover w-full h-56 rounded-t-md"
        />
      </div>

      <div className="flex flex-col justify-between gap-2 px-4 pb-4 h-full">
        <div className="flex flex-col gap-2">
          <p className="font-bold text-lg">{data.destinationName}</p>
          <p className="font-thin text-sm">{data.destinationDescription}</p>
        </div>
        <Link href={`/${data.destinationLink}`} className="w-full">
          <Button className="w-full">Jelajahi</Button>
        </Link>
      </div>
    </div>
  )
}
