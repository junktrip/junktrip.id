import type { CollectionConfig } from 'payload'
import { formatSlug } from '@/lib/utils/formatSlug'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
export const TourPackages: CollectionConfig = {
  admin: {
    group: 'product',
  },
  slug: 'tour-packages',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Nama Paket',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      hooks: {
        beforeChange: [formatSlug('name')],
      },
    },
    {
      name: 'image_url',
      type: 'upload',
      label: 'Cover',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'itinerary',
      type: 'array',
      label: 'Itinerary',
      fields: [
        {
          name: 'day',
          type: 'number',
          label: 'Hari ke',
          required: true,
        },
        {
          name: 'tour_name',
          type: 'text',
          label: 'Nama Tour',
          required: true,
        },
        {
          name: 'description',
          type: 'richText',
          label: 'Deskripsi',
          editor: lexicalEditor(),
          required: true,
        },
      ],
    },
    {
      name: 'price',
      type: 'number',
      label: 'Harga',
      required: true,
    },
    {
      name: 'package_description',
      type: 'richText',
      label: 'Deskripsi Paket',
      editor: lexicalEditor(),
      required: true,
    },
    {
      name: 'included',
      type: 'array',
      label: 'Include',
      required: true,
      fields: [
        {
          name: 'item',
          type: 'text',
          label: 'Item Include',
          required: true,
        },
      ],
    },
    {
      name: 'excluded',
      type: 'array',
      label: 'Excluded',
      required: true,
      fields: [
        {
          name: 'item',
          type: 'text',
          label: 'Item Exclude',
          required: true,
        },
      ],
    },
    {
      name: 'destination',
      label: 'Destinasi Wisata',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'destination_name',
          type: 'upload',
          label: 'Destinasi Wisata',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
