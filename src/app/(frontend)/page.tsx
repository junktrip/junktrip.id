import { Brands } from './(homepage-components)/brand'
import { CallToActionCars } from './(homepage-components)/cta'
import { Hero } from './(homepage-components)/hero'
import { MostRent } from './(homepage-components)/most-rent'
import { PopularDestinations } from './(homepage-components)/popular-destinations'
import { Services } from './(homepage-components)/services'
import { WhyChooseUs } from './(homepage-components)/why-choose-us'
import { YoutubeEmbed } from './(homepage-components)/youtube'

export const metadata = {
  title: 'Liburan asyik ke Lombok',
  description: 'Liburan ke lombok',
}

export default function Page() {
  return (
    <div>
      <Hero />
      <Brands />
      {/* <CallToActionCars /> */}
      <PopularDestinations />
      {/* <Services /> */}
      <WhyChooseUs />
      <MostRent />
      <YoutubeEmbed />
    </div>
  )
}
