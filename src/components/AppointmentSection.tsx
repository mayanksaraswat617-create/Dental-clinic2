'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  message: string;
}

const services = [
  'General Check-up & Cleaning',
  'Teeth Whitening',
  'Dental Implants',
  'Orthodontics / Invisalign',
  'Cosmetic Dentistry',
  'Emergency Dental Care',
  'Other',
];

export default function AppointmentSection() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="appointment" className="py-24 bg-navy-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Info */}
          <div>
            <span className="text-teal-500 text-sm font-semibold tracking-widest uppercase mb-3 block">Get In Touch</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-800 leading-tight mb-6">
              Book your<br />appointment
            </h2>
            <p className="text-navy-500 text-lg mb-10">
              Ready for a healthier smile? Fill out the form and our team will confirm your appointment within 2 hours.
            </p>

            {/* Contact Info */}
            <div className="space-y-5">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: 'Phone',
                  value: '(555) 123-4567',
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: 'Email',
                  value: 'hello@smilecare.com',
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: 'Address',
                  value: '123 Dental Ave, Suite 200, San Francisco, CA 94102',
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  label: 'Hours',
                  value: 'Mon–Fri 8am–6pm · Sat 9am–3pm',
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-500 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-navy-400 font-medium mb-0.5">{item.label}</div>
                    <div className="text-navy-700 font-medium text-sm">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-white rounded-3xl shadow-card p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-navy-800 mb-3">Request Received!</h3>
                <p className="text-navy-500">We&apos;ll confirm your appointment within 2 hours. Check your email for details.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-teal-500 text-sm font-semibold hover:text-teal-600"
                >
                  Book another appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-display text-xl font-bold text-navy-800 mb-6">Request an Appointment</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-navy-600 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 rounded-xl border border-navy-200 text-navy-700 text-sm placeholder-navy-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-navy-600 mb-1.5">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-navy-200 text-navy-700 text-sm placeholder-navy-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-navy-600 mb-1.5">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-navy-200 text-navy-700 text-sm placeholder-navy-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-navy-600 mb-1.5">Service Needed *</label>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-navy-200 text-navy-700 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition bg-white"
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-navy-600 mb-1.5">Preferred Date</label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-navy-200 text-navy-700 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-navy-600 mb-1.5">Additional Notes</label>
                  <textarea
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Any concerns or special requests..."
                    className="w-full px-4 py-3 rounded-xl border border-navy-200 text-navy-700 text-sm placeholder-navy-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-navy-700 hover:bg-navy-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-card"
                >
                  Request Appointment
                </button>

                <p className="text-center text-xs text-navy-400">
                  We&apos;ll confirm within 2 hours · No payment required
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
