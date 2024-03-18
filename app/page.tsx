'use client';

import { useEffect } from "react";
import Footer from "../components/Footer";
import Lenis from '@studio-freight/lenis'

export default function Home() {

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
}, [])
  return (
    <main className="">
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-3xl">Scroll to see the effect &#40; •̀ ω •́ &#41;✧</h1>
      </div>
      <Footer />
    </main>
  );
}
