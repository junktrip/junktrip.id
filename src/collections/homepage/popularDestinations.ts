import { CollectionConfig } from 'payload'

export const PopularDestinations: CollectionConfig = {
  admin: {
    group: 'homepage',
  },
  slug: 'popular-destinations',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'destinationName',
      type: 'text',
      required: true,
    },
    {
      name: 'destinationDescription',
      type: 'text',
      required: true,
    },
    {
      name: 'destinationImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'destinationLink',
      type: 'text',
      required: true,
    },
  ],
}
