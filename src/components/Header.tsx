'use client';

import { useState } from 'react';


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#appointment' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-nav">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-navy-600 to-teal-500 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.5 2 6 4.5 6 7c0 1.5.5 2.8 1.3 3.8L9 20c.3 1.2 1.4 2 2.6 2h.8c1.2 0 2.3-.8 2.6-2l1.7-9.2C17.5 9.8 18 8.5 18 7c0-2.5-2.5-5-6-5z" fill="white"/>
              </svg>
            </div>
            <span className="font-display font-800 text-xl text-navy-700">SmileCare</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks?.map((link) => (
              <a
                key={link?.label}
                href={link?.href}
                className="text-sm font-medium text-navy-600 hover:text-teal-500 transition-colors duration-200"
              >
                {link?.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+15551234567"
              className="text-sm font-medium text-navy-600 hover:text-teal-500 transition-colors"
            >
              (555) 123-4567
            </a>
            <a
              href="#appointment"
              className="px-5 py-2.5 bg-navy-600 text-white text-sm font-semibold rounded-xl hover:bg-navy-700 transition-all duration-200 shadow-sm hover:shadow-card"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-navy-600 hover:bg-navy-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-navy-100 py-4 space-y-3">
            {navLinks?.map((link) => (
              <a
                key={link?.label}
                href={link?.href}
                className="block px-2 py-2 text-navy-600 font-medium hover:text-teal-500 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link?.label}
              </a>
            ))}
            <a
              href="#appointment"
              className="block mt-3 px-5 py-2.5 bg-navy-600 text-white text-sm font-semibold rounded-xl text-center"
              onClick={() => setMenuOpen(false)}
            >
              Book Appointment
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
