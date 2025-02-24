import Image from 'next/image'
import { formatCurrency } from '@/lib/formatCurrency'
import { Button } from '@/components/ui/button'
import {
  ListCheckIcon,
  CheckIcon,
  XIcon,
  MapPinCheckInsideIcon,
  NotebookPenIcon,
} from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import { RichText } from '@payloadcms/richtext-lexical/react'
import { TourPackage } from '@/lib/utils/interfaces/TourPackage'

const fetchTourPackage = async (slug: string) => {
  const res = await fetch(`${process.env.PAYLOAD_API_URL}/api/tour-packages?slug=${slug}`)
  const data = await res.json()
  // return data.docs[0]
  const tourPackage = data.docs.find((tour: TourPackage) => tour.slug === slug)

  return tourPackage || null
}

export default async function DetailPaket({ params }: { params: { slug: string } }) {
  const { slug } = params
  const tourPackage: TourPackage = await fetchTourPackage(slug)

  return (
    <div>
      <div className="relative">
        <div className="bg-[url(/wallpaper.jpg)] h-96 bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center relative">
          <div className="absolute inset-0 bg-black opacity-35 filter brightness-50"></div>
          <h1 className="font-bold text-white text-center text-4xl relative z-10 md:px-0 px-2">
            {tourPackage.name}
          </h1>
        </div>
      </div>
      <div className="flex-col max-w-screen-xl mx-auto 2xl:px-0 sm:px-8 px-4 my-16 gap-4">
        <div className="flex md:flex-row flex-col w-full gap-8 ">
          <div className="md:w-1/2 w-full aspect-[4/3]">
            <Image
              src={tourPackage.image_url.url}
              alt={tourPackage.image_url.alt}
              width={500}
              height={500}
              className="object-cover w-full h-full rounded-lg"
              loading="lazy"
            />
          </div>
          <div className="md:w-1/2 w-full flex flex-col gap-4">
            <div className="flex flex-col">
              <h2 className="text-4xl">{tourPackage.name}</h2>
              <p>
                from <span className="font-bold text-lg">{formatCurrency(tourPackage.price)} </span>{' '}
                /pax
              </p>
            </div>
            <RichText data={tourPackage.package_description} />
            <div>
              <Button>Pesan Sekarang</Button>
            </div>
          </div>
        </div>
        {/* include/exclude */}
        <div className="flex flex-col mt-10 gap-4 border-t">
          <div className="flex items-center gap-2 pt-8">
            <ListCheckIcon />
            <p className="font-bold">Included & Excluded</p>
          </div>
          <div className="flex md:flex-row flex-col gap-8">
            <ul>
              {tourPackage.included.map((list, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckIcon size={15} strokeWidth={4} />
                  {list.item}
                </li>
              ))}
            </ul>
            <ul>
              {tourPackage.excluded.map((list) => (
                <li key={list.item} className="flex items-center gap-2">
                  <XIcon size={15} strokeWidth={4} />
                  {list.item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* itinerary */}
        <div className="flex flex-col mt-10 gap-4 border-t">
          <div className="flex items-center gap-2 pt-8">
            <NotebookPenIcon />
            <p className="font-bold">Itinerary</p>
          </div>
          <div className="flex flex-col gap-4">
            {tourPackage.itinerary.map((list) => (
              <Accordion
                type="single"
                collapsible
                className="rounded-xl border border-muted-foreground"
              >
                <AccordionItem value="item-1" className="border-none">
                  <AccordionTrigger className="px-6 bg-primary/10 rounded-lg text-start">
                    Day {list.day}: {list.tour_name}
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <ul className="flex flex-col gap-2 px-10 list-disc">
                      <li>
                        <RichText data={list.description} />
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>

        {/* Destinantion */}
        <div className="flex flex-col mt-10 gap-4 border-t">
          <div className="flex items-center gap-2 pt-8">
            <MapPinCheckInsideIcon />
            <p className="font-bold">Destinasi Wisata</p>
          </div>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="md:-ml-1">
              {tourPackage.destination.map((destination) => (
                <CarouselItem
                  key={destination.destination_name.alt}
                  className="pl-3 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1 aspect-[3/2]">
                    <Image
                      src={destination.destination_name.url}
                      alt={destination.destination_name.alt}
                      width={250}
                      height={250}
                      className="object-cover w-full h-full rounded-lg"
                      loading="lazy"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  )
}
