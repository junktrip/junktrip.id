export interface OurClientLogo {
  logos: {
    logo: {
      alt: string
      url: string
    }
  }
}

export type Logo = {
  logo: {
    alt: string
    url: string
  }
}

export type Heading = {
  title: string
  description: string
}

export type Props = {
  heading: Heading
  logos: Logo[]
}
