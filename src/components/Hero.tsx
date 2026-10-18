import logo from '../assets/dibrah-logo.jpg'
import { useApp } from '../context'
import { Icon } from './Icon'
import { Reveal } from './Reveal'

export function Hero() {
  const { t } = useApp()

  return (
    <section className="page-shell relative pt-8 pb-16 lg:pb-24">
      <div className="absolute -top-10 left-1/4 w-[480px] h-[480px] bg-gradient-to-br from-salmon-400/25 via-salmon-500/15 to-transparent rounded-full blur-3xl -z-10 animate-pulse pointer-events-none" />
      <div className="absolute top-96 -right-10 w-[420px] h-[420px] bg-salmon-400/20 dark:bg-salmon-500/15 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        <Reveal className="lg:col-span-7 flex flex-col gap-6">
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

          <p className="font-body-lg text-slate-600 dark:text-slate-300 w-full leading-relaxed text-justify [text-justify:inter-word]">
            {t.hero.subheading}
          </p>

          <div className="flex flex-col lg:flex-row gap-3 pt-2 max-w-xl lg:max-w-none">
            <div className="inline-flex items-center justify-center gap-2.5 w-full lg:flex-1 px-7 py-3.5 rounded-full font-label-lg text-charcoal-pure font-bold bg-gradient-to-r from-salmon-400 via-primary-container to-salmon-500 shadow-[0_8px_24px_rgba(242,116,104,0.42)] cursor-default select-none">
              <span>{t.hero.ctaPrimary}</span>
              <Icon name="download" className="text-[20px] font-bold" />
            </div>
            <div className="inline-flex items-center justify-center gap-2.5 w-full lg:flex-1 px-7 py-3.5 rounded-full font-label-lg text-charcoal-pure font-bold bg-gradient-to-r from-salmon-400 via-primary-container to-salmon-500 shadow-[0_8px_24px_rgba(242,116,104,0.42)] cursor-default select-none">
              <span>{t.hero.ctaSecondary}</span>
              <Icon name="download" className="text-[20px] font-bold" />
            </div>
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
        </Reveal>

        <Reveal className="lg:col-span-5 relative lg:self-end" delay={140}>
          <div className="absolute inset-0 bg-gradient-to-tr from-salmon-400/30 via-primary-container/20 to-transparent rounded-3xl blur-2xl -z-10" />
          <div className="relative w-full rounded-3xl bg-white dark:bg-dark-card p-6 border-2 border-salmon-400/40 dark:border-salmon-400/30 shadow-[0_16px_40px_rgba(242,116,104,0.18)]">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-dark-border">
              <div className="flex items-center gap-3 min-w-0">
                <img
                  alt={t.logoAlt}
                  className="w-10 h-10 rounded-full object-cover border border-salmon-400/50 shadow-sm shrink-0"
                  src={logo}
                />
                <div className="min-w-0">
                  <h2 className="font-headline-sm text-sm text-charcoal-pure dark:text-white font-bold leading-snug">
                    {t.hero.networkTitle}
                  </h2>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-500/30 font-label-sm text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5 text-[11px] shrink-0">
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

            <div className="rounded-[22px] bg-[#0f141c] text-white p-4 sm:p-5 flex flex-col gap-4 border border-white/5">
              <div className="flex items-start justify-between gap-3">
                <p className="font-label-md text-sm text-white font-semibold leading-snug max-w-[10rem]">
                  {t.hero.sparkTitle}
                </p>
                <span className="text-xs font-bold text-salmon-300 text-end leading-snug">
                  {t.hero.sparkBadge}
                </span>
              </div>
              <div className="h-20 w-full">
                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 280 60" aria-hidden="true">
                  <defs>
                    <linearGradient id="heroSparkFill" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="5" y2="60">
                      <stop offset="0%" stopColor="#f27468" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#f27468" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,50 Q40,40 70,25 T140,30 T210,12 T280,5 L280,60 L0,60 Z"
                    fill="#f27468"
                    fillOpacity="0.38"
                  />
                  <path
                    d="M0,50 Q40,40 70,25 T140,30 T210,12 T280,5 L280,60 L0,60 Z"
                    fill="url(#heroSparkFill)"
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

              <div className="pt-1 border-t border-white/10 flex flex-col gap-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <Icon name="monitoring" className="text-salmon-400 text-[22px]" />
                    <p className="text-sm font-bold text-white leading-snug">{t.hero.revenueTitle}</p>
                  </div>
                  <div className="text-end shrink-0">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-salmon-400/15 text-salmon-300 text-[11px] font-bold">
                      {t.hero.revenueDelta} ↑
                    </span>
                    <p className="text-[10px] text-slate-400 mt-1">{t.hero.revenueDeltaHint}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-[11px] text-slate-400">{t.hero.revenueTotalLabel}</p>
                    <p className="mt-1 text-3xl font-extrabold text-salmon-400 tracking-tight">
                      {t.hero.revenueTotal}
                    </p>
                    <p className="mt-1 text-[11px] text-slate-400 leading-snug">{t.hero.revenueTotalHint}</p>
                  </div>
                  <ul className="flex flex-col gap-2.5">
                    <li className="flex items-center justify-between gap-2">
                      <span className="flex items-center gap-2 text-xs text-slate-300 min-w-0">
                        <Icon name="sell" className="text-salmon-400 text-[16px]" />
                        <span className="truncate">{t.hero.revOffers}</span>
                      </span>
                      <span className="text-xs font-bold text-white whitespace-nowrap">
                        {t.hero.revOffersValue} <span className="text-slate-400 font-semibold">{t.hero.revOffersPct}</span>
                      </span>
                    </li>
                    <li className="flex items-center justify-between gap-2">
                      <span className="flex items-center gap-2 text-xs text-slate-300 min-w-0">
                        <Icon name="campaign" className="text-salmon-400 text-[16px]" />
                        <span className="truncate">{t.hero.revMarketing}</span>
                      </span>
                      <span className="text-xs font-bold text-white whitespace-nowrap">
                        {t.hero.revMarketingValue} <span className="text-slate-400 font-semibold">{t.hero.revMarketingPct}</span>
                      </span>
                    </li>
                    <li className="flex items-center justify-between gap-2">
                      <span className="flex items-center gap-2 text-xs text-slate-300 min-w-0">
                        <Icon name="shopping_cart" className="text-salmon-400 text-[16px]" />
                        <span className="truncate">{t.hero.revSales}</span>
                      </span>
                      <span className="text-xs font-bold text-white whitespace-nowrap">
                        {t.hero.revSalesValue} <span className="text-slate-400 font-semibold">{t.hero.revSalesPct}</span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
