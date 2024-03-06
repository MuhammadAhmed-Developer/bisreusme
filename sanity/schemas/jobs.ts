import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'jobs',
  title: 'Jobs',
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
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'minimumSalary',
      title: 'Minimum Salary',
      type: 'string',
    }),
    defineField({
      name: 'maximumSalary',
      title: 'Maximum Salary',
      type: 'string',
    }),
    defineField(
      {
        name: 'rateType',
        title: 'Rate Type',
        type: 'string',
        initialValue: 'Select Rate Type',
        options: {
          list: [
            { title: 'per year', value: 'per year' },
            { title: 'per month', value: 'per month' },
            { title: 'per hour', value: 'per hour' },
          ],
        },
      },
    ),
    defineField(
      {
        name: 'workPlaceType',
        title: 'Work Place Type',
        type: 'string',
        initialValue: 'Select Work Place Type',
        options: {
          list: [
            { title: 'On-Site', value: 'On-Site' },
            { title: 'Remote', value: 'Remote' },
            { title: 'Hybrid', value: 'Hybrid' },
          ],
        },
      },
    ),
    defineField(
      {
        name: 'jobType',
        title: 'Job Type',
        type: 'string',
        initialValue: 'Select Job Type',
        options: {
          list: [
            { title: 'Temporary', value: 'Temporary' },
            { title: 'Internship', value: 'Internship' },
            { title: 'New-Grad', value: 'New-Grad' },
            { title: 'Contract', value: 'Contract' },
            { title: 'Part-Time', value: 'Part-Time' },
            { title: 'Full-Time', value: 'Full-Time' },
          ],
        },
      },
    ),
    defineField({
      name: 'jobPostedAt',
      title: 'Job Posted at',
      type: 'datetime',
    }),
    defineField({
      name: 'jobExpiredAt',
      title: 'Job Expired at',
      type: 'datetime',
    }),
    defineField({
      name: 'howToApply',
      title: 'How To Apply',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative text',
              description: `Some of your visitors cannot see images, 
                be they blind, color-blind, low-sighted; 
                alternative text is of great help for those 
                people that can rely on it to have a good idea of 
                what's on your page.`,
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      company: 'companyName',
    },
    prepare(selection) {
      const {company} = selection
      return {...selection, subtitle: company && `by ${company}`}
    },
  },
})
