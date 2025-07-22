import { defineField } from "sanity";

export default {
    name: 'home',
    title: 'Home Page',
    type: 'document',
    __experimental_actions: ['update', 'publish', 'delete'], // Disable 'create'
    groups: [
        {
            name: 'hero',
            title: 'HERO',
        },
        {
            name: 'data-fields',
            title: 'Data Fields',
        },
        {
            name: 'seo',
            title: 'SEO',
        },
    ],
    fields: [
        // Hero section
        defineField({
            title: "Title",
            name: "hero_title",
            type: "string",
            group: 'hero',
        }),
        defineField({
            title: "Sub Title",
            name: "hero_sub_title_title",
            type: "string",
            group: 'hero',
        }),
        defineField({
            title: "Info",
            name: "hero_info",
            type: "text",
            group: 'hero',
        }),
        defineField({
            title: "Background Image",
            name: "hero_background_image",
            type: "image",
            options: {
                hotspot: true,
            },
            group: 'hero'
        }),
        defineField({
            name: 'buttons',
            title: 'Buttons',
            type: 'array',
            group: 'hero',
            of: [
                {
                    type: 'object',
                    name: 'button',
                    title: 'Button',
                    fields: [
                        {
                            name: 'label',
                            title: 'Label',
                            type: 'string',
                            validation: Rule => Rule.required().error('Label is required')
                        },
                        {
                            name: 'href',
                            title: 'Link (URL)',
                            type: 'string',
                        }
                    ]
                }
            ]
        }),

        // Brands Gallery
        defineField({
            name: 'brands',
            title: 'Brands Gallery',
            type: 'array',
            group: 'data-fields',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true
                    }
                }
            ]
        }),

        // Multifamily Siding Section
        defineField({
            name: 'multifamilySection',
            title: 'Multifamily Siding Section',
            type: 'object',
            group: 'data-fields',
            fields: [
                defineField({
                    name: 'heading',
                    title: 'Heading',
                    type: 'string',
                    validation: Rule => Rule.required(),
                }),
                defineField({
                    name: 'description',
                    title: 'Description',
                    type: 'text',
                    rows: 4,
                    validation: Rule => Rule.required(),
                }),
                defineField({
                    name: 'button',
                    title: 'Button',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'label',
                            title: 'Label',
                            type: 'string',
                            validation: Rule => Rule.required(),
                        }),
                        defineField({
                            name: 'href',
                            title: 'Link',
                            type: 'url',
                            validation: Rule => Rule.required(),
                        }),
                    ],
                }),
                defineField({
                    name: 'mediaImage',
                    title: 'Media Image / Thumbnail',
                    type: 'image',
                    options: { hotspot: true },
                }),
                defineField({
                    name: 'videoUrl',
                    title: 'Video URL (optional)',
                    type: 'url',
                    validation: Rule => Rule.uri({ scheme: ['http', 'https'] }),
                }),
            ]
        }),

        defineField({
            name: 'gallery_images',
            title: 'Gallery Images',
            type: 'array',
            group: 'data-fields',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true
                    }
                }
            ]
        }),


        defineField({
            name: 'detail_cards',
            title: 'Detail Cards',
            type: 'array',
            group: 'data-fields',
            of: [
                {
                    type: 'object',
                    name: 'card',
                    title: 'Card',
                    fields: [
                        defineField({
                            name: 'heading',
                            title: 'Heading',
                            type: 'string',
                            validation: Rule => Rule.required(),
                        }),
                        defineField({
                            name: 'description',
                            title: 'Description',
                            type: 'text',
                            rows: 4,
                            validation: Rule => Rule.required(),
                        }),
                        defineField({
                            name: 'button',
                            title: 'Button',
                            type: 'object',
                            fields: [
                                defineField({
                                    name: 'label',
                                    title: 'Label',
                                    type: 'string',
                                    validation: Rule => Rule.required(),
                                }),
                                defineField({
                                    name: 'href',
                                    title: 'Link',
                                    type: 'url',
                                    validation: Rule => Rule.required(),
                                }),
                            ],
                        }),
                        defineField({
                            name: 'mediaImage',
                            title: 'Media Image / Thumbnail',
                            type: 'image',
                            options: { hotspot: true },
                        }),
                    ]
                }
            ]
        }),

        defineField({
            name: 'processSteps',
            title: 'Process Steps',
            type: 'object',
            group: 'data-fields',
            fields: [
                defineField({
                    name: 'sectionTitle',
                    title: 'Section Title',
                    type: 'string',
                    validation: Rule => Rule.required(),
                }),
                defineField({
                    name: 'sectionSubtitle',
                    title: 'Section Subtitle',
                    type: 'text',
                    rows: 2,
                }),
                defineField({
                    name: 'steps',
                    title: 'Steps',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            name: 'step',
                            title: 'Step',
                            fields: [
                                defineField({
                                    name: 'title',
                                    title: 'Step Title',
                                    type: 'string',
                                    validation: Rule => Rule.required(),
                                }),
                                defineField({
                                    name: 'description',
                                    title: 'Step Description',
                                    type: 'text',
                                    rows: 3,
                                }),
                                defineField({
                                    name: 'icon',
                                    title: 'Step Icon (Optional)',
                                    type: 'image',
                                    options: {
                                        hotspot: true,
                                    },
                                }),
                            ],
                        }
                    ]
                }),
                defineField({
                    name: 'button',
                    title: 'Call to Action Button',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'label',
                            title: 'Label',
                            type: 'string',
                            validation: Rule => Rule.required(),
                        }),
                        defineField({
                            name: 'href',
                            title: 'Link',
                            type: 'url',
                            validation: Rule => Rule.required(),
                        }),
                    ],
                }),
            ]
        }),

        defineField({
            name: 'partnerSection',
            title: 'Partner Section',
            type: 'object',
            group: 'data-fields',
            fields: [
                {
                    name: 'videoImage',
                    title: 'Video/Image',
                    type: 'image',
                    description: 'Image to show with video play button overlay',
                    options: {
                        hotspot: true,
                    },
                },
                {
                    name: 'videoURL',
                    title: 'Video/URL',
                    type: 'url',
                    description: 'Video URL to play',
                    options: {
                        hotspot: true,
                    },
                },
                {
                    name: 'headingHighlight',
                    title: 'Highlight Text (small)',
                    type: 'string',
                },
                {
                    name: 'heading',
                    title: 'Main Heading',
                    type: 'string',
                },
                {
                    name: 'description',
                    title: 'Description',
                    type: 'text',
                },
                {
                    name: 'features',
                    title: 'Features List',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            fields: [
                                {
                                    name: 'text',
                                    title: 'Feature Text',
                                    type: 'string',
                                },
                                {
                                    name: 'icon',
                                    title: 'Icon (optional)',
                                    type: 'image',
                                    options: { hotspot: true },
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'logos',
                    title: 'Company Logos (bottom)',
                    type: 'array',
                    of: [
                        {
                            type: 'image',
                            options: {
                                hotspot: true,
                            },
                        },
                    ],
                },
            ]
        }),

        defineField({
            name: 'faqs',
            title: 'FAQs',
            type: 'array',
            group: 'data-fields',
            of: [
                {
                    type: 'object',
                    name: 'faqItem',
                    title: 'FAQ Item',
                    fields: [
                        defineField({
                            name: 'question',
                            title: 'Question',
                            type: 'string',
                            validation: Rule => Rule.required().min(10),
                        }),
                        defineField({
                            name: 'answer',
                            title: 'Answer',
                            type: 'text',
                            rows: 4,
                            validation: Rule => Rule.required().min(10),
                        }),
                    ],
                },
            ],
        }),

        defineField({
            name: 'cta',
            title: 'CTA',
            type: 'object',
            group: 'data-fields',
            fields: [
                {
                    name: 'backgroundImage',
                    title: 'Background Image',
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                },
                {
                    name: 'Title',
                    title: 'title',
                    type: 'string',
                },
                {
                    name: 'sub_title',
                    title: 'sub_title',
                    type: 'string',
                },
                {
                    name: 'buttonText',
                    title: 'Button Text',
                    type: 'text',
                },
                {
                    name: 'buttonURL',
                    title: 'Button URL',
                    type: 'text',
                },
            ]
        }),




        // SEO Section
        defineField({
            title: "Meta Title",
            name: "meta_title",
            type: "string",
            group: 'seo'
        }),
        defineField({
            title: "Meta Description",
            name: "meta_description",
            type: "text",
            group: 'seo'
        }),
        defineField({
            title: "Meta Tags",
            name: "meta_tags",
            description: "Tags seprate with ,",
            type: "text",
            group: 'seo'
        }),
    ],
};
