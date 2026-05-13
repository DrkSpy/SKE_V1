import { motion } from "framer-motion";

export default function Briefing() {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex flex-col items-center bg-background dark:bg-inverse-surface px-6 md:px-margin-page py-16 md:py-24 transition-colors duration-1000">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1.0] }}
        className="w-full max-w-[1400px] mx-auto flex flex-col gap-12"
      >
        <div className="flex flex-col gap-4 border-b border-outline-variant pb-8">
          <span className="font-technical-data text-label-caps text-tertiary tracking-[0.2em] uppercase">Connect With Us</span>
          <h1 className="font-display-xl text-4xl md:text-5xl text-on-surface dark:text-inverse-on-surface uppercase leading-none tracking-tighter">Technical Briefing & Contact</h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 md:gap-20">
          
          {/* Left: Form Area (3 columns) */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            <h2 className="font-display-xl text-3xl text-on-surface dark:text-inverse-on-surface">Quote Request Form</h2>
            
            <form className="w-full flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-xs text-on-surface dark:text-inverse-on-surface uppercase tracking-widest">Full Name *</label>
                  <input type="text" className="w-full bg-surface-container-low dark:bg-[#111] border border-outline-variant p-4 font-body-airy text-sm text-on-surface dark:text-inverse-on-surface focus:outline-none focus:border-tertiary transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-xs text-on-surface dark:text-inverse-on-surface uppercase tracking-widest">Email *</label>
                  <input type="email" className="w-full bg-surface-container-low dark:bg-[#111] border border-outline-variant p-4 font-body-airy text-sm text-on-surface dark:text-inverse-on-surface focus:outline-none focus:border-tertiary transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-xs text-on-surface dark:text-inverse-on-surface uppercase tracking-widest">Company Name *</label>
                  <input type="text" className="w-full bg-surface-container-low dark:bg-[#111] border border-outline-variant p-4 font-body-airy text-sm text-on-surface dark:text-inverse-on-surface focus:outline-none focus:border-tertiary transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-xs text-on-surface dark:text-inverse-on-surface uppercase tracking-widest">Phone Number</label>
                  <input type="tel" className="w-full bg-surface-container-low dark:bg-[#111] border border-outline-variant p-4 font-body-airy text-sm text-on-surface dark:text-inverse-on-surface focus:outline-none focus:border-tertiary transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-xs text-on-surface dark:text-inverse-on-surface uppercase tracking-widest">Product Type *</label>
                  <input type="text" placeholder="e.g., V-Belt Pulley" className="w-full bg-surface-container-low dark:bg-[#111] border border-outline-variant p-4 font-body-airy text-sm text-on-surface dark:text-inverse-on-surface placeholder:text-outline focus:outline-none focus:border-tertiary transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-xs text-on-surface dark:text-inverse-on-surface uppercase tracking-widest">Estimated Quantity</label>
                  <input type="text" placeholder="e.g., 100 pieces" className="w-full bg-surface-container-low dark:bg-[#111] border border-outline-variant p-4 font-body-airy text-sm text-on-surface dark:text-inverse-on-surface placeholder:text-outline focus:outline-none focus:border-tertiary transition-colors" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-xs text-on-surface dark:text-inverse-on-surface uppercase tracking-widest">Technical Specifications</label>
                <textarea placeholder="Diameter, bore size, material preferences, etc." className="w-full bg-surface-container-low dark:bg-[#111] border border-outline-variant p-4 font-body-airy text-sm text-on-surface dark:text-inverse-on-surface placeholder:text-outline focus:outline-none focus:border-tertiary transition-colors h-32 resize-none"></textarea>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-xs text-on-surface dark:text-inverse-on-surface uppercase tracking-widest">Additional Message</label>
                <textarea placeholder="Additional requirements or questions..." className="w-full bg-surface-container-low dark:bg-[#111] border border-outline-variant p-4 font-body-airy text-sm text-on-surface dark:text-inverse-on-surface placeholder:text-outline focus:outline-none focus:border-tertiary transition-colors h-24 resize-none"></textarea>
              </div>

              <button type="button" className="group relative self-start font-label-caps text-label-caps text-inverse-on-surface dark:text-on-surface bg-inverse-surface dark:bg-surface-container-lowest px-12 py-5 border border-outline-variant hover:border-tertiary overflow-hidden uppercase tracking-[0.2em] transition-colors duration-500 mt-4">
                <span className="relative z-10 group-hover:text-[#0A0A0A] transition-colors duration-500">Submit Request</span>
                <div className="absolute inset-0 bg-tertiary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></div>
              </button>
            </form>
          </div>

          {/* Right: Contact Information (2 columns) */}
          <div className="lg:col-span-2 flex flex-col h-full">
            <div className="bg-surface-container-lowest dark:bg-surface-dim border border-outline-variant p-8 md:p-12 flex flex-col gap-10 sticky top-32">
              <h2 className="font-display-xl text-3xl text-on-surface dark:text-inverse-on-surface">Contact Information</h2>
              
              <div className="flex flex-col gap-4">
                <h3 className="font-label-caps text-xs text-tertiary uppercase tracking-widest border-b border-outline-variant/30 pb-2">Address</h3>
                <p className="font-body-airy text-base text-on-surface-variant dark:text-primary-fixed-dim leading-relaxed">
                  Sai Krupa Engineering Works<br/>
                  Rd Number 6, Udhana GIDC,<br/>
                  Udhna Udhyog Nagar, Udhana,<br/>
                  Surat, Gujarat 394210
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="font-label-caps text-xs text-tertiary uppercase tracking-widest border-b border-outline-variant/30 pb-2">Phone</h3>
                <p className="font-body-airy text-base text-on-surface-variant dark:text-primary-fixed-dim hover:text-tertiary transition-colors">
                  <a href="tel:9825918588">9825918588</a>
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="font-label-caps text-xs text-tertiary uppercase tracking-widest border-b border-outline-variant/30 pb-2">Email</h3>
                <p className="font-body-airy text-base text-on-surface-variant dark:text-primary-fixed-dim hover:text-tertiary transition-colors">
                  <a href="mailto:saikrupa.ew@gmail.com">saikrupa.ew@gmail.com</a>
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="font-label-caps text-xs text-tertiary uppercase tracking-widest border-b border-outline-variant/30 pb-2">Business Hours</h3>
                <ul className="font-body-airy text-base text-on-surface-variant dark:text-primary-fixed-dim leading-relaxed space-y-2">
                  <li>Thursday - Tuesday: 9:00 AM - 7:00 PM</li>
                  <li>Wednesday: <span className="text-error opacity-80">Closed</span></li>
                  <li className="text-sm mt-2">Note: Sunday working</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
