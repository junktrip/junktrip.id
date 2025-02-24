import { CollectionConfig } from 'payload'

export const SocialMedia: CollectionConfig = {
  admin: {
    group: 'homepage',
  },
  slug: 'social',
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
        },
        {
          name: 'description',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
