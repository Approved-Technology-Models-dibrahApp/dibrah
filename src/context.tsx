import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { copy, type Copy, type Lang } from './i18n/content'
import { appPath } from './lib/paths'

type Theme = 'light' | 'dark'

type AppContextValue = {
  lang: Lang
  theme: Theme
  t: Copy
  dir: 'ltr' | 'rtl'
  toggleLang: () => void
  toggleTheme: () => void
}

const AppContext = createContext<AppContextValue | null>(null)

function readInitialLang(): Lang {
  try {
    return localStorage.getItem('dibrah-lang') === 'ar' ? 'ar' : 'en'
  } catch {
    return 'en'
  }
}

function readInitialTheme(): Theme {
  try {
    const saved = localStorage.getItem('dibrah-theme')
    if (saved === 'dark' || saved === 'light') return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  } catch {
    return 'light'
  }
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(readInitialLang)
  const [theme, setTheme] = useState<Theme>(readInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    root.lang = lang
    root.dir = lang === 'ar' ? 'rtl' : 'ltr'
    localStorage.setItem('dibrah-lang', lang)
    const path = appPath()
    if (path === '/terms') {
      document.title = lang === 'ar' ? 'الشروط والأحكام | دِبــرة' : 'Terms & Conditions | dibrah'
    } else if (path === '/privacy') {
      document.title = lang === 'ar' ? 'سياسة الخصوصية | دِبــرة' : 'Privacy Policy | dibrah'
    } else {
      document.title =
        lang === 'ar'
          ? 'دِبــرة - تمكين المنشآت وإثراء تجربة العملاء'
          : 'dibrah - Empowering SMEs & Enriching Customer Experience'
    }
  }, [lang])

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('dibrah-theme', theme)
  }, [theme])

  const toggleLang = useCallback(() => {
    setLang((current) => (current === 'en' ? 'ar' : 'en'))
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }, [])

  const value = useMemo<AppContextValue>(
    () => ({
      lang,
      theme,
      t: copy[lang],
      dir: lang === 'ar' ? 'rtl' : 'ltr',
      toggleLang,
      toggleTheme,
    }),
    [lang, theme, toggleLang, toggleTheme],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) {
    throw new Error('useApp must be used within AppProvider')
  }
  return ctx
}
