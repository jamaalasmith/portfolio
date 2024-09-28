// app/page.tsx
import {Hero} from '../components/Hero';
import {ParallaxSection} from '../components/ParallaxSection';
import "./globals.css"

export default function Home() {
  return (
    <main>
      <Hero />
      <ParallaxSection />
      {/* Add more sections here */}
    </main>
  );
}