import React from 'react'
import HeadlineHome from '@/components/content/headlineHome'
import { CardWhyChooseUs } from './why-choose-us-card'

type Item = {
  title: string
  description: string
  icon: 'WalletIcon' | 'UserIcon' | 'HourglassIcon' | 'MessageSquareMoreIcon'
}

type Heading = {
  title: string
  description: string
}

type Props = {
  heading: Heading
  items: Item[]
}

const WhyChooseUs: React.FC<Props> = ({ heading, items }) => {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-4 2xl:px-0 sm:px-8 px-4 py-16">
        <HeadlineHome
          title={`${heading.title}`}
          subtitle={`${heading.description}`}
          titleColor="text-muted-foreground/50"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 gap-4">
          {items.map((data) => (
            <CardWhyChooseUs key={data.title} data={data} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
