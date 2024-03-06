import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ourFeatures',
  title: 'Our Features',
  type: 'document',
  fields: [
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
      defineField({
        name: 'description',
        title: 'Description',
        type: 'text',
      }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {title} = selection
      return {...selection, subtitle: `${title}'s` && `Feature`}
    },
  },
})
