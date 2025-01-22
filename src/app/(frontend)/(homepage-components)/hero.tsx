// import { Button } from '@/components/ui/button'
// import Image from 'next/image'
// import Link from 'next/link'

// export const Hero = () => {
//   return (
//     <section className="relative">
//       {/* Background image with filter brightness */}
//       <div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1507295386538-ddd5e86cd597?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat filter brightness-50"></div>

//       <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 justify-center">
//         <div className="max-w-xl mx-auto text-center ltr:sm:text-left rtl:sm:text-right ">
//           <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
//             Tidak Hanya Liburan
//             <strong className="block font-extrabold text-primary pt-2">
//               {' '}
//               Ini Pengalaman Hidup.{' '}
//             </strong>
//           </h1>

//           <p className="mt-4 max-w-lg text-sm justify-center text-white font-thin">
//             Nikmati petualangan tanpa batas, Saatnya menjelajah!
//           </p>

//           <div className="mt-8 flex flex-wrap gap-4 text-center justify-center">
//             <Link
//               href="#"
//               className="block rounded bg-white px-12 py-3 text-sm font-medium text-primary shadow hover:bg-muted focus:outline-none focus:ring w-auto"
//             >
//               Explore
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// import { Button } from '@/components/ui/button'
// import Image from 'next/image'
// import Link from 'next/link'
// import { PhoneIcon } from 'lucide-react'

// export const Hero = () => {
//   return (
//     <section className="relative md:h-[700px] h-[500px] flex">
//       <div className="flex justify-between items-center w-full bg-[url('/hero-bg-mobile-2.jpeg')] bg-cover lg:bg-none relative max-w-screen-xl mx-auto 2xl:px-0 px-8">
//         <div className="absolute inset-0 bg-black opacity-50 lg:brightness-50 z-0 lg:hidden block"></div>
//         <div className="flex flex-col gap-4 lg:w-1/2 w-full lg:items-start items-center lg:text-black text-white/80 z-10">
//           <h1 className="font-bold md:text-5xl text-4xl tracking-normal leading-tight lg:text-start text-center">
//             Search and find <br /> your best car rental <br /> with easy way
//           </h1>
//           <p className="font-thin text-sm lg:text-muted-foreground text-white/80 lg:text-start text-center lg:w-full w-3/4">
//             Drive performance and your cross-functional collaboration with easy-to-use dashboards,
//             data visualizations, and automated insights in one click
//           </p>
//           <div className="flex items-center gap-4">
//             <Button>
//               Booking now <PhoneIcon />{' '}
//             </Button>
//             <Link href={'/#'} className=" underline underline-offset-2">
//               See all cars
//             </Link>
//           </div>
//         </div>
//         {/* hero image */}
//         <div className="hidden lg:flex items-center justify-center w-1/2 absolute right-0 z-0">
//           <Image
//             src={'/car-heros.png'}
//             alt="hero-image"
//             width={500}
//             height={500}
//             loading="lazy"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   )
// }

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { PhoneIcon } from 'lucide-react'

export const Hero = () => {
  return (
    <section className="relative md:h-[700px] h-[500px] flex">
      {/* Kontainer untuk teks */}
      <div className="relative max-w-screen-xl mx-auto flex items-center w-full 2xl:px-0 px-8 z-10 bg-[url('/hero-bg-mobile-2.jpeg')] bg-cover lg:bg-none">
        {/* Layer untuk efek brightness hanya pada background */}
        <div className="absolute inset-0 bg-black opacity-50 lg:brightness-50 z-0 lg:hidden block"></div>

        {/* Konten teks */}
        <div className="flex flex-col gap-4 lg:w-1/2 w-full lg:items-start items-center lg:text-black text-white/80 z-10">
          <h1 className="font-bold md:text-5xl text-4xl tracking-normal leading-tight lg:text-start text-center">
            Search and find <br /> your best car rental <br /> with easy way
          </h1>
          <p className="font-thin text-sm lg:text-muted-foreground text-white/80 lg:text-start text-center lg:w-full w-3/4">
            Drive performance and your cross-functional collaboration with easy-to-use dashboards,
            data visualizations, and automated insights in one click
          </p>
          <div className="flex items-center gap-4">
            <Link href={'http://wa.me/+6287839761812'} target="_blank">
              <Button>
                Booking now <PhoneIcon />{' '}
              </Button>
            </Link>
            <Link href={'/#'} className="underline underline-offset-2">
              See all cars
            </Link>
          </div>
        </div>
      </div>

      {/* Hero image yang overlap ke kanan, di luar max-w-screen-xl */}
      <div className="hidden lg:flex absolute right-0 top-1/2 transform -translate-y-1/2 w-screen md:w-1/2 z-0">
        <Image
          src={'/car-heros.png'}
          alt="hero-image"
          width={500}
          height={500}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  )
}
