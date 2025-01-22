import Image from 'next/image'
import { formatCurrency } from '@/lib/formatCurrency'
import { FuelIcon, BikeIcon, UserRoundIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface CardProductData {
  brand: string
  image_url: string
  name: string
  oneDay: number
  threeDay: number
  sevenDay: number
  oneMonth: number
  duration: string
  transmission: string
  passengers: number
  fuelType: string
}

interface CardProductProps {
  data: CardProductData
}

export const CardProductMotor = ({ data }: CardProductProps) => {
  const message = `Halo, admin JunkTrip saya tertarik dengan motor ${data.name} dari ${data.brand}. Saya ingin menanyakan harga untuk sewa:
- 1 Hari: ${formatCurrency(data.oneDay)}
- 3 Hari: ${formatCurrency(data.threeDay)}
- 7 Hari: ${formatCurrency(data.sevenDay)}
- 1 Bulan: ${formatCurrency(data.oneMonth)}

Mohon informasi lebih lanjut. Terima kasih!`

  const phoneNumber = '+6287839761812'

  // URL WhatsApp dengan pesan default
  const whatsappUrl = `http://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <div className="group flex flex-col gap-2 shadow-sm bg-white p-4 relative cursor-pointer rounded-md h-full justify-between">
      <div className="aspect-video">
        <Image
          src={data.image_url}
          alt="hero-image"
          width={500}
          height={500}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <p className="font-bold">{data.name}</p>
      <div className="flex flex-col gap-2 justify-between">
        <hr />
        <div className="flex flex-col">
          <p className="text-sm font-thin leading-6">
            {formatCurrency(data.oneDay)}{' '}
            <span className="font-thin text-xs text-muted-foreground"> /hari</span>
          </p>
          <p className="text-sm font-thin leading-6">
            <span className="font-thin"> 3 Hari </span>
            {formatCurrency(data.threeDay)}{' '}
          </p>
          <p className="text-sm font-thin leading-6">
            <span className="font-thin"> 7 Hari </span>
            {formatCurrency(data.sevenDay)}{' '}
          </p>
          <p className="text-sm font-thin leading-6">
            <span className="font-thin"> 1 Bulan </span>
            {formatCurrency(data.oneMonth)}{' '}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4 text-muted-foreground py-2">
        <div className="flex items-center gap-1">
          <BikeIcon size={15} />
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
      <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full">
        <Button variant={'secondary'} className="hover:bg-primary hover:text-white w-full">
          Pesan sekarang
        </Button>
      </Link>
      <div className="absolute top-0 left-0 w-full bg-primary/90 group-hover:opacity-100 opacity-0 justify-center items-center py-2 transition-all duration-300 ease-in-out transform group-hover:scale-100 scale-95 flex rounded-t-md">
        <p className="px-4 text-white font-bold">{data.brand}</p>
      </div>
    </div>
  )
}
