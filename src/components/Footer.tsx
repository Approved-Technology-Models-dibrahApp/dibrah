import logo from '../assets/dibrah-logo.jpg'
import { useApp } from '../context'
import { CONTACT_EMAIL } from '../i18n/content'
import { withBase } from '../lib/paths'
import { Icon } from './Icon'

export function Footer() {
  const { t } = useApp()

  return (
    <footer className="w-full bg-white dark:bg-dark-card border-t border-slate-200 dark:border-dark-border pt-16 pb-12 transition-colors duration-300">
      <div className="page-shell">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-200 dark:border-dark-border">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <a className="flex items-center gap-3 w-fit" href={withBase('/')}>
              <img
                alt={t.logoAlt}
                className="h-9 w-9 rounded-full object-cover border border-salmon-400/50 shadow-sm"
                src={logo}
              />
              <div className="flex items-center gap-2">
                <span className="font-headline-sm text-xl text-charcoal-pure dark:text-white font-extrabold tracking-tight">
                  {t.brand}
                </span>
              </div>
            </a>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              {t.footer.blurb}
            </p>
            <div className="flex flex-col gap-1 pt-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="font-bold text-charcoal-pure dark:text-slate-200">
                {t.preorder.company}
              </span>
              <span>{t.preorder.address}</span>
              <a
                className="text-salmon-600 dark:text-salmon-400 hover:underline pt-0.5 font-medium"
                href={`mailto:${CONTACT_EMAIL}`}
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <span className="font-bold text-charcoal-pure dark:text-white">{t.footer.documents}</span>
            <a className="text-slate-600 dark:text-slate-400 hover:text-salmon-600 dark:hover:text-salmon-400 transition-colors" href={withBase('/terms')}>
              {t.footer.terms}
            </a>
            <a className="text-slate-600 dark:text-slate-400 hover:text-salmon-600 dark:hover:text-salmon-400 transition-colors" href={withBase('/privacy')}>
              {t.footer.privacy}
            </a>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <span className="font-bold text-charcoal-pure dark:text-white">{t.footer.compliance}</span>
            <div className="flex flex-col gap-2 pt-1">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-dark-card-soft border border-slate-200 dark:border-dark-border">
                <Icon name="verified" className="text-emerald-500 text-[20px]" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-charcoal-pure dark:text-white">
                    {t.footer.smeTitle}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">{t.footer.smeSub}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-dark-card-soft border border-slate-200 dark:border-dark-border">
                <Icon name="security" className="text-salmon-500 text-[20px]" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-charcoal-pure dark:text-white">
                    {t.footer.registryTitle}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    {t.footer.registrySub}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <span>{t.footer.copyright}</span>
          <span className="font-bold text-salmon-600 dark:text-salmon-400">{t.footer.langPair}</span>
        </div>
      </div>
    </footer>
  )
}
