"use client";
import Herobanner from "./components/Homebanner";
import TestPackage from "./components/TestPackage";
import AboutMe from "./components/AboutMe";
import HomeCollection from "./components/HomeCollection";
import Testimonial from "./components/Testimonial";
import Faq from "./components/Faq";
import Cta from "./components/Cta";
function page() {
  return (
    <div>
     <Herobanner />
     <AboutMe />
     <TestPackage />
     <HomeCollection />
     <Testimonial />
     <Faq />
     <Cta />
    </div>
  )
}

export default page
