import lifestyle from '../assets/lifestyle-retail.jpg'
import { useApp } from '../context'
import { Icon } from './Icon'
import { Reveal } from './Reveal'

function ExperienceStory({
  t,
}: {
  t: ReturnType<typeof useApp>['t']
}) {
  return (
    <div className="flex flex-col px-5 pb-7 pt-0 sm:px-10 sm:pb-10 lg:px-12 lg:pb-12 lg:pt-6">
      <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full bg-salmon-500 text-charcoal-pure font-bold text-xs shadow-lg uppercase tracking-wider mb-3">
        <Icon name="verified" className="text-[16px] font-bold" />
        <span>{t.experience.badge}</span>
      </div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-extrabold tracking-tight max-w-3xl leading-tight font-headline-lg drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
        {t.experience.title}
      </h2>
      <p className="text-white text-sm sm:text-base max-w-3xl mt-2 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)]">
        {t.experience.body}
      </p>
      <div className="grid grid-cols-1 gap-2.5 pt-5 mt-2 border-t border-white/20 lg:grid-cols-2 lg:gap-x-16">
        <div className="flex flex-col gap-2.5">
          {t.experience.features.slice(0, 3).map((item) => (
            <div key={item} className="flex items-start gap-2.5 text-white">
              <span className="w-2.5 h-2.5 mt-1.5 rounded-full bg-salmon-400 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold leading-snug">{item}</span>
            </div>
          ))}
          <div className="flex flex-col gap-2.5 lg:hidden">
            {t.experience.features.slice(3).map((item) => (
              <div key={item} className="flex items-start gap-2.5 text-white">
                <span className="w-2.5 h-2.5 mt-1.5 rounded-full bg-salmon-400 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-col lg:gap-2.5 lg:justify-self-end lg:max-w-sm">
          {t.experience.features.slice(3).map((item) => (
            <div key={item} className="flex items-start gap-2.5 text-white">
              <span className="w-2.5 h-2.5 mt-1.5 rounded-full bg-salmon-400 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold leading-snug">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Experience() {
  const { t } = useApp()

  return (
    <section className="page-shell py-10" id="experience">
      <Reveal>
      <div className="relative w-full rounded-3xl overflow-hidden border-2 border-salmon-400/40 bg-black shadow-[0_16px_40px_rgba(242,116,104,0.15)]">
        <div className="lg:hidden">
          <div className="relative">
            <img
              alt={t.experience.alt}
              className="h-[300px] w-full object-cover object-center sm:h-[440px]"
              src={lifestyle}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent from-30% to-black" />
          </div>
          <div className="relative -mt-[150px] sm:-mt-[220px]">
            <ExperienceStory t={t} />
          </div>
        </div>

        <div className="relative hidden lg:block">
          <img
            alt={t.experience.alt}
            className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
            src={lifestyle}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent from-30% via-black/55 via-[52%] to-black/90" />
          <div className="invisible" aria-hidden>
            <ExperienceStory t={t} />
          </div>
          <div className="relative">
            <ExperienceStory t={t} />
          </div>
        </div>
      </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-10">
        <Reveal className="lg:col-span-6 h-full" delay={80}>
          <div className="h-full flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-dark-card-soft border border-slate-200 dark:border-dark-border shadow-sm">
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
        </Reveal>

        <Reveal className="lg:col-span-6 h-full" delay={160}>
          <div className="h-full flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-charcoal-pure to-[#162032] text-white border-2 border-salmon-400/50 shadow-2xl relative overflow-hidden">
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
        </Reveal>
      </div>
    </section>
  )
}
