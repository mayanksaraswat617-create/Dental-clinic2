'use client';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-navy-900 text-navy-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-navy-500 to-teal-500 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.5 2 6 4.5 6 7c0 1.5.5 2.8 1.3 3.8L9 20c.3 1.2 1.4 2 2.6 2h.8c1.2 0 2.3-.8 2.6-2l1.7-9.2C17.5 9.8 18 8.5 18 7c0-2.5-2.5-5-6-5z" fill="white"/>
                </svg>
              </div>
              <span className="font-display font-bold text-xl text-white">SmileCare</span>
            </div>
            <p className="text-sm leading-relaxed text-navy-400 max-w-xs">
              Comprehensive dental care with a gentle touch. Serving San Francisco families since 2009.
            </p>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="text-white font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-2.5">
              {['General Dentistry', 'Cosmetic Dentistry', 'Orthodontics', 'Dental Implants', 'Emergency Care']?.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-navy-400 hover:text-teal-400 transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'About Us', href: '#why-us' },
                { label: 'Reviews', href: '#testimonials' },
                { label: 'Book Appointment', href: '#appointment' },
                { label: 'Contact', href: '#appointment' },
              ]?.map((link) => (
                <li key={link?.label}>
                  <a href={link?.href} className="text-sm text-navy-400 hover:text-teal-400 transition-colors">{link?.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-navy-400">
              <p>123 Dental Ave, Suite 200<br />San Francisco, CA 94102</p>
              <p>
                <a href="tel:+15551234567" className="hover:text-teal-400 transition-colors">(555) 123-4567</a>
              </p>
              <p>
                <a href="mailto:hello@smilecare.com" className="hover:text-teal-400 transition-colors">hello@smilecare.com</a>
              </p>
              <p>Mon–Fri: 8am–6pm<br />Saturday: 9am–3pm</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-navy-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-navy-500">© {currentYear} SmileCare Dental Clinic. All rights reserved.</p>
          <div className="flex gap-5 text-xs text-navy-500">
            <a href="#" className="hover:text-navy-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-navy-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-navy-300 transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
