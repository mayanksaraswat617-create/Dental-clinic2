'use client';

const reasons = [
{
  number: '01',
  title: 'Pain-Free Dentistry',
  description: 'We use the latest numbing techniques and sedation options so every procedure is as comfortable as possible.',
  color: 'bg-teal-50 border-teal-100',
  numColor: 'text-teal-400'
},
{
  number: '02',
  title: 'Same-Day Appointments',
  description: 'Dental emergencies don\'t wait. We keep slots open daily for urgent care and same-day crowns.',
  color: 'bg-navy-50 border-navy-100',
  numColor: 'text-navy-300'
},
{
  number: '03',
  title: 'Advanced Technology',
  description: 'Digital X-rays, 3D imaging, and laser dentistry for precise diagnoses and faster healing.',
  color: 'bg-teal-50 border-teal-100',
  numColor: 'text-teal-400'
},
{
  number: '04',
  title: 'Transparent Pricing',
  description: 'No hidden fees. We provide detailed treatment plans with costs upfront and work with most insurance plans.',
  color: 'bg-navy-50 border-navy-100',
  numColor: 'text-navy-300'
}];


export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden h-64">
                  <img
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_1267d0e3a-1772134114388.png"
                    alt="Modern dental treatment room with advanced equipment and comfortable patient chair"
                    className="w-full h-full object-cover" />

                </div>
                <div className="rounded-3xl overflow-hidden h-40">
                  <img
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_1783221bd-1772103277912.png"
                    alt="Dental hygienist using digital X-ray technology to examine patient teeth"
                    className="w-full h-full object-cover" />

                </div>
              </div>
              <div className="space-y-4 mt-10">
                <div className="rounded-3xl overflow-hidden h-40">
                  <img
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_192f25304-1767786255269.png"
                    alt="Smiling female dentist in white coat holding dental tools in a bright clinic"
                    className="w-full h-full object-cover" />

                </div>
                <div className="rounded-3xl overflow-hidden h-64">
                  <img
                    src="https://images.unsplash.com/photo-1653508311016-f8ea769c9cb4"
                    alt="Happy patient giving thumbs up after successful dental treatment"
                    className="w-full h-full object-cover" />

                </div>
              </div>
            </div>

            {/* Floating stat */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-navy-700 text-white rounded-2xl px-6 py-4 shadow-modal text-center whitespace-nowrap">
              <div className="font-display text-3xl font-bold text-teal-300">98%</div>
              <div className="text-navy-200 text-sm mt-0.5">Patient Satisfaction Rate</div>
            </div>
          </div>

          {/* Right — Reasons */}
          <div>
            <span className="text-teal-500 text-sm font-semibold tracking-widest uppercase mb-3 block">Why SmileCare</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-800 leading-tight mb-4">
              Dentistry done<br />differently
            </h2>
            <p className="text-navy-500 text-lg mb-10">
              We built SmileCare around one idea: dental visits should never feel like something to dread.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons?.map((reason) =>
              <div
                key={reason?.number}
                className={`rounded-2xl border p-5 ${reason?.color} hover:shadow-card transition-shadow duration-300`}>

                  <div className={`font-display text-3xl font-bold mb-3 ${reason?.numColor}`}>{reason?.number}</div>
                  <h3 className="font-display text-base font-bold text-navy-800 mb-2">{reason?.title}</h3>
                  <p className="text-navy-500 text-sm leading-relaxed">{reason?.description}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}