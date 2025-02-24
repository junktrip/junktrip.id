import { ListMotor } from './list-motor'
export const metadata = {
  title: 'Sewa Motor - Sewa Motor Lombok',
  description: 'Liburan ke lombok',
}

const fetchData = async (slug: string) => {
  const res = await fetch(`${process.env.PAYLOAD_API_URL}/api/${slug}`)
  const data = await res.json()

  return data.docs
}

const SewaMotor = async () => {
  const motorRents = await fetchData('motor-rents')
  return <ListMotor data={motorRents} />
}

export default SewaMotor
