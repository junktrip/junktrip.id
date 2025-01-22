import { LucideIcon } from 'lucide-react'
import React from 'react'
interface WhyChooseUsProps {
  label: string
  description: string
  icon: LucideIcon
}

export const CardWhyChooseUs: React.FC<WhyChooseUsProps> = ({
  label,
  description,
  icon: IconComponent,
}) => {
  return (
    <div className="flex flex-col gap-2 items-center p-4 bg-secondary rounded-md text-primary">
      <IconComponent size={35} />
      <div className="flex flex-col gap-2 items-center text-center justify-between">
        <p className="font-semibold text-lg">{label}</p>
        <p className="font-thin">{description}</p>
      </div>
    </div>
  )
}

// import { LucideIcon } from 'lucide-react'
// import React from 'react'
// interface WhyChooseUsProps {
//   label: string
//   description: string
//   icon: LucideIcon
// }

// export const CardWhyChooseUs: React.FC<WhyChooseUsProps> = ({
//   label,
//   description,
//   icon: IconComponent,
// }) => {
//   return (
//     <div className="flex flex-col gap-2 items-start p-4">
//       <div className="pb-2">
//         <IconComponent size={25} />
//       </div>
//       <div className="flex flex-col justify-between h-full">
//         <p className="font-bold text-lg">{label}</p>
//         <p className="font-thin text-sm">{description}</p>
//       </div>
//     </div>
//   )
// }
