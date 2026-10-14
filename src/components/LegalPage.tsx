import { Fragment, useLayoutEffect, useMemo, type ReactNode } from 'react'
import { useApp } from '../context'
import { withBase } from '../lib/paths'
import { jumpToTop } from '../lib/scroll'
import privacyAr from '../legal/privacy.ar.md?raw'
import privacyEn from '../legal/privacy.en.md?raw'
import termsAr from '../legal/terms.ar.md?raw'
import termsEn from '../legal/terms.en.md?raw'
import { Footer } from './Footer'
import { Header } from './Header'
import { Icon } from './Icon'

type LegalKind = 'terms' | 'privacy'

const SOURCES = {
  terms: { en: termsEn, ar: termsAr },
  privacy: { en: privacyEn, ar: privacyAr },
} as const

function renderInline(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>
    }
    return <Fragment key={index}>{part}</Fragment>
  })
}

function renderLegal(source: string): ReactNode[] {
  const lines = source.replace(/\r\n/g, '\n').split('\n')
  const nodes: ReactNode[] = []
  let key = 0
  let i = 0
  let skippedTitle = false

  while (i < lines.length) {
    const trimmed = lines[i].trim()
    if (!trimmed) {
      i += 1
      continue
    }

    if (trimmed.startsWith('# ')) {
      if (!skippedTitle) {
        skippedTitle = true
        i += 1
        continue
      }
      nodes.push(<h1 key={key++}>{renderInline(trimmed.slice(2))}</h1>)
      i += 1
      continue
    }
    if (trimmed.startsWith('## ')) {
      nodes.push(<h2 key={key++}>{renderInline(trimmed.slice(3))}</h2>)
      i += 1
      continue
    }
    if (trimmed.startsWith('### ')) {
      nodes.push(<h3 key={key++}>{renderInline(trimmed.slice(4))}</h3>)
      i += 1
      continue
    }

    if (/^[-•]\s/.test(trimmed)) {
      const items: string[] = []
      while (i < lines.length && /^[-•]\s/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^[-•]\s+/, ''))
        i += 1
      }
      nodes.push(
        <ul key={key++}>
          {items.map((item, index) => (
            <li key={index}>{renderInline(item)}</li>
          ))}
        </ul>,
      )
      continue
    }

    if (/^\d+\.\s/.test(trimmed)) {
      const items: string[] = []
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s+/, ''))
        i += 1
      }
      nodes.push(
        <ol key={key++}>
          {items.map((item, index) => (
            <li key={index}>{renderInline(item)}</li>
          ))}
        </ol>,
      )
      continue
    }

    const para: string[] = []
    while (i < lines.length) {
      const next = lines[i].trim()
      if (!next) break
      if (next.startsWith('#') || /^[-•]\s/.test(next) || /^\d+\.\s/.test(next)) break
      para.push(next)
      i += 1
    }
    nodes.push(<p key={key++}>{renderInline(para.join(' '))}</p>)
  }

  return nodes
}

export function LegalPage({ kind }: { kind: LegalKind }) {
  const { t, lang } = useApp()
  const title = kind === 'terms' ? t.footer.terms : t.footer.privacy
  const source = SOURCES[kind][lang]
  const body = useMemo(() => renderLegal(source), [source])

  useLayoutEffect(() => {
    jumpToTop()
  }, [kind, lang])

  return (
    <div className="bg-[#F8FAFC] dark:bg-dark-bg font-body-md text-charcoal-pure dark:text-slate-100 antialiased transition-colors duration-300 min-h-svh">
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:start-4 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-full focus:bg-primary-container focus:text-charcoal-pure focus:font-bold"
        href="#main"
      >
        {t.skip}
      </a>
      <Header />
      <main className="w-full pt-20 overflow-x-hidden" id="main">
        <div className="page-shell py-8 sm:py-10 lg:py-12">
          <div className="max-w-6xl mx-auto">
            <a
              className="inline-flex items-center gap-2 text-sm font-semibold text-salmon-600 dark:text-salmon-400 hover:text-salmon-700 dark:hover:text-salmon-300 transition-colors"
              href={withBase('/')}
            >
              <Icon name="arrow_back" className="text-[20px] rtl:rotate-180" />
              <span>{t.legal.back}</span>
            </a>

            <article className="mt-5 bg-white dark:bg-dark-card rounded-[28px] border border-slate-200 dark:border-dark-border shadow-[0_12px_40px_rgba(15,23,42,0.06)] overflow-hidden">
              <div className="h-1.5 bg-gradient-to-r from-salmon-400 via-primary-container to-brand-yellow" />
              <div className="px-5 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
                <header className="pb-8 mb-8 border-b border-slate-200 dark:border-dark-border">
                  <span className="inline-flex px-3 py-1 rounded-full bg-salmon-500/15 border border-salmon-400/30 font-label-sm text-[11px] text-salmon-700 dark:text-salmon-300 font-bold uppercase tracking-wider">
                    {t.legal.document}
                  </span>
                  <h1 className="mt-4 text-3xl sm:text-4xl lg:text-[2.5rem] font-extrabold font-headline-lg text-charcoal-pure dark:text-white leading-tight tracking-tight">
                    {title}
                  </h1>
                  <p className="mt-3 max-w-3xl text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {t.legal.updated}
                  </p>
                </header>
                <div className="legal-doc">{body}</div>
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
