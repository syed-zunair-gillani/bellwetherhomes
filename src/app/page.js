import FooterTop from "@/components/FooterTop";
import ProcessTimeline from "@/components/ProcessSteps";
import Hero from "../components/home/hero";
import Logo from "@/components/home/logo";
import Multifamily from "@/components/home/multifamily";
import ConvinceSection from "@/components/home/ConvinceSection";
import Knowledge from "@/components/home/Knowledge";
import Pride from "@/components/home/pride";
import Gallery from "@/components/home/Gallery";
import SidingReplacement from "@/components/SidingReplacement";
import { knowladgeQuery, query } from "@/sanity/lib/query";
import { client } from "@/sanity/lib/client";
import Faq from "@/components/home/Faq";
import Footer from "@/components/footer";
import { urlFor } from "@/sanity/lib/image";

export default async function Home() {
  const data = await client.fetch(query);
  const knowledgeData = await client.fetch(knowladgeQuery);
  console.log("🚀 ~ Home ~ knowledgeData:", knowledgeData)
  console.log("🚀 ~ Home ~ data: 444", data?.detail_cards)
  const heroMeta = {
    title: data?.hero_title,
    subtitle: data?.hero_sub_title_title,
    info: data?.hero_info,
    backgroundImage: data?.hero_background_image,
    buttons: data?.buttons
  }

  return (
    <>
      <Hero data={heroMeta}/>
      <Logo data={data.brands}/>
      <Multifamily data={data?.multifamilySection}/>
      <Gallery data={data?.gallery_images}/>
      {data?.detail_cards?.map((item, idx) => (
        <SidingReplacement
          key={idx}
          imageSrc={urlFor(item?.mediaImage.asset).url()}
          heading={item?.heading}
          body={item?.description}
          ctaHref={item?.button?.href}
          ctaLabel={item?.button?.label}
          reverse={idx % 2 === 0}
        />
      ))}
      <ProcessTimeline data={data?.processSteps}/>
      <ConvinceSection data={data?.partnerSection}/>
      <Faq data={data?.faqs}/>
      <Knowledge data={knowledgeData}/>
      <Pride data={data.cta}/>
      <FooterTop />
      <Footer />
    </>
  );
}
