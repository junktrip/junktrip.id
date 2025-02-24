export interface CarRent {
  brand: string
  name: string
  image_url: {
    url: string
  }
  price_with_driver: number
  price_with_no_driver: number
  duration: string
  transmission: string
  passengers: number
  fuelType: string
}
