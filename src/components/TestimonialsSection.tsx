'use client';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatar: string;
  avatarAlt: string;
  highlight: string;
}

const testimonials: Testimonial[] = [
{
  name: 'Sarah Mitchell',
  role: 'Teacher, 34',
  quote: 'I hadn\'t been to a dentist in 6 years because of anxiety. Dr. Chen made me feel completely at ease. I actually look forward to my cleanings now — never thought I\'d say that.',
  rating: 5,
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1a2573a78-1772251097324.png",
  avatarAlt: 'Portrait of Sarah Mitchell, a smiling woman with brown hair',
  highlight: 'Overcame dental anxiety'
},
{
  name: 'Marcus Johnson',
  role: 'Software Engineer, 29',
  quote: 'Got Invisalign here and the results are incredible. The team tracked my progress every step of the way. My teeth are straighter than they\'ve ever been in 18 months.',
  rating: 5,
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1ae0f3431-1763296290027.png",
  avatarAlt: 'Portrait of Marcus Johnson, a young man with a confident smile',
  highlight: 'Invisalign success'
},
{
  name: 'Linda Park',
  role: 'Retired Nurse, 58',
  quote: 'I needed two implants and was nervous about the cost and procedure. SmileCare worked with my insurance and the implants feel completely natural. Worth every penny.',
  rating: 5,
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_14571365f-1772176999084.png",
  avatarAlt: 'Portrait of Linda Park, a mature woman with a warm smile',
  highlight: 'Dental implants'
}];


export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-navy-900 to-navy-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-navy-500/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-3 block">Patient Stories</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight">
            Real results, real people
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) =>
          <div
            key={t.name}
            className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-7 hover:bg-white/10 transition-all duration-300 ${index === 1 ? 'lg:mt-8' : ''}`}>

              {/* Rating */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) =>
              <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
              )}
              </div>

              {/* Highlight tag */}
              <span className="inline-block px-3 py-1 bg-teal-500/20 text-teal-300 text-xs font-semibold rounded-full mb-4">
                {t.highlight}
              </span>

              {/* Quote */}
              <p className="text-navy-200 text-base leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <img
                src={t.avatar}
                alt={t.avatarAlt}
                className="w-11 h-11 rounded-full object-cover ring-2 ring-teal-400/30" />

                <div>
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-navy-400 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-navy-300 mb-5">Join thousands of patients who trust SmileCare</p>
          <a
            href="#appointment"
            className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-teal-500/30 hover:-translate-y-0.5">

            Start Your Journey
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>);

}