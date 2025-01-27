// components/Headline.tsx

import React, { JSX } from 'react'

type HeadlineProps = {
  tip?: string
  title: string
  subtitle?: string
  level?: 1 | 2 | 3 | 4 | 5 | 6
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'
  color?: string
  align?: 'left' | 'center' | 'right'
  weight?: 'light' | 'normal' | 'bold'
}

const Headline: React.FC<HeadlineProps> = ({
  tip,
  title,
  subtitle,
  level = 1,
  size = '3xl',
  color = 'text-primary',
  align = 'center',
}) => {
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
  }

  const titleTag = `h${level}` as keyof JSX.IntrinsicElements

  const toTitleCase = (str: string) => {
    return str
      .split(' ')
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      })
      .join(' ')
  }

  return (
    <div className={`text-${align} leading-tight text-center flex flex-col gap-2`}>
      {/* tip */}
      {/* <p className={`${sizeClasses['xs']} text-primary font-bold`}>{tip}</p> */}
      {/* Title */}
      {React.createElement(
        titleTag,
        {
          className: `${sizeClasses[size]} font-bold ${color}`,
        },
        title,
      )}

      {/* Subtitle */}
      <p className={`${sizeClasses['xl']} font-thin ${color} `}>{subtitle}</p>
    </div>
  )
}

export default Headline
