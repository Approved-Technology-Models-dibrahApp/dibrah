import { useApp } from '../context'
import { Icon } from './Icon'

export function WhyDibrah() {
  const { t } = useApp()

  return (
    <section
      className="w-full py-20 bg-white dark:bg-dark-card border-y border-slate-200/80 dark:border-dark-border"
      id="why-dibrah"
    >
      <div className="page-shell">
        <div className="text-center max-w-2xl mx-auto pb-14">
          <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-salmon-400/20 to-salmon-500/20 border border-salmon-400/40 font-label-sm text-xs text-salmon-700 dark:text-salmon-300 font-bold uppercase tracking-wider">
            {t.why.kicker}
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-4xl text-charcoal-pure dark:text-white font-bold mt-4">
            {t.why.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mt-2">{t.why.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-dark-card-soft border border-slate-200 dark:border-dark-border shadow-sm">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-coral-alert/15 flex items-center justify-center text-coral-alert">
                <Icon name="warning" className="text-[28px]" />
              </div>
              <span className="font-label-lg text-coral-alert font-bold uppercase tracking-wide text-xs">
                {t.why.challengeLabel}
              </span>
              <blockquote className="text-slate-700 dark:text-slate-200 leading-relaxed italic text-base sm:text-lg">
                {t.why.challenge}
              </blockquote>
            </div>
            <div className="pt-8 flex items-start sm:items-center gap-3 border-t border-slate-200 dark:border-slate-700/60 mt-6">
              <span className="font-label-md text-charcoal-pure dark:text-white font-bold text-xs sm:text-sm shrink-0">
                {t.why.vulnerabilityLabel}
              </span>
              <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                {t.why.vulnerability}
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-charcoal-pure to-[#162032] text-white border-2 border-salmon-400/50 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-salmon-400/20 blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col gap-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-salmon-400 to-salmon-500 flex items-center justify-center text-charcoal-pure shadow-lg shadow-salmon-500/30">
                <Icon name="verified" className="text-[28px] font-bold" />
              </div>
              <div>
                <span className="px-3 py-1 rounded-full bg-salmon-400/20 border border-salmon-400/40 text-salmon-300 font-bold uppercase tracking-wider text-xs">
                  {t.why.solutionKicker}
                </span>
                <h3 className="text-2xl sm:text-3xl text-white font-bold mt-3 font-headline-lg">
                  {t.why.solutionTitle}
                </h3>
                <p className="text-slate-300 mt-2 text-sm sm:text-base leading-relaxed">
                  {t.why.solutionBody}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-white/5 border border-salmon-400/30 flex flex-col">
                  <span className="text-3xl font-extrabold text-salmon-400">{t.why.m1Value}</span>
                  <span className="text-xs font-bold text-white mt-1">{t.why.m1Title}</span>
                  <span className="text-[11px] text-slate-400 mt-0.5">{t.why.m1Hint}</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-emerald-400/30 flex flex-col">
                  <span className="text-3xl font-extrabold text-emerald-400">{t.why.m2Value}</span>
                  <span className="text-xs font-bold text-white mt-1">{t.why.m2Title}</span>
                  <span className="text-[11px] text-slate-400 mt-0.5">{t.why.m2Hint}</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-salmon-400/30 flex flex-col">
                  <span className="text-3xl font-extrabold text-salmon-300">{t.why.m3Value}</span>
                  <span className="text-xs font-bold text-white mt-1">{t.why.m3Title}</span>
                  <span className="text-[11px] text-slate-400 mt-0.5">{t.why.m3Hint}</span>
                </div>
              </div>
            </div>
            <div className="relative z-10 pt-8 flex items-center justify-between border-t border-slate-700 mt-6 gap-3">
              <span className="text-xs text-slate-300 font-medium">{t.why.cohort}</span>
              <a
                className="text-xs sm:text-sm font-bold text-salmon-400 hover:text-salmon-300 flex items-center gap-1.5 transition-colors"
                href="#pre-order"
              >
                <span>{t.why.reserve}</span>
                <Icon name="east" className="text-[16px] rtl:rotate-180" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
