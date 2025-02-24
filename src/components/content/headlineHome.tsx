import React from 'react'

interface HeadlineProps {
  title?: string
  subtitle?: string
  titleColor?: string
  subtitleColor?: string
}

const HeadlineHome: React.FC<HeadlineProps> = ({ title, subtitle, titleColor, subtitleColor }) => {
  return (
    <div className="flex flex-col justify-center items-center pb-4">
      <div className="relative text-center space-y-2 flex flex-col items-center">
        <h1 className={`${titleColor} font-bold z-10 isolate text-sm tracking-wide uppercase`}>
          {title}
        </h1>
        <div
          className={`sm:text-4xl text-xl whitespace-pre-line sm:w-3/4 w-full sm:px-0 px-4 leading-tight tracking-wide ${subtitleColor}`}
        >
          {subtitle}
        </div>
      </div>
    </div>
  )
}

export default HeadlineHome
