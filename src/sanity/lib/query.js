const { groq } = require("next-sanity");

export const knowladgeQuery = groq`*[_type == "knowledgeEducationCenter"]{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  coverImage{
    asset->{
      _id,
      url
    },
    alt
  },
  author->{
    _id,
    name,
    image{
      asset->{
        url
      }
    }
  },
  content,
  seoTitle,
  seoDescription
}
`

export const query = groq`*[_type == "home"][0]{
  hero_title,
  hero_sub_title_title,
  hero_info,
  hero_background_image,
  buttons[] {
    label,
    href
  },
  brands,
  multifamilySection {
    heading,
    description,
    button {
      label,
      href
    },
    mediaImage,
    videoUrl
  },
  gallery_images,
  detail_cards[] {
    heading,
    description,
    button {
      label,
      href
    },
    mediaImage
  },
  processSteps {
    sectionTitle,
    sectionSubtitle,
    steps[] {
      title,
      description,
      icon
    },
    button {
      label,
      href
    }
  },
  partnerSection {
    videoImage,
    videoURL,
    headingHighlight,
    heading,
    description,
    features[] {
      text,
      icon
    },
    logos
  },
  faqs[] {
    question,
    answer
  },
  cta {
    backgroundImage,
    Title,
    sub_title,
    buttonText,
    buttonURL
  },
  meta_title,
  meta_description,
  meta_tags
}`




