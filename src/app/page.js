import FooterTop from "@/components/FooterTop";
import ProcessTimeline from "@/components/ProcessSteps";
import Image from "next/image";
import Hero from "../components/home/hero";
import Logo from "@/components/home/logo";
import Multifamily from "@/components/home/multifamily";
import Sidingreplacement from "@/components/Sidingreplacement";
import ConvinceSection from "@/components/home/ConvinceSection";
import Knowledge from "@/components/home/Knowledge";
import Pride from "@/components/home/pride";

export default function Home() {
  return (
    <>
      <Hero />
      <Logo />
      <Multifamily />
      <Sidingreplacement />
      <Sidingreplacement
        imageSrc="/images/Denver-Multifamily.jpg"
        heading="What Does Multifamily Siding Replacement Entail?"
        body="Multifamily siding replacement is a comprehensive process focused on revamping the exterior of large-scale housing units. Initially, it involves assessing the current siding for damage, wear, or outdated designs. Following the evaluation, the old material is meticulously removed. Once the original facade is cleared, a new layer of protection, often in the form of a weather-resistant barrier, is applied. Subsequently, the new siding material is installed, ensuring uniformity and modern aesthetics across all units. Through this meticulous process, multifamily siding replacement not only enhances the property’s visual appeal but also amplifies its durability and resistance against external elements.."
        ctaHref="/"
        ctaLabel="Schedule Consultation →"
        bgColor="#EF4F36"
        textColor="white"
        reverse={true}
      />
      <ConvinceSection />

      <Knowledge />
      <Pride/>

      <ProcessTimeline />
      <FooterTop />

    </>
  );
}
