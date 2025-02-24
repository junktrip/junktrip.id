export interface FaqData {
  question: string
  answer: string
  order: number
}

export type Item = {
  question: string
  answer: string
  order: number
}

export type Heading = {
  title: string
  description: string
}

export type Props = {
  heading: Heading
  items: Item[]
}
