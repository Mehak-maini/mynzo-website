import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: { read: () => true },
  upload: {
    mimeTypes: ['image/*', 'image/jpeg', 'image/png', 'image/webp', 'image/gif'],
  },
  fields: [
    { name: 'alt', type: 'text', required: false },
  ],
}
