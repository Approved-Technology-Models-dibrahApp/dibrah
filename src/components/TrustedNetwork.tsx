import { useApp } from '../context'
import { Icon } from './Icon'
import { Reveal } from './Reveal'

export function TrustedNetwork() {
  const { t } = useApp()

  const metrics: {
    icon: string
    label: string
    value: string
    hint: string
    hintClass: string
    valueClass?: string
  }[] = [
    { icon: 'storefront', label: t.trusted.m1Label, value: t.trusted.m1Value, hint: t.trusted.m1Hint, hintClass: 'text-salmon-700 dark:text-salmon-400' },
    { icon: 'inventory', label: t.trusted.m2Label, value: t.trusted.m2Value, hint: t.trusted.m2Hint, hintClass: 'text-salmon-700 dark:text-salmon-400' },
    { icon: 'groups', label: t.trusted.m3Label, value: t.trusted.m3Value, hint: t.trusted.m3Hint, hintClass: 'text-emerald-600 dark:text-emerald-400' },
    { icon: 'savings', label: t.trusted.m4Label, value: t.trusted.m4Value, hint: t.trusted.m4Hint, hintClass: 'text-slate-500 dark:text-slate-400', valueClass: 'text-salmon-600 dark:text-salmon-400' },
  ]

  return (
    <section className="page-shell py-20" id="trusted-partners">
      <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-dark-card border-2 border-salmon-400/35 shadow-[0_12px_36px_rgba(242,116,104,0.12)] flex flex-col gap-10">
        <Reveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-dark-border">
          <div>
            <span className="px-3.5 py-1.5 rounded-full bg-salmon-500/15 border border-salmon-400/30 text-xs font-bold text-salmon-700 dark:text-salmon-300 uppercase tracking-wider">
              {t.trusted.kicker}
            </span>
            <h2 className="text-2xl sm:text-3xl text-charcoal-pure dark:text-white font-extrabold mt-3 font-headline-lg">
              {t.trusted.title}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-1">
              {t.trusted.subtitle}
            </p>
          </div>
          <div className="flex items-center gap-2 self-start md:self-auto px-4 py-2 rounded-2xl bg-salmon-500/10 border border-salmon-400/30 text-salmon-700 dark:text-salmon-300 text-xs font-bold">
            <Icon name="verified_user" className="text-[18px]" />
            <span>{t.trusted.registry}</span>
          </div>
        </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <Reveal className="h-full" delay={index * 80} key={metric.label}>
            <div
              className="h-full p-6 rounded-2xl bg-slate-50 dark:bg-dark-card-soft border border-salmon-400/30 flex flex-col justify-between"
            >
              <div>
                <Icon name={metric.icon} className="text-salmon-500 text-3xl" />
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-3">
                  {metric.label}
                </p>
                <h3 className={`text-3xl font-extrabold mt-1 font-headline-lg ${metric.valueClass ?? 'text-charcoal-pure dark:text-white'}`}>
                  {metric.value}
                </h3>
              </div>
              <p className={`text-xs font-semibold mt-3 ${metric.hintClass}`}>{metric.hint}</p>
            </div>
            </Reveal>
          ))}
        </div>

        <div className="pt-2">
          <h3 className="text-xs uppercase font-extrabold tracking-wider text-slate-500 dark:text-slate-400 mb-4">
            {t.trusted.categoriesTitle}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {t.trusted.categories.map((category, index) => (
              <Reveal className="h-full" delay={index * 60} key={category.title}>
              <div
                className="h-full p-4 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/90 dark:border-dark-border flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-salmon-100/70 dark:bg-salmon-950/60 text-salmon-600 dark:text-salmon-400 flex items-center justify-center shrink-0">
                  <Icon name={category.icon} className="text-[22px]" />
                </div>
                <div>
                  <span className="text-xs font-bold text-charcoal-pure dark:text-white block">
                    {category.title}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">{category.hint}</span>
                </div>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
