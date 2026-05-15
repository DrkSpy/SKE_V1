import { Outlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CustomCursor from './components/Cursor';

export default function Layout() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen relative md:cursor-none">
      <CustomCursor />
      {/* Background noise filter for texture */}
      <div
        className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] mix-blend-multiply dark:mix-blend-overlay"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')"
        }}
      ></div>

      <header className="bg-background dark:bg-inverse-surface border-b border-outline-variant dark:border-outline sticky top-0 z-50 w-full transition-colors duration-1000">
        <div className="flex justify-between items-center w-full px-4 md:px-margin-page py-unit h-20 max-w-full mx-auto">
          <Link to="/" className="flex items-center opacity-90 hover:opacity-100 transition-opacity">
            <img src="/screen.png" alt="Saikrupa Engineering Works" className="h-8 md:h-10 w-auto mix-blend-multiply dark:mix-blend-screen object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-element-gap items-center h-full">
            <Link to="/products" className="group relative font-label-caps text-label-caps text-on-surface-variant dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-tertiary-fixed-dim transition-colors duration-500 py-1">
              Products
              <span aria-hidden="true" className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary dark:bg-tertiary-fixed-dim transition-all duration-500 ease-out group-hover:w-full"></span>
            </Link>
            <Link to="/archive" className="group relative font-label-caps text-label-caps text-on-surface-variant dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-tertiary-fixed-dim transition-colors duration-500 py-1">
              The History
              <span aria-hidden="true" className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary dark:bg-tertiary-fixed-dim transition-all duration-500 ease-out group-hover:w-full"></span>
            </Link>
            <Link to="/laboratory" className="group relative font-label-caps text-label-caps text-on-surface-variant dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-tertiary-fixed-dim transition-colors duration-500 py-1">
              The Laboratory
              <span aria-hidden="true" className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary dark:bg-tertiary-fixed-dim transition-all duration-500 ease-out group-hover:w-full"></span>
            </Link>
            <Link to="/briefing" className="group relative font-label-caps text-label-caps text-on-surface-variant dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-tertiary-fixed-dim transition-colors duration-500 py-1">
              Technical Briefing
              <span aria-hidden="true" className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary dark:bg-tertiary-fixed-dim transition-all duration-500 ease-out group-hover:w-full"></span>
            </Link>
          </nav>

          <div className="flex items-center gap-4 md:gap-6">
            <Link to="/briefing" className="group relative hidden md:flex font-label-caps text-label-caps text-primary dark:text-primary-fixed-dim hover:text-tertiary transition-colors duration-500 items-center gap-2 py-1">
              Technical Consultation
              <span aria-hidden="true" className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-500 ease-out group-hover:w-full"></span>
            </Link>
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle Dark Mode"
              className="text-on-surface-variant hover:text-primary transition-colors duration-500 flex items-center justify-center w-8 h-8"
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="md:w-5 md:h-5">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="md:w-5 md:h-5">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-on-surface-variant hover:text-primary transition-colors duration-500 ml-2 flex items-center justify-center w-8 h-8"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-background dark:bg-inverse-surface border-b border-outline-variant overflow-hidden"
            >
              <div className="flex flex-col px-6 py-4 gap-4">
                <Link onClick={() => setMobileMenuOpen(false)} to="/products" className="font-label-caps text-sm text-on-surface">Products</Link>
                <Link onClick={() => setMobileMenuOpen(false)} to="/archive" className="font-label-caps text-sm text-on-surface">The History</Link>
                <Link onClick={() => setMobileMenuOpen(false)} to="/laboratory" className="font-label-caps text-sm text-on-surface">The Laboratory</Link>
                <Link onClick={() => setMobileMenuOpen(false)} to="/briefing" className="font-label-caps text-sm text-primary">Technical Briefing</Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow flex flex-col relative w-full overflow-hidden">
        <div className="w-full h-full flex flex-col flex-grow">
          <Outlet />
        </div>
      </main>

      <footer className="bg-background dark:bg-inverse-surface border-t border-outline-variant dark:border-outline w-full z-40 relative transition-colors duration-1000 mt-auto">

        {/* Contact Information Section */}
        <div className="w-full px-6 md:px-margin-page py-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-outline-variant/30">
          <div className="flex flex-col gap-4">
            <h3 className="font-label-caps text-xs text-tertiary uppercase tracking-widest">Manufacturing Facility</h3>
            <p className="font-body-airy text-sm text-on-surface-variant dark:text-primary-fixed-dim leading-relaxed">
              Sai Krupa Engineering Works<br />
              Rd Number 6, Udhana GIDC,<br />
              Udhna Udhyog Nagar, Udhana,<br />
              Surat, Gujarat 394210
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-label-caps text-xs text-tertiary uppercase tracking-widest">Direct Communication</h3>
            <div className="flex flex-col gap-2 font-body-airy text-xs md:text-sm text-on-surface-variant dark:text-primary-fixed-dim">
              <a href="mailto:info@saikrupaengineering.in" className="hover:text-tertiary transition-colors duration-300 w-fit">info@saikrupaengineering.in</a>
              <a href="mailto:kalpesh.joshi@saikrupaengineering.in" className="hover:text-tertiary transition-colors duration-300 w-fit">kalpesh.joshi@saikrupaengineering.in</a>
              <a href="mailto:ansh@saikrupaengineering.in" className="hover:text-tertiary transition-colors duration-300 w-fit">ansh@saikrupaengineering.in</a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-label-caps text-xs text-tertiary uppercase tracking-widest">Operations</h3>
            <p className="font-body-airy text-sm text-on-surface-variant dark:text-primary-fixed-dim leading-relaxed">
              Thursday - Tuesday: 9:00 AM - 7:00 PM<br />
              Wednesday: <span className="text-error opacity-80">Closed</span><br />
              <span className="opacity-70 mt-1 block italic">Sunday working hours applicable</span>
            </p>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-margin-page py-8 gap-6 max-w-7xl mx-auto">
          <div className="font-display-xl text-label-caps text-on-surface dark:text-inverse-on-surface opacity-80 text-center md:text-left">
            © 2026 SAIKRUPA ENGINEERING WORKS. PRECISION TOLERANCE ±0.005MM.
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end gap-6 items-center">
            <a href="#" className="font-technical-data font-label-caps text-label-caps text-on-surface-variant dark:text-secondary-fixed-dim hover:underline decoration-border-width transition-all duration-500 ease-in-out">Privacy Protocol</a>
            <a href="#" className="font-technical-data font-label-caps text-label-caps text-on-surface-variant dark:text-secondary-fixed-dim hover:underline decoration-border-width transition-all duration-500 ease-in-out">Technical Standards</a>
            <a href="#" className="font-technical-data font-label-caps text-label-caps text-on-surface-variant dark:text-secondary-fixed-dim hover:underline decoration-border-width transition-all duration-500 ease-in-out">Logistics & Shipping</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
