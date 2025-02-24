import { ListWisata } from './list-wisata'

const fetchData = async (slug: string) => {
  const res = await fetch(`${process.env.PAYLOAD_API_URL}/api/${slug}`)
  const data = await res.json()

  return data.docs
}

const PaketWisata = async () => {
  const tourPackages = await fetchData('tour-packages')
  return <ListWisata data={tourPackages} />
}

export default PaketWisata
