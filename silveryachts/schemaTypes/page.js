export default {
  name: 'page',
  type: 'document',
  title: 'Pages',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Page Title'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'URL Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'heroImage',
      type: 'image',
      title: 'Hero Background Image',
      options: { hotspot: true }
    },
    {
      name: 'heroSubtitle',
      type: 'string',
      title: 'Hero Subtitle'
    },
    {
      name: 'content',
      type: 'text', // Umgestellt auf 'text' für einfache Absätze ohne Object-Fehler
      title: 'Content Text',
      description: 'Main text content for the page'
    },
    {
      name: 'pageImages',
      type: 'array',
      title: 'Page Gallery / Images',
      of: [{ type: 'image', options: { hotspot: true } }]
    }
  ]
}