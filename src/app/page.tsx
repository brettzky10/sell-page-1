"use client"

import HeroSection from "@/components/hero-section";
import Section from "@/components/section";
import Image from "next/image";

import BgOverview from "@/../public/bg-overview.jpeg"
import BgInterior from "@/../public/bg-interior.jpeg"
import BgCharging from "@/../public/bg-charging.jpeg"
import BgConnect from "@/../public/bg-connectivity.jpeg"
import BgSafety from "@/../public/bg-safety.jpeg"
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import ZoomParallax from "@/components/zoom-parallax";

export default function Home() {

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])


  return (
    <main className="min-h-screen">
      
      <HeroSection/>
      <Section image={BgOverview} title="Elevate adventure in the luxury electric SUV of tomorrow" tag="Overview" description="More space. More utility - All luxury. Feel the freedom to move"/>
      <Section image={BgInterior} title="Elevate adventure in the luxury electric SUV of tomorrow" tag="Interior" description="More space. More utility - All luxury. Feel the freedom to move"/>
      <Section image={BgCharging} title="Elevate adventure in the luxury electric SUV of tomorrow" tag="Charging" description="More space. More utility - All luxury. Feel the freedom to move"/>
      <Section image={BgConnect} title="Elevate adventure in the luxury electric SUV of tomorrow" tag="Connectivity" description="More space. More utility - All luxury. Feel the freedom to move"/>
      <Section image={BgSafety} title="Elevate adventure in the luxury electric SUV of tomorrow" tag="Safety" description="More space. More utility - All luxury. Feel the freedom to move"/>
      <ZoomParallax/>
    </main>
  );
}
