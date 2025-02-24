import type { CollectionConfig } from 'payload'

export const HeroSection: CollectionConfig = {
  admin: {
    group: 'homepage',
    useAsTitle: 'title',
  },
  slug: 'hero-section',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'ctaButtonText',
      type: 'text',
      required: true,
    },
    {
      name: 'ctaButtonLink',
      type: 'text',
      required: true,
    },
  ],
}
