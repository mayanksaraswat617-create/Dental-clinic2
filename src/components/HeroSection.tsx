'use client';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-navy-900 via-navy-700 to-teal-700 pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-teal-500/20 blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-navy-400/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-teal-600/10 blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />

      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/20 border border-teal-400/30 mb-8">
              <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-teal-300 text-sm font-medium">Accepting New Patients</span>
            </div>

            <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-6">
              Your Smile,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-500">
                Our Passion
              </span>
            </h1>

            <p className="text-navy-200 text-lg lg:text-xl leading-relaxed mb-10 max-w-lg">
              Expert dental care tailored to you. From routine cleanings to complete smile transformations — we make every visit comfortable and every result exceptional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <a
                href="#appointment"
                className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-2xl transition-all duration-300 text-center shadow-lg hover:shadow-teal-500/30 hover:shadow-xl hover:-translate-y-0.5">

                Book Free Consultation
              </a>
              <a
                href="#services"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl border border-white/20 transition-all duration-300 text-center backdrop-blur-sm">

                Explore Services
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
              { value: '15+', label: 'Years Experience' },
              { value: '8,500+', label: 'Happy Patients' },
              { value: '4.9★', label: 'Average Rating' }]?.
              map((stat) =>
              <div key={stat?.label} className="text-center">
                  <div className="font-display text-2xl lg:text-3xl font-bold text-white mb-1">{stat?.value}</div>
                  <div className="text-navy-300 text-xs lg:text-sm">{stat?.label}</div>
                </div>
              )}
            </div>
          </div>

          {/* Right — Visual Card Stack */}
          <div className="relative hidden lg:block">
            {/* Main image card */}
            <div className="relative rounded-3xl overflow-hidden shadow-modal">
              <img
                src="https://img.rocket.new/generatedImages/rocket_gen_img_17e9aaf08-1772103453088.png"
                alt="Friendly dentist in modern dental clinic examining a patient with a warm smile"
                className="w-full h-[480px] object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
            </div>

            {/* Floating badge — top left */}
            <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-card p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
                <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-navy-400 font-medium">Certified</div>
                <div className="text-sm font-bold text-navy-700">ADA Accredited</div>
              </div>
            </div>

            {/* Floating badge — bottom right */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-card p-4">
              <div className="flex items-center gap-2 mb-2">
                {[1, 2, 3, 4, 5]?.map((i) =>
                <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                )}
              </div>
              <div className="text-sm font-bold text-navy-700">500+ 5-Star Reviews</div>
              <div className="text-xs text-navy-400 mt-0.5">Google & Yelp</div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}