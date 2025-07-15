"use client";

import Image from "next/image";
import backSvg from "@/app/assets/consulting/whySkillCloud.svg"
import { GradualSpacing } from "./WhySkillCloudTree";
import { TbArrowBigLeftLinesFilled } from "react-icons/tb";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function WhySkillCloud(){
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.3 });

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 }
        }
    };

    const bulletPoints = [
        "Enterprise-Grade Expertise, Startup Speed",
        "Consulting Without the Clutter", 
        "Solutions That Scale with You",
        "Agile Delivery with Measurable Outcomes"
    ];

    return(
        <div className="w-full h-[70vh] sm:h-[65vh] md:h-[60vh]  bg-black relative overflow-hidden" ref={ref}>
            <div className="w-full h-full">
                <Image src={backSvg} alt="backSvg" className="w-full h-[160%] opacity-25"/>
            </div>
            <div className="absolute w-full h-full z-10 left-0 top-0 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
                <motion.h1 
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] text-zinc-100 font-semibold tracking-tighter text-center"
                    initial={{ opacity: 0, y: -30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
                    transition={{ duration: 0.6 }}
                >
                    Why Skill Cloud?
                </motion.h1>
                <motion.p 
                    className="text-sm sm:text-base md:text-[1.05rem] font-semibold text-emerald-600 text-center max-w-2xl px-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    &quot;We don&apos;t just deliver projects. We deliver clarity, speed and business value.&quot;
                </motion.p>
                <div className="w-full max-w-7xl py-3 sm:py-5 flex flex-col items-center justify-center">
                    <motion.h1 
                        className="text-zinc-100 text-lg sm:text-xl md:text-2xl lg:text-[2rem] font-semibold tracking-tighter mb-4 sm:mb-6 lg:mb-8 text-center px-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Your Partner in Smart Transformation
                    </motion.h1>
                    <motion.div 
                        className="flex flex-col  items-start pl-[0%] md:pl-[30%] gap-3 sm:gap-4 md:gap-6 w-full max-w-6xl  "
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        {bulletPoints.map((text, index) => (
                            <motion.div 
                                key={index}
                                className="flex items-center gap-2 min-w-fit md:min-w-0"
                                variants={itemVariants}
                            >
                                <TbArrowBigLeftLinesFilled className="shrink-0 rotate-180 text-sm sm:text-xl md:text-[1.5rem] text-emerald-500"/>
                                {isInView && (
                                    <GradualSpacing 
                                        text={text} 
                                        className="font-semibold text-start text-xs sm:text-base md:text-base lg:text-lg md:whitespace-nowrap "
                                        delayMultiple={0.02}
                                        duration={0.2}
                                    />
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}