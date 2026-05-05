import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'publishedAt', 'status'],
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
      admin: { description: 'URL-friendly (e.g. my-blog-post). No spaces, use hyphens.' },
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
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'publishedAt',
      type: 'date',
      required: true,
    },
    {
      name: 'readTime',
      type: 'text',
      admin: { description: 'e.g. 5' },
    },
    {
      name: 'author',
      type: 'text',
      admin: { description: 'e.g. Mynzo Team' },
    },
  ],
}
