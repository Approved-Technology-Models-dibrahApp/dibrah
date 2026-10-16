import { useLayoutEffect } from 'react'
import logo from '../assets/dibrah-logo.jpg'
import { useApp } from '../context'
import { withBase } from '../lib/paths'
import { jumpToTop } from '../lib/scroll'
import { Footer } from './Footer'
import { Header } from './Header'
import { Icon } from './Icon'
import { Reveal } from './Reveal'

function stepMark(n: string) {
  return n.padStart(2, '0')
}

export function BusinessPage() {
  const { t, lang } = useApp()

  useLayoutEffect(() => {
    jumpToTop()
  }, [lang])

  return (
    <div className="biz-page bg-[#F8FAFC] dark:bg-dark-bg font-body-md text-charcoal-pure dark:text-slate-100 antialiased transition-colors duration-300 min-h-svh">
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:start-4 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-full focus:bg-primary-container focus:text-charcoal-pure focus:font-bold"
        href="#main"
      >
        {t.skip}
      </a>
      <Header />
      <div className="fixed top-20 left-0 right-0 z-40 border-b border-slate-200/80 dark:border-dark-border bg-[#F8FAFC]/88 dark:bg-dark-bg/88 backdrop-blur-xl">
        <div className="page-shell py-2.5">
          <a
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white dark:bg-dark-card border border-slate-200/90 dark:border-dark-border text-sm font-semibold text-charcoal-pure dark:text-slate-100 hover:border-salmon-400/60 hover:text-salmon-700 dark:hover:text-salmon-300 transition-colors"
            href={withBase('/')}
          >
            <Icon name="arrow_back" className="text-[18px] rtl:rotate-180" />
            <span>{t.business.back}</span>
          </a>
        </div>
      </div>
      <main className="w-full pt-[8.75rem] overflow-x-hidden" id="main">
        <section className="relative overflow-hidden">
          <div className="biz-orb pointer-events-none absolute -top-24 -start-16 w-[34rem] h-[34rem] rounded-full bg-gradient-to-br from-salmon-400/25 via-salmon-500/10 to-transparent blur-3xl" />
          <div className="biz-orb biz-orb-slow pointer-events-none absolute top-40 -end-20 w-[28rem] h-[28rem] rounded-full bg-brand-yellow/15 dark:bg-salmon-500/10 blur-3xl" />

          <div className="page-shell relative pt-6 sm:pt-8 lg:pt-10 pb-10 sm:pb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
              <Reveal className="lg:col-span-7">
                <span className="inline-flex px-3.5 py-1.5 rounded-full bg-salmon-500/15 border border-salmon-400/40 font-label-sm text-xs text-salmon-700 dark:text-salmon-300 font-bold uppercase tracking-wider">
                  {t.business.kicker}
                </span>
                <h1 className="mt-5 text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold font-display-hero text-charcoal-pure dark:text-white leading-[1.12] tracking-tight max-w-3xl">
                  {t.business.title}
                </h1>
                <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                  {t.business.subtitle}
                </p>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-salmon-600 dark:text-salmon-400">
                  {t.business.pathLabel}
                </p>
              </Reveal>

              <Reveal className="lg:col-span-5 flex justify-center lg:justify-end" delay={80}>
                <div className="relative w-full max-w-[22rem] overflow-hidden rounded-[32px] border border-salmon-400/35 bg-white/90 dark:bg-dark-card/95 px-6 py-7 shadow-[0_18px_44px_rgba(15,23,42,0.08)]">
                  <div className="pointer-events-none absolute -top-12 -end-10 w-40 h-40 rounded-full bg-salmon-400/20 blur-2xl" />
                  <div className="pointer-events-none absolute -bottom-14 -start-10 w-36 h-36 rounded-full bg-brand-yellow/15 blur-2xl" />
                  <div className="relative flex flex-col items-center text-center">
                    <img
                      alt={t.logoAlt}
                      className="h-20 w-20 rounded-full object-cover border-2 border-salmon-400 shadow-[0_10px_28px_rgba(242,116,104,0.28)]"
                      src={logo}
                    />
                    <p className="mt-4 font-headline-lg text-2xl font-extrabold text-charcoal-pure dark:text-white tracking-tight">
                      {t.brand}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-600 dark:text-slate-300">
                      {t.business.title}
                    </p>
                    <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.16em] text-salmon-600 dark:text-salmon-400">
                      {t.business.pathLabel}
                    </p>
                    <ol className="mt-6 w-full grid grid-cols-3 gap-2">
                      {t.business.phases.map((phase, phaseIndex) => (
                        <li className="flex flex-col items-center min-w-0" key={phase.title}>
                          <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-salmon-400 to-salmon-500 text-charcoal-pure text-sm font-black tabular-nums flex items-center justify-center shadow-[0_6px_14px_rgba(242,116,104,0.28)]">
                            {stepMark(String(phaseIndex + 1))}
                          </span>
                          <span className="mt-2 text-[11px] font-bold leading-snug text-charcoal-pure dark:text-white line-clamp-2">
                            {phase.title}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </Reveal>
            </div>

            <ol className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {t.business.phases.map((phase, phaseIndex) => (
                <li key={phase.title}>
                  <Reveal delay={phaseIndex * 70}>
                    <a
                      className="group h-full flex items-center gap-4 p-5 rounded-[24px] bg-white dark:bg-dark-card border border-slate-200/90 dark:border-dark-border shadow-[0_8px_24px_rgba(15,23,42,0.04)] hover:border-salmon-400/55 hover:shadow-[0_12px_28px_rgba(242,116,104,0.12)] transition-all"
                      href={`#phase-${phaseIndex + 1}`}
                    >
                      <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-salmon-400 to-salmon-500 text-charcoal-pure font-black tabular-nums flex items-center justify-center shadow-[0_6px_16px_rgba(242,116,104,0.3)] shrink-0">
                        {stepMark(String(phaseIndex + 1))}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-salmon-600 dark:text-salmon-400">
                          {t.business.phase}
                        </span>
                        <span className="mt-1 block text-base font-bold text-charcoal-pure dark:text-white leading-snug">
                          {phase.title}
                        </span>
                      </span>
                    </a>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {t.business.phases.map((phase, phaseIndex) => (
          <section className="relative scroll-mt-[10rem]" id={`phase-${phaseIndex + 1}`} key={phase.title}>
            <div className="page-shell py-10 sm:py-14">
              <Reveal>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-salmon-600 dark:text-salmon-400">
                  {t.business.phase} {stepMark(String(phaseIndex + 1))}
                </p>
                <h2 className="mt-2 mb-10 text-3xl sm:text-4xl font-extrabold font-headline-lg text-charcoal-pure dark:text-white tracking-tight">
                  {phase.title}
                </h2>
              </Reveal>

              <ol className="relative flex flex-col gap-8">
                <div
                  aria-hidden="true"
                  className="hidden md:block absolute left-1/2 top-[5.5rem] bottom-7 w-px -translate-x-1/2 bg-gradient-to-b from-salmon-400/70 via-salmon-400/35 to-transparent"
                />
                {phase.steps.map((step, stepIndex) => {
                  const onStart = stepIndex % 2 === 0
                  return (
                    <li className="relative scroll-mt-[10rem]" id={`step-${step.n}`} key={step.n}>
                      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-5 md:gap-8 items-start">
                        <div className={onStart ? 'md:order-1' : 'md:order-3'}>
                          <Reveal delay={stepIndex * 70}>
                            <article className="p-6 sm:p-8 rounded-[28px] bg-white dark:bg-dark-card border border-slate-200/90 dark:border-dark-border shadow-[0_10px_32px_rgba(15,23,42,0.05)] hover:border-salmon-400/45 hover:shadow-[0_18px_44px_rgba(242,116,104,0.14)] hover:-translate-y-0.5 transition-all">
                              <div className="flex items-start gap-4 sm:gap-5">
                                <span className="md:hidden w-12 h-12 rounded-2xl bg-gradient-to-br from-salmon-400 to-salmon-500 text-charcoal-pure font-black tabular-nums flex items-center justify-center shrink-0">
                                  {stepMark(step.n)}
                                </span>
                                <span className="hidden md:flex w-12 h-12 rounded-2xl bg-salmon-50 dark:bg-salmon-950/50 text-salmon-600 dark:text-salmon-400 items-center justify-center shrink-0">
                                  <Icon name={step.icon} className="text-[22px]" />
                                </span>
                                <div className="min-w-0">
                                  <h3 className="text-xl sm:text-2xl font-bold font-headline-lg text-charcoal-pure dark:text-white tracking-tight">
                                    {step.title}
                                  </h3>
                                  <p className="mt-3 text-sm sm:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed">
                                    {step.body}
                                  </p>
                                </div>
                              </div>
                            </article>
                          </Reveal>
                        </div>
                        <div className="hidden md:flex md:order-2 relative z-10 mt-6 w-14 h-14 rounded-2xl bg-gradient-to-br from-salmon-400 to-salmon-500 text-charcoal-pure font-black text-lg tabular-nums items-center justify-center shadow-[0_8px_20px_rgba(242,116,104,0.35)] justify-self-center">
                          {stepMark(step.n)}
                        </div>
                        <div className={`hidden md:block ${onStart ? 'md:order-3' : 'md:order-1'}`} />
                      </div>
                    </li>
                  )
                })}
              </ol>
            </div>
          </section>
        ))}

        <section className="page-shell pb-8 scroll-mt-[10rem]" id="step-10">
          <Reveal>
            <article className="max-w-3xl p-6 sm:p-8 rounded-[28px] bg-white dark:bg-dark-card border border-slate-200/90 dark:border-dark-border shadow-[0_10px_32px_rgba(15,23,42,0.05)]">
              <div className="flex items-start gap-5">
                <span className="w-14 h-14 rounded-2xl bg-gradient-to-br from-salmon-400 to-salmon-500 text-charcoal-pure font-black text-lg tabular-nums flex items-center justify-center shrink-0 shadow-[0_8px_20px_rgba(242,116,104,0.35)]">
                  10
                </span>
                <div className="min-w-0">
                  <h2 className="text-xl sm:text-2xl font-bold font-headline-lg text-charcoal-pure dark:text-white tracking-tight">
                    {t.business.moreTitle}
                  </h2>
                  <p className="mt-3 text-sm sm:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    {t.business.moreBody}
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        </section>

        <section className="page-shell pb-16 sm:pb-20">
          <Reveal>
            <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-charcoal-pure via-[#162032] to-[#0b1220] text-white p-8 sm:p-12 border border-salmon-400/35">
              <div className="biz-orb pointer-events-none absolute -top-20 end-0 w-64 h-64 bg-salmon-400/20 rounded-full blur-3xl" />
              <div className="relative flex flex-col lg:flex-row lg:items-center gap-8">
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl font-extrabold font-headline-lg tracking-tight">
                    {t.business.closeTitle}
                  </h2>
                  <p className="mt-3 text-slate-300 leading-relaxed max-w-2xl">{t.business.closeBody}</p>
                </div>
                <a
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-label-md text-charcoal-pure font-bold bg-gradient-to-r from-salmon-400 to-salmon-500 hover:from-salmon-300 hover:to-salmon-400 shadow-[0_8px_24px_rgba(242,116,104,0.35)] hover:-translate-y-0.5 transition-all shrink-0"
                  href={withBase('/#pre-order')}
                >
                  <span>{t.business.cta}</span>
                  <Icon name="arrow_forward" className="text-[18px] rtl:rotate-180" />
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  )
}
