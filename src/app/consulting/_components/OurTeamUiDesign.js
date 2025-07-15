import Image from "next/image";
import teamback from "@/app/assets/consulting/ourTeamBack.svg"
import { FaHandPointRight } from "react-icons/fa6";
import ourTeamImage from "@/app/assets/consulting/ourTeamImage.svg"

export default function OurteamUiDesign(){
    return(
        <div className="w-full min-h-[120vh] sm:min-h-[110vh] bg-zinc-100 md:min-h-[120vh] relative">
            <div className="absolute w-full h-full left-0 top-0 z-10 flex flex-col items-center pt-[10vh] sm:pt-[15vh] md:pt-[20vh] px-4 sm:px-6 lg:px-8">
                <h1 className="text-xl sm:text-2xl md:text-[2rem] font-semibold tracking-tighter mb-3 mt-5 text-emerald-500 z-20 text-center">
                    Our <span className="px-1"></span>team
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-[2.5rem] text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-400 to-zinc-700 font-bold tracking-tight text-center max-w-4xl">
                    Led by Experts. Built for Results.
                </p>

                <div className="w-full h-auto md:h-[70%] mt-6 sm:mt-8 md:mt-10 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-4">
                    {/* Content Section */}
                    <div className="w-full md:w-[50%] h-auto md:h-full flex flex-col items-center md:pt-[15vh] order-2 md:order-1">
                        <p className="text-sm sm:text-base md:text-lg lg:text-[1.2rem] w-full sm:w-[90%] md:w-[80%] text-center text-zinc-900 px-2">
                            Our team comprises consultants, engineers and strategists with deep experience from top-tier consulting firms and Fortune 500 projects. Together, we bring:
                        </p>
                        
                        <div className="flex flex-col mt-6 sm:mt-8 text-xs sm:text-sm md:text-base lg:text-[1rem] w-full sm:w-[90%] md:w-[60%] gap-2 sm:gap-3 px-2 sm:px-0">
                            <h1 className="flex items-center gap-2 sm:gap-3 md:gap-4 px-3 sm:px-4 md:px-8 py-2 sm:py-2.5 rounded-md bg-zinc-900 text-zinc-100">
                                <FaHandPointRight className="text-emerald-400 text-base sm:text-lg md:text-[1.3rem] shrink-0"/> 
                                <span className="leading-tight">30+ Years of Combined Experience</span>
                            </h1>
                            
                            <h1 className="flex items-center gap-2 sm:gap-3 md:gap-4 px-3 sm:px-4 md:px-8 py-2 sm:py-2.5 rounded-md bg-zinc-900 text-zinc-100">
                                <FaHandPointRight className="text-emerald-400 text-base sm:text-lg md:text-[1.3rem] shrink-0"/>
                                <span className="leading-tight">Backgrounds from Accenture, EY and top SAP ecosystems</span>
                            </h1>
                            
                            <h1 className="flex items-center gap-2 sm:gap-3 md:gap-4 px-3 sm:px-4 md:px-8 py-2 sm:py-2.5 rounded-md bg-zinc-900 text-zinc-100">
                                <FaHandPointRight className="text-emerald-400 text-base sm:text-lg md:text-[1.3rem] shrink-0"/> 
                                <span className="leading-tight">100% Delivery Track Record</span>
                            </h1>
                            
                            <h1 className="flex items-center gap-2 sm:gap-3 md:gap-4 px-3 sm:px-4 md:px-8 py-2 sm:py-2.5 rounded-md bg-zinc-900 text-zinc-100">
                                <FaHandPointRight className="text-emerald-400 text-base sm:text-lg md:text-[1.3rem] shrink-0"/> 
                                <span className="leading-tight">Domain Expertise Across Finance, Supply Chain, HR Tech & More</span>
                            </h1>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="relative w-full sm:w-[80%] md:w-[50%] h-[300px] sm:h-[400px] md:h-full flex items-center justify-center md:justify-end order-1 md:order-2">
                        {/* Background images */}
                        <Image 
                            src={teamback} 
                            className="absolute w-full h-full scale-110 md:scale-120" 
                            alt="team Back"
                        /> 
                        <Image 
                            src={teamback} 
                            className="w-full h-full scale-110 md:scale-120" 
                            alt="team Back"
                        /> 
                        
                        {/* Main team image */}
                        <Image 
                            src={ourTeamImage} 
                            className="absolute w-[60%] sm:w-[55%] md:w-[50%] left-[20%] sm:left-[22.5%] md:left-[25%] h-full scale-110 md:scale-120" 
                            alt="our team"
                        /> 
                    </div>
                </div>
            </div>
        </div>
    )
}