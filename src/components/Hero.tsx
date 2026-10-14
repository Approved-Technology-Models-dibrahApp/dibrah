import logo from '../assets/dibrah-logo.jpg'
import { useApp } from '../context'
import { withBase } from '../lib/paths'
import { Icon } from './Icon'

export function Hero() {
  const { t } = useApp()

  return (
    <section className="page-shell relative pt-8 pb-16 lg:pb-24">
      <div className="absolute -top-10 left-1/4 w-[480px] h-[480px] bg-gradient-to-br from-salmon-400/25 via-salmon-500/15 to-transparent rounded-full blur-3xl -z-10 animate-pulse pointer-events-none" />
      <div className="absolute top-96 -right-10 w-[420px] h-[420px] bg-salmon-400/20 dark:bg-salmon-500/15 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="inline-flex flex-wrap items-center gap-2.5 self-start max-w-full px-4 py-1.5 rounded-full bg-white dark:bg-dark-card border border-salmon-500/30 dark:border-salmon-400/30 shadow-[0_2px_12px_rgba(242,116,104,0.15)]">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-success animate-pulse" />
            <span className="font-label-md text-sm text-charcoal-pure dark:text-slate-200 font-bold">
              {t.hero.badgeOrg}
            </span>
            <span className="text-salmon-500 font-body-sm">•</span>
            <span className="font-label-md text-sm text-salmon-700 dark:text-salmon-400 font-semibold">
              {t.hero.badgeCity}
            </span>
          </div>

          <h1 className="font-display-hero text-4xl sm:text-5xl lg:text-[46px] leading-[1.18] text-charcoal-pure dark:text-white font-extrabold tracking-tight">
            {t.hero.headlineBefore} <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-salmon-500 via-salmon-400 to-brand-yellow bg-clip-text text-transparent">
              {t.hero.headlineAccent}
            </span>
          </h1>

          <p className="font-body-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            {t.hero.subheading}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 rounded-full font-label-lg text-charcoal-pure font-bold bg-gradient-to-r from-salmon-400 via-primary-container to-salmon-500 hover:from-salmon-300 hover:to-salmon-400 transition-all shadow-[0_8px_24px_rgba(242,116,104,0.42)] hover:-translate-y-0.5 active:translate-y-0"
              href={withBase('/for-business')}
            >
              <span>{t.hero.ctaPrimary}</span>
              <Icon name="download" className="text-[20px] font-bold" />
            </a>
            <a
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 py-3.5 rounded-full font-label-lg text-slate-900 dark:text-slate-100 bg-white dark:bg-dark-card hover:bg-slate-50 dark:hover:bg-dark-card-soft border border-salmon-500/40 dark:border-salmon-400/30 transition-all shadow-md hover:-translate-y-0.5"
              href="#for-shoppers"
            >
              <Icon name="phone_iphone" className="text-salmon-500 text-[20px]" />
              <span>{t.hero.ctaSecondary}</span>
            </a>
          </div>

          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2.5">
            {t.hero.proofs.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 p-3 rounded-2xl bg-white dark:bg-dark-card border border-salmon-500/25 dark:border-salmon-500/20 shadow-sm hover:border-salmon-400 transition-colors min-h-[4.75rem]"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-salmon-400/20 to-salmon-500/30 flex items-center justify-center shrink-0 text-salmon-600 dark:text-salmon-400">
                  <Icon name={item.icon} className="text-[20px]" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-sm text-charcoal-pure dark:text-white font-bold leading-snug">
                    {item.title}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug mt-0.5">
                    {item.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 relative lg:self-end">
          <div className="absolute inset-0 bg-gradient-to-tr from-salmon-400/30 via-primary-container/20 to-transparent rounded-3xl blur-2xl -z-10" />
          <div className="relative w-full rounded-3xl bg-white dark:bg-dark-card p-6 border-2 border-salmon-400/40 dark:border-salmon-400/30 shadow-[0_16px_40px_rgba(242,116,104,0.18)]">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-dark-border">
              <div className="flex items-center gap-3">
                <img
                  alt={t.logoAlt}
                  className="w-10 h-10 rounded-full object-cover border border-salmon-400/50 shadow-sm"
                  src={logo}
                />
                <div>
                  <h2 className="font-headline-sm text-sm text-charcoal-pure dark:text-white font-bold">
                    {t.hero.networkTitle}
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{t.hero.networkSub}</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-500/30 font-label-sm text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5 text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                {t.hero.liveSync}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 py-4">
              <div className="p-3.5 rounded-2xl bg-salmon-50/70 dark:bg-dark-card-soft border border-salmon-300/40 dark:border-salmon-400/20 flex flex-col">
                <span className="text-xs text-slate-600 dark:text-slate-400 uppercase font-semibold tracking-wider">
                  {t.hero.couponsLabel}
                </span>
                <span className="font-headline-lg text-2xl text-charcoal-pure dark:text-white font-extrabold mt-1">
                  {t.hero.couponsValue}
                </span>
                <span className="text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5 mt-0.5 font-bold">
                  <Icon name="trending_up" className="text-[14px]" /> {t.hero.couponsHint}
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-salmon-50/70 dark:bg-dark-card-soft border border-salmon-300/40 dark:border-salmon-400/20 flex flex-col">
                <span className="text-xs text-slate-600 dark:text-slate-400 uppercase font-semibold tracking-wider">
                  {t.hero.repeatLabel}
                </span>
                <span className="font-headline-lg text-2xl text-salmon-600 dark:text-salmon-400 font-extrabold mt-1">
                  {t.hero.repeatValue}
                </span>
                <span className="text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5 mt-0.5 font-bold">
                  <Icon name="bolt" className="text-[14px]" /> {t.hero.repeatHint}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-dark-card-soft/80 border border-slate-200/80 dark:border-dark-border mt-1 flex flex-col gap-2">
              <div className="flex items-center justify-between gap-2">
                <span className="font-label-md text-xs text-charcoal-pure dark:text-slate-200 font-semibold">
                  {t.hero.sparkTitle}
                </span>
                <span className="font-label-sm text-xs text-salmon-600 dark:text-salmon-400 font-bold bg-salmon-100/60 dark:bg-salmon-950/60 px-2 py-0.5 rounded-full whitespace-nowrap">
                  {t.hero.sparkBadge}
                </span>
              </div>
              <div className="h-16 w-full flex items-end">
                <svg
                  className="w-full h-full text-primary-container overflow-visible"
                  preserveAspectRatio="none"
                  viewBox="0 0 280 60"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="heroGradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#f27468" stopOpacity="0.45" />
                      <stop offset="100%" stopColor="#f27468" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,50 Q40,40 70,25 T140,30 T210,12 T280,5 L280,60 L0,60 Z"
                    fill="url(#heroGradient)"
                  />
                  <path
                    d="M0,50 Q40,40 70,25 T140,30 T210,12 T280,5"
                    fill="none"
                    stroke="#f27468"
                    strokeLinecap="round"
                    strokeWidth="3"
                  />
                  <circle cx="280" cy="5" fill="#f27468" r="4.5" stroke="#ffffff" strokeWidth="1.5" />
                </svg>
              </div>
            </div>

            <div className="mt-4 p-4 rounded-2xl bg-charcoal-pure text-white border border-salmon-400/40 shadow-xl flex flex-col gap-3">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Icon name="verified" className="text-salmon-400 text-[20px]" />
                  <span className="font-label-md text-xs text-white font-bold">
                    {t.hero.trustedTitle}
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-salmon-400 to-salmon-500 font-label-sm text-[10px] text-charcoal-pure font-black tracking-wide">
                  {t.hero.verified}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-1 border-t border-slate-800">
                <div>
                  <p className="text-xs text-slate-400">{t.hero.trustedBiz}</p>
                  <p className="text-base sm:text-lg font-extrabold text-salmon-400">
                    {t.hero.trustedBizValue}
                  </p>
                  <span className="text-[11px] text-slate-400">{t.hero.trustedBizHint}</span>
                </div>
                <div className="text-end">
                  <p className="text-xs text-slate-400">{t.hero.trustedSup}</p>
                  <p className="text-base sm:text-lg font-bold text-white">{t.hero.trustedSupValue}</p>
                  <span className="text-[11px] text-slate-400">{t.hero.trustedSupHint}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
