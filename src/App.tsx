import { useEffect, useLayoutEffect, useState } from 'react'
import { Capabilities } from './components/Capabilities'
import { Experience } from './components/Experience'
import { BusinessPage } from './components/BusinessPage'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LegalPage } from './components/LegalPage'
import { PreOrder } from './components/PreOrder'
import { TrustedNetwork } from './components/TrustedNetwork'
import { WhyDibrah } from './components/WhyDibrah'
import { AppProvider, useApp } from './context'
import { appPath } from './lib/paths'
import { jumpToTop } from './lib/scroll'

function LandingPage() {
  const { t } = useApp()

  useLayoutEffect(() => {
    const id = window.location.hash.slice(1)
    if (id) {
      document.getElementById(id)?.scrollIntoView()
      return
    }
    jumpToTop()
  }, [])

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
        <div className="flex flex-col w-full" id="top">
          <Hero />
          <Experience />
          <WhyDibrah />
          <Capabilities />
          <TrustedNetwork />
          <PreOrder />
        </div>
      </main>
      <Footer />
    </div>
  )
}

function usePath() {
  const [path, setPath] = useState(() => appPath(window.location.pathname))

  useEffect(() => {
    const sync = () => setPath(appPath(window.location.pathname))
    window.addEventListener('popstate', sync)

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      const target = event.target
      if (!(target instanceof Element)) return
      const anchor = target.closest('a')
      if (!anchor || anchor.target === '_blank' || anchor.hasAttribute('download')) return
      const href = anchor.getAttribute('href')
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('http')) return
      let url: URL
      try {
        url = new URL(href, window.location.href)
      } catch {
        return
      }
      if (url.origin !== window.location.origin) return
      event.preventDefault()
      const next = `${url.pathname}${url.search}${url.hash}`
      const current = `${window.location.pathname}${window.location.search}${window.location.hash}`
      if (next !== current) {
        window.history.pushState({}, '', next)
      }
      setPath(appPath(url.pathname))
      if (url.hash) {
        window.setTimeout(() => {
          document.getElementById(url.hash.slice(1))?.scrollIntoView()
        }, 50)
      }
    }

    document.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('popstate', sync)
      document.removeEventListener('click', onClick)
    }
  }, [])

  return path
}

function Router() {
  const path = usePath()
  const { lang } = useApp()

  useEffect(() => {
    if (path === '/terms') {
      document.title = lang === 'ar' ? 'الشروط والأحكام | دِبــرة' : 'Terms & Conditions | dibrah'
    } else if (path === '/privacy') {
      document.title = lang === 'ar' ? 'سياسة الخصوصية | دِبــرة' : 'Privacy Policy | dibrah'
    } else if (path === '/for-business') {
      document.title = lang === 'ar' ? 'ابدأ مع دِبرة | دِبــرة' : 'Start with Dibrah | dibrah'
    } else {
      document.title =
        lang === 'ar'
          ? 'دِبــرة - تمكين المنشآت وإثراء تجربة العملاء'
          : 'dibrah - Empowering SMEs & Enriching Customer Experience'
    }
  }, [path, lang])

  if (path === '/terms') return <LegalPage kind="terms" />
  if (path === '/privacy') return <LegalPage kind="privacy" />
  if (path === '/for-business') return <BusinessPage />
  return <LandingPage />
}

export default function App() {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  )
}
