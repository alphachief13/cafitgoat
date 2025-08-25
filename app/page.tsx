"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import Balatro from "@/components/Balatro";
import TiltedCard from "@/components/TiltedCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { accordionContentData } from "@/data/main-content";
import BlurText from "@/components/BlurText";

function IntroSection() {
  return (
    <div className="w-screen h-screen relative">
      <div className="-z-10 absolute inset-0">
        <Balatro
          color1="#162325"
          color2="#000000"
          isRotate={false}
          mouseInteraction={true}
          pixelFilter={700}
        />
      </div>

      <div className="w-full h-full flex items-center justify-center flex-col gap-10">
        <BlurText
          text="João Lucas da Rosa, editor"
          delay={250}
          animateBy="words"
          direction="top"
          className="font-bold text-5xl text-white text-centerF"
        />
        <TiltedCard
          imageSrc="pfp-1.jpg"
          altText=""
          captionText="João Lucas, 18"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={<></>}
        />
      </div>

      {/* <CircularText
        text="*CAFITGOAT*CAFITGOAT"
        onHover="speedUp"
        spinDuration={20}
        className="custom-class"
      /> */}
    </div>
  );
}

function AboutMeAccordion() {
  return (
    <div className="w-full">
      <Accordion type="single" collapsible className="w-full">
        {accordionContentData.map((item, index) => (
          <AccordionItem
            className="bg-[#162325] text-white p-5"
            key={index}
            value={`item-${index}`}
          >
            <AccordionTrigger className="text-3xl font-bold">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-base">
              <div dangerouslySetInnerHTML={{ __html: item.description }} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const handleAnimationComplete = () => {
    // console.log("Animation completed!");
  };

  return (
    <div className="overflow-hidden">
      <IntroSection />

      <div className="bg-[#162325] py-10 flex flex-col justify-center items-center">
        <BlurText
          text="Commentary Videos"
          delay={400}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-5xl font-bold text-white"
        />

        
      </div>

      <AboutMeAccordion />
    </div>
  );
}
