import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'category'],
  },
  access: { read: () => true },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: { description: 'URL-friendly identifier (e.g. my-blog-post). No spaces, use hyphens.' },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        { label: 'Published', value: 'published' },
        { label: 'Draft',     value: 'draft' },
      ],
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Carbon Markets', value: 'Carbon Markets' },
        { label: 'Agroforestry',   value: 'Agroforestry' },
        { label: 'Soil Science',   value: 'Soil Science' },
        { label: 'Technology',     value: 'Technology' },
        { label: 'Policy',         value: 'Policy' },
        { label: 'Research',       value: 'Research' },
      ],
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
      admin: { description: '1-2 sentence summary shown on the blog listing card.' },
    },
    {
      name: 'content',
      type: 'textarea',
      required: true,
      admin: { description: 'Paste your full blog HTML here, e.g. <p>text</p><h2>heading</h2>' },
    },
    {
      name: 'coverImage',
      type: 'relationship',
      relationTo: 'media',
      required: false,
      admin: {
        description: 'Upload an image in the Media section first, then select it here.',
        position: 'sidebar',
      },
    },
    {
      name: 'coverImageUrl',
      type: 'text',
      required: false,
      admin: {
        description: 'Fallback: paste a direct image URL if not using the Media library above.',
        position: 'sidebar',
      },
    },
    {
      name: 'publishedAt',
      type: 'text',
      required: true,
      admin: { description: 'Publication date (e.g. May 5, 2025)' },
    },
    {
      name: 'readTime',
      type: 'text',
      admin: { description: 'Read time in minutes (e.g. 5)' },
    },
    {
      name: 'author',
      type: 'text',
      admin: { description: 'Author name (e.g. Mynzo Team)' },
    },
  ],
}
