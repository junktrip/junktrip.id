import HeadlineHome from '@/components/content/headlineHome'
import { OurClientList } from './ourClientList'
import { FaqData } from '@/lib/utils/interfaces/faq'
import { FaqList } from './faqList'
import { Props } from '@/lib/utils/interfaces/faq'

interface FaqProps {
  data: FaqData[]
}

export const Faq: React.FC<Props> = ({ heading, items }) => {
  return (
    <div className="py-16">
      <div className="max-w-screen-md mx-auto flex flex-col gap-4 2xl:px-0 sm:px-8 px-4">
        <HeadlineHome
          title={heading?.title}
          subtitle={heading?.description}
          titleColor="text-muted-foreground/50"
        />
        <FaqList heading={heading} items={items} />
      </div>
    </div>
  )
}
