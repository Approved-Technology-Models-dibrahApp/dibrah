import { useApp } from '../context'
import { Icon } from './Icon'
import { Reveal } from './Reveal'

export function WhyDibrah() {
  const { t } = useApp()

  return (
    <section
      className="w-full py-20 bg-white dark:bg-dark-card border-y border-slate-200/80 dark:border-dark-border"
      id="why-dibrah"
    >
      <div className="page-shell">
        <Reveal>
        <div className="text-center max-w-3xl mx-auto pb-14">
          <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-salmon-400/20 to-salmon-500/20 border border-salmon-400/40 font-label-sm text-xs text-salmon-700 dark:text-salmon-300 font-bold uppercase tracking-wider">
            {t.why.kicker}
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-4xl text-charcoal-pure dark:text-white font-bold mt-4">
            {t.why.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mt-2">{t.why.subtitle}</p>
        </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.why.questions.map((question, index) => (
            <Reveal className="h-full" delay={index * 70} key={question.title}>
              <div className="h-full p-6 rounded-3xl bg-slate-50 dark:bg-dark-card-soft border border-slate-200/90 dark:border-dark-border shadow-sm hover:border-salmon-400/50 hover:shadow-[0_10px_28px_rgba(242,116,104,0.12)] transition-all flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-salmon-400/20 to-salmon-500/30 text-salmon-600 dark:text-salmon-400 flex items-center justify-center">
                  <Icon name={question.icon} className="text-[26px]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-charcoal-pure dark:text-white leading-snug font-headline-lg">
                  {question.title}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
