import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function Monolith() {
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001
  });

  const rotate = useTransform(smoothProgress, [0, 1], [0, 90]);
  const scale = useTransform(smoothProgress, [0, 1], [1, 1.15]);
  const y = useTransform(smoothProgress, [0, 1], [0, -50]);

  return (
    <div className="bg-background dark:bg-inverse-surface w-full transition-colors duration-1000">
      {/* Hero Section */}
      <section className="relative w-full h-[150vh] overflow-hidden">

        <div className="sticky top-0 w-full h-[100dvh] flex flex-col items-center justify-center overflow-hidden">

          {/* Massive Ghost Typography */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.03, scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="font-display-xl text-[25vw] md:text-[20vw] leading-none text-on-surface dark:text-inverse-on-surface whitespace-nowrap select-none"
            >
              PRECISION
            </motion.h1>
          </div>

          {/* Blueprint Lines */}
          <div className="absolute inset-0 pointer-events-none z-0 opacity-20" style={{ backgroundImage: 'linear-gradient(currentColor 0.5px, transparent 0.5px), linear-gradient(90deg, currentColor 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }}></div>

          <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-16 flex flex-col md:flex-row h-full">

            {/* Left: Editorial Text */}
            <div className="w-full md:w-1/2 flex flex-col justify-start md:justify-center h-full pt-32 md:pt-0 z-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="font-technical-data text-tertiary tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs md:text-sm mb-4 md:mb-6 flex items-center gap-2 md:gap-4">
                  <span className="w-8 md:w-12 h-[1px] bg-tertiary"></span>
                  25 Years of Excellence
                </p>
                <h2 className="font-display-xl text-on-surface dark:text-inverse-on-surface text-[3.5rem] md:text-[6rem] leading-[0.9] tracking-tighter uppercase">
                  The Core<br />of Industry
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.4 }}
                className="font-body-airy text-on-surface-variant dark:text-primary-fixed-dim max-w-sm md:max-w-md mt-6 md:mt-8 text-base md:text-lg leading-relaxed"
              >
                Manufacturing the utmost precise TFO Machine Pulleys and textile components. Engineered down to the micron.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="mt-8 md:mt-12 flex gap-4"
              >
                <a href="/products" className="group relative px-6 md:px-8 py-3 md:py-4 bg-inverse-surface dark:bg-surface-container-lowest text-inverse-on-surface dark:text-on-surface font-label-caps uppercase tracking-widest overflow-hidden text-xs md:text-sm">
                  <span className="relative z-10">Explore Catalog</span>
                  <div className="absolute inset-0 bg-tertiary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></div>
                </a>
              </motion.div>
            </div>

            {/* Right: Massive Hero Product */}
            <div className="w-full md:w-1/2 absolute bottom-0 md:right-0 md:top-1/2 md:-translate-y-1/2 h-[50vh] md:h-[80vh] pointer-events-none z-10 flex items-center justify-center md:justify-center opacity-60 md:opacity-100">
              <motion.img
                style={{ rotate, scale, y }}
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7Li9mUjVuzecY0A2j5lp1WbLQNME2NkzHrZ-bxfhW8SG6xmGFYvd0adDvFNHjkrfJqcX_6NEfeTEeygRsBQ1sTqT3aMcMOM-7cS8l5oQuB8mY8kdSZ-AUde-_QPa4ay3uq2Lb0JEzWY5H8Kcr55KghpxtvC0SRnV76Jt729JSedPbmnlz7t9n5G8HTsRjoQzT7GPjR1mny7hJjopPhXK5xZTksJ2O1C0hKbT-B6v0N7edRQBkMAZauhseLpW7ETQ7_ND_SpOCl_c"
                alt="Premium TFO Pulley"
                className="w-[150%] md:w-[140%] max-w-none drop-shadow-[0_0_50px_rgba(255,255,255,0.1)] object-contain"
              />

              {/* Tech Specs HUD attached to image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 1.2 }}
                className="absolute bottom-4 right-4 md:bottom-10 md:right-20 bg-background/80 dark:bg-inverse-surface/80 backdrop-blur-md border border-tertiary/30 p-4 md:p-6 flex flex-col gap-2"
              >
                <div className="flex justify-between gap-4 md:gap-8 border-b border-outline-variant/30 pb-2">
                  <span className="font-technical-data text-on-surface-variant dark:text-outline text-[10px] md:text-xs tracking-widest">DIAMETER</span>
                  <span className="font-technical-data text-on-surface dark:text-inverse-on-surface text-[10px] md:text-xs">450.00MM</span>
                </div>
                <div className="flex justify-between gap-4 md:gap-8">
                  <span className="font-technical-data text-on-surface-variant dark:text-outline text-[10px] md:text-xs tracking-widest">TOLERANCE</span>
                  <span className="font-technical-data text-tertiary text-[10px] md:text-xs">±0.005MM</span>
                </div>
              </motion.div>
            </div>

          </div>

        </div>
      </section>

      {/* New Section 1: Philosophy */}
      <section className="relative w-full py-20 md:py-32 px-6 md:px-margin-page bg-background dark:bg-inverse-surface border-t border-outline-variant transition-colors duration-1000">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <span className="font-technical-data text-tertiary uppercase tracking-widest text-xs md:text-sm">01 // The Philosophy</span>
            <h2 className="font-display-xl text-on-surface dark:text-inverse-on-surface text-4xl md:text-6xl mt-4 md:mt-6 leading-tight">
              PERFECTION IS NOT AN ACCIDENT. IT IS ENGINEERED.
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="font-body-airy text-on-surface-variant dark:text-primary-fixed-dim text-lg md:text-2xl leading-relaxed">
              At Saikrupa Engineering Works, our entire methodology is built around the eradication of variance. For 25 years, we have supplied the textile and aerospace sectors with TFO pulleys and mechanical components that do not just meet specifications—they define them.
            </p>
          </div>
        </div>
      </section>

      {/* New Section 2: Quick Links to Matrix / Products */}
      <section className="relative w-full py-20 md:py-32 px-6 md:px-margin-page bg-surface-container-lowest dark:bg-surface-dim transition-colors duration-1000">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant border border-outline-variant">

          <div className="bg-surface-container-lowest dark:bg-surface-dim p-8 md:p-16 flex flex-col items-start hover:bg-surface-container-high dark:hover:bg-inverse-surface transition-colors group">
            <h3 className="font-display-xl text-3xl md:text-4xl text-on-surface dark:text-inverse-on-surface">The Machinery Matrix</h3>
            <p className="font-body-airy text-on-surface-variant dark:text-primary-fixed-dim mt-4 max-w-md text-base md:text-lg">Analyze our production capabilities, from 12-station CNC turning centers to highly specialized manual lathes.</p>
            <a href="/laboratory" className="mt-8 md:mt-12 font-label-caps tracking-widest text-tertiary uppercase group-hover:text-on-surface dark:group-hover:text-inverse-on-surface transition-colors flex items-center gap-2 text-xs md:text-sm">Enter Laboratory <span className="material-symbols-outlined">east</span></a>
          </div>

          <div className="bg-surface-container-lowest dark:bg-surface-dim p-8 md:p-16 flex flex-col items-start hover:bg-surface-container-high dark:hover:bg-inverse-surface transition-colors group">
            <h3 className="font-display-xl text-3xl md:text-4xl text-on-surface dark:text-inverse-on-surface">Component Catalog</h3>
            <p className="font-body-airy text-on-surface-variant dark:text-primary-fixed-dim mt-4 max-w-md text-base md:text-lg">Examine our precision-engineered Bush Pulleys, Corner Pulleys, and Flat Belt Pulleys.</p>
            <a href="/products" className="mt-8 md:mt-12 font-label-caps tracking-widest text-tertiary uppercase group-hover:text-on-surface dark:group-hover:text-inverse-on-surface transition-colors flex items-center gap-2 text-xs md:text-sm">View Inventory <span className="material-symbols-outlined">east</span></a>
          </div>

        </div>
      </section>
    </div>
  );
}
