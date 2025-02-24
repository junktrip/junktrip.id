import type { CollectionConfig } from 'payload'

export const Faqs: CollectionConfig = {
  admin: {
    group: 'homepage',
  },
  slug: 'faq',
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
          name: 'question',
          type: 'text',
          required: true,
        },
        {
          name: 'answer',
          type: 'textarea',
          required: true,
        },
        {
          name: 'order',
          type: 'number',
          required: true,
        },
      ],
    },
  ],
}
