import { Button } from '@/components/ui/button'
import Image from 'next/image'
export const CallToActionCars = () => {
  return (
    <section className="bg-muted">
      <div className="flex gap-8 max-w-screen-xl mx-auto pt-16">
        <div className="w-1/3">
          <Image
            alt="rent-car"
            src={'/rent-car-1.jpg'}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-8 w-2/3">
          <p>Galeri</p>
          <p className="font-bold text-3xl">More than 150+ special collection cars</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, exercitationem
            accusamus distinctio similique odit corrupti ipsam pariatur tempora ab aperiam!
          </p>
          <Button className="w-28">Lihat koleksi</Button>
        </div>
      </div>
    </section>
  )
}
