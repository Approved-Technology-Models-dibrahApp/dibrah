import { useApp } from '../context'
import { Icon } from './Icon'
import { Reveal } from './Reveal'

function AppleMark() {
  return (
    <svg aria-hidden="true" className="w-[18px] h-[18px] shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

function PlayMark() {
  return (
    <svg aria-hidden="true" className="w-[18px] h-[18px] shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924z" />
      <path d="M13.544 10.989 16.802 7.751 3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973z" />
      <path d="M22.018 13.298 18.099 15.516 14.584 12.023 18.127 8.502 22.018 10.704a1.49 1.49 0 0 1 0 2.594z" />
      <path d="M13.544 13.056 2.544 23.989c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z" />
    </svg>
  )
}

function StoreSoon() {
  const { t } = useApp()

  return (
    <div className="pt-8 flex flex-col gap-3">
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400 text-center">
        {t.dual.comingSoon}
      </p>
      <div className="grid grid-cols-2 gap-3">
        <div className="inline-flex items-center justify-center gap-2 py-3 px-3 rounded-2xl text-charcoal-pure font-bold bg-gradient-to-r from-salmon-400 to-salmon-500 shadow-[0_6px_20px_rgba(242,116,104,0.32)] cursor-default select-none">
          <AppleMark />
          <span className="font-label-md text-xs sm:text-sm font-bold leading-none">{t.dual.appStore}</span>
        </div>
        <div className="inline-flex items-center justify-center gap-2 py-3 px-3 rounded-2xl text-charcoal-pure font-bold bg-gradient-to-r from-salmon-400 to-salmon-500 shadow-[0_6px_20px_rgba(242,116,104,0.32)] cursor-default select-none">
          <PlayMark />
          <span className="font-label-md text-xs sm:text-sm font-bold leading-none">{t.dual.googlePlay}</span>
        </div>
      </div>
    </div>
  )
}

export function DualApps() {
  const { t } = useApp()

  return (
    <section className="page-shell py-20" id="mobile-apps">
      <Reveal>
      <div className="flex flex-col gap-3 text-center max-w-3xl mx-auto mb-14">
        <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-salmon-400/20 to-salmon-500/20 border border-salmon-400/40 font-label-sm text-xs text-salmon-700 dark:text-salmon-300 font-bold uppercase tracking-wider mx-auto">
          {t.dual.kicker}
        </span>
        <h2 className="text-3xl sm:text-4xl text-charcoal-pure dark:text-white font-extrabold font-headline-lg">
          {t.dual.title}
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-base">{t.dual.subtitle}</p>
      </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Reveal className="h-full" delay={80}>
        <div
          className="h-full flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-white dark:bg-dark-card border-2 border-salmon-400/35 dark:border-salmon-400/30 shadow-[0_8px_30px_rgba(242,116,104,0.1)] hover:shadow-[0_12px_40px_rgba(242,116,104,0.2)] transition-all"
          id="for-businesses"
        >
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-salmon-400 to-salmon-500 flex items-center justify-center text-charcoal-pure shadow-md shadow-salmon-500/30">
                <Icon name="store" className="text-[26px]" />
              </div>
              <span className="px-3 py-1 rounded-full bg-salmon-100/70 dark:bg-salmon-950/60 border border-salmon-400/40 text-xs font-bold text-salmon-800 dark:text-salmon-300 text-end">
                {t.dual.bizBadge}
              </span>
            </div>
            <div>
              <h3 className="text-2xl text-charcoal-pure dark:text-white font-bold font-headline-lg">
                {t.dual.bizTitle}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
                {t.dual.bizQuote}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-2">
              {t.dual.bizFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="p-3.5 rounded-2xl bg-slate-50 dark:bg-dark-card-soft border border-slate-200/80 dark:border-dark-border flex flex-col gap-1"
                >
                  <Icon name={feature.icon} className="text-salmon-500 text-[22px]" />
                  <span className="text-xs font-bold text-charcoal-pure dark:text-white">
                    {feature.title}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">{feature.body}</span>
                </div>
              ))}
            </div>
          </div>
          <StoreSoon />
        </div>
        </Reveal>

        <Reveal className="h-full" delay={180}>
        <div
          className="h-full flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-white dark:bg-dark-card border-2 border-slate-200/80 dark:border-dark-border shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-salmon-400/40 transition-all"
          id="for-shoppers"
        >
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between gap-3">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-dark-card-soft flex items-center justify-center text-salmon-500">
                <Icon name="shopping_bag" className="text-[26px]" />
              </div>
              <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-dark-card-soft text-xs font-bold text-slate-700 dark:text-slate-300 text-end">
                {t.dual.shopBadge}
              </span>
            </div>
            <div>
              <h3 className="text-2xl text-charcoal-pure dark:text-white font-bold font-headline-lg">
                {t.dual.shopTitle}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
                {t.dual.shopQuote}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-2">
              {t.dual.shopFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="p-3.5 rounded-2xl bg-slate-50 dark:bg-dark-card-soft border border-slate-200/80 dark:border-dark-border flex flex-col gap-1"
                >
                  <Icon name={feature.icon} className="text-salmon-500 text-[22px]" />
                  <span className="text-xs font-bold text-charcoal-pure dark:text-white">
                    {feature.title}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">{feature.body}</span>
                </div>
              ))}
            </div>
          </div>
          <StoreSoon />
        </div>
        </Reveal>
      </div>
    </section>
  )
}
