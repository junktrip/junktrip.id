import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

export interface Itinerary {
  day: string
  tour_name: string
  description: SerializedEditorState
}

export interface Included {
  item: string
}

export interface Excluded {
  item: string
}

export interface Destination {
  destination_name: {
    url: string
    alt: string
  }
}

export interface TourPackage {
  name: string
  slug: string
  image_url: {
    url: string
    alt: string
  }
  itinerary: Itinerary[]
  price: number
  package_description: SerializedEditorState
  included: Included[]
  excluded: Excluded[]
  destination: Destination[]
}
