import { ListVehicles } from './list-vehicles'

export const metadata = {
  title: 'Sewa Mobil - Sewa Mobil Lombok',
  description: 'Liburan ke lombok',
}

const fetchData = async (slug: string) => {
  const res = await fetch(`${process.env.PAYLOAD_API_URL}/api/${slug}`)
  const data = await res.json()

  return data.docs
}

const SewaMobil = async () => {
  const carRents = await fetchData('car-rents')
  return <ListVehicles data={carRents} />
}

export default SewaMobil
