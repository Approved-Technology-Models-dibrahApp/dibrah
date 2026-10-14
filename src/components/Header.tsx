import { useEffect, useRef, useState } from 'react'
import logo from '../assets/dibrah-logo.jpg'
import { useApp } from '../context'
import { appPath, isHomePath, withBase } from '../lib/paths'
import { Icon } from './Icon'

const NAV_LINKS = [
  { href: '#why-dibrah', key: 'why' as const },
  { href: '#mobile-apps', key: 'apps' as const },
  { href: '#we-offer', key: 'offer' as const },
  { href: '#trusted-partners', key: 'partners' as const },
  { href: '#pre-order', key: 'contact' as const },
]

const HEADER_LINE = 128

const navLinkClass = (active: boolean) =>
  [
    'px-3.5 2xl:px-4 py-1.5 rounded-full font-label-md text-sm font-semibold whitespace-nowrap transition-all',
    active
      ? 'bg-salmon-500 text-charcoal-pure shadow-sm'
      : 'text-slate-700 dark:text-slate-200 hover:text-salmon-600 dark:hover:text-salmon-400 hover:bg-white dark:hover:bg-dark-card-soft',
  ].join(' ')

const mobileNavLinkClass = (active: boolean) =>
  [
    'px-4 py-3 rounded-2xl font-label-md font-semibold transition-all',
    active
      ? 'bg-salmon-500 text-charcoal-pure'
      : 'text-slate-700 dark:text-slate-200 hover:text-salmon-600 hover:bg-slate-100 dark:hover:bg-dark-card-soft',
  ].join(' ')

function hrefFromScroll() {
  let current = ''
  for (const link of NAV_LINKS) {
    const el = document.getElementById(link.href.slice(1))
    if (el && el.getBoundingClientRect().top <= HEADER_LINE) {
      current = link.href
    }
  }
  return current
}

export function Header() {
  const { t, theme, toggleLang, toggleTheme } = useApp()
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeHref, setActiveHref] = useState('')
  const lockedHref = useRef<string | null>(null)
  const settleTimer = useRef<number | null>(null)

  const clearSettleTimer = () => {
    if (settleTimer.current !== null) {
      window.clearTimeout(settleTimer.current)
      settleTimer.current = null
    }
  }

  const unlockClick = () => {
    if (!lockedHref.current) return
    setActiveHref(lockedHref.current)
    lockedHref.current = null
    clearSettleTimer()
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const onScroll = () => {
      if (lockedHref.current) {
        clearSettleTimer()
        settleTimer.current = window.setTimeout(unlockClick, 140)
        return
      }
      const next = hrefFromScroll()
      if (next) setActiveHref(next)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('scrollend', unlockClick)
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('scrollend', unlockClick)
      clearSettleTimer()
    }
  }, [])

  const closeMenu = () => setMenuOpen(false)
  const onHome = typeof window === 'undefined' ? true : isHomePath()
  const onBusiness = typeof window === 'undefined' ? false : appPath() === '/for-business'
  const sectionHref = (href: string) => (onHome ? href : withBase(`/${href}`))

  const selectLink = (href: string) => {
    clearSettleTimer()
    lockedHref.current = href
    setActiveHref(href)
    closeMenu()
  }

  const startHref = withBase('/for-business')
  const startButtonClass = onBusiness
    ? 'bg-salmon-500 text-charcoal-pure shadow-sm'
    : 'font-label-md text-charcoal-pure font-bold bg-gradient-to-r from-salmon-400 via-primary-container to-salmon-500 hover:from-salmon-300 hover:to-salmon-400 shadow-[0_4px_18px_rgba(242,116,104,0.45)] hover:shadow-[0_6px_24px_rgba(242,116,104,0.6)] hover:-translate-y-0.5 active:translate-y-0'

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white/90 dark:bg-[#0E1420]/90 backdrop-blur-xl border-b border-salmon-500/20 dark:border-salmon-400/15 shadow-[0_2px_16px_rgba(242,116,104,0.06)]">
      <div className="page-shell h-20 flex items-center justify-between gap-3 lg:gap-4">
        <a
          className="flex items-center gap-3 group shrink-0"
          href={onHome ? '#top' : withBase('/')}
          onClick={() => {
            clearSettleTimer()
            lockedHref.current = null
            setActiveHref('')
            closeMenu()
          }}
        >
          <img
            alt={t.logoAlt}
            className="h-10 w-10 rounded-full object-cover shadow-md shadow-salmon-500/20 group-hover:scale-105 transition-transform border border-salmon-400/30"
            src={logo}
          />
          <div className="flex items-center gap-2 min-w-0">
            <span className="font-headline-sm text-xl text-charcoal-pure dark:text-white font-extrabold tracking-tight">
              {t.brand}
            </span>
          </div>
        </a>

        <nav
          className="hidden xl:flex items-center gap-1 p-1.5 bg-slate-100/80 dark:bg-dark-card rounded-full border border-slate-200/80 dark:border-dark-border shrink-0"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              aria-current={!onBusiness && activeHref === link.href ? 'true' : undefined}
              className={navLinkClass(!onBusiness && activeHref === link.href)}
              href={sectionHref(link.href)}
              onClick={() => selectLink(link.href)}
            >
              {t.nav[link.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            className="px-3 py-1.5 rounded-full text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-100 hover:bg-slate-200 dark:bg-dark-card dark:hover:bg-dark-card-soft border border-slate-200 dark:border-dark-border transition-colors flex items-center gap-1.5"
            title={t.nav.langTitle}
            type="button"
            onClick={toggleLang}
          >
            <Icon name="translate" className="text-[16px] text-salmon-500" />
            <span>{t.nav.langSwitch}</span>
          </button>

          <button
            aria-label={theme === 'dark' ? t.nav.themeLight : t.nav.themeDark}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-dark-card text-slate-700 dark:text-salmon-400 hover:bg-salmon-100/60 dark:hover:bg-dark-card-soft border border-slate-200 dark:border-dark-border transition-all"
            type="button"
            onClick={toggleTheme}
          >
            <Icon
              name={theme === 'dark' ? 'light_mode' : 'dark_mode'}
              className={`text-[20px] ${theme === 'dark' ? 'text-salmon-400' : ''}`}
            />
          </button>

          <a
            className={`hidden sm:inline-flex items-center gap-2 px-4 lg:px-5 py-2.5 rounded-full font-bold transition-all ${startButtonClass}`}
            href={startHref}
            aria-current={onBusiness ? 'true' : undefined}
            onClick={() => {
              clearSettleTimer()
              lockedHref.current = null
              setActiveHref('')
              closeMenu()
            }}
          >
            <span className="whitespace-nowrap">{t.nav.start}</span>
            <Icon name="arrow_forward" className="text-[18px] rtl:rotate-180" />
          </a>

          <button
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
            className="xl:hidden w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-dark-card text-slate-700 dark:text-salmon-400 border border-slate-200 dark:border-dark-border shrink-0"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} className="text-[22px]" />
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div
          className="xl:hidden border-t border-salmon-500/20 dark:border-salmon-400/15 bg-white dark:bg-[#0E1420]"
          id="mobile-nav"
        >
          <nav className="page-shell py-4 flex flex-col gap-2" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                aria-current={!onBusiness && activeHref === link.href ? 'true' : undefined}
                className={mobileNavLinkClass(!onBusiness && activeHref === link.href)}
                href={sectionHref(link.href)}
                onClick={() => selectLink(link.href)}
              >
                {t.nav[link.key]}
              </a>
            ))}
            <a
              className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-label-md text-charcoal-pure font-bold bg-gradient-to-r from-salmon-400 via-primary-container to-salmon-500"
              href={startHref}
              aria-current={onBusiness ? 'true' : undefined}
              onClick={() => {
                clearSettleTimer()
                lockedHref.current = null
                setActiveHref('')
                closeMenu()
              }}
            >
              <span>{t.nav.start}</span>
              <Icon name="arrow_forward" className="text-[18px] rtl:rotate-180" />
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
