// components/ParallaxSection.tsx
'use client';

const ParallaxSection = () => (
  <section
    className="relative h-screen bg-fixed bg-center bg-cover"
    style={{ backgroundImage: "url('/images/parallax-bg.jpg')" }}
  >
    <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
      <h2 className="text-5xl font-bold text-white">Stunning Visuals</h2>
    </div>
  </section>
);

export default ParallaxSection;