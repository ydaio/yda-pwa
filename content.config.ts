import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  // MARKDOWN
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    })
  }
  // YAML
  // collections: {
  //   authors: defineCollection({
  //     type: 'data',
  //     source: 'authors/**.yml',
  //     schema: z.object({
  //       name: z.string(),
  //       avatar: z.string(),
  //       url: z.string()
  //     })
  //   })
  // }
})