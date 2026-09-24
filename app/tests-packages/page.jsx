"use client"
import HeroBannerPackages from "../components/HeroBannerPackages";
import OurTest from "../components/OurTest";
import OurProcess from "../components/OurProcess";
import Testimonial from "../components/Testimonial";
import Faq from "../components/Faq";
function page() {
  return (
    <div>
      <HeroBannerPackages />
      <OurTest />
      <OurProcess />
      <Testimonial />
      <Faq />
    </div>
  )
}

export default page
