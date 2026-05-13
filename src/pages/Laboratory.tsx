import { motion } from "framer-motion";

export default function Laboratory() {
  return (
    <div className="flex-grow px-margin-page py-section-gap bg-background dark:bg-inverse-surface text-on-surface dark:text-inverse-on-surface w-full min-h-[calc(100vh-80px)] transition-colors duration-1000">
      <header className="mb-element-gap flex justify-between items-end border-b-[0.5px] border-outline-variant dark:border-outline pb-unit">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1.0] }}
        >
          <h1 className="font-display-xl text-display-xl text-inverse-on-surface text-on-surface dark:text-inverse-on-surface">Machinery Matrix</h1>
          <p className="font-technical-data text-technical-data text-on-surface-variant dark:text-secondary-fixed-dim mt-unit uppercase tracking-widest">Sys. 04 // Production Capability View</p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-right"
        >
          <p className="font-technical-data text-technical-data gold-accent">FLEET: OPERATIONAL</p>
          <p className="font-technical-data text-technical-data silver-accent mt-1">CAPACITY: HIGH-YIELD</p>
        </motion.div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-12 gap-[0.5px] bg-outline-variant dark:bg-outline mt-12 p-[0.5px]">
        
        {/* CNC Turning Center */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="bento-card md:col-span-8 min-h-[400px] flex flex-col justify-end p-0 relative overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" alt="CNC Lathe" className="w-full h-full object-cover opacity-50 mix-blend-luminosity" />
            <div className="blueprint-overlay absolute inset-0"></div>
          </div>
          <div className="data-hud p-element-gap w-full z-10">
            <div className="flex justify-between items-start mb-unit">
              <div>
                <h3 className="font-label-caps text-label-caps gold-accent">Automated Machining Cell</h3>
                <p className="font-display-xl text-2xl text-on-surface dark:text-inverse-on-surface mt-1">Jyoti DX200 CNC</p>
              </div>
              <span className="font-technical-data text-technical-data silver-accent">QTY: 02 <span className="tech-annotation text-on-surface-variant dark:text-secondary-fixed-dim ml-2 text-xs">[ACTIVE]</span></span>
            </div>
            <div className="grid grid-cols-3 gap-unit border-t-[0.5px] border-outline-variant dark:border-outline pt-unit mt-4">
              <div>
                <p className="font-label-caps text-label-caps text-on-surface-variant dark:text-secondary-fixed-dim">Application</p>
                <p className="font-technical-data text-technical-data">High-Volume Repeatability</p>
              </div>
              <div>
                <p className="font-label-caps text-label-caps text-on-surface-variant dark:text-secondary-fixed-dim">Architecture</p>
                <p className="font-technical-data text-technical-data">Rigid Slant Bed</p>
              </div>
              <div className="text-right">
                <p className="font-label-caps text-label-caps text-on-surface-variant dark:text-secondary-fixed-dim">Precision</p>
                <p className="font-technical-data text-technical-data gold-accent">Micro-Tolerance</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Lathe Capacity Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="bento-card md:col-span-4 p-element-gap flex flex-col relative overflow-hidden"
        >
          <div className="border-b-[0.5px] border-outline-variant dark:border-outline pb-unit mb-unit flex justify-between items-center">
            <h3 className="font-label-caps text-label-caps silver-accent">Manual Engineering Fleet</h3>
            <span className="material-symbols-outlined text-on-surface-variant dark:text-secondary-fixed-dim" style={{fontSize: "16px"}}>build</span>
          </div>
          <div className="flex-grow flex flex-col justify-center space-y-element-gap">
            <div>
              <p className="font-label-caps text-label-caps text-on-surface-variant dark:text-secondary-fixed-dim">Heavy Duty Lathes</p>
              <div className="flex items-end gap-2 mt-1">
                <span className="font-display-xl text-headline-lg gold-accent leading-none">09</span>
                <span className="font-technical-data text-technical-data text-on-surface-variant dark:text-secondary-fixed-dim pb-1">units <span className="tech-annotation gold-accent ml-1 text-xs">▲ BESPOKE TOOLING</span></span>
              </div>
            </div>
            <div>
              <p className="font-body-airy text-sm text-on-surface-variant dark:text-secondary-fixed-dim mt-2">
                The backbone of our tactile craftsmanship. Essential for specialized one-off prototypes, massive diameter turning, and maintaining our 25-year heritage of metallurgical mastery.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Secondary Operations */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="bento-card md:col-span-4 min-h-[300px] flex flex-col justify-end p-0 relative overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1565515261922-4217112c2a05?auto=format&fit=crop&q=80" className="w-full h-full object-cover opacity-60 mix-blend-luminosity grayscale" />
            <div className="blueprint-overlay absolute inset-0"></div>
          </div>
          <div className="data-hud p-unit w-full z-10">
            <div className="flex justify-between items-end">
              <div>
                <h3 className="font-label-caps text-label-caps silver-accent">Secondary Operations</h3>
                <p className="font-technical-data text-technical-data text-on-surface-variant dark:text-secondary-fixed-dim mt-1">Vertical Drilling Stations</p>
              </div>
              <span className="font-technical-data text-technical-data silver-accent">QTY: 02</span>
            </div>
          </div>
        </motion.div>

        {/* Quality Control Lab */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="bento-card md:col-span-4 min-h-[300px] flex flex-col justify-end p-0 relative overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1580983191196-857509dbdf20?auto=format&fit=crop&q=80" className="w-full h-full object-cover opacity-30 grayscale" />
            <div className="blueprint-overlay absolute inset-0"></div>
          </div>
          <div className="data-hud p-unit w-full z-10">
            <h3 className="font-label-caps text-label-caps gold-accent">Metrology & Verification</h3>
            <p className="font-technical-data text-technical-data text-on-surface-variant dark:text-secondary-fixed-dim mt-1">Tactile & Gauge Inspection <span className="tech-annotation silver-accent text-xs ml-2">VERIFIED</span></p>
          </div>
        </motion.div>

        {/* Specs */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="bento-card md:col-span-4 p-element-gap flex flex-col justify-between relative overflow-hidden"
        >
          <div>
            <h3 className="font-label-caps text-label-caps text-on-surface-variant dark:text-secondary-fixed-dim mb-unit">Textile Production Focus</h3>
            <ul className="space-y-2 mt-4">
              <li className="flex justify-between border-b-[0.5px] border-outline-variant dark:border-outline pb-2">
                <span className="font-technical-data text-technical-data silver-accent">TFO Pulleys</span>
                <span className="font-technical-data text-on-surface dark:text-inverse-on-surface">High-Yield</span>
              </li>
              <li className="flex justify-between border-b-[0.5px] border-outline-variant dark:border-outline pb-2">
                <span className="font-technical-data text-technical-data silver-accent">Spindle Wharves</span>
                <span className="font-technical-data text-on-surface dark:text-inverse-on-surface">High-Yield</span>
              </li>
              <li className="flex justify-between border-b-[0.5px] border-outline-variant dark:border-outline pb-2">
                <span className="font-technical-data text-technical-data silver-accent">Custom Tooling</span>
                <span className="font-technical-data gold-accent">On-Demand</span>
              </li>
            </ul>
          </div>
          <button className="btn-primary font-label-caps text-label-caps py-unit px-element-gap w-full mt-element-gap z-10 text-center">
            DOWNLOAD FULL ROSTER
          </button>
        </motion.div>
      </section>
    </div>
  );
}
