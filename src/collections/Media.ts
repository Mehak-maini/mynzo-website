import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: { read: () => true },
  upload: {
    mimeTypes: ['image/*', 'image/jpeg', 'image/png', 'image/webp', 'image/gif'],
  },
  hooks: {
    beforeChange: [
      ({ data, req, operation }) => {
        if (req.file) {
          req.payload.logger.info(
            `[Media] ${operation} – file: ${req.file.name}, size: ${req.file.size}, mime: ${req.file.mimetype}`,
          )
        }
        return data
      },
    ],
    afterChange: [
      ({ doc, req, operation }) => {
        req.payload.logger.info(`[Media] ${operation} succeeded – id: ${doc.id}, filename: ${doc.filename}`)
        return doc
      },
    ],
  },
  fields: [
    { name: 'alt', type: 'text', required: false },
  ],
}
