export const GOOGLE_FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLSdBUPBIPc1rY1It0a0qnjaOfTrYSv_eo3gu1G33xfcjVcRFBw/formResponse'

export const GOOGLE_FORM_ENTRIES = {
  name: 'entry.951612916',
  email: 'entry.90306116',
  country: 'entry.22344068',
  gender: 'entry.1050870361',
  phone: 'entry.1796801114',
  accountType: 'entry.1348701074',
  details: 'entry.1282665414',
} as const

export const GOOGLE_FORM_OPTIONS = {
  genderMale: 'ذكر / Male',
  genderFemale: 'أنثى / Female',
  merchant: 'تاجر / Merchant',
  customer: 'زبون / Customer',
  opportunity: 'فرصة عمل / Business Opportunity',
} as const

export type AccountType = 'merchant' | 'customer' | 'opportunity'

export type GoogleFormPayload = {
  name: string
  email: string
  country: string
  gender: string
  phone: string
  accountType: AccountType
  details: string
}

function accountTypeValue(type: AccountType) {
  if (type === 'customer') return GOOGLE_FORM_OPTIONS.customer
  if (type === 'opportunity') return GOOGLE_FORM_OPTIONS.opportunity
  return GOOGLE_FORM_OPTIONS.merchant
}

function buildParams(payload: GoogleFormPayload) {
  const params = new URLSearchParams()
  params.set(GOOGLE_FORM_ENTRIES.name, payload.name.trim())
  params.set(GOOGLE_FORM_ENTRIES.email, payload.email.trim())
  params.set(GOOGLE_FORM_ENTRIES.country, payload.country.trim())
  if (payload.gender) {
    params.set(GOOGLE_FORM_ENTRIES.gender, payload.gender)
  }
  if (payload.phone.trim()) {
    params.set(GOOGLE_FORM_ENTRIES.phone, payload.phone.trim())
  }
  params.set(GOOGLE_FORM_ENTRIES.accountType, accountTypeValue(payload.accountType))
  params.set(GOOGLE_FORM_ENTRIES.details, payload.details.trim())
  params.set('fvv', '1')
  params.set('pageHistory', '0')
  return params
}

function submitViaHiddenIframe(params: URLSearchParams) {
  return new Promise<void>((resolve) => {
    const iframeName = `dibrah-gform-${Date.now()}`
    const iframe = document.createElement('iframe')
    iframe.name = iframeName
    iframe.title = 'Google Form submission'
    iframe.style.display = 'none'
    iframe.setAttribute('aria-hidden', 'true')

    const form = document.createElement('form')
    form.action = GOOGLE_FORM_ACTION
    form.method = 'POST'
    form.target = iframeName
    form.acceptCharset = 'UTF-8'
    form.style.display = 'none'

    for (const [key, value] of params.entries()) {
      const input = document.createElement('input')
      input.type = 'hidden'
      input.name = key
      input.value = value
      form.appendChild(input)
    }

    let finished = false
    const finish = () => {
      if (finished) return
      finished = true
      form.remove()
      iframe.remove()
      resolve()
    }

    let isFirstLoad = true
    iframe.addEventListener('load', () => {
      if (isFirstLoad) {
        isFirstLoad = false
        return
      }
      finish()
    })

    document.body.appendChild(iframe)
    document.body.appendChild(form)
    form.submit()
    window.setTimeout(finish, 2500)
  })
}

export async function submitGoogleForm(payload: GoogleFormPayload) {
  const params = buildParams(payload)

  try {
    await fetch(GOOGLE_FORM_ACTION, {
      method: 'POST',
      mode: 'no-cors',
      credentials: 'omit',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    })
  } catch {
    await submitViaHiddenIframe(params)
  }
}
