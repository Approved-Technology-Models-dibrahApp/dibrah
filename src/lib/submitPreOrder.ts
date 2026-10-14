import { PREORDER_NOTIFY_EMAIL } from '../i18n/content'

export type PreOrderPayload = {
  name: string
  email: string
  country: string
  gender: string
  phone: string
  accountType: 'merchant' | 'customer'
  details: string
}

export async function submitPreOrder(payload: PreOrderPayload) {
  const response = await fetch(`https://formsubmit.co/ajax/${PREORDER_NOTIFY_EMAIL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      _subject: 'dibrah pre-order interest',
      _template: 'table',
      _captcha: 'false',
      _replyto: payload.email.trim(),
      Name: payload.name.trim(),
      Email: payload.email.trim(),
      Phone: payload.phone.trim() || '—',
      Country: payload.country.trim(),
      Gender: payload.gender.trim() || '—',
      'Account type': payload.accountType === 'customer' ? 'Customer' : 'Merchant',
      Details: payload.details.trim(),
    }),
  })

  if (!response.ok) {
    throw new Error('Pre-order email could not be sent')
  }

  const result = (await response.json()) as { success?: boolean | string }
  if (result.success === false || result.success === 'false') {
    throw new Error('Pre-order email could not be sent')
  }
}
