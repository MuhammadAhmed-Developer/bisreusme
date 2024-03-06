import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pricing',
  title: 'Pricing',
  type: 'document',
  fields: [
    defineField({
      name: 'mainImage',
      title: 'Card Icon',
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
      name: 'cardGroup',
      title: 'Card For which Group',
      type: 'string',
    }),
    defineField({
      name: 'cardType',
      title: 'Card Type',
      type: 'string',
    }),
      defineField({
        name: 'cardDescription',
        title: 'Card Description',
        type: 'text',
      }),
      defineField({
        name: 'cardPrice',
        title: 'Card Price',
        type: 'string',
      }),
      defineField({
        name: 'cardPlan',
        title: 'Card Plan',
        type: 'string',
      }),
      defineField({
        name: 'cardFacilities',
        title: 'Card Facilities',
        type: 'array',
        of:[
            {
                type: 'string',
              },
        ]
      }),
      defineField({
        name: 'popular',
        title: 'Popular ?',
        type: 'boolean',
      }),
  ],

  preview: {
    select: {
      title: 'cardPlan',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {title} = selection
      return {...selection, subtitle: `${title}'s` && `Card`}
    },
  },
})
