import img1 from "../assets/pexels-angel-ayala-321556-28976215.jpg"
import img2 from "../assets/pexels-anastasia-shuraeva-8511160.jpg"
import img3 from "../assets/pexels-ellie-burgin-1661546-19248489.jpg"
import img4 from "../assets/pexels-jameshausley-5084161.jpg"
import {  useRef } from "react"
import gsap from "gsap"
import { SplitText } from "gsap/all"
import { useGSAP } from "@gsap/react";
export function Slides(){
    const textslide=useRef(null)
    const sectionslide=useRef(null)
    const textanmaiton=useRef(null)
    useGSAP(()=>{
        const split = SplitText.create(textanmaiton.current,{
            type:"words"
        })
        const cards = gsap.utils.toArray(".card")
        const animatspans = gsap.utils.toArray(".animatspan")
        gsap.from(textslide.current,{
            scrollTrigger:{
                trigger:sectionslide.current,
                start:"top 70%",
            },
            xPercent:-100,
            opacity:0.5,
            duration:1.4,
            ease:"none"
        })
        gsap.from(cards,{
            scrollTrigger:{
                trigger:sectionslide.current,
                start:"top top",
            },
            scale:0.8,
            duration:1,
            stagger:0.7
        })
        gsap.from(split.words,{
            scrollTrigger:{
                trigger:sectionslide.current,
                start:"center center",
            },
            opacity:0,
            duration:0.8,
            stagger:0.14
        })
        animatspans.forEach((e,index) => {
            if(index==2){
                gsap.from(e,{
                    scrollTrigger:{
                        trigger:sectionslide.current,
                        start:"center center",
                    },
                    opacity:0.5,
                    y:-50,
                    duration:1,
                })
            }
            else{
            gsap.from(e,{
            scrollTrigger:{
                trigger:sectionslide.current,
                start:"center center",
            },
            y:50,
            opacity:0.5,
            duration:1,
        })
            }
        });
        return ()=>{
            split.revert()
        }
    },[])
    return(
        <div className="w-full min-h-screen max-h-fit bg-amber-200/80 py-12 pb-20  px-8 hidden md:block" ref={sectionslide}>
            <h1 className="text-yellow-950/90 font-[Inter] text-6xl font-bold  leading-15 " ref={textslide}>TRASITION<br></br> &  CREATION</h1>
            <p className="max-w-70 text-sm text-yellow-900 leading-4 mt-4">Lo voluptatiewk;g4 sse consequuntur beatae nisi. Soluta, num sequuntur beatae nisi. Soluta</p>
            <div className="images  min-h-[2000px] relative">
                <div className="card flex justify-start flex-col gap-2 absolute right-19 rotate-4 top-4">
                    <div className="head flex gap-2.5">
                        <div className="overflow-hidden rounded-full size-6">
                            <img src={img4} alt="" loading="lazy" className="rounded w-full h-full object-cover" />
                        </div>
                        <div className="text-sm text-gray-800/70">Lorem ipsum dolor r adipis</div>
                    </div>
                    <div className="img w-100 h-125">
                        <img src={img4} alt="" loading="lazy" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="card flex justify-start flex-col gap-2 absolute left-2 rotate-5 top-160">
                    <div className="head flex gap-2.5">
                        <div className="overflow-hidden rounded-full size-6">
                            <img src={img4} alt="" loading="lazy" className="rounded w-full h-full object-cover" />
                        </div>
                        <div className="text-sm text-gray-800/70">Lorem ipsum dolor r adipis</div>
                    </div>
                    <div className="img w-100 h-145">
                        <img src={img2} alt="" loading="lazy" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="card flex justify-start flex-col gap-2 absolute left-1/2 bottom-40 rotate-1">
                    <div className="head flex gap-2.5">
                        <div className="overflow-hidden rounded-full size-6">
                            <img src={img4} alt="" loading="lazy" className="rounded w-full h-full object-cover" />
                        </div>
                        <div className="text-sm text-gray-800/70">Lorem ipsum dolor r adipis</div>
                    </div>
                    <div className="img w-90 h-125">
                        <img src={img1} alt="" loading="lazy" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
            <h1 className="text-yellow-950 font-[Inter] text-7xl font-bold tracking-wide leading-16 min-w-full text-center" ref={textanmaiton}><span className="relative">WHY <span className="absolute bg-pink-600/90 rounded-3xl py-3 px-2 text-xs font-medium text-gray-100  rotate-5 -left-5 tracking-normal leading-0 top-1/2 -translate-y-1/2 animatspan">fohfwo </span> </span><span className="relative">THE <span className="absolute bg-pink-600/90 rounded-3xl py-3 px-2 animatspan text-xs font-medium text-gray-100  -rotate-9 left-10 tracking-normal leading-0 top-1/2 -translate-y-1/4">fohfwfew4fo </span> </span> <span class="relative">JAR <span className="absolute animatspan bg-pink-600/90 rounded-3xl py-3 px-2 text-xs font-medium text-gray-100  rotate-14 -left-5 tracking-normal leading-0 bottom-1">fohfwo </span> </span> <br></br> MATTERS</h1>
            <div className="min-w-full flex justify-between  items-center  h-100 mt-30 py-10">
                <div className="flex justify-start gap-2.5 flex-col ">
                    <div className="flex gap-3 items-center">
                        <div className="overflow-hidden rounded-full size-10">
                                <img src={img4} alt="" loading="lazy" className="rounded w-full h-full object-cover" />
                        </div>
                        <div className="text-gray-900/80 text-sm">Basem</div>
                    </div>
                    <p className="max-w-120 text-sm text-yellow-900 leading-4 mt-4">Lsi impedit quaerat, dolorum accusamus, ducimus ipsa quibusdam dolores error mollitia deleniti natus ex eligendi aliquid commodi molestias quod veniam a qui! Lo voluptatiewk;g4 sse consequuntur beatae nisi. Soluta, num sequuntur beatae nisi. Soluta</p>
                </div>
                <div className="flex justify-start gap-2.5 flex-col">
                    <div className="flex gap-3 items-center">
                        <div className="overflow-hidden rounded-full size-10">
                                <img src={img4} alt="" loading="lazy" className="rounded w-full h-full object-cover" />
                        </div>
                        <div className="text-gray-900/80 text-sm">Mohamed</div>
                    </div>
                    <p className="max-w-120 text-sm text-yellow-900 leading-4 mt-4">Lsi impedit quaerat Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sed? i molestias quod veniam a qui! Lo voluptatiewk;g4 sse consequuntur beatae nisi. Soluta, num sequuntur beatae nisi. Soluta</p>
                </div>
                <div className="flex justify-start gap-2.5 flex-col">
                    <div className="flex gap-3 items-center">
                        <div className="overflow-hidden rounded-full size-10">
                                <img src={img4} alt="" loading="lazy" className="rounded w-full h-full object-cover" />
                        </div>
                        <div className="text-gray-900/80 text-sm">Ali</div>
                    </div>
                    <p className="max-w-120 text-sm text-yellow-900 leading-4 mt-4">Lsi impedit quaerat, doloimus ipsa quibusdam dolores error mollitia deleniti natus ex eligendi aliquid commodi molestias quod veniam a qui! Lo voluptatiewk;g4 sse consequuntur beatae nisi. Soluta, num sequuntur beatae nisi. Soluta</p>
                </div>
            </div>
            <div className="min-w-full min-h-100 flex justify-between">
                <div className="overflow-hidden w-115 h-100">
                    <img src={img3} alt="" loading="lazy" className="w-full h-full object-cover"/>
                </div>
                <div className="overflow-hidden w-115 h-100">
                    <img src={img2} alt="" loading="lazy" className="w-full h-full object-cover"/>
                </div>
                <div className="overflow-hidden w-115 h-100">
                    <img src={img4} alt="" loading="lazy" className="w-full h-full object-cover"/>
                </div>
            </div>
        </div>
    )
}