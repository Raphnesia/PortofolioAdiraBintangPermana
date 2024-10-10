import Hero from "@/components/hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { IoHome } from "react-icons/io5";
import Image from "next/image";
import TechStack from "@/components/TechStack";
import KembangProject from "@/components/KembangProject";
import CurouselBag from "@/components/CurouselBag";
import EducationSec from "@/components/EducationSec";
import Approach from "@/components/Approach";
import Footer from "../components/Footer";




export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          {name: 'Beranda', link: '/', icon: <IoHome />},
          {name: 'Tentang Saya', link: '/', icon: <IoHome />},
          {name: 'Pengalaman', link: '/', icon: <IoHome />},
          {name: 'Project Saya', link: '/', icon: <IoHome />},
          {name: 'Hubungi Saya', link: '/', icon: <IoHome />},
        ]} 
        />
        
        <Hero />
        <CurouselBag />
        <EducationSec />
        <TechStack />
        <KembangProject />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
