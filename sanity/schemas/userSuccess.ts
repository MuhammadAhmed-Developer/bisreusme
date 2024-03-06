import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'userSuccess',
  title: 'User Success',
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
      name: 'userName',
      title: 'User Name',
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
      title: 'userName',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {title} = selection
      return {...selection, subtitle: `${title}'s` && `Success Story`}
    },
  },
})
