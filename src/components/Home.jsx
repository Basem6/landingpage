import gsap from "gsap"
import { useRef } from "react"
import { SplitText } from "gsap/all"
import { useGSAP } from "@gsap/react"
export function Home(){
    const text1 =useRef(null)
    const text2 =useRef(null)
    const text3 =useRef(null)
    const sectiontext1=useRef(null)
    const sectiontext2=useRef(null)
    const sectiontext3=useRef(null)
    useGSAP(()=>{
    const split = SplitText.create(text1.current, {
        type: "words",
    });
    const split2 = SplitText.create(text2.current, {
        type: "words",
    });
    const split3 = SplitText.create(text3.current, {
        type: "words",
    });
    gsap.from(split.words,{
        scrollTrigger:{
            trigger:sectiontext1.current,
            start:"top bottom",
        },
        opacity:0.4,
        duration:0.4,
        ease:"power3.inOut",
        stagger:0.2,
    })
    gsap.from(split2.words,{
        scrollTrigger:{
            trigger:sectiontext2.current,
            start:"top bottom",
        },
        opacity:0.4,
        duration:0.4,
        ease:"power3.inOut",
        stagger:0.2,
        
    })
    gsap.from(split3.words,{
        scrollTrigger:{
            trigger:sectiontext3.current,
            start:"top bottom",
        },
        opacity:0.4,
        duration:0.4,
        ease:"power3.inOut",
        stagger:0.2,
        
    })
    return ()=>{
            split.revert()
            split2.revert()
            split3.revert()
    }
    },[])
    return(
        <div className="h-full max-w-full">
            <div id="section" className="max-w-full">
                <div className="head flex flex-col justify-center items-center text-yellow-300 pt-5   md:pt-22 border-b-yellow-300 border-b-6 border-dotted ">
                    <p className="font-bold">Free Rosted become this</p>
                    <div className="ff text-[79px]  md:text-[210px] relative   leading-none">BOLD FLAVOR</div>
                </div>
                <div className="main  min-h-100 flex justify-center overflow-hidden relative top-2">
                    <div className="text-4xl md:text-8xl ff  text-yellow-300 pt-3 z-10 ">TIKKA MASALA</div>
                    <div className="absolute left-0 bottom-7 px-10">
                        <p className="max-w-70 text-sm text-yellow-300 pb-4">Lore. Inventorer vi, nesciunt voluptas sunt voluptatibus odit esse consequuntur beatae nisi. Soluta, num</p>
                        <div className="whitespace-nowrap bg-yellow-300 w-fit rounded-full py-2 px-5 text-xs font-bold">
                            BUT NOW
                        </div>
                    </div>
                </div>
                <div className="w-full min-h-175">
                </div>
                <div className="w-full min-h-225 px-9" ref={sectiontext1}>
                    <div className=" text-[79px]  md:text-[150px] relative leading-none text-yellow-300 max-w-3/4 ff" ref={text1}>A NEW ANGLE OF FLAVOR</div>
                    <p className="max-w-70 text-sm text-yellow-200 pb-4 mt-32">Lore. Inventorer vi, nesciunt voluptas sunt voluptatibus odit esse consequuntur beatae nisi. Soluta, num</p>
                </div>
                <div className="w-full min-h-285 px-9 mt-30 flex flex-col items-center relative" ref={sectiontext2}>
                    <div className="ff  text-[55px]  md:text-[150px] relative leading-none text-yellow-300 min-w-full text-center" ref={text2}>UNWRAP THE ADVENTURE</div>
                    <div className="flex gap-5 mt-60">
                        <div className="bg-transparent border border-gray-200/20 size-10 flex justify-center items-center rounded-full">
                            <i className="fa-solid fa-boxes-stacked text-gray-300"></i>
                        </div>
                        <div className="bg-transparent border border-gray-200/20 size-10 flex justify-center items-center rounded-full">
                            <i className="fa-solid fa-box-open text-yellow-100/60"></i>
                        </div>
                        <div className="bg-transparent border border-gray-200/20 size-10 flex justify-center items-center rounded-full">
                            <i className="fa-solid fa-bomb text-pink-400"></i>
                        </div>
                    </div>
                    <p className="max-w-70 text-sm text-yellow-200 pb-4 mt-32 text-center">Lore. Inventorers sunt voluptatibus odit esse consequuntur beatae nisi. Soluta, num</p>
                    <div className="absolute right-0 bottom-3 px-10 -z-10">
                        <p className="max-w-70 text-sm text-yellow-200 pb-4">Lore. Inventorer vi, nesciunt voluptas sunt voluptatibus odit esse consequuntur beatae nisi. Soluta, num</p>
                        <div className="whitespace-nowrap bg-yellow-300 w-fit rounded-full py-2 px-5 text-xs font-bold">
                            BUT NOW
                        </div>
                    </div>
                </div>
                <div className="w-full min-h-225 px-9 mt-60" ref={sectiontext3}>
                    <div className="ff text-[40px]  md:text-[110px] relative leading-none text-yellow-300 max-w-2/4" ref={text3}>A NEW PERSOECTIVE OF TASTE</div>
                </div>
            </div>
        </div>
    )
}