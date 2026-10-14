export type CountryId = 'SA' | 'AE' | 'KW' | 'BH' | 'QA' | 'OM' | 'EG' | 'JO' | 'OTHER'

export type CountryOption = {
  id: CountryId
  dial: string
  en: string
  ar: string
}

export const COUNTRIES: CountryOption[] = [
  { id: 'SA', dial: '+966', en: 'Saudi Arabia', ar: 'المملكة العربية السعودية' },
  { id: 'AE', dial: '+971', en: 'United Arab Emirates', ar: 'الإمارات العربية المتحدة' },
  { id: 'KW', dial: '+965', en: 'Kuwait', ar: 'الكويت' },
  { id: 'BH', dial: '+973', en: 'Bahrain', ar: 'البحرين' },
  { id: 'QA', dial: '+974', en: 'Qatar', ar: 'قطر' },
  { id: 'OM', dial: '+968', en: 'Oman', ar: 'عُمان' },
  { id: 'EG', dial: '+20', en: 'Egypt', ar: 'مصر' },
  { id: 'JO', dial: '+962', en: 'Jordan', ar: 'الأردن' },
  { id: 'OTHER', dial: '+', en: 'Other', ar: 'دولة أخرى' },
]

const TIMEZONE_COUNTRY: Record<string, CountryId> = {
  'Asia/Riyadh': 'SA',
  'Asia/Dubai': 'AE',
  'Asia/Muscat': 'OM',
  'Asia/Kuwait': 'KW',
  'Asia/Bahrain': 'BH',
  'Asia/Qatar': 'QA',
  'Africa/Cairo': 'EG',
  'Asia/Amman': 'JO',
}

export function countryById(id: string) {
  return COUNTRIES.find((country) => country.id === id) ?? COUNTRIES[0]
}

export function detectCountryId(): CountryId {
  try {
    const locale = navigator.language.toUpperCase()
    const match = COUNTRIES.find((country) => locale.endsWith(`-${country.id}`))
    if (match) return match.id

    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    if (timeZone && TIMEZONE_COUNTRY[timeZone]) return TIMEZONE_COUNTRY[timeZone]
  } catch {
    /* keep Saudi default */
  }
  return 'SA'
}

export function phoneExample(countryId: CountryId) {
  const dial = countryById(countryId).dial
  return dial === '+' ? '+966 5XXXXXXX' : `${dial} 5XXXXXXX`
}

const MAX_PHONE_DIGITS = 15

export function limitPhoneInput(value: string) {
  let digits = 0
  let result = ''
  for (const char of value) {
    if (char === '+' && result.length === 0) {
      result += char
      continue
    }
    if (/[\s()-]/.test(char) && result.length > 0) {
      result += char
      continue
    }
    if (/\d/.test(char) && digits < MAX_PHONE_DIGITS) {
      result += char
      digits += 1
    }
  }
  return result
}

export function isValidInternationalPhone(value: string) {
  const compact = value.replace(/[\s()-]/g, '')
  return /^\+\d{8,15}$/.test(compact)
}
