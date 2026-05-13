import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Archive() {
  // Using intersection observer for scroll-triggered animation
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.35 });

    document.querySelectorAll('.glide-up').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full relative flex-grow bg-background dark:bg-inverse-surface text-on-surface dark:text-inverse-on-surface transition-colors duration-1000">
      <style>{`
        @keyframes glideUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .glide-up { opacity: 0; }
        .glide-up.active { animation: glideUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
      `}</style>

      {/* Hero Section */}
      <section className="px-margin-page pt-section-gap pb-[80px] border-b-micro border-outline-variant w-full max-w-[1600px] mx-auto">
        <div className="grid grid-cols-12 gap-element-gap">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="col-span-12 md:col-span-8 flex flex-col gap-unit"
          >
            <span className="font-label-caps text-label-caps text-outline dark:text-outline-variant uppercase tracking-widest">Document 01. Timeline</span>
            <h1 className="font-display-xl text-display-xl text-on-surface dark:text-inverse-on-surface">The Archive</h1>
            <p className="font-body-airy text-body-airy text-on-surface-variant dark:text-primary-fixed-dim max-w-xl mt-4">
              A definitive chronography of twenty-five years dedicated to absolute precision. Each epoch documented below represents a fundamental shift in our manufacturing tolerances and engineering methodologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="px-margin-page py-section-gap w-full max-w-[1600px] mx-auto overflow-hidden">
        <div className="relative border-l-micro border-outline-variant pl-element-gap md:pl-[120px] ml-4 md:ml-[8.33%] pr-4 md:pr-[8.33%]">

          {/* Epoch 01: 1995 */}
          <article className="grid grid-cols-1 md:grid-cols-10 gap-element-gap pb-section-gap relative glide-up items-start">
            <div className="absolute w-2 h-micro bg-outline-variant -left-[calc(24px+0.5px)] md:-left-[calc(120px+0.5px)] top-8"></div>
            <div className="col-span-1 md:col-span-3">
              <h2 className="font-display-xl text-display-xl text-on-surface dark:text-inverse-on-surface -mt-4">1995</h2>
              <span className="font-label-caps text-label-caps text-outline dark:text-outline-variant uppercase tracking-widest block mt-2">Foundation Protocol</span>
            </div>
            {/* Text Middle */}
            <div className="col-span-1 md:col-span-3 flex flex-col gap-element-gap">
              <div className="border-t-micro border-outline-variant pt-unit w-full">
                <h3 className="font-label-caps text-label-caps text-on-surface dark:text-inverse-on-surface uppercase mb-2">Technical Specification</h3>
                <ul className="font-technical-data text-technical-data text-on-surface-variant dark:text-primary-fixed-dim space-y-1">
                  <li>FACILITY: 2,400 SQ. FT.</li>
                  <li>MACHINING: MANUAL LATHE</li>
                  <li>TOLERANCE: ±0.05MM</li>
                  <li>PRIMARY SECTOR: AUTOMOTIVE</li>
                </ul>
              </div>
              <p className="font-body-airy text-body-airy text-on-surface dark:text-inverse-on-surface">
                The establishment of the original workshop. Initial operations focused on high-durability components for local automotive assemblies, prioritizing robust structural integrity over microscopic precision.
              </p>
            </div>
            {/* Image Right */}
            <div className="col-span-1 md:col-span-4 h-full order-last">
              <div
                className="w-full h-full min-h-[300px] bg-surface-variant dark:bg-inverse-surface relative overflow-hidden bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700 rounded-2xl"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA720sXJIpC_DB3IfQ6UFCG51zUrVnu7IWflgqDz6Ht_69OIf2w9TfqG-ufnghvQUB53lAM8Lq-IDk1acUu-15MCccXFf8R-pWg-38d-cGrGPTlpPsjgpZyPy7vYy38ImLWtSVGzXAs-A4QM8ZUC0asu0njiMrO0bUqssLP6RoYvD6lCvTzEySeRajBa8qHM8gcqd5-ku8avJYXE9rgaMqiRAzoOpG0AFtQMh_neQgD5b4-z2-QspXxCS8lArfUyh5DbvoN1Z9vK4s')" }}
              ></div>
            </div>
          </article>

          {/* Epoch 02: 2008 (ALTERNATED) */}
          <article className="grid grid-cols-1 md:grid-cols-10 gap-element-gap pb-section-gap relative glide-up items-start">
            <div className="absolute w-2 h-micro bg-outline-variant -left-[calc(24px+0.5px)] md:-left-[calc(120px+0.5px)] top-8"></div>
            <div className="col-span-1 md:col-span-3">
              <h2 className="font-display-xl text-display-xl text-on-surface dark:text-inverse-on-surface -mt-4">2008</h2>
              <span className="font-label-caps text-label-caps text-outline dark:text-outline-variant uppercase tracking-widest block mt-2">CNC Integration</span>
            </div>
            {/* Image Middle */}
            <div className="col-span-1 md:col-span-4 h-full md:order-none order-last">
              <div
                className="w-full h-full min-h-[300px] bg-surface-variant dark:bg-inverse-surface relative overflow-hidden bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700 rounded-2xl"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDCJczvrgizyLwawhJXYSHAY290v3oMUFL_N-YVQJ0OHbA1SpRC9G1demE8q38QuAiVQyQUqgqFcasPMPSDOC1YFyYW1ch5FQoqNrP84dnVUgTfawlv0LwJjtN7RUNq79fBzQ_vugkJtRvopuMcQ9tM39wuvGyyX8IHQqMLkLshumQIsUEpmnVt6FjB4gMXaRWZ_GXM5eKUA41ADt55BP0WsgK4_lmfrVPNuCp3RGb633lqs_fTnm-ffPKIiqTxPyqcgGwwxhMZoH0')" }}
              ></div>
            </div>
            {/* Text Right */}
            <div className="col-span-1 md:col-span-3 flex flex-col gap-element-gap">
              <div className="border-t-micro border-outline-variant pt-unit w-full">
                <h3 className="font-label-caps text-label-caps text-on-surface dark:text-inverse-on-surface uppercase mb-2">Technical Specification</h3>
                <ul className="font-technical-data text-technical-data text-on-surface-variant dark:text-primary-fixed-dim space-y-1">
                  <li>SYSTEM: 3-AXIS CNC</li>
                  <li>MATERIAL: AEROSPACE ALUM.</li>
                  <li>TOLERANCE: ±0.01MM</li>
                  <li>CERTIFICATION: ISO 9001</li>
                </ul>
              </div>
              <p className="font-body-airy text-body-airy text-on-surface dark:text-inverse-on-surface">
                The transition to automated numerical control. This era marked a paradigm shift in repeatability, allowing for complex geometries required by early-stage aerospace contractors.
              </p>
            </div>
          </article>

          {/* Epoch 03: 2024 */}
          <article className="grid grid-cols-1 md:grid-cols-10 gap-element-gap relative glide-up items-start">
            <div className="absolute w-2 h-micro bg-outline-variant -left-[calc(24px+0.5px)] md:-left-[calc(120px+0.5px)] top-8"></div>
            <div className="col-span-1 md:col-span-3">
              <h2 className="font-display-xl text-display-xl text-on-surface dark:text-inverse-on-surface -mt-4">2024</h2>
              <span className="font-label-caps text-label-caps text-outline dark:text-outline-variant uppercase tracking-widest block mt-2">The Monolith Era</span>
            </div>
            {/* Text Middle */}
            <div className="col-span-1 md:col-span-3 flex flex-col gap-element-gap">
              <div className="border-t-micro border-outline-variant pt-unit w-full">
                <h3 className="font-label-caps text-label-caps text-on-surface dark:text-inverse-on-surface uppercase mb-2">Technical Specification</h3>
                <ul className="font-technical-data text-technical-data text-on-surface-variant dark:text-primary-fixed-dim space-y-1">
                  <li>SYSTEM: 5-AXIS SIMULTANEOUS</li>
                  <li>ENVIRONMENT: CLIMATE ISO 7</li>
                  <li>TOLERANCE: ±0.005MM</li>
                  <li>PRIMARY SECTOR: MEDICAL/SPACE</li>
                </ul>
              </div>
              <p className="font-body-airy text-body-airy text-on-surface dark:text-inverse-on-surface">
                Current state of operations. Utilizing hyper-advanced 5-axis monolithic milling centers within temperature-controlled clean rooms to achieve sub-micron precision for critical surgical and satellite applications.
              </p>
            </div>
            {/* Image Right */}
            <div className="col-span-1 md:col-span-4 h-full order-last">
              <div
                className="w-full h-full min-h-[300px] bg-surface-variant dark:bg-inverse-surface relative overflow-hidden bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700 rounded-2xl"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAmzVvMJnvUubPz1ajVpQuEB5VcEKg6onGSVtcCZPG93MsAfzhOj7U-XtYt0pjNRV5UaC4gbwDktKKuxEKjnhnuqQxSpcIRTp8YhFSkZO1YbNhtCCrI5TO9_VG3iMACSeDAVjfWdo_xz-872gx48gP_gSOPgqUiZMq7SF2jrtGJ3_y5puEjMDEFnz_OnKj0Ba5Nf7Ai70NKjwe7QgRky-HfKs8FUkQko2UNXxYRhMV2d9lcGbVbvzai05q3u6OH3ybTI94fNHSK25k')" }}
              ></div>
            </div>
          </article>

        </div>
      </section>
    </div>
  );
}
