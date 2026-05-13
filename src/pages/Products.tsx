import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Products() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const products = [
    {
      title: "Bush Pulley",
      spec: "Taper Lock Interface",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7Li9mUjVuzecY0A2j5lp1WbLQNME2NkzHrZ-bxfhW8SG6xmGFYvd0adDvFNHjkrfJqcX_6NEfeTEeygRsBQ1sTqT3aMcMOM-7cS8l5oQuB8mY8kdSZ-AUde-_QPa4ay3uq2Lb0JEzWY5H8Kcr55KghpxtvC0SRnV76Jt729JSedPbmnlz7t9n5G8HTsRjoQzT7GPjR1mny7hJjopPhXK5xZTksJ2O1C0hKbT-B6v0N7edRQBkMAZauhseLpW7ETQ7_ND_SpOCl_c",
      points: [
        "Forged high-density core for superior load distribution.",
        "Precision-tapered hub ensuring zero-slip mechanical binding.",
        "Anti-corrosive micro-layer finish for severe environments."
      ]
    },
    {
      title: "Jockey Pulley",
      spec: "Dynamic Tension Control",
      image: "src/assets/Jockey_Pulley.png",
      points: [
        "Continuous belt tension regulation under variable loads.",
        "Anti-vibration mounting architecture for smooth operation.",
        "Hermetically sealed ABEC-7 bearing integration for high RPMs."
      ]
    },
    {
      title: "Pressure Pulley",
      spec: "Load Distribution Hub",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCJczvrgizyLwawhJXYSHAY290v3oMUFL_N-YVQJ0OHbA1SpRC9G1demE8q38QuAiVQyQUqgqFcasPMPSDOC1YFyYW1ch5FQoqNrP84dnVUgTfawlv0LwJjtN7RUNq79fBzQ_vugkJtRvopuMcQ9tM39wuvGyyX8IHQqMLkLshumQIsUEpmnVt6FjB4gMXaRWZ_GXM5eKUA41ADt55BP0WsgK4_lmfrVPNuCp3RGb633lqs_fTnm-ffPKIiqTxPyqcgGwwxhMZoH0",
      points: [
        "Heavy-duty contact surface for maximum force transfer.",
        "Thermally optimized for continuous high-friction operation.",
        "Dynamically balanced to ISO G2.5 tolerance standards."
      ]
    }
  ];

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex flex-col items-center bg-background dark:bg-inverse-surface px-margin-page py-20 transition-colors duration-1000">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1.0] }}
        className="w-full max-w-7xl mx-auto flex flex-col gap-12"
      >
        <div className="flex flex-col gap-4 border-b border-outline-variant pb-8">
          <span className="font-technical-data text-label-caps text-on-surface-variant dark:text-outline tracking-[0.2em] uppercase">Inventory & Catalog</span>
          <h1 className="font-display-xl text-display-xl text-on-surface dark:text-inverse-on-surface uppercase leading-none tracking-tighter">OUR PRODUCTS</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l structural-border relative z-10">
          {products.map((item, index) => (
            <motion.div
              key={index}
              layoutId={`card-${index}`}
              onClick={() => setSelectedId(index)}
              className="group relative border-r border-b structural-border bg-surface-container-lowest dark:bg-inverse-surface p-6 flex flex-col items-center hover:bg-surface-variant dark:hover:bg-surface-container-high transition-colors duration-500 overflow-hidden cursor-pointer"
            >
              <motion.div layoutId={`image-container-${index}`} className="w-full aspect-square flex items-center justify-center p-4 relative z-10">
                <img src={item.image} alt={item.title} className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-screen opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
              </motion.div>
              <motion.div layoutId={`text-container-${index}`} className="w-full pt-8 border-t border-outline-variant mt-4 z-10 text-center">
                <motion.h3 layoutId={`title-${index}`} className="font-display-xl text-2xl text-on-surface dark:text-inverse-on-surface">{item.title}</motion.h3>
                <motion.p layoutId={`spec-${index}`} className="font-technical-data text-label-caps text-outline mt-2 uppercase tracking-widest">{item.spec}</motion.p>
              </motion.div>

              {/* Subtle hover blueprint line */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-tertiary transition-colors duration-700 pointer-events-none z-20 opacity-0 group-hover:opacity-30"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Full Screen Overlay with Shared Layout Animation */}
      <AnimatePresence>
        {selectedId !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 dark:bg-inverse-surface/80 backdrop-blur-md p-4 md:p-12"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={`card-${selectedId}`}
              className={`max-h-[90vh] overflow-y-auto w-full max-w-6xl bg-surface-container-lowest dark:bg-inverse-surface border border-outline shadow-2xl flex flex-col 
                ${selectedId === 0 ? 'md:flex-row' : selectedId === 2 ? 'md:flex-row-reverse' : 'md:flex-col'} 
                overflow-hidden relative`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-surface-variant dark:bg-surface-container-high flex items-center justify-center text-on-surface dark:text-inverse-on-surface hover:bg-outline-variant transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </motion.button>

              {/* Image Section */}
              <motion.div
                layoutId={`image-container-${selectedId}`}
                className={`p-12 flex items-center justify-center bg-surface-variant/30 dark:bg-surface-container-high/20 relative
                  ${selectedId === 1 ? 'w-full h-[50vh] border-b border-outline-variant' : 'w-full md:w-1/2 h-[70vh]'}`}
              >
                <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'linear-gradient(currentColor 0.5px, transparent 0.5px), linear-gradient(90deg, currentColor 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}></div>
                <img src={products[selectedId].image} alt={products[selectedId].title} className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-screen drop-shadow-2xl z-10" />
              </motion.div>

              {/* Text Description Section */}
              <motion.div
                layoutId={`text-container-${selectedId}`}
                className={`p-12 flex flex-col justify-center 
                  ${selectedId === 1 ? 'w-full h-auto items-center text-center pt-16' : 'w-full md:w-1/2 border-l border-outline-variant'} 
                  ${selectedId === 2 && 'border-l-0 border-r'}`}
              >
                <motion.h3 layoutId={`title-${selectedId}`} className={`font-display-xl text-5xl md:text-6xl text-on-surface dark:text-inverse-on-surface mb-2`}>
                  {products[selectedId].title}
                </motion.h3>
                <motion.p layoutId={`spec-${selectedId}`} className={`font-technical-data text-label-caps text-tertiary uppercase tracking-[0.2em] mb-10`}>
                  {products[selectedId].spec}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`${selectedId === 1 ? 'flex flex-col items-center' : 'w-full'}`}
                >
                  <h4 className="font-label-caps text-xs text-outline uppercase tracking-widest mb-6 border-b border-outline-variant pb-2 inline-block">Technical Characteristics</h4>
                  <ul className="space-y-6">
                    {products[selectedId].points.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: selectedId === 1 ? 0 : -10, y: selectedId === 1 ? 10 : 0 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ delay: 0.3 + (i * 0.1) }}
                        className="flex items-start gap-4 font-body-airy text-lg text-on-surface-variant dark:text-primary-fixed-dim max-w-md text-left"
                      >
                        <span className="w-1.5 h-1.5 bg-tertiary mt-2 flex-shrink-0"></span>
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
