import type { CollectionConfig } from 'payload'

export const MostMotorRents: CollectionConfig = {
  admin: {
    group: 'homepage',
  },
  slug: 'most-motor-rents',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'brand',
      type: 'text',
      required: true,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'image_url',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'oneDay',
      type: 'number',
      required: true,
    },
    {
      name: 'threeDay',
      type: 'number',
      required: true,
    },
    {
      name: 'SevenDay',
      type: 'number',
      required: true,
    },
    {
      name: 'oneMonth',
      type: 'number',
      required: true,
    },
    {
      name: 'duration',
      type: 'text',
      required: true,
    },
    {
      name: 'transmission',
      type: 'text',
      required: true,
    },
    {
      name: 'passengers',
      type: 'number',
      required: true,
    },
    {
      name: 'fuelType',
      type: 'text',
      required: true,
    },
  ],
}
