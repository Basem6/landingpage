import img from "../assets/pink-flowers.webp"
import img1 from "../assets/pexels-angel-ayala-321556-28976215.jpg"
import img2 from "../assets/pexels-leeloothefirst-5782652.jpg"
import Jar from "../assets/ChatGPT Image Jun 22, 2026, 09_30_53 PM.png"
import { useRef } from "react"
import gsap from "gsap"
import { SplitText } from "gsap/all"
import { useGSAP } from "@gsap/react";
export function Shop(){
    const text5  =useRef(null)
    const sectionshop  =useRef(null)
    useGSAP(()=>{
        const split8 = SplitText.create(text5.current,{
            type:'chars',
            autoSplit:true
        })
        gsap.from(split8.chars,{
            scrollTrigger:{
                trigger:sectionshop.current,
                start:"top top",
            },
            opacity:0.4,
            duration:0.5,
            ease:"power3.inOut",
            stagger:0.08,
        })
        return ()=>{
            split8.revert()
        }
    },[])
    return (
        <div id="shop" ref={sectionshop} className="border-3 border-red-400">
            <div className="min-w-full min-h-screen bg-pink-500 z-40 relative hidden md:block">
                <div className="pt-75 pb-5 px-5">
                    <h1 className="text-amber-200 font-[Inter] text-8xl font-bold leading-25 max-w-1/2">UN LOCK THE MAGIC INSIDE THE JAR</h1>
                    <button className="w-fit px-5 rounded-full bg-yellow-200 text-gray-900/90 py-2.5 text-sm mt-5 ">Read more</button>
                </div>
                <div className="absolute min-w-full h-full left-0 top-0 -z-30">
                        <img src={img2} loading="lazy" alt="jar" className="min-w-full min-h-full bg-repeat-y max-w-full max-h-full object-cover brightness-50"/>
                </div>
            </div>
            <div className="min-w-full min-h-screen bg-yellow-900 z-40 relative flex flex-col items-center ">
                            <div className="flex flex-col items-center pb-4">
                                <h1 className="text-yellow-200/80 font-[Inter] text-7xl font-bold  py-12" ref={text5}>COOKING</h1>
                                <button className="rounded-full py-2 px-4 text-xs text-black/90 bg-yellow-200/80">TASTE DELECIOUS</button>
                            </div>
                            <div className="cards min-w-full min-h-150 flex justify-between items-center md:p-9 p-3 flex-wrap gap-1.5">
                                    <div className=" bg-amber-200 md:w-119 md:h-140 flex flex-col gap-1 p-2">
                                        <div className="h-3/5 min-w-full overflow-hidden">
                                            <img src={img1} alt="img"  loading="lazy" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="h-0.5/5 flex gap-1.5">
                                            <div className="bg-yellow-700 text-gray-200 py-1 px-2 rounded-full text-xs my-2">Chicken</div>
                                            <div className="bg-yellow-700 text-gray-200 py-1 px-2 rounded-full text-xs my-2">Pizza</div>
                                        </div>
                                        <div className="h-1.5/5">
                                            <h1 className="text-yellow-900/90 font-[Inter] text-2xl font-bold max-w-2/3">EASY CHICKEN TABDOORI</h1>
                                            <p className="py-7 text-xs max-w-2/3 opacity-80">Lorem ipsum etuelit. Eligendi ad, possimus iusto aliquam nam illum.</p>
                                        </div>
                                    </div>
                                    <div className=" bg-amber-200 md:w-119 md:h-140 flex flex-col gap-1 p-2">
                                        <div className="h-3/5 min-w-full overflow-hidden">
                                            <img src={img1} loading="lazy" alt="image.png" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="h-0.5/5 flex gap-1.5">
                                            <div className="bg-yellow-700 text-gray-200 py-1 px-2 rounded-full text-xs my-2">Chicken</div>
                                            <div className="bg-yellow-700 text-gray-200 py-1 px-2 rounded-full text-xs my-2">Pizza</div>
                                        </div>
                                        <div className="h-1.5/5">
                                            <h1 className="text-yellow-900/90 font-[Inter] text-2xl font-bold max-w-2/3">EASY CHICKEN TABDOORI</h1>
                                            <p className="py-7 text-xs max-w-2/3 opacity-80">Lorem ipsum etuelit. Eligendi ad, possimus iusto aliquam nam illum.</p>
                                        </div>
                                    </div>
                                    <div className=" bg-amber-200 md:w-119 md:h-140 flex flex-col gap-1 p-2">
                                        <div className="h-3/5 min-w-full overflow-hidden">
                                            <img src={img1} alt="img" loading="lazy" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="h-0.5/5 flex gap-1.5">
                                            <div className="bg-yellow-700 text-gray-200 py-1 px-2 rounded-full text-xs my-2">Chicken</div>
                                            <div className="bg-yellow-700 text-gray-200 py-1 px-2 rounded-full text-xs my-2">Pizza</div>
                                        </div>
                                        <div className="h-1.5/5">
                                            <h1 className="text-yellow-900/90 font-[Inter] text-2xl font-bold max-w-2/3">EASY CHICKEN TABDOORI</h1>
                                            <p className="py-7 text-xs max-w-2/3 opacity-80">Lorem ipsum etuelit. Eligendi ad, possimus iusto aliquam nam illum.</p>
                                        </div>
                                    </div>
                            </div>
            </div>
            <div className="w-full min-h-200 bg-yellow-200/80  z-50 grid grid-cols-12 ">
                        <div className="bg-transparent col-span-12  md:col-span-8 relative flex flex-col justify-between">
                            <div className="min-w-full">
                            <h1 className="text-yellow-950 font-[Inter] text-4xl md:text-5xl font-bold leading-13 md:leading-15 p-8 pr-0 md:pr-80">FLAVOR-PACKED UPADATES STRAIGHT INTO YOUR INBOX + 10% OFF YOUR FIRST JAR.</h1>
                            </div>
                            <div className="bg-yellow-950 border border-gray-200/20 size-14 flex justify-center items-center rounded-full absolute right-14 rotate-10 top-1/2">
                                    <i className="fa-solid fa-boxes-stacked text-gray-300"></i>
                            </div>
                            <div className="p-6 pb-12">
                                <button className="w-full rounded-full bg-amber-950/90 text-gray-200 py-2.5 text-sm ">Read more</button>
                            </div>
                        </div>
                        <div className="col-span-4 bg-pink-500 z-40 relative hidden md:block">
                            <div className="absolute min-w-full h-full left-0 top-0 z-30">
                                <img src={img} loading="lazy" alt="jar" className="min-w-full min-h-full bg-repeat-y max-w-full max-h-full object-cover brightness-50 opacity-10 "/>
                            </div>
                            <div >
                                <img src={Jar} loading="lazy" alt="jar.png" />
                            </div>
                        </div>
                    </div>  
        </div>
    )
}