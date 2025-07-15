export default function AboutUsSection(){
    return(
         <div className=" w-full min-h-screen  text-zinc-100 flex flex-col items-center pt-[10vh] relative   bg-black pb-[10vh]">
            <div 
        className="absolute lg:w-[60rem] w-[30rem] h-[30rem] md:w-[40rem] md:h-[40rem] lg:h-[60rem]  z-10  -left-[20%] -top-[10%] md:-top-[30%] rounded-full  pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, 
            rgba(16, 185, 129, 0.22) 0%, 
            rgba(16, 185, 129, 0.1) 70%, 
            rgba(16, 185, 129, 0.01) 100%, 
            transparent 50%)`
        }}
      />
      <div 
        className="absolute lg:w-[60rem] w-[30rem] h-[30rem] md:w-[40rem] md:h-[40rem] lg:h-[60rem] z-10  -right-[20%] -bottom-[10%] md:-bottom-[30%] rounded-full  pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, 
            rgba(16, 185, 129, 0.22) 0%, 
            rgba(16, 185, 129, 0.1) 70%, 
            rgba(16, 185, 129, 0.01) 100%, 
            transparent 50%)`
        }}
      />
        <h1 className=" text-[2rem]  font-semibold tracking-tighter mb-10 text-emerald-500 z-20">About <span className="px-1"></span>Us</h1>
        {/* <div className=" w-[90%] h-[90%] xl:bg-transparent bg-black/50 rounded-xl z-30 "></div> */}
        <div className=" w-full flex flex-col items-center relative ">
          <div className=" w-[90%]  pl-[1%] sm:pl-[15%] md:pl-[25%]  text-[2.5rem] text-nowrap sm:text-[2rem] md:text-[3.5rem] leading-[2.5rem] md:leading-[4rem] font-semibold tracking-tighter"><span className=" text-emerald-600 ">Built</span> for Change</div>
                    <div className=" w-[90%]  pl-[16%] sm:pl-[25%]  md:pl-[40%] text-nowrap text-[2.5rem] sm:text-[2rem] md:text-[3.5rem] font-semibold tracking-tighter"><span className=" text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-400 to-zinc-700">Driven</span> by Value</div>

        </div>

        <div className=" w-[95%] text-center text-[0.8rem] mt-8 md:text-[1rem] text-zinc-300  z-20 md:w-[80%]">
          SKILL CLOUD SOLUTIONS is a next-generation digital consulting firm purpose-built to address the shortcomings of traditional consulting models—models that are often slow to adapt, rigid in their approach, and driven more by vendor relationships than client outcomes.<div className=" py-2"></div>

We break away from that mold by offering an independent, agile, and outcome-focused methodology tailored to the dynamic needs of modern enterprises. Our approach is grounded in deep technical expertise, strategic insight, and an unwavering commitment to business value—free from legacy constraints or vendor bias.

Whether you&apos;re navigating complex SAP transformations, scaling cloud infrastructure, or leveraging AI to unlock operational intelligence, we partner with you to accelerate change, reduce complexity, and drive measurable results. At Skill Cloud Solutions, it&apos;s not just about delivering solutions—it&apos;s about delivering the right solutions, faster.
        </div>
        <div className=" w-[90%] md:w-[40%] mt-5 h-[20rem] md:h-[25rem] rounded-2xl border-zinc-600 bg-black z-20 border"></div>
        <p className=" text-[0.9rem] text-zinc-500 font-medium mt-2 text-center">No legacy baggage. No vendor pressure. Just smart solutions, delivered right.</p>
        </div>
    )
}