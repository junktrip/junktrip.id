// storage-adapter-import-placeholder
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { HeroSection } from './collections/homepage/hero'
import { PopularDestinations } from './collections/homepage/popularDestinations'
import { MostCarRents } from './collections/homepage/mostCarRents'
import { MostMotorRents } from './collections/homepage/mostMotorRents'
import { CarRents } from './collections/product/carRents'
import { MotorRents } from './collections/product/motorRents'
import { TourPackages } from './collections/product/tourPackage'
import WhyUs from './collections/homepage/whyUs'
import { OurClient } from './collections/homepage/ourClient'
import { SocialMedia } from './collections/homepage/socialMedia'
import { Faqs } from './collections/homepage/faqs'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    HeroSection,
    PopularDestinations,
    MostCarRents,
    MostMotorRents,
    CarRents,
    MotorRents,
    TourPackages,
    WhyUs,
    OurClient,
    SocialMedia,
    Faqs,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || 'file:./default.db',
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
