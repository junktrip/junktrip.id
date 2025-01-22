import Headline from '@/components/content/headline'
import { CardWhyChooseUs } from './why-choose-us-card'
import { dataWhyChooseUs } from './why-choose-us-data'
export const WhyChooseUs = () => {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center gap-10 lg:px-0 sm:px-8 px-4 py-16">
        <Headline
          title="Mengapa JunkTrip?"
          subtitle="Dapatkan pengalaman luar biasa dengan penawaran yang kami berikan"
          level={1}
          size="5xl"
          align="center"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 gap-4">
          {dataWhyChooseUs.map(({ label, description, icon: IconComponent }) => (
            <CardWhyChooseUs
              key={label}
              label={label}
              description={description}
              icon={IconComponent}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
