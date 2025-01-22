import Headline from '@/components/content/headline'
import { CardService } from './service-card'
import { dataServices } from './services-data'
export const Services = () => {
  return (
    <div className="bg-muted">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center gap-10 2xl:px-0 sm:px-8 px-4 py-16">
        <Headline
          title="Our Services"
          subtitle="Kami akan antarkan anda untuk menjelajah pulau Lombok"
          level={1}
          size="5xl"
          align="center"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 gap-4">
          {dataServices.map(({ label, description, icon: IconComponent }) => (
            <CardService key={label} label={label} description={description} icon={IconComponent} />
          ))}
        </div>
      </div>
    </div>
  )
}
