import { useRef } from "react"
import Jar from "../assets/ChatGPT Image Jun 22, 2026, 09_30_53 PM.png"
import Jar2 from "../assets/ChatGPT Image Jun 23, 2026, 12_02_43 PM.png"
import img from "../assets/pink-flowers.webp"
import gsap from "gsap"
import { SplitText } from "gsap/all"
import { useGSAP } from "@gsap/react"
export function About(){
    const sectionabout = useRef(null)
    const textfillers = useRef(null)
    const textfillers2 = useRef(null)
    useGSAP(()=>{
        const panels=gsap.utils.toArray(".panel")
        gsap.from(panels,{
            scrollTrigger:{
                trigger:sectionabout.current,
                start:"top top",
            },
            x:400,
            direction:1.9,
            stagger:0.1
        })
        const split = SplitText.create(textfillers.current,{
            type:"words"
        })
        const split2 = SplitText.create(textfillers2.current,{
            type:"words"
        })
        gsap.from(split.words,{
            scrollTrigger:{
                trigger:sectionabout.current,
                start:"30% top",
            },
            opacity:0.4,
            duration:0.4,
            ease:"power3.inOut",
            stagger:0.16,
        })
        gsap.from(split2.words,{
            scrollTrigger:{
                trigger:sectionabout.current,
                start:"center top",
            },
            opacity:0.4,
            duration:0.23,
            ease:"power3.inOut",
            stagger:0.2,
        })
        return ()=>{
            split.revert();
            split2.revert();
        }
    },[])
    return(
        <div className="w-full min-h-400 bg-pink-950 z-50  grid grid-cols-12"  ref={sectionabout}>
            <div className="bg-transparent  col-span-8 relative">
                <div className="min-w-full border-b-yellow-100 border-b-5 border-dotted">
                    <h1 className="text-yellow-100 font-[Inter] text-6xl font-bold max-w-16 leading-15 p-8">WHAT'S INSIDE</h1>
                </div>
                <p className="max-w-100 text-sm text-yellow-100/80 p-8 mt-4  text-start">Lore. Inventorers sunt voluptatibus odit esse consequuntur beatae nisi. Soluta, num sequuntur beatae nisi. Soluta</p>
                <div className="flex gap-8 mt-40 flex-col p-8">
                        <div className="flex justify-start items-center gap-3.5 panel">
                            <div className="bg-transparent border border-gray-200/20 size-14 flex justify-center items-center rounded-full">
                                <i className="fa-solid fa-boxes-stacked text-gray-300"></i>
                            </div>
                            <div>
                                <p className="max-w-70 text-sm text-yellow-100/80 leading-4">Lo voluptatiewk;g4 sse consequuntur beatae nisi. Soluta, num sequuntur beatae nisi. Soluta</p>
                            </div>
                        </div>
                        <div className="flex justify-start items-center gap-3.5  panel">
                            <div className="bg-transparent border border-gray-200/20 size-14 flex justify-center items-center rounded-full">
                            <i className="fa-solid fa-box-open text-yellow-100/60"></i>
                            </div>
                            <div>
                                <p className="max-w-70 text-sm text-yellow-100/80 leading-4">Lo voluptatiewk;g4 sse consequuntur beatae nisi. Soluta, num sequuntur beatae nisi. Soluta</p>
                            </div>
                        </div>
                        <div className="flex justify-start items-center gap-3.5  panel">
                            <div className="bg-transparent border border-gray-200/20 size-14 flex justify-center items-center rounded-full">
                            <i className="fa-solid fa-bomb text-pink-400"></i>
                            </div>
                            <div>
                                <p className="max-w-70 text-sm text-yellow-100/80 leading-4">Lo voluptatiewk;g4 sse consequuntur beatae nisi. Soluta, num sequuntur beatae nisi. Soluta</p>
                            </div>
                        </div>
                </div>
                <h1 className="text-yellow-100 font-[Inter] text-2xl md:text-4xl leading-7   md:leading-10 p-8 mt-58" ref={textfillers}>NO FILLERS <br></br> NO SHORTCUTS</h1>
                <div className="absolute left-2 bottom-2 w-full">
                    <h1 className="text-yellow-100 font-[Inter]  font-extrabold text-4xl md:text-7xl leading-10   md:leading-16  mt-58 min-w-full" ref={textfillers2}><span className="relative left-2">JUST BOLD TASTE</span> <br></br> IN EVERY JAR</h1>
                </div>
            </div>
            <div className="col-span-4 bg-pink-500 z-40 relative hidden md:block">
                <div className="absolute min-w-full h-full left-0 top-0 z-30">
                    <img src={img} alt="" className="min-w-full min-h-full bg-repeat-y max-w-full max-h-full object-cover brightness-50 opacity-10 "/>
                </div>
                <div className="flex flex-col gap-20">
                    <img src={Jar} alt="" />
                    <img src={Jar2} alt="" />
                </div>
            </div>
        </div>  
    )
}