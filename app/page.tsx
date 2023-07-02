import {
  About,
  Explore,
  Feedback,
  Footer,
  GetStarted,
  Hero,
  Insight,
  Navbar,
  WhatsNew,
  World,
} from "@/components";
import React from "react";


export default function Home() {
  return (
   <div>
      <Hero />

      <About />
      <Explore />
      <GetStarted />
      <WhatsNew />
      <World />
      <Insight />
      <Feedback />
    
      </div>
  );
}
