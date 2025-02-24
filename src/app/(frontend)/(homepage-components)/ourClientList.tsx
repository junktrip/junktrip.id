import Image from 'next/image'
import { Props } from '@/lib/utils/interfaces/OurClient'

export const OurClientList: React.FC<Props> = ({ heading, logos }) => {
  // const logos = data.flatMap((items) => items.logos)

  // Duplicate the logos array only if logos.length > 8
  // const displayedLogos = logos.length > 8 ? [...logos, ...logos] : logos

  const displayedLogos = logos.length > 8 ? [...logos, ...logos] : logos

  return (
    <div
      className={`w-full flex ${logos.length < 8 && 'items-center justify-center'} overflow-hidden sm:space-x-32 space-x-16`}
    >
      <div
        className={`flex items-center sm:space-x-32 space-x-16 pb-8 ${logos.length > 8 && 'sm:animate-loop-scroll animate-loop-scroll-sm'}`}
      >
        {displayedLogos.map((logo, index) => (
          <div key={index} className="w-16 h-16">
            <Image
              key={index}
              src={logo.logo.url}
              alt={logo.logo.alt}
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
