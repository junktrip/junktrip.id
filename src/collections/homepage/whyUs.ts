import { CollectionConfig } from 'payload'

export const WhyUs: CollectionConfig = {
  admin: {
    group: 'homepage',
  },
  slug: 'why-us',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'heading', //field heading
      label: 'Heading',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Heading Title', // for title
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          label: 'Heading Description', // for subtitle
        },
      ],
    },
    {
      name: 'items', // Field item
      label: 'Items',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Item Title',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          label: 'Item Description',
        },
        {
          name: 'icon',
          type: 'text',
          required: true,
          label: 'Icon',
        },
      ],
    },
  ],
}

export default WhyUs
