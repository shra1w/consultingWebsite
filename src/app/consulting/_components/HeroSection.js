import { LuCircleArrowOutUpRight } from "react-icons/lu";
import ProductAndServiceCards from "./ProductAndServices";

export default function HeroSectionLayout(){
    return(
        <div className="w-full h-full =  pt-[24vh] z-50 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl flex flex-col items-center mx-auto">
                {/* Company Badge */}
                <div className="mb-3 sm:mb-4 text-[0.7rem] sm:text-[0.8rem] bg-zinc-900 rounded-full bg-gradient-to-br from-zinc-600 via-zinc-700 to-emerald-600 h-[1.8rem] sm:h-[2rem] grid place-items-center px-0.5">
                    <span className="w-[100%] text-nowrap h-[1.65rem] sm:h-[1.85rem] relative bg-zinc-900 px-3 sm:px-5 py-[0.3rem] sm:py-[0.35rem] rounded-full">
                        <span className="bg-gradient-to-br from-emerald-100 via-emerald-400 to-emerald-600 font-medium bg-clip-text text-transparent">
                            SKILL CLOUD SOLUTIONS PVT. LTD.
                        </span>
                    </span>
                </div>

                {/* Main Headlines */}
                <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-[3rem] leading-tight sm:leading-8 md:leading-10 sm:mb-2 text-zinc-300 text-center">
                    Advisory that thinks ahead.
                </h1>
                
                <h1 className="font-bold text-[2.5rem] sm:text-3xl px-1 py-1 md:text-4xl lg:text-[4.5rem] xl:text-[4.5rem] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-400 to-zinc-700 text-center leading-tight sm:leading-snug md:leading-tight lg:leading-none mt-1 sm:mt-0">
                    <span className="text-emerald-500">Technology</span> that delivers today
                </h1>

                {/* Description */}
                <p className="text-xs sm:text-sm md:text-lg lg:text-[1.2rem] text-zinc-400 mt-3 sm:mt-4 lg:mt-3 font-medium leading-relaxed sm:leading-6 md:leading-6.5 text-center w-[95%] sm:w-[85%] md:w-[75%] lg:w-[60%] max-w-4xl">
                    We are a new-age, cloud-native consultancy built for businesses that demand speed, intelligence and impact. At Skill Cloud Solutions, we combine strategic thinking, industry expertise and advanced technologies to drive real transformation—faster
                </p>

                {/* CTA Button */}
                <div className="pl-4 sm:pl-6 pr-2 py-1 text-zinc-100 rounded-full flex items-center gap-3 sm:gap-6 border mt-6 sm:mt-8 lg:mt-10 bg-black border-emerald-700/50 text-sm sm:text-[0.95rem] w-fit">
                    <span className="hidden sm:inline  ">Navigate the Future with Us</span>
                    <span className="sm:hidden">Navigate the Future</span>
                    <button className="z-30 px-3 py-2.5 transition-all cursor-pointer gap-2 rounded-full bg-gradient-to-br from-zinc-100 text-zinc-900 via-emerald-300 font-medium to-emerald-500 flex items-center group">
                        <div className="overflow-hidden flex flex-col h-5.5">
                            <span className="w-full h-full duration-300 group-hover:-translate-y-4 text-sm sm:text-base">
                                Get in touch
                            </span> 
                            <span className="duration-300 group-hover:-translate-y-5 w-full h-full text-sm sm:text-base">
                                Get in touch
                            </span>
                        </div>
                        <LuCircleArrowOutUpRight className="group-hover:rotate-45 duration-300 w-4 h-4 sm:w-5 sm:h-5"/>
                    </button>
                </div>
            </div>
            <ProductAndServiceCards/>

        </div>
    )
}