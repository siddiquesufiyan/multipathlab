"use client";
import Herobanner from "./components/Homebanner";
import OurTest from "./components/OurTest";
import AboutMe from "./components/AboutMe";
import HomeCollection from "./components/HomeCollection";
import Testimonial from "./components/Testimonial";
import Faq from "./components/Faq";
import Cta from "./components/Cta";
import WorkProcess from "./components/WorkProcess";
function page() {
  return (
    <div>
     <Herobanner />
     <AboutMe />
    <OurTest />
     <HomeCollection />
     <Testimonial />
     <Faq />
     <Cta />
    </div>
  )
}

export default page
