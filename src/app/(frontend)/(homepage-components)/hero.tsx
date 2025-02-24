import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { PhoneIcon } from 'lucide-react'
import { HeroSectionProps } from '@/lib/utils/interfaces/Hero'

interface HeroProps {
  data: HeroSectionProps
}

export const Hero = ({ data }: HeroProps) => {
  return (
    <section className="relative md:h-[680px] h-[400px] flex">
      {/* text container */}
      <div
        className={`relative max-w-screen-xl mx-auto flex items-center w-full 2xl:px-0 px-8 z-10 bg-[url('/map-indonesia.svg')] bg-cover sm:bg-none`}
      >
        {/* background effect */}
        {/* <div className="absolute inset-0 bg-black opacity-50 lg:brightness-50 z-0 lg:hidden block"></div> */}

        {/* content */}
        <div className="flex flex-col gap-4 lg:w-1/2 w-full lg:items-start items-center lg:text-black text-black/80 z-10">
          <h1 className="font-bold md:text-5xl text-4xl/normal tracking-normal lg:text-start text-center">
            {data?.title}
          </h1>
          <p className="font-thin text-sm lg:text-muted-foreground text-black/80 lg:text-start text-center lg:w-full w-3/4">
            {data?.subtitle}
          </p>
          <div className="flex items-center gap-4">
            <Link href={'http://wa.me/+6287839761812'} target="_blank">
              <Button>
                {data?.ctaButtonText} <PhoneIcon />{' '}
              </Button>
            </Link>
            <Link href={'/#'} className="underline underline-offset-2">
              {data?.ctaButtonLink}
            </Link>
          </div>
        </div>
      </div>

      {/* Hero image overlap,  max-w-screen-xl */}
      <div className="hidden lg:flex absolute right-0 top-1/2 transform -translate-y-2/3 w-screen md:w-1/2 z-0 bg-[url('/map-indonesia.svg')] bg-cover">
        <Image
          src={data?.image.url}
          alt={data?.image.alt}
          width={500}
          height={500}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  )
}
