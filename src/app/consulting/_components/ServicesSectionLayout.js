import ServiceSectionCard from "./ServicesSectionCards";

export default function ServicesSectionLayout(){
    const services = [
  {
    heading: "Strategic Advisory",
    description:
      "We help you see beyond the now—aligning vision, technology, and business goals to navigate change with clarity and confidence.",
    keyFeatures: [
      "SAP Transformation Planning (S/4HANA)",
      "Cloud Architecture & Platform Strategy",
      "Business Value Realization Models",
      "Roadmaps aligned with growth",
    ],
    icon: "BarChart3", // Matches rising bar graph from generated image
  },
  {
    heading: "Technology Implementation",
    description:
      "From planning to deployment, we turn your tech goals into real, working solutions—seamlessly and at speed.",
    keyFeatures: [
      "End-to-End SAP S/4HANA Deployment",
      "SAP FICO, MM, ABAP, Analytics",
      "System Integration & Data Migration",
      "Cloud Enablement (Azure, AWS, GCP)",
    ],
    icon: "Settings", // Matches gear icon from generated image
  },
  {
    heading: "AI & Process Intelligence",
    description:
      "We embed intelligence into your operations, unlocking automation, insights, and smarter decisions at every step.",
    keyFeatures: [
      "Process Automation & Optimization",
      "Predictive Analytics & Business Insights",
      "AI-led Reporting & Forecasting",
      "Smart Document & Workflow Management",
    ],
    icon: "BrainCircuit", // Matches AI brain icon from generated image
  },
];

    return(
        <div className=" w-full min-h-screen pb-[20vh] bg-zinc-100 pt-[10vh] flex flex-col items-center">
        <h1 className=" text-[2rem]  font-semibold tracking-tighter mb-10 pr-8 text-emerald-600 z-20">Our <span className="px-1"></span>Services</h1>
        <div className=" w-full mb-4 md:leading-20 leading-12 text-center text-[2.5rem]  md:text-[4rem] font-semibold text-transparent bg-clip-text bg-gradient-to-b from-emerald-800 via-zinc-600 to-zinc-700">
            Digital. <span className=" text-emerald-600">Intelligent</span>. Scalable.

        </div>
        <div className=" w-full h-[60%] mt-10 flex flex-wrap justify-center gap-x-[5rem] gap-y-[3rem]">
            {services.map((eachService,index)=>{
                return (
            <ServiceSectionCard key={index} position={index} eachService={eachService}/>

                )
            })}
        </div>
        </div>

    )
}