"use client"

import { useEffect, useState } from "react";
import HeaderSection from "../Components/HeaderSection"
import HeroBackDesign from "./_components/HeroBackDesign"
import { LuCircleArrowOutUpRight } from "react-icons/lu";
import HeroSectionLayout from "./_components/HeroSection";
import ProductAndServiceCards from "./_components/ProductAndServices";
import AboutUsSection from "./_components/AboutUsSection";
import ServicesSectionLayout from "./_components/ServicesSectionLayout";
import WhySkillCloud from "./_components/WhySkillCloud";
import FooterSection from "../Components/FooterSection";
import OurteamUiDesign from "./_components/OurTeamUiDesign";
import ContactUsSection from "./_components/ContactUsSection";

export default function ConsultingLayout(){
     const [animate, setAnimate] = useState(false);
    return(
      <div className="  w-full min-h-screen h-auto bg-black overflow-hidden">
     <div className=" w-full min-h-full  relative bg-black  ">
        {/* <div  className=" fixed w-full h-full z-50 realtive   overflow-hidden ">
           <svg style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh', zIndex: 50 }}>
  <defs>
    <mask id="hole">
      <rect width="100%" height="100%" fill="white"/>
      <circle cx="50%" cy="50%" r="100%" fill="black"/>
    </mask>
  </defs>
  <rect width="100%" height="100%" fill="white" mask="url(#hole)" />
</svg>
        </div> */}
        <div className=" w-full h-[140vh] md:h-[130vh] shrink-0 realtive bg-black">

            {/* backdesign */}
            <div className=" absolute left-0 top-0  w-full h-full bg-black z-10">
              <HeroBackDesign/>
            </div>
        {/* constent */}
        <div className=" w-full h-[140vh] md:h-[125vh] absolute  left-0 top-0  z-30  ">
            <HeaderSection/>
            <HeroSectionLayout/>
            
        </div>
        </div>
        
     </div> 
        <AboutUsSection/>
          <ServicesSectionLayout/>
          <WhySkillCloud/>
          <OurteamUiDesign/>
          <ContactUsSection/>

          <FooterSection/>
     </div> 
    )
}