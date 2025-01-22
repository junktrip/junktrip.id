import { LucideIcon } from 'lucide-react'
import React from 'react'
interface ServiceProps {
  label: string
  description: string
  icon: LucideIcon
}

export const CardService: React.FC<ServiceProps> = ({
  label,
  description,
  icon: IconComponent,
}) => {
  return (
    // <div className="flex flex-col gap-2 items-center p-4 bg-white">
    //   <IconComponent size={35} />
    //   <div className="flex flex-col items-center text-center justify-between h-full">
    //     <p className="font-bold text-lg">{label}</p>
    //     <p className="font-thin text-sm">{description}</p>
    //   </div>
    // </div>
    <div className="flex flex-col gap-2 items-center p-4">
      <div className="bg-primary/50 p-4 rounded-md">
        <IconComponent size={35} className="text-white" />
      </div>
      <div className="flex flex-col items-center text-center justify-between h-full">
        <p className="font-bold text-lg">{label}</p>
        <p className="font-thin text-sm">{description}</p>
      </div>
    </div>
  )
}
