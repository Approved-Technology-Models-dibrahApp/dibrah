export const GOOGLE_FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLScME0DdKzn1RoMky5LABM7gZxImvoiQh_rFanZbX4pu5hKEJQ/formResponse'

export const GOOGLE_FORM_ENTRIES = {
  name: 'entry.1425841404',
  email: 'entry.1785221743',
  country: 'entry.766586296',
  gender: 'entry.33282545',
  phone: 'entry.871156733',
  accountType: 'entry.638895621',
  details: 'entry.867378080',
} as const

export const GOOGLE_FORM_OPTIONS = {
  genderMale: 'ذكر / Male',
  genderFemale: 'أنثى / Female',
  merchant: 'تاجر / Merchant',
  customer: 'زبون / Customer',
} as const

export type GoogleFormPayload = {
  name: string
  email: string
  country: string
  gender: string
  phone: string
  accountType: 'merchant' | 'customer'
  details: string
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
  params.set(
    GOOGLE_FORM_ENTRIES.accountType,
    payload.accountType === 'customer' ? GOOGLE_FORM_OPTIONS.customer : GOOGLE_FORM_OPTIONS.merchant,
  )
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
