import { Button } from '@/components/ui/button'
import Image from 'next/image'

interface PopularDestinationsProps {
  name: string
  description: string
  src: string
}

export const PopularDestinationCard: React.FC<PopularDestinationsProps> = ({
  name,
  description,
  src,
}) => {
  return (
    <div className="flex flex-col gap-4 shadow-sm bg-white rounded-md">
      {/* image */}
      <div className="w-full">
        <Image
          src={src}
          alt="popular"
          loading="lazy"
          width={500}
          height={500}
          className="object-cover w-full h-56 rounded-t-md"
        />
      </div>

      <div className="flex flex-col justify-between gap-2 px-4 pb-4 h-full">
        <div className="flex flex-col gap-2">
          <p className="font-bold text-lg">{name}</p>
          <p className="font-thin">{description}</p>
        </div>
        <Button>Jelajahi</Button>
      </div>
    </div>
  )
}
