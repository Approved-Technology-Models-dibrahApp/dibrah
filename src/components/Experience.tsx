import lifestyle from '../assets/lifestyle-retail.jpg'
import { useApp } from '../context'
import { Icon } from './Icon'

export function Experience() {
  const { t } = useApp()

  return (
    <section className="page-shell py-10" id="experience">
      <div className="relative w-full rounded-3xl overflow-hidden border-2 border-salmon-400/40 shadow-[0_16px_40px_rgba(242,116,104,0.15)] group">
        <img
          alt={t.experience.alt}
          className="w-full h-[380px] sm:h-[460px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
          src={lifestyle}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-pure/95 via-charcoal-pure/50 to-transparent flex flex-col justify-end p-8 sm:p-12">
          <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full bg-salmon-500 text-charcoal-pure font-bold text-xs shadow-lg uppercase tracking-wider mb-3">
            <Icon name="verified" className="text-[16px] font-bold" />
            <span>{t.experience.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-extrabold tracking-tight max-w-2xl leading-tight font-headline-lg">
            {t.experience.title}
          </h2>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mt-2 leading-relaxed">
            {t.experience.body}
          </p>
          <div className="flex flex-wrap items-center gap-6 pt-5 mt-2 border-t border-white/20">
            {[t.experience.f1, t.experience.f2, t.experience.f3].map((item) => (
              <div key={item} className="flex items-center gap-2 text-white">
                <span className="w-2.5 h-2.5 rounded-full bg-salmon-400" />
                <span className="text-xs sm:text-sm font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
