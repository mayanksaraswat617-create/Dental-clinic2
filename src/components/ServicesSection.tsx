'use client';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  tag: string;
  image: string;
  alt: string;
  span?: string;
}

const services: Service[] = [
{
  id: 1,
  title: 'General Dentistry',
  description: 'Comprehensive exams, professional cleanings, fillings, and preventive care to keep your teeth healthy for life.',
  icon:
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>,

  tag: 'Most Popular',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_195e71f2f-1772054081628.png",
  alt: 'Dentist performing a routine dental examination on a patient in a modern clinic',
  span: 'lg:col-span-2'
},
{
  id: 2,
  title: 'Cosmetic Dentistry',
  description: 'Teeth whitening, veneers, and smile makeovers that give you the confidence to show off your best smile.',
  icon:
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>,

  tag: 'Transformative',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_18566889d-1767874064164.png",
  alt: 'Close-up of a beautiful bright white smile after cosmetic dental treatment'
},
{
  id: 3,
  title: 'Orthodontics',
  description: 'Traditional braces and clear aligners to straighten teeth and correct bite issues at any age.',
  icon:
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>,

  tag: 'All Ages',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c0ac9c16-1773916733253.png",
  alt: 'Clear dental aligner tray on a white background for orthodontic treatment'
},
{
  id: 4,
  title: 'Dental Implants',
  description: 'Permanent tooth replacement solutions that look, feel, and function just like natural teeth.',
  icon:
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>,

  tag: 'Permanent',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1abcfda34-1774576994596.png",
  alt: 'Dental implant model showing titanium post and crown replacement tooth',
  span: 'lg:col-span-2'
}];


export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-navy-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <span className="text-teal-500 text-sm font-semibold tracking-widest uppercase mb-3 block">What We Offer</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-800 leading-tight">
              Dental care for<br />every need
            </h2>
          </div>
          <p className="text-navy-500 text-lg max-w-md lg:text-right">
            From your first check-up to a complete smile transformation, our team handles it all under one roof.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          {services.map((service) =>
          <div
            key={service.id}
            className={`group relative bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1 ${service.span || ''}`}>

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                src={service.image}
                alt={service.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />

                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-navy-900/10 to-transparent" />
                {/* Tag */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-teal-500 text-white text-xs font-semibold rounded-full">
                  {service.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-navy-50 text-navy-600 flex items-center justify-center group-hover:bg-teal-50 group-hover:text-teal-500 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-display text-lg font-bold text-navy-800">{service.title}</h3>
                </div>
                <p className="text-navy-500 text-sm leading-relaxed">{service.description}</p>
                <a
                href="#appointment"
                className="inline-flex items-center gap-1.5 mt-4 text-teal-500 text-sm font-semibold hover:gap-3 transition-all duration-200">

                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}