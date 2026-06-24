import {  useRef } from "react";
import Logo from "../assets/tiger_head_outline_7qdFg.svg?react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export function Nav(){
    const nav=useRef(null)
    useGSAP(()=>{
        gsap.to(nav.current,{
            scrollTrigger:{
                trigger:"body",
                start:"top top",
                toggleActions:"play reverse play reverse"
            },
            duration:0.7,
            ease:"power1.inOut",
            yPercent:-100
            
        })
    },[])
    return(
        <div ref={nav} className="min-w-full min-h-20 flex justify-between py-1.5  border-b-6 border-dotted border-b-yellow-300/90 px-5 top-0 fixed bg-transparent z-50">
            <div className="left flex gap-1 min-w-1/3 max-w-1/3">
                <div className="btn">home</div>
                <div className="btn">about</div>
                <div className="btn">menu</div>
                <div className="btn">constac</div>
            </div>
            <div className="center  min-w-1/3 max-w-1/3   text-2xl text-yellow-300  text-center  leading-4.5 flex flex-col items-center ff uppercase " >
                <Logo className="w-8 h-8  -z-20 relative top-1 bg-amber-400" /><div className="leading-4.5 flex flex-col items-center ff uppercase max-w-8">Privy Tiger</div>
            </div>
            <div className="right min-w-1/3 max-w-1/3 flex gap-1 justify-end">
                <div className="btn">serviecs</div>
                <div className="btn whitespace-nowrap">buy now</div>
            </div>
        </div>
    )
}