import { motion } from "framer-motion";

export default function Briefing() {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex flex-col items-center bg-background dark:bg-inverse-surface px-6 md:px-margin-page py-16 md:py-24 transition-colors duration-1000">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1.0] }}
        className="w-full max-w-4xl mx-auto flex flex-col gap-16"
      >
        <div className="flex flex-col gap-4 border-b border-outline-variant pb-8 text-center items-center">
          <span className="font-technical-data text-label-caps text-tertiary tracking-[0.2em] uppercase">Global Logistics & Supply</span>
          <h1 className="font-display-xl text-4xl md:text-5xl text-on-surface dark:text-inverse-on-surface uppercase leading-none tracking-tighter">Technical Briefing</h1>
          <p className="font-body-airy text-on-surface-variant dark:text-primary-fixed-dim mt-4 max-w-xl text-center">
            Submit your specifications below. Our engineering team will review the precise tolerances and requirements, and respond within one business cycle.
          </p>
        </div>

        <div className="w-full flex flex-col gap-8 items-center">
          <form action="https://api.web3forms.com/submit" method="POST" className="w-full flex flex-col gap-8">
            <input type="hidden" name="access_key" value="14b142b7-2f73-4516-b3b2-a6153d63e2f4" />
            <input type="hidden" name="subject" value="New Technical Briefing Submission - Saikrupa Portal" />
            <input type="hidden" name="from_name" value="Saikrupa Portal" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-xs text-on-surface dark:text-inverse-on-surface uppercase tracking-widest">Full Name *</label>
                <input type="text" name="name" required className="w-full bg-transparent border-b border-outline-variant py-4 font-body-airy text-sm text-on-surface dark:text-inverse-on-surface focus:outline-none focus:border-tertiary transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-xs text-on-surface dark:text-inverse-on-surface uppercase tracking-widest">Email *</label>
                <input type="email" name="email" required className="w-full bg-transparent border-b border-outline-variant py-4 font-body-airy text-sm text-on-surface dark:text-inverse-on-surface focus:outline-none focus:border-tertiary transition-colors" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-xs text-on-surface dark:text-inverse-on-surface uppercase tracking-widest">Company Name *</label>
                <input type="text" name="company" required className="w-full bg-transparent border-b border-outline-variant py-4 font-body-airy text-sm text-on-surface dark:text-inverse-on-surface focus:outline-none focus:border-tertiary transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-xs text-on-surface dark:text-inverse-on-surface uppercase tracking-widest">Phone Number</label>
                <input type="tel" name="phone" className="w-full bg-transparent border-b border-outline-variant py-4 font-body-airy text-sm text-on-surface dark:text-inverse-on-surface focus:outline-none focus:border-tertiary transition-colors" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-xs text-on-surface dark:text-inverse-on-surface uppercase tracking-widest">Product Type *</label>
                <input type="text" name="product_type" placeholder="e.g., V-Belt Pulley" required className="w-full bg-transparent border-b border-outline-variant py-4 font-body-airy text-sm text-on-surface dark:text-inverse-on-surface placeholder:text-outline-variant/50 focus:outline-none focus:border-tertiary transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-xs text-on-surface dark:text-inverse-on-surface uppercase tracking-widest">Estimated Quantity</label>
                <input type="text" name="quantity" placeholder="e.g., 100 pieces" className="w-full bg-transparent border-b border-outline-variant py-4 font-body-airy text-sm text-on-surface dark:text-inverse-on-surface placeholder:text-outline-variant/50 focus:outline-none focus:border-tertiary transition-colors" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-xs text-on-surface dark:text-inverse-on-surface uppercase tracking-widest">Technical Specifications</label>
              <textarea name="specifications" placeholder="Diameter, bore size, material preferences, etc." className="w-full bg-transparent border-b border-outline-variant py-4 font-body-airy text-sm text-on-surface dark:text-inverse-on-surface placeholder:text-outline-variant/50 focus:outline-none focus:border-tertiary transition-colors h-24 resize-none"></textarea>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-xs text-on-surface dark:text-inverse-on-surface uppercase tracking-widest">Additional Message</label>
              <textarea name="message" placeholder="Additional requirements or questions..." className="w-full bg-transparent border-b border-outline-variant py-4 font-body-airy text-sm text-on-surface dark:text-inverse-on-surface placeholder:text-outline-variant/50 focus:outline-none focus:border-tertiary transition-colors h-24 resize-none"></textarea>
            </div>

            <button type="submit" className="group relative self-center font-label-caps text-label-caps text-inverse-on-surface dark:text-on-surface bg-inverse-surface dark:bg-surface-container-lowest px-16 py-6 border border-outline-variant hover:border-tertiary overflow-hidden uppercase tracking-[0.2em] transition-colors duration-500 mt-8 w-full md:w-auto">
              <span className="relative z-10 group-hover:text-[#0A0A0A] transition-colors duration-500">Initiate Protocol</span>
              <div className="absolute inset-0 bg-tertiary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></div>
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
