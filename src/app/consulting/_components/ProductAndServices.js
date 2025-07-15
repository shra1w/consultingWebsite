import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ServiceCard = ({ label, title, description, bgColor, labelColor }) => {
  return (
    <motion.div
      className={`relative p-6 sm:p-8 rounded-3xl h-[15rem] ${bgColor} cursor-pointer group overflow-hidden`}
      whileHover={{ 
        scale: 1.02,
        y: -8,
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Background glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)'
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Content container */}
      <div className="relative z-10">
        {/* Header with label and arrow */}
        <div className="flex items-start justify-between mb-2 sm:mb-2">
          <motion.span 
            className={`text-xs sm:text-sm font-medium ${labelColor} px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            {label}
          </motion.span>
          
          <motion.div
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black backdrop-blur-sm flex items-center justify-center "
            whileHover={{ 
              rotate: 45,
              scale: 1.1 
            }}
            transition={{ 
              type: "spring", 
              stiffness: 400, 
              damping: 17 
            }}
          >
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-100 group-hover:rotate-45 duration-500" />
          </motion.div>
        </div>

        {/* Title */}
        <motion.h3 
          className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-3 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {title}
        </motion.h3>

        {/* Description */}
        <motion.p 
          className="text-xs sm:text-sm font-medium text-gray-700 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {description}
        </motion.p>
      </div>

      {/* Floating particles effect */}
      <motion.div
        className="absolute top-4 right-4 w-2 h-2 bg-white/40 rounded-full opacity-0 group-hover:opacity-100"
        animate={{
          y: [0, -10, 0],
          x: [0, 5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-white/30 rounded-full opacity-0 group-hover:opacity-100"
        animate={{
          y: [0, -8, 0],
          x: [0, -3, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
    </motion.div>
  );
};

export default function ProductAndServiceCards() {
  const cards = [
    {
      label: "Consulting",
      title: "Strategic SAP Advisory",
      description: "Unlock tailored roadmaps, transformation plans, and business value frameworks for your SAP journey—faster, smarter, and future-ready.",
      bgColor: "bg-gradient-to-br from-cyan-100 via-teal-50 to-cyan-200",
      labelColor: "text-teal-700"
    },
    {
      label: "Service",
      title: "Cloud & AI Implementation",
      description: "Deploy scalable cloud solutions, automate processes, and harness AI insights—all with agile delivery and enterprise-grade precision.",
      bgColor: "bg-gradient-to-br from-rose-100 via-pink-50 to-rose-200", 
      labelColor: "text-rose-700"
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 absolute  bottom-10 left-[50%] -translate-x-[50%] sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: index * 0.2,
              duration: 0.6,
              ease: "easeOut"
            }}
          >
            <ServiceCard {...card} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}