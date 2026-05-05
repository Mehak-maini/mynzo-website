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

      const result = await new Promise<any>((resolve, reject) => {
        const uploadStream = cld.uploader.upload_stream(
          { folder: 'mynzo-blog', resource_type: 'auto' },
          (error, result) => {
            if (error) reject(error)
            else resolve(result)
          }
        )
        uploadStream.end(file.buffer)
      })

      // Return the Cloudinary public_id as the filename so we can delete later
      return { filename: result.public_id }
    },

    handleDelete: async ({ filename }) => {
      const cld = getCloudinary()
      await cld.uploader.destroy(filename, { resource_type: 'auto' })
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
