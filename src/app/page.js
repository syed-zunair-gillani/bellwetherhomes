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
import { query } from "@/sanity/lib/query";
import { client } from "@/sanity/lib/client";
import Faq from "@/components/home/Faq";
import Footer from "@/components/footer";

export default async function Home() {
  const data = await client.fetch(query);
  console.log("🚀 ~ Home ~ data:", data)

  return (
    <>
      <Hero />
      <Logo data={data.brands}/>
      <Multifamily />
      <Gallery />

      {data?.detail_cards?.map((item, idx) => (
        <SidingReplacement
          key={idx}
          imageSrc="/images/Denver-Multifamily.jpg"
          heading="What Does Multifamily Siding Replacement Entail?"
          body="Engaging a multifamily siding contractor is crucial for optimal results in large-scale housing projects. Their expertise ensures precise installation tailored to the unique demands of multifamily residences. Such contractors are versed in sourcing the right materials for consistency and aesthetics across units, while also prioritizing safety standards. By leveraging their specialized skills, property owners can ensure both longevity and appeal for their investments."
          ctaHref="/"
          ctaLabel="Schedule Consultation"
          reverse={idx % 2 === 0}
        />
      ))}
      <ProcessTimeline />
      <ConvinceSection />
      <Faq />
      <Knowledge />
      <Pride data={data.cta}/>
      <FooterTop />
      <Footer />
    </>
  );
}
