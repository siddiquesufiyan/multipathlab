"use client"
import HomeService from "../components/HomeService";
import HomeCollection from "../components/HomeCollection";
import Testimonial from "../components/Testimonial";
import Faq from "../components/Faq";
import Cta from "../components/Cta";
function page() {
  return (
    <div>
    
      <HomeService />
      <HomeCollection />
      <Testimonial />
      <Faq />
      <Cta />
    </div>
  )
}

export default page
