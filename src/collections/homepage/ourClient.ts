import type { CollectionConfig } from 'payload'

export const OurClient: CollectionConfig = {
  admin: {
    group: 'homepage',
  },
  slug: 'our-client',
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
      name: 'logos',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
