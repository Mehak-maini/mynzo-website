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

export const cloudinaryAdapter = (): Adapter => {
  return () => ({
    name: 'cloudinary',

    handleUpload: async ({ file }) => {
      const cld = getCloudinary()

      const result: any = await new Promise((resolve, reject) => {
        const stream = cld.uploader.upload_stream(
          {
            folder: 'mynzo-blog',
            resource_type: 'auto',
            use_filename: true,
            unique_filename: true,
          },
          (error, res) => {
            if (error) {
              console.error('Cloudinary upload error:', error)
              reject(error)
            } else {
              resolve(res)
            }
          }
        )
        stream.end(Buffer.from(file.buffer))
      })

      console.log('Cloudinary upload success:', result.secure_url)
      return { filename: result.public_id }
    },

    handleDelete: async ({ filename }) => {
      const cld = getCloudinary()
      try {
        await cld.uploader.destroy(filename, { resource_type: 'auto' })
      } catch (e) {
        console.warn('Cloudinary delete failed:', e)
      }
    },

    staticHandler: async (_req, { params: { filename } }) => {
      const cloudName = process.env.CLOUDINARY_CLOUD_NAME
      const url = `https://res.cloudinary.com/${cloudName}/image/upload/${filename}`
      return Response.redirect(url, 302)
    },

    generateURL: ({ filename }) => {
      const cloudName = process.env.CLOUDINARY_CLOUD_NAME
      return `https://res.cloudinary.com/${cloudName}/image/upload/${filename}`
    },
  })
}
