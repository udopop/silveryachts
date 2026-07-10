export default {
  name: 'yacht',
  title: 'Yachten',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Yacht Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug (URL-Endung)',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'laenge',
      title: 'Länge (z.B. 85M)',
      type: 'string',
    },
    {
      name: 'beschreibung',
      title: 'Beschreibung',
      type: 'text',
    },
    {
      name: 'galerie',
      title: 'Bildergalerie (Slideshow)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    // DIESES FELD HIER JETZT ERGÄNZEN:
    {
      name: 'mainImage',
      title: 'Hauptbild (Hero Image)',
      type: 'image',
      options: {
        hotspot: true, // Erlaubt das Zuschneiden im Studio
      },
    },
  ],
}