import HeadlineHome from '@/components/content/headlineHome'
import { OurClientList } from './ourClientList'
import { OurClientLogo } from '@/lib/utils/interfaces/OurClient'
import { Props } from '@/lib/utils/interfaces/OurClient'

export const OurClient: React.FC<Props> = ({ heading, logos }) => {
  return (
    <div className="bg-muted pt-16">
      <div className="flex flex-col gap-4">
        <HeadlineHome
          title={heading.title}
          subtitle={heading.description}
          titleColor="text-muted-foreground/50"
        />
        <OurClientList heading={heading} logos={logos} />
      </div>
    </div>
  )
}
