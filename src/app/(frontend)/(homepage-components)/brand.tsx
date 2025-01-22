import Image from 'next/image'

const brandsData = [
  {
    label: 'toyota',
    src: '/brands/toyota.svg',
  },
  {
    label: 'honda',
    src: '/brands/honda.svg',
  },
  {
    label: 'mitsubishi',
    src: '/brands/mitsubishi.svg',
  },
  {
    label: 'nissan',
    src: '/brands/nissan.svg',
  },
  {
    label: 'hyundai',
    src: '/brands/hyundai.svg',
  },
]

export const Brands = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between max-w-screen-md mx-auto py-4 md:px-0 px-4">
        {brandsData.map((brands, index) => (
          <Image key={index} src={brands.src} alt={brands.label} width={50} height={50} />
        ))}
      </div>
    </div>
  )
}
