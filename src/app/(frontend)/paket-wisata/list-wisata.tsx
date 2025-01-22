import { CardProductWisata } from './card-product-wisata'
import Headline from '@/components/content/headline'

export const ListWisata = () => {
  return (
    <div className="w-full py-16 bg-muted">
      <div className="max-w-screen-xl mx-auto 2xl:px-0 sm:px-8 px-4">
        <Headline
          title="Tentukan destinasi liburan anda"
          subtitle="Kami akan antarkan anda untuk menjelajah pulau Lombok"
          level={1}
          size="5xl"
          align="center"
        />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-16">
          <CardProductWisata />
          <CardProductWisata />
          <CardProductWisata />
          <CardProductWisata />
          <CardProductWisata />
          <CardProductWisata />
          <CardProductWisata />
          <CardProductWisata />
          <CardProductWisata />
          <CardProductWisata />
        </div>
      </div>
    </div>
  )
}
