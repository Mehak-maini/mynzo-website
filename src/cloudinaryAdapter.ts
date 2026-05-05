import { v2 as cloudinary } from 'cloudinary'
import type { Adapter } from '@payloadcms/plugin-cloud-storage/types'

function getCloudinary() {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key:    process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  })
  return cloudinary
}

const CLOUD_NAME = () => process.env.CLOUDINARY_CLOUD_NAME ?? ''

export const cloudinaryAdapter = (): Adapter => {
  return () => ({
    name: 'cloudinary',

    handleUpload: async ({ data, file }) => {
      const cld = getCloudinary()

      // Safely convert whatever buffer type Payload provides
      const buf = Buffer.isBuffer(file.buffer)
        ? file.buffer
        : Buffer.from(file.buffer as ArrayBuffer)

      const result: any = await new Promise((resolve, reject) => {
        cld.uploader.upload_stream(
          {
            folder: 'mynzo-blog',
            resource_type: 'auto',
            use_filename: true,
            unique_filename: true,
          },
          (error, res) => {
            if (error) {
              console.error('[Cloudinary] Upload error:', error)
              reject(error)
            } else {
              resolve(res)
            }
          }
        ).end(buf)
      })

      console.log('[Cloudinary] Upload success:', result.secure_url, '| public_id:', result.public_id)

      // Store the full public_id (e.g. "mynzo-blog/image-abc123") as the filename.
      // generateURL reads this same value to build the correct Cloudinary URL.
      data.filename = result.public_id
    },

    handleDelete: async ({ filename }) => {
      const cld = getCloudinary()
      try {
        await cld.uploader.destroy(filename, { resource_type: 'auto' })
        console.log('[Cloudinary] Deleted:', filename)
      } catch (e) {
        console.warn('[Cloudinary] Delete failed:', e)
      }
    },

    staticHandler: async (_req, { params: { filename } }) => {
      const url = `https://res.cloudinary.com/${CLOUD_NAME()}/image/upload/${filename}`
      return Response.redirect(url, 302)
    },

    generateURL: ({ filename }) => {
      return `https://res.cloudinary.com/${CLOUD_NAME()}/image/upload/${filename}`
    },
  })
}
