// import HeadlineHome from '@/components/content/headlineHome'

// interface WatchUsProps {
//   data: {
//     title: string
//     description: string
//     url: string
//   }[]
// }

// type Item = {
//   title: string
//   description: string
//   url: string
// }

// type Heading = {
//   title: string
//   description: string
// }

// type Props = {
//   heading: Heading
//   items: Item[]
// }

// export const YoutubeEmbed: React.FC<Props> = ({heading, items}) => {
//   return (
//     <div className="bg-white">
//       <div className="max-w-screen-xl mx-auto flex flex-col gap-4 2xl:px-0 sm:px-8 px-4 py-16">
//         <HeadlineHome
//           title={"MEDIA SOSIAL"}
//           subtitle="Berbagi pengalaman dengan orang terkasih"
//           titleColor="text-muted-foreground/50"
//         />
//         <div className="w-full flex items-center gap-6 overflow-auto">
//           {items.map((watchUs) => (
//             <iframe
//               key={watchUs.url}
//               className="aspect-video w-full rounded-lg"
//               src={watchUs.url}
//             ></iframe>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

import HeadlineHome from '@/components/content/headlineHome'

type Item = {
  title: string
  description: string
  url: string
}

type Heading = {
  title: string
  description: string
}

type Props = {
  heading: Heading
  items: Item[]
}

export const YoutubeEmbed: React.FC<Props> = ({ heading, items }) => {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-4 2xl:px-0 sm:px-8 px-4 py-16">
        <HeadlineHome
          title={heading.title}
          subtitle={heading.description}
          titleColor="text-muted-foreground/50"
        />
        <div className="w-full flex items-center gap-6 overflow-auto">
          {items.map((watchUs) => (
            <iframe
              key={watchUs.url}
              className="aspect-video w-full rounded-lg"
              src={watchUs.url}
            ></iframe>
          ))}
        </div>
      </div>
    </div>
  )
}
