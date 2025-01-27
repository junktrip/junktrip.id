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

export default async function DetailPaket({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <div>
      <div className="relative">
        <div className="bg-[url(/wallpaper.jpg)] h-96 bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center relative">
          <div className="absolute inset-0 bg-black opacity-35 filter brightness-50"></div>
          <h1 className="font-bold text-white text-center text-4xl relative z-10 md:px-0 px-2">
            WISATA LOMBOK TOUR 3 HARI 2 MALAM
          </h1>
        </div>
      </div>
      <div className="flex-col max-w-screen-xl mx-auto 2xl:px-0 sm:px-8 px-4 my-16 gap-4">
        <div className="flex md:flex-row flex-col w-full gap-8 ">
          <div className="md:w-1/2 w-full">
            <Image
              src={'/wallpaper.jpg'}
              alt="package"
              width={500}
              height={500}
              className="object-cover w-full h-full rounded-lg"
              loading="lazy"
            />
          </div>
          <div className="md:w-1/2 w-full flex flex-col gap-4">
            <div className="flex flex-col">
              <h2 className="text-4xl">Paket Wisata 3 Hari 2 Malam</h2>
              <p>
                from <span className="font-bold text-lg">{formatCurrency(1045000)} </span> /pax
              </p>
            </div>
            <p>
              Rencanakan liburan tak terlupakan dengan Paket Wisata Lombok 3 Hari 2 Malam. Paket ini
              ideal bagi Anda yang tiba pagi atau siang hari di Lombok, serta memiliki penerbangan
              pulang di pagi atau siang hari. Nikmati kenyamanan private tour (tidak digabung dengan
              peserta lain), di mana Anda dan rombongan tidak akan digabung dengan peserta lain,
              sehingga perjalanan lebih fleksibel dan personal. Temukan pesona Lombok dengan
              itinerary yang bisa disesuaikan, dari pantai eksotis hingga situs budaya yang memukau.
              Baik bersama teman, keluarga, atau rekan kerja, paket ini akan memastikan perjalanan
              Anda lebih santai, menyenangkan, dan tentunya lebih privat. Segera pesan sekarang
              untuk merasakan liburan eksklusif di Lombok hanya dengan RentCar Lombok!
            </p>
            <div>
              <Button>Pesan Sekarang</Button>
            </div>
          </div>
        </div>
        {/* include/exclude */}
        <div className="flex flex-col mt-10 gap-4 border-t">
          <div className="flex items-center gap-2 pt-8">
            <ListCheckIcon />
            <p className="font-bold text-primary">Included & Excluded</p>
          </div>
          <div className="flex md:flex-row flex-col gap-8">
            <ul>
              <li className="flex items-center gap-2">
                <CheckIcon size={15} strokeWidth={4} />
                Transportasi Kendaraan
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon size={15} strokeWidth={4} />
                Driver + BBM
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon size={15} strokeWidth={4} />
                Pemandu Wisata
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon size={15} strokeWidth={4} />
                Sarapan, Makan Siang, Makan Malam
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon size={15} strokeWidth={4} />
                Air mineral per hari
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon size={15} strokeWidth={4} />
                Tiket masuk semua objeck wisata
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon size={15} strokeWidth={4} />
                Hotel
              </li>
            </ul>
            <ul>
              <li className="flex items-center gap-2">
                <XIcon size={15} strokeWidth={4} />
                Tiket Pesawat
              </li>
              <li className="flex items-center gap-2">
                <XIcon size={15} strokeWidth={4} />
                Keperluan Pribadi
              </li>
            </ul>
          </div>
        </div>

        {/* itinerary */}
        <div className="flex flex-col mt-10 gap-4 border-t">
          <div className="flex items-center gap-2 pt-8">
            <NotebookPenIcon />
            <p className="font-bold text-primary">Itinerary</p>
          </div>
          <div className="flex flex-col">
            <Accordion
              type="single"
              collapsible
              className="rounded-xl border border-muted-foreground"
            >
              <AccordionItem value="item-1" className="border-none">
                <AccordionTrigger className="px-6 bg-primary/10 rounded-lg text-start">
                  Day 1: Tiba di Bandara - Dinner
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <ul className="flex flex-col gap-2 px-10 list-disc">
                    <li>
                      Setiba di Bandara Internasional Lombok, Anda akan dijemput oleh guide kami
                    </li>
                    <li>
                      Selanjutnya, akan menuju ke tempat makan/dinner di lokasi yang telah
                      ditentukan
                    </li>
                    <li>
                      Setelah itu, pengantaran ke hotel yang telah ditentukan untuk melakukan
                      check-in.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="flex flex-col">
            <Accordion
              type="single"
              collapsible
              className="rounded-xl border border-muted-foreground"
            >
              <AccordionItem value="item-1" className="border-none">
                <AccordionTrigger className="px-6 bg-primary/10 rounded-lg text-start">
                  Day 2: Gili Trawangan - Gili Air - Gili Meno
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <ul className="flex flex-col gap-2 px-10 list-disc">
                    <li>
                      Setelah sarapan pagi di Hotel, Anda akan di jemput oleh Tour guide lalu tour
                      dilanjutkan menuju
                    </li>
                    <li>
                      Nipah / Bukit Malaka adalah Daerah perbukitan setelah pantai Senggigi, Lokasi
                      bukit yang berada di tepi pantai serta memiliki pemandangan yang sangat
                      eksotis dengan ciri khas pulau tropis. Dari bukit ini Anda bisa melihat pulau
                      Bali dan pemandagan 3 gili yaitu Gili Trawangan, Gili Air dan Gili Meno.
                    </li>
                    <li>
                      Teluk Nara merupakan pelabuhan speed boat menuju kawasan wisata Gili
                      Trawangan, disni anda akan menggunakan Speed Boat (Private) yang menempuh
                      perjalanan 10-15 Menit menit.
                    </li>
                    <li>
                      Gili Trawangan merupakan salah satu pulau dari 3 Gili yang memiliki wilayah
                      paling luas, Pantai yang eksotis dengan pasir putih serta bebas dari polusi
                      kendaraan. Aktifitas yang bisa dilakukan Diving, snorkeling, Banana Boat, dll.
                    </li>
                    <li>
                      Gili Meno merupakan salah satu dari tiga pulau kecil, selain Gili Trawangan
                      dan Gili Air, yang berlatarkan pemandangan pantai yang menakjubkan serta hutan
                      lindung. Di sini terdapat taman burung yang mempunyai koleksi burung-burung
                      langka dari Indonesia dan mancanegara. Pasirnya putih dan masih alami.
                    </li>
                    <li>
                      Gili Air merupakan salah satu dari tiga pulau gili terkenal di Lombok, yaitu
                      Gili Trawangan, dan Gili Meno. Gili Air merupakan pulau yang letaknya paling
                      dekat dengan pulau Lombok. Anda dapat menjelajahi beberapa titik untuk
                      menikmati keanekaragaman hayati seperti spot kuda laut, penyu laut, beragam
                      ikan dengan berbagai warna, serta keindahan terumbu karang.
                    </li>
                    <li>Tempat Oleh-oleh khas lombok dan kerajinan mutiara</li>
                    <li>Makan Malam di daerah senggigi</li>
                    <li>Kembali ke Hotel (acara bebas)</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="flex flex-col">
            <Accordion
              type="single"
              collapsible
              className="rounded-xl border border-muted-foreground"
            >
              <AccordionItem value="item-1" className="border-none">
                <AccordionTrigger className="px-6 bg-primary/10 rounded-lg text-start">
                  Day 3: Mandalika Tour - Pengantaran Bandara
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <ul className="flex flex-col gap-2 px-10 list-disc">
                    <li>
                      Desa Sade / Rambitan adalah Rumah adat Tradisional khas suku SASAK yang
                      terletak di Dusun Rambitan Kabupaten Lombok Tengah, salah satu khas rumah suku
                      sasak yaitu berbentuk Lumbung Padi. Aktifitas masyarakat desa Sade yakni
                      Bertani, bertenun bagi kaum wanita. Kegiatan yang bisa anda lakukan di desa
                      sade: mengenal sejarah masyarakat sasak, mengepel menggunkan kotoran sapi,
                      bertenun, foto selfi.
                    </li>
                    <li>
                      Pantai Tanjung aan & Kuta merupakan pantai yang memiliki pesona alam yang
                      masih alami, memiliki pasir yang menyerupai merica. Aktifitas yang dapat
                      dilakukan adalah foto selfi, bermain air dan berkunjung ke Batu Payung
                      menggunakan Boat. Makan siang di pantai kuta
                    </li>
                    <li>
                      Bukit Merese / Pantai Tanjung Aan adalah bukit kecil yang menawarkan
                      pemandangan laut pantai selatan yang eksotis
                    </li>
                    <li>Pantai Tanjung Aan</li>
                    <li>Desa Tenun / Desa Sukarare</li>
                    <li>Pengantaran ke Bandara/Airport</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Destinantion */}
        <div className="flex flex-col mt-10 gap-4 border-t">
          <div className="flex items-center gap-2 pt-8">
            <MapPinCheckInsideIcon />
            <p className="font-bold text-primary">Destinasi Wisata</p>
          </div>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="md:-ml-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="pl-3 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Image
                      src={'/wallpaper.jpg'}
                      alt="package"
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
