import Image from 'next/image'
import { formatCurrency } from '@/lib/formatCurrency'
import { FuelIcon, CarFrontIcon, UserRoundIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CardProductData {
  brand: string
  image_url: {
    url: string
  }
  name: string
  price_with_driver: number
  price_with_no_driver: number
  duration: string
  transmission: string
  passengers: number
  fuelType: string
}

interface CardProductProps {
  data: CardProductData
}

export const CardProductVehicles = ({ data }: CardProductProps) => {
  return (
    <div className="group flex flex-col gap-2 shadow-sm bg-white p-4 relative cursor-pointer rounded-md h-full justify-between">
      <div className="aspect-video">
        <Image
          src={data.image_url.url}
          alt="hero-image"
          width={500}
          height={500}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <p className="font-bold">{data.name}</p>
      <div className="flex flex-col gap-2 justify-between">
        <div className="flex flex-col">
          <p className="font-semibold text-sm">Tarif Driver + BBM</p>
          <p className="text-sm font-thin leading-6">
            {formatCurrency(data.price_with_driver)}{' '}
            <span className="font-thin text-xs text-muted-foreground"> /{data.duration}</span>
          </p>
        </div>
        <hr />
        <div className="flex flex-col">
          <p className="font-semibold text-sm">Tarif Lepas Kunci</p>
          <p className="text-sm font-thin leading-6">
            {formatCurrency(data.price_with_no_driver)}{' '}
            <span className="font-thin text-xs text-muted-foreground"> /{data.duration}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4 text-muted-foreground py-2">
        <div className="flex items-center gap-1">
          <CarFrontIcon size={15} />
          <p className="text-xs">{data.transmission}</p>
        </div>
        <div className="flex items-center gap-1">
          <UserRoundIcon size={15} />
          <p className="text-xs">{data.passengers}</p>
        </div>
        <div className="flex items-center gap-1">
          <FuelIcon size={15} />
          <p className="text-xs">{data.fuelType}</p>
        </div>
      </div>
      <Button variant={'secondary'} className="hover:bg-primary hover:text-white">
        Pesan sekarang
      </Button>
      <div className="absolute top-0 left-0 w-full bg-primary/90 group-hover:opacity-100 opacity-0 justify-center items-center py-2 transition-all duration-300 ease-in-out transform group-hover:scale-100 scale-95 flex rounded-t-md">
        <p className="px-4 text-white font-bold">{data.brand}</p>
      </div>
    </div>
  )
}
