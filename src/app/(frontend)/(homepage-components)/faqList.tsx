import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import { FaqData } from '@/lib/utils/interfaces/faq'
import { Props } from '@/lib/utils/interfaces/faq'

interface FaqProps {
  data: FaqData[]
}

export const FaqList: React.FC<Props> = ({ heading, items }) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items?.map((item) => (
        <AccordionItem key={item.order} value={`item-${item.order}`}>
          <AccordionTrigger className="font-bold no-underline hover:no-underline">
            {item.question}
          </AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
