import { useApp } from '../context'
import { Icon } from './Icon'

export function DualApps() {
  const { t } = useApp()

  return (
    <section className="page-shell py-20" id="mobile-apps">
      <div className="flex flex-col gap-3 text-center max-w-3xl mx-auto mb-14">
        <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-salmon-400/20 to-salmon-500/20 border border-salmon-400/40 font-label-sm text-xs text-salmon-700 dark:text-salmon-300 font-bold uppercase tracking-wider mx-auto">
          {t.dual.kicker}
        </span>
        <h2 className="text-3xl sm:text-4xl text-charcoal-pure dark:text-white font-extrabold font-headline-lg">
          {t.dual.title}
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-base">{t.dual.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div
          className="flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-white dark:bg-dark-card border-2 border-salmon-400/35 dark:border-salmon-400/30 shadow-[0_8px_30px_rgba(242,116,104,0.1)] hover:shadow-[0_12px_40px_rgba(242,116,104,0.2)] transition-all"
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
          <div className="pt-8">
            <a
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full font-label-lg text-charcoal-pure font-bold bg-gradient-to-r from-salmon-400 to-salmon-500 hover:from-salmon-300 hover:to-salmon-400 transition-all shadow-[0_6px_20px_rgba(242,116,104,0.35)]"
              href="#pre-order"
            >
              <span>{t.dual.bizCta}</span>
              <Icon name="arrow_forward" className="text-[18px] rtl:rotate-180" />
            </a>
          </div>
        </div>

        <div
          className="flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-white dark:bg-dark-card border-2 border-slate-200/80 dark:border-dark-border shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-salmon-400/40 transition-all"
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
          <div className="pt-8">
            <a
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full font-label-lg text-white font-bold bg-charcoal-pure hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 transition-all shadow-md"
              href="#pre-order"
            >
              <span>{t.dual.shopCta}</span>
              <Icon name="download" className="text-[18px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
