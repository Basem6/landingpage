import img from "./assets/pink-flowers.webp"
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Nav } from "./components/Nav";
import * as THREE from "three";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Slides } from "./components/Slides";
import { Shop } from "./components/Shop";
import { Footer } from "./components/Footer";
import {ScrollSmoother} from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger,ScrollSmoother)
export default function App() {
  const fixedbtn = useRef(null);
  const mountRef = useRef(null);
  const parente = useRef(null);
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 769px)", () => {
      let modal;
      const scene = new THREE.Scene();

      const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      100
      );
      
      camera.position.set(0, 1, 5);
      const renderer = new THREE.WebGLRenderer({   antialias: true,
      alpha: true });
      renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
      );
      mountRef.current.appendChild(renderer.domElement);

      // Lights
      const ambient = new THREE.AmbientLight(0xffffff, 2.4);
      ambient.position.set(5, 10, 7);
      scene.add(ambient);

      const dirLight = new THREE.DirectionalLight(0xffffff, 2);
      dirLight.position.set(5, 10, 7);
      scene.add(dirLight);
      const diLight = new THREE.DirectionalLight(0xffffff, 1);
      diLight.position.set(10, 0, 5);
      scene.add(diLight);
      const loader = new GLTFLoader();

      loader.load("/assets/protein_jar.glb", (gltf) => {
          modal = gltf.scene;
          modal.add(ambient)
          scene.add(modal);
      });
      // Animation loop
      const animate = () => {
      requestAnimationFrame(animate);
      gsap.to(parente.current,{
        scrollTrigger:{
          trigger:"#section",
          start:"top top",
          toggleActions:"play reverse play reverse"
        },
        y:10,
        scale:0.8,
        duration:1,
      })
      gsap.to(parente.current,{
        scrollTrigger:{
          trigger:"#section",
          start:"top cneter",
          toggleActions:"play reverse play reverse"
        },
        y:-50,
        scale:0.8,
        duration:1,
      })
      window.addEventListener("scroll", () => {
      const s = window.scrollY;
      if(modal){
      modal.rotation.y = s *- 0.0003;
      modal.rotation.z = s * -0.0005;
      modal.rotation.x = s * 0.00001;
      }
    });
      renderer.render(scene, camera);
      };
      animate();
      return () => {
      mountRef.current.removeChild(renderer.domElement);
      };
    })
  }, []);
  useGSAP(()=>{
      gsap.to(parente.current,{
          scrollTrigger:{
              trigger:"#section",
              start:"bottom bottom",
          },
          opacity:0,
          duration:0.1,
      })
  },[])
  useGSAP(()=>{
    const smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 2,
    effects: true,
  });
    gsap.to(fixedbtn.current,{
    scrollTrigger:{
      trigger:"#shop",
      start:"bottom bottom",
      toggleActions:"play reverse play reverse"
    },
    opacity:0,
    duration:0.5,
    ease:"none"
  })
  return () => {
    smoother.kill();
  }
  },[])
  return (
    <div className="relative min-w-full min-h-[2000px]">
        <Nav></Nav>
        <div className="h-screen min-w-full z-10 top-27  fixed hidden md:block" ref={parente}>
              <div ref={mountRef} className="min-w-full min-h-full  transition-all duration-500" />
        </div>
        <div className="fixed right-0 bottom-7 px-10 z-50" ref={fixedbtn}>
                                <div className="flex gap-1">
                                <div className="whitespace-nowrap bg-yellow-400/90 flex justify-center items-center  rounded-full size-12   font-bold">
                                <i className="fa-solid fa-box-open"></i>
                                </div>
                                <div className="whitespace-nowrap bg-yellow-400/90 flex justify-center items-center  rounded-full   size-12  font-bold">
                                <i className="fa-solid fa-cart-shopping"></i>
                                </div>
                                </div>
        </div>
      <div id="smooth-wrapper">
      <div id="smooth-content">
                <div className="absolute min-w-full h-full left-0 top-0 -z-20 bg-amber-700">
                  <img src={img} loading="lazy" alt="overlay" className="min-w-full min-h-full max-w-full max-h-full object-cover brightness-50 opacity-20 "/>
                </div>
                <Home></Home>
                <About></About>
                <Slides></Slides>
                <Shop></Shop>
                <Footer></Footer>
            </div>
      </div>
    </div>
    )
  ;
}