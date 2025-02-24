import { Brands } from './(homepage-components)/brand'
import { Faq } from './(homepage-components)/faq'
import { Hero } from './(homepage-components)/hero'
import { MostRent } from './(homepage-components)/most-rent'
import { OurClient } from './(homepage-components)/ourClient'
import { PopularDestinations } from './(homepage-components)/popular-destinations'
// import { WhyChooseUs } from './(homepage-components)/why-choose-us'
import { YoutubeEmbed } from './(homepage-components)/youtube'
import WhyChooseUs from './(homepage-components)/why-choose-us'
export const metadata = {
  title: 'Liburan asyik ke Lombok',
  description: 'Liburan ke lombok',
}

const fetchData = async (slug: string, single: boolean) => {
  const res = await fetch(`${process.env.PAYLOAD_API_URL}/api/${slug}`)
  const data = await res.json()

  return single ? data.docs[0] : data.docs
}

export default async function Page() {
  const heroSection = await fetchData('hero-section', true)
  const popularDestinations = await fetchData('popular-destinations', false)
  const mostCarRents = await fetchData('most-car-rents', false)
  const mostMotorRents = await fetchData('most-motor-rents', false)
  const faq = await fetchData('faq', true)
  const whyUs = await fetchData('why-us', true)
  const ourClient = await fetchData('our-client', true)
  const socialMedia = await fetchData('social', true)

  const limitedCarRents = mostCarRents.slice(0, 4)
  const limitedMotorRents = mostMotorRents.slice(0, 4)
  console.log(faq, 'faq')
  return (
    <div>
      {heroSection && <Hero data={heroSection} />}
      <Brands />
      {popularDestinations.length > 0 && <PopularDestinations data={popularDestinations} />}
      {/* {whyChooseUs.length > 0 && <WhyChooseUs data={whyChooseUs} />} */}
      {whyUs && <WhyChooseUs heading={whyUs.heading} items={whyUs.items} />}
      {(limitedCarRents.length > 0 || limitedMotorRents.length > 0) && (
        <MostRent carData={limitedCarRents} motorData={limitedMotorRents} />
      )}
      {/* {watchUs.length > 0 && <YoutubeEmbed data={watchUs} />} */}
      {socialMedia && <YoutubeEmbed items={socialMedia.items} heading={socialMedia.heading} />}
      {/* {clientLogo.length > 0 && <OurClient data={clientLogo} />} */}
      {ourClient && <OurClient heading={ourClient.heading} logos={ourClient.logos} />}
      {/* {faq.length > 0 && <Faq data={faq} />} */}
      {Faq && <Faq heading={faq?.heading} items={faq?.items} />}
    </div>
  )
}
