import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function Monolith() {
  const { scrollYProgress } = useScroll();
  
  // Smooth out the scroll value so the rotation feels incredibly fluid
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Rotate from 0 to 50 degrees based on overall page scroll
  const rotate = useTransform(smoothProgress, [0, 1], [0, 50]);

  return (
    <section className="relative w-full min-h-[150vh] flex items-start justify-center bg-primary-container px-margin-page transition-colors duration-1000">
      {/* Sticky container for the hero content so it stays in view while scrolling */}
      <div className="sticky top-20 w-full h-[calc(100vh-80px)] flex items-center justify-center">
        {/* Grid Lines Background */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="w-full h-full border-x border-outline-variant max-w-7xl mx-auto grid grid-cols-3">
            <div className="border-r border-outline-variant"></div>
            <div className="border-r border-outline-variant"></div>
            <div></div>
          </div>
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-element-gap">
          {/* Typography Column */}
          <div className="w-full md:w-1/2 flex flex-col gap-unit pl-0 md:pl-12 border-l border-outline-variant py-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1.0], delay: 0.2 }}
              className="flex flex-col gap-2"
            >
              <span className="font-technical-data text-technical-data text-on-surface-variant uppercase tracking-widest">Model: PX-900 / Alpha</span>
              <h1 className="font-display-xl text-display-xl text-on-surface uppercase leading-none tracking-tighter">THE<br/>MONOLITH</h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.6 }}
              className="font-body-airy text-body-airy text-on-surface-variant mt-8 max-w-md"
            >
              Engineering perfection down to the microscopic level. A testament to precision, built for environments where failure is not a variable. Scroll to analyze the geometry.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="mt-12"
            >
              <a href="/products" className="inline-flex items-center justify-center font-label-caps text-label-caps text-on-primary bg-on-surface px-8 py-4 border border-on-surface hover:bg-transparent hover:text-on-surface transition-all duration-500 uppercase tracking-[0.2em]">
                Examine Products
              </a>
            </motion.div>
          </div>

          {/* Imagery Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1.0], delay: 0.4 }}
            className="w-full md:w-1/2 h-[614px] md:h-[819px] flex items-center justify-center relative"
          >
            <div className="relative w-full h-full border border-outline-variant bg-surface-container-lowest p-8 flex items-center justify-center overflow-hidden group">
              {/* Technical overlay markings */}
              <div className="absolute top-4 left-4 font-technical-data text-label-caps text-outline-variant">DIA: 450.005mm</div>
              <div className="absolute bottom-4 right-4 font-technical-data text-label-caps text-outline-variant">TOL: ±0.001</div>
              
              {/* Center crosshair */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
                <div className="w-full h-[0.5px] bg-outline-variant absolute"></div>
                <div className="h-full w-[0.5px] bg-outline-variant absolute"></div>
              </div>
              
              <motion.img 
                style={{ rotate }}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7Li9mUjVuzecY0A2j5lp1WbLQNME2NkzHrZ-bxfhW8SG6xmGFYvd0adDvFNHjkrfJqcX_6NEfeTEeygRsBQ1sTqT3aMcMOM-7cS8l5oQuB8mY8kdSZ-AUde-_QPa4ay3uq2Lb0JEzWY5H8Kcr55KghpxtvC0SRnV76Jt729JSedPbmnlz7t9n5G8HTsRjoQzT7GPjR1mny7hJjopPhXK5xZTksJ2O1C0hKbT-B6v0N7edRQBkMAZauhseLpW7ETQ7_ND_SpOCl_c" 
                alt="Precision Engineered Pulley" 
                className="object-contain w-[80%] h-[80%] z-10 drop-shadow-2xl mix-blend-multiply dark:mix-blend-normal" 
              />
            </div>
          </motion.div>
        </div>

        {/* Absolute positioned technical footer inside hero */}
        <div className="absolute bottom-0 left-0 w-full border-t border-outline-variant px-margin-page py-4 flex justify-between items-center bg-primary-container z-20">
          <span className="font-technical-data text-label-caps text-on-surface-variant">STATE: OPTIMAL</span>
          <span className="font-technical-data text-label-caps text-on-surface-variant">SYS: ONLINE</span>
        </div>
      </div>
    </section>
  );
}
