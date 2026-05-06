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

const FOLDER = 'mynzo-blog'
const CLOUD_NAME = () => process.env.CLOUDINARY_CLOUD_NAME ?? ''

export const cloudinaryAdapter = (): Adapter => {
  return () => ({
    name: 'cloudinary',

    handleUpload: async ({ data, file }) => {
      const cld = getCloudinary()

      const buf = Buffer.isBuffer(file.buffer)
        ? file.buffer
        : Buffer.from(file.buffer as ArrayBuffer)

      const result: any = await new Promise((resolve, reject) => {
        cld.uploader.upload_stream(
          {
            folder: FOLDER,
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

      // Store only the filename part (without folder prefix) so it works as a
      // single path segment in Payload's /api/media/file/[filename] route.
      // e.g. public_id "mynzo-blog/image-abc123" → stored as "image-abc123"
      const publicId = result.public_id as string
      data.filename = publicId.startsWith(`${FOLDER}/`)
        ? publicId.slice(FOLDER.length + 1)
        : publicId
    },

    handleDelete: async ({ filename }) => {
      const cld = getCloudinary()
      // Reconstruct the full public_id with the folder prefix for deletion
      const publicId = `${FOLDER}/${filename}`
      try {
        await cld.uploader.destroy(publicId, { resource_type: 'auto' })
        console.log('[Cloudinary] Deleted:', publicId)
      } catch (e) {
        console.warn('[Cloudinary] Delete failed:', e)
      }
    },

    staticHandler: async (_req, { params: { filename } }) => {
      const url = `https://res.cloudinary.com/${CLOUD_NAME()}/image/upload/${FOLDER}/${filename}`
      return Response.redirect(url, 302)
    },

    generateURL: ({ filename }) => {
      return `https://res.cloudinary.com/${CLOUD_NAME()}/image/upload/${FOLDER}/${filename}`
    },
  })
}
