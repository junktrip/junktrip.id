import Headline from '@/components/content/headline'
import { CardWhyChooseUs } from './why-choose-us-card'
import { dataWhyChooseUs } from './why-choose-us-data'
export const YoutubeEmbed = () => {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center gap-10 lg:px-0 sm:px-8 px-4 py-16">
        <Headline title="Tonton Kami" level={1} size="5xl" align="center" />
        <div className="w-full flex items-center gap-6">
          <iframe
            className="aspect-video w-full rounded-lg"
            src="https://www.youtube.com/embed/jSiRPeJn9Ao?start=4"
          ></iframe>
          <iframe
            className="aspect-video w-full rounded-lg"
            src="https://www.youtube.com/embed/CErI0bEwOxU"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
