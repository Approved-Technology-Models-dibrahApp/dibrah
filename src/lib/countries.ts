export type CountryId = 'SA' | 'AE' | 'KW' | 'BH' | 'QA' | 'OM' | 'EG' | 'JO' | 'OTHER'

export type CountryOption = {
  id: CountryId
  dial: string
  en: string
  ar: string
  nationalMin: number
  nationalMax: number
}

export const COUNTRIES: CountryOption[] = [
  { id: 'SA', dial: '+966', en: 'Saudi Arabia', ar: 'المملكة العربية السعودية', nationalMin: 9, nationalMax: 9 },
  { id: 'AE', dial: '+971', en: 'United Arab Emirates', ar: 'الإمارات العربية المتحدة', nationalMin: 8, nationalMax: 9 },
  { id: 'KW', dial: '+965', en: 'Kuwait', ar: 'الكويت', nationalMin: 8, nationalMax: 8 },
  { id: 'BH', dial: '+973', en: 'Bahrain', ar: 'البحرين', nationalMin: 8, nationalMax: 8 },
  { id: 'QA', dial: '+974', en: 'Qatar', ar: 'قطر', nationalMin: 8, nationalMax: 8 },
  { id: 'OM', dial: '+968', en: 'Oman', ar: 'عُمان', nationalMin: 8, nationalMax: 8 },
  { id: 'EG', dial: '+20', en: 'Egypt', ar: 'مصر', nationalMin: 9, nationalMax: 10 },
  { id: 'JO', dial: '+962', en: 'Jordan', ar: 'الأردن', nationalMin: 8, nationalMax: 9 },
  { id: 'OTHER', dial: '+966', en: 'Other', ar: 'دولة أخرى', nationalMin: 6, nationalMax: 15 },
]

export const DIAL_CODES = [
  '+966',
  '+971',
  '+965',
  '+973',
  '+974',
  '+968',
  '+20',
  '+962',
  '+964',
  '+961',
  '+963',
  '+967',
  '+970',
  '+972',
  '+90',
  '+92',
  '+91',
  '+44',
  '+1',
  '+33',
  '+49',
] as const

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

export function digitsOnly(value: string) {
  const digits = value.replace(/\D/g, '')
  return digits.startsWith('0') ? digits.slice(1) : digits
}

export function formatPhone(dial: string, national: string) {
  const local = digitsOnly(national)
  return local ? `${dial}${local}` : dial
}

export function isValidNationalNumber(countryId: CountryId, national: string) {
  const digits = digitsOnly(national)
  const country = countryById(countryId)
  if (digits.length < country.nationalMin || digits.length > country.nationalMax) return false
  if (countryId === 'SA') return /^5\d{8}$/.test(digits)
  return true
}
