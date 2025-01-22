import Image from 'next/image'
import { formatCurrency } from '@/lib/formatCurrency'
import { FuelIcon, BikeIcon, UserRoundIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const CardProductWisata = () => {
  return (
    <div className="shadow-sm bg-white relative cursor-pointer rounded-md">
      <div className="aspect-square">
        <Image
          src={'/paket-wisata.png'}
          alt="hero-image"
          width={500}
          height={500}
          loading="lazy"
          className="w-full h-full object-cover rounded-t-md"
        />
      </div>
      <div className="flex flex-col gap-2 p-4">
        <p className="font-bold">Tour 3 hari 2 malam</p>
        <div className="flex flex-col gap-2 justify-between">
          <hr />
          <div className="flex flex-col">
            <p className="font-semibold text-sm">Itenerary</p>
            <p className="text-sm font-thin leading-6">Hari 1: Sasak Tour</p>
            <p className="text-sm font-thin leading-6">Hari 2: Tour Mandalika</p>
            <p className="text-sm font-thin leading-6">Hari 3: Explore Gili Trawangan</p>
          </div>
        </div>
        {/* <div className="flex items-center gap-4 text-muted-foreground py-2">
          <div className="flex items-center gap-1">
            <BikeIcon size={15} />
            <p className="text-xs">AT/MT</p>
          </div>
          <div className="flex items-center gap-1">
            <UserRoundIcon size={15} />
            <p className="text-xs">2</p>
          </div>
          <div className="flex items-center gap-1">
            <FuelIcon size={15} />
            <p className="text-xs">Bensin</p>
          </div>
        </div> */}
        <Link href={'/paket-wisata/tour-3-hari-2-malam'} className="w-full">
          <Button variant={'secondary'} className="hover:bg-primary hover:text-white w-full">
            Detail Paket
          </Button>
        </Link>
      </div>
    </div>
  )
}
