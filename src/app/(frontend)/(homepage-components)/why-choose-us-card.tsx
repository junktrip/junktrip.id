import React from 'react'
import { WalletIcon, UserIcon, HourglassIcon, MessageSquareMoreIcon } from 'lucide-react'

interface WhyChooseUsProps {
  data: {
    title: string
    description: string
    icon: 'WalletIcon' | 'UserIcon' | 'HourglassIcon' | 'MessageSquareMoreIcon'
  }
}

const iconComponents = {
  WalletIcon,
  UserIcon,
  HourglassIcon,
  MessageSquareMoreIcon,
}

export const CardWhyChooseUs = ({ data }: WhyChooseUsProps) => {
  const IconComponent = iconComponents[data.icon] || null
  return (
    <div className="flex flex-col gap-2 items-center p-4 bg-secondary rounded-md">
      <IconComponent size={35} />
      <div className="flex flex-col gap-2 items-center text-center justify-between">
        <p className="font-semibold text-lg">{data.title}</p>
        <p className="font-thin">{data.description}</p>
      </div>
    </div>
  )
}
