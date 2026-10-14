import { useState, type FormEvent } from 'react'
import logo from '../assets/dibrah-logo.jpg'
import { useApp } from '../context'
import { CONTACT_EMAIL } from '../i18n/content'
import { submitPreOrder } from '../lib/submitPreOrder'
import { Icon } from './Icon'

type Persona = 'merchant' | 'customer'

export function PreOrder() {
  const { t } = useApp()
  const [persona, setPersona] = useState<Persona>('merchant')
  const [gender, setGender] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.checkValidity()) {
      setError(t.preorder.errorRequired)
      return
    }

    const data = new FormData(form)
    const name = String(data.get('name') ?? '')
    const email = String(data.get('email') ?? '')
    const phone = String(data.get('phone') ?? '')
    const country = String(data.get('country') ?? '')
    const details = String(data.get('details') ?? '')

    setError('')
    setSubmitting(true)
    try {
      await submitPreOrder({
        name,
        email,
        country,
        gender,
        phone,
        accountType: persona,
        details,
      })
      setSubmitted(true)
      form.reset()
      setGender('')
    } catch {
      setError(t.preorder.submitFailed)
    } finally {
      setSubmitting(false)
    }
  }

  const fieldClass =
    'w-full px-4 py-3.5 rounded-2xl bg-slate-50 dark:bg-dark-card-soft text-charcoal-pure dark:text-white border border-slate-200 dark:border-dark-border focus:border-salmon-500 focus:outline-none transition-colors disabled:opacity-60'
  const labelClass = 'text-sm text-charcoal-pure dark:text-white font-bold'

  return (
    <section
      className="w-full py-20 bg-slate-100/60 dark:bg-dark-bg/60 border-t border-slate-200 dark:border-dark-border"
      id="pre-order"
    >
      <div className="page-shell">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-14 items-start">
            <div className="xl:col-span-5 flex flex-col gap-6 xl:sticky xl:top-28">
              <div className="flex items-center gap-3">
                <img
                  alt={t.logoAlt}
                  className="h-10 w-10 rounded-full object-cover border border-salmon-400"
                  src={logo}
                />
                <span className="px-3.5 py-1.5 rounded-full bg-salmon-500/20 border border-salmon-400/40 font-label-sm text-xs text-salmon-700 dark:text-salmon-300 font-bold uppercase tracking-wider">
                  {t.preorder.kicker}
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="text-3xl sm:text-4xl text-charcoal-pure dark:text-white font-extrabold font-headline-lg leading-tight">
                  <span className="block">{t.preorder.titlePrimary}</span>
                  {t.preorder.titleSecondary ? (
                    <span className="block mt-1 text-xl sm:text-2xl font-bold text-slate-500 dark:text-slate-300">
                      {t.preorder.titleSecondary}
                    </span>
                  ) : null}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  <span className="block">{t.preorder.subtitlePrimary}</span>
                  {t.preorder.subtitleSecondary ? (
                    <span className="block mt-1">{t.preorder.subtitleSecondary}</span>
                  ) : null}
                </p>
              </div>
              <div className="pt-2 text-sm text-slate-500 dark:text-slate-400 flex flex-col gap-1">
                <p className="font-bold text-charcoal-pure dark:text-slate-200">{t.preorder.company}</p>
                <p>{t.preorder.address}</p>
                <p>
                  {t.preorder.inquiries}{' '}
                  <a
                    className="text-salmon-600 dark:text-salmon-400 font-semibold hover:underline"
                    href={`mailto:${CONTACT_EMAIL}`}
                  >
                    {CONTACT_EMAIL}
                  </a>
                </p>
              </div>
            </div>

            <div className="xl:col-span-7">
              <div className="rounded-3xl bg-white dark:bg-dark-card border border-slate-200/90 dark:border-dark-border shadow-[0_18px_48px_rgba(15,23,42,0.08)] p-6 sm:p-8 lg:p-10 flex flex-col gap-7">
              {submitted ? (
                <div
                  className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-500/40 text-sm sm:text-base text-emerald-700 dark:text-emerald-300 font-medium"
                  role="status"
                >
                  <p className="font-extrabold text-lg">{t.preorder.successTitle}</p>
                  <p className="mt-2 leading-relaxed">{t.preorder.successBody}</p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-1.5 rounded-2xl bg-slate-100/80 dark:bg-dark-card-soft" role="tablist">
                    <button
                      className={`flex flex-col items-start gap-1 p-4 rounded-xl text-start transition-all ${
                        persona === 'merchant'
                          ? 'bg-white dark:bg-dark-card border border-salmon-400/70 shadow-[0_6px_20px_rgba(242,116,104,0.16)]'
                          : 'border border-transparent hover:bg-white/70 dark:hover:bg-dark-card'
                      }`}
                      type="button"
                      role="tab"
                      aria-selected={persona === 'merchant'}
                      onClick={() => setPersona('merchant')}
                    >
                      <span className="flex items-center gap-2 text-charcoal-pure dark:text-white">
                        <Icon name="store" className="text-salmon-500 text-[22px]" />
                        <span className="font-bold text-sm sm:text-base">{t.preorder.personaMerchantTitle}</span>
                      </span>
                      <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 ps-8">
                        {t.preorder.personaMerchantHint}
                      </span>
                    </button>
                    <button
                      className={`flex flex-col items-start gap-1 p-4 rounded-xl text-start transition-all ${
                        persona === 'customer'
                          ? 'bg-white dark:bg-dark-card border border-salmon-400/70 shadow-[0_6px_20px_rgba(242,116,104,0.16)]'
                          : 'border border-transparent hover:bg-white/70 dark:hover:bg-dark-card'
                      }`}
                      type="button"
                      role="tab"
                      aria-selected={persona === 'customer'}
                      onClick={() => setPersona('customer')}
                    >
                      <span className="flex items-center gap-2 text-charcoal-pure dark:text-white">
                        <Icon name="shopping_bag" className="text-salmon-500 text-[22px]" />
                        <span className="font-bold text-sm sm:text-base">{t.preorder.personaCustomerTitle}</span>
                      </span>
                      <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 ps-8">
                        {t.preorder.personaCustomerHint}
                      </span>
                    </button>
                  </div>

                  <form className="flex flex-col gap-5" onSubmit={onSubmit} noValidate>
                    <div className="flex flex-col gap-2">
                      <label className={labelClass} htmlFor="entity-name">
                        {persona === 'customer' ? t.preorder.nameLabelCustomer : t.preorder.nameLabelMerchant}
                      </label>
                      <input
                        className={fieldClass}
                        disabled={submitting}
                        id="entity-name"
                        name="name"
                        placeholder={
                          persona === 'customer'
                            ? t.preorder.namePlaceholderCustomer
                            : t.preorder.namePlaceholderMerchant
                        }
                        required
                        type="text"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className={labelClass} htmlFor="contact-email">
                          {t.preorder.emailLabel}
                        </label>
                        <input
                          className={fieldClass}
                          disabled={submitting}
                          id="contact-email"
                          name="email"
                          placeholder={t.preorder.emailPlaceholder}
                          required
                          type="email"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className={labelClass} htmlFor="contact-phone">
                          {t.preorder.phoneLabel}
                        </label>
                        <input
                          className={fieldClass}
                          disabled={submitting}
                          id="contact-phone"
                          name="phone"
                          placeholder={t.preorder.phonePlaceholder}
                          type="tel"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className={labelClass} htmlFor="country-select">
                          {t.preorder.countryLabel}
                        </label>
                        <select
                          className={`${fieldClass} country-select pe-11`}
                          disabled={submitting}
                          id="country-select"
                          name="country"
                          required
                          defaultValue={t.preorder.countries[0]}
                        >
                          {t.preorder.countries.map((country) => (
                            <option key={country}>{country}</option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className={labelClass}>{t.preorder.genderLabel}</span>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            className={`px-3 py-3.5 rounded-2xl border text-sm font-semibold transition-colors ${
                              gender === 'Male'
                                ? 'border-salmon-400 bg-salmon-50 dark:bg-salmon-950/30 text-charcoal-pure dark:text-white'
                                : 'border-slate-200 dark:border-dark-border bg-slate-50 dark:bg-dark-card-soft text-slate-600 dark:text-slate-300'
                            }`}
                            disabled={submitting}
                            type="button"
                            onClick={() => setGender('Male')}
                          >
                            {t.preorder.genderMale}
                          </button>
                          <button
                            className={`px-3 py-3.5 rounded-2xl border text-sm font-semibold transition-colors ${
                              gender === 'Female'
                                ? 'border-salmon-400 bg-salmon-50 dark:bg-salmon-950/30 text-charcoal-pure dark:text-white'
                                : 'border-slate-200 dark:border-dark-border bg-slate-50 dark:bg-dark-card-soft text-slate-600 dark:text-slate-300'
                            }`}
                            disabled={submitting}
                            type="button"
                            onClick={() => setGender('Female')}
                          >
                            {t.preorder.genderFemale}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className={labelClass} htmlFor="request-details">
                        {t.preorder.detailsLabel}
                      </label>
                      <textarea
                        className={`${fieldClass} min-h-28 resize-y`}
                        disabled={submitting}
                        id="request-details"
                        name="details"
                        placeholder={t.preorder.detailsPlaceholder}
                        required
                        rows={4}
                      />
                    </div>
                    {error ? (
                      <p className="text-sm text-coral-alert font-medium" role="alert">
                        {error}
                      </p>
                    ) : null}
                    <button
                      className="w-full py-4 rounded-full text-charcoal-pure font-bold bg-gradient-to-r from-salmon-400 via-primary-container to-salmon-500 hover:from-salmon-300 hover:to-salmon-400 transition-all shadow-[0_8px_24px_rgba(242,116,104,0.45)] hover:shadow-[0_10px_28px_rgba(242,116,104,0.6)] flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:translate-y-0"
                      disabled={submitting}
                      type="submit"
                    >
                      <span>{submitting ? t.preorder.submitting : t.preorder.submit}</span>
                      <Icon name={submitting ? 'progress_activity' : 'send'} className="text-[20px]" />
                    </button>
                    <p className="text-center text-xs text-slate-500 dark:text-slate-400">
                      {t.preorder.footnote}
                    </p>
                  </form>
                </>
              )}
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}
