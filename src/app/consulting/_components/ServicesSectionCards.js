import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Settings, BrainCircuit } from "lucide-react";
import service1 from "@/app/assets/consulting/consultingService1.png"
import service2 from "@/app/assets/consulting/consultingService2.png"
import service3 from "@/app/assets/consulting/consultingService3.png"
import Image from 'next/image';
export default function ServiceSectionCard({eachService,position}){
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);


  const iconMap = {
  BarChart3: <BarChart3 className="text-emerald-500 w-8 h-8" />,
  Settings: <Settings className="text-emerald-500 w-8 h-8" />,
  BrainCircuit: <BrainCircuit className="text-emerald-500 w-8 h-8" />,
};

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleCardInteraction = () => {
    if (isMobile) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
      <div className="relative pt-5">
        {/* Glow effect container */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-400/50 via-blue-800 to-zinc-800 rounded-2xl blur-xl opacity-60 scale-[101%] animate-pulse"></div>
        
        {/* Card container */}
        <motion.div
          className="relative w-[22rem] h-[30rem] cursor-pointer"
          style={{ perspective: '1000px' }}
          onHoverStart={() => !isMobile && setIsFlipped(true)}
          onHoverEnd={() => !isMobile && setIsFlipped(false)}
          onClick={handleCardInteraction}
        >
          <motion.div
            className="relative w-full h-full"
            style={{ transformStyle: 'preserve-3d' }}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{
              duration: 0.6,
              type: 'spring',
              stiffness: 300,
              damping: 30
            }}
          >
            {/* Front face */}
            <motion.div
              className="absolute inset-0 backface-hidden"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <div className="w-full h-full bg-white rounded-2xl shadow-2xl p-8 flex flex-col justify-between border border-gray-200/50 backdrop-blur-sm">
                <div>
                  <div className=' w-full h-[12rem] rounded-xl border mb-6 shrink-0 overflow-hidden'>
                    <Image src={position===0?service1:position===1?service2:service3} alt=' service Image' className=' w-full h-full object-cover' />
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">
                   { eachService?.heading || "Fast Integration Process"}
                  </h2>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 text-[0.9rem]">
                    {eachService?.description ||"Our software boasts a super-fast integration process, allowing users to seamlessly incorporate new data sources and workflows."}
                  </p>
                </div>
                
               
              </div>
            </motion.div>

            {/* Back face */}
            <motion.div
              className="absolute inset-0 backface-hidden"
              style={{ 
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)'
              }}
            >
              <div className="w-full h-full bg-white rounded-2xl shadow-2xl p-8 flex flex-col border border-gray-200/50 backdrop-blur-sm">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  {iconMap[eachService?.icon]}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Key Features
                </h3>
                
                <div className="space-y-4 flex-1">

                    {eachService.keyFeatures.map((feature, i) => (
                        <div className="flex items-start space-x-3" key={`${i}-${i+1}`}>
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium hover:text-emerald-700 text-[0.9rem]">{feature}</p>
                  </div>
            ))}
                  
                  
                  {/* <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Advanced security protocols ensuring data protection</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Real-time monitoring and automated error handling</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Scalable infrastructure supporting millions of operations</p>
                  </div> */}
                </div>
                
                <motion.button
                  className="mt-6 bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started Now
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Additional ambient glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-300/20 via-pink-300/20 to-purple-300/20 rounded-2xl blur-2xl scale-125 -z-10"></div>
      </div>
      
  
  );
};
