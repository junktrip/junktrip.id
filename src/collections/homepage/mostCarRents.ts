import type { CollectionConfig } from 'payload'

export const MostCarRents: CollectionConfig = {
  admin: {
    group: 'homepage',
  },
  slug: 'most-car-rents',
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
      name: 'price_with_driver',
      type: 'number',
      required: true,
    },
    {
      name: 'price_with_no_driver',
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
