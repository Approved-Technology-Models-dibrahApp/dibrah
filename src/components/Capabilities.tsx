import { useState } from 'react'
import { useApp } from '../context'
import { Icon } from './Icon'

type TabId = 'merchants' | 'customers' | 'suppliers'

const TAB_ACTIVE =
  'audience-tab px-5 py-2 rounded-full font-label-md text-xs sm:text-sm bg-gradient-to-r from-salmon-400 to-salmon-500 text-charcoal-pure font-bold transition-all shadow-sm whitespace-nowrap'
const TAB_IDLE =
  'audience-tab px-5 py-2 rounded-full font-label-md text-xs sm:text-sm text-slate-600 dark:text-slate-400 hover:text-charcoal-pure dark:hover:text-white transition-all font-semibold whitespace-nowrap'

export function Capabilities() {
  const { t } = useApp()
  const [tab, setTab] = useState<TabId>('merchants')

  const tabs: { id: TabId; label: string }[] = [
    { id: 'merchants', label: t.capabilities.tabMerchants },
    { id: 'customers', label: t.capabilities.tabCustomers },
    { id: 'suppliers', label: t.capabilities.tabSuppliers },
  ]

  const items =
    tab === 'merchants'
      ? t.capabilities.merchants
      : tab === 'customers'
        ? t.capabilities.customers
        : t.capabilities.suppliers

  const columns = tab === 'suppliers' ? 'lg:grid-cols-4' : 'lg:grid-cols-3'

  return (
    <section
      className="w-full py-20 bg-slate-100/60 dark:bg-dark-bg/60 border-t border-slate-200 dark:border-dark-border"
      id="we-offer"
    >
      <div className="page-shell">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
          <div>
            <span className="px-4 py-1.5 rounded-full bg-white dark:bg-dark-card border border-salmon-400/40 text-xs font-bold text-salmon-700 dark:text-salmon-300 uppercase tracking-wider">
              {t.capabilities.kicker}
            </span>
            <h2 className="text-3xl sm:text-4xl text-charcoal-pure dark:text-white font-bold mt-3 font-headline-lg">
              {t.capabilities.title}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-1">{t.capabilities.subtitle}</p>
          </div>
          <div
            className="inline-flex p-1.5 rounded-full bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm self-start md:self-auto flex-nowrap overflow-x-auto max-w-full"
            role="tablist"
            aria-label={t.capabilities.title}
          >
            {tabs.map((item) => (
              <button
                key={item.id}
                className={tab === item.id ? TAB_ACTIVE : TAB_IDLE}
                type="button"
                role="tab"
                aria-selected={tab === item.id}
                onClick={() => setTab(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 ${columns} gap-6`} role="tabpanel">
          {items.map((card) => (
            <div
              key={card.title}
              className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-salmon-400/20 shadow-sm flex flex-col gap-2 hover:border-salmon-400 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-salmon-50 dark:bg-salmon-950/40 text-salmon-600 dark:text-salmon-400 flex items-center justify-center mb-2">
                <Icon name={card.icon} className="text-[24px]" />
              </div>
              <h3 className="text-base text-charcoal-pure dark:text-white font-bold">{card.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
