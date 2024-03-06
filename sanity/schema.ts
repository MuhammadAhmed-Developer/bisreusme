import { type SchemaTypeDefinition } from 'sanity'

import blog from './schemas/blog'
import author from './schemas/author'
import faqs from './schemas/faqs'
import pricingFaqs from './schemas/pricingFaqs'
import userSuccess from './schemas/userSuccess'
import ourFeatures from './schemas/ourFeatures'
import privacyPolicy from './schemas/privacyPolicy'
import termsAndConditions from './schemas/termsAndConditions'
import pricing from './schemas/pricing'
import jobs from './schemas/jobs'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, author, faqs, pricingFaqs, userSuccess, ourFeatures, privacyPolicy, termsAndConditions, pricing, jobs],
}
