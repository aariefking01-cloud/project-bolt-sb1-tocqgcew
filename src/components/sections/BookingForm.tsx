import { useState, type FormEvent } from 'react';
import {
  Send,
  MessageCircle,
  Phone,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { supabase } from '@/lib/supabase';
import {
  BUSINESS,
  buildCallUrl,
  buildWhatsAppUrl,
} from '@/lib/constants';
import SectionHeading from '@/components/ui/SectionHeading';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

interface FormData {
  name: string;
  phone: string;
  email: string;
  event_type: string;
  event_date: string;
  event_time: string;
  location: string;
  guest_count: string;
  security_requirement: string;
  bouncer_count: string;
  additional_requirements: string;
  contact_preference: string;
}

const EMPTY_FORM: FormData = {
  name: '',
  phone: '',
  email: '',
  event_type: '',
  event_date: '',
  event_time: '',
  location: '',
  guest_count: '',
  security_requirement: '',
  bouncer_count: '',
  additional_requirements: '',
  contact_preference: 'WhatsApp',
};

const EVENT_TYPES = [
  'Wedding',
  'Private Party',
  'Nightclub / Pub',
  'Corporate Event',
  'VIP Event',
  'Special Function',
  'Other',
];

const inputClass =
  'w-full px-4 py-3 rounded-lg bg-ink-850 border border-ink-700/60 text-ink-50 text-sm placeholder-ink-400 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 transition-all duration-200';
const labelClass =
  'block text-xs font-display font-medium tracking-wider uppercase text-ink-200 mb-2';
const errorClass = 'mt-1 text-xs text-red-400';

export default function BookingForm() {
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [lastSubmitted, setLastSubmitted] = useState<FormData>(EMPTY_FORM);
  const [state, setState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) e.name = 'Please enter your full name';
    if (!form.phone.trim()) e.phone = 'Please enter your phone number';
    else if (!/^[+]?[\d\s-]{8,15}$/.test(form.phone.trim()))
      e.phone = 'Please enter a valid phone number';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Please enter a valid email address';
    if (!form.event_type) e.event_type = 'Please select an event type';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const buildWhatsAppMessage = (data: FormData = form): string => {
    const lines = [
      '🛡️ *PUDUVAI BOUNCERS - EVENT BOOKING REQUEST*',
      '----------------------------------------',
      `👤 *Name:* ${data.name || 'Not specified'}`,
      `📞 *Phone:* ${data.phone || 'Not specified'}`,
    ];
    if (data.email) lines.push(`✉️ *Email:* ${data.email}`);
    lines.push(`🎉 *Event Type:* ${data.event_type || 'General Bouncer Support'}`);
    if (data.event_date) lines.push(`📅 *Date:* ${data.event_date}`);
    if (data.event_time) lines.push(`⏰ *Time:* ${data.event_time}`);
    if (data.location) lines.push(`📍 *Location:* ${data.location}`);
    if (data.guest_count) lines.push(`👥 *Expected Guests:* ${data.guest_count}`);
    if (data.bouncer_count) lines.push(`💪 *Bouncers Required:* ${data.bouncer_count}`);
    if (data.security_requirement)
      lines.push(`🛡️ *Security Focus:* ${data.security_requirement}`);
    if (data.additional_requirements)
      lines.push(`📝 *Notes:* ${data.additional_requirements}`);
    lines.push(`📲 *Preferred Contact:* ${data.contact_preference || 'WhatsApp'}`);
    return lines.join('\n');
  };

  const persistToDatabase = async (data: FormData) => {
    try {
      await supabase.from('booking_requests').insert({
        name: data.name.trim(),
        phone: data.phone.trim(),
        email: data.email.trim() || null,
        event_type: data.event_type,
        event_date: data.event_date || null,
        event_time: data.event_time || null,
        location: data.location.trim() || null,
        guest_count: data.guest_count.trim() || null,
        security_requirement: data.security_requirement.trim() || null,
        bouncer_count: data.bouncer_count.trim() || null,
        additional_requirements: data.additional_requirements.trim() || null,
        contact_preference: data.contact_preference || 'WhatsApp',
      });
    } catch (err) {
      console.warn('Booking persisted locally / mock:', err);
    }
  };

  const handleSendWhatsApp = async () => {
    if (!validate()) return;
    setState('submitting');
    await persistToDatabase(form);
    const msg = buildWhatsAppMessage(form);
    const url = buildWhatsAppUrl(msg);
    setLastSubmitted(form);
    setState('success');
    setForm(EMPTY_FORM);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    setState('submitting');
    try {
      await persistToDatabase(form);
      const submitted = { ...form };
      setLastSubmitted(submitted);
      setState('success');
      setForm(EMPTY_FORM);

      if (submitted.contact_preference === 'WhatsApp') {
        const url = buildWhatsAppUrl(buildWhatsAppMessage(submitted));
        window.open(url, '_blank', 'noopener,noreferrer');
      }
    } catch (err) {
      console.error('Booking submission failed:', err);
      setState('error');
    }
  };

  if (state === 'success') {
    const successData = lastSubmitted.name ? lastSubmitted : form;

    return (
      <section id="book" className="py-20 sm:py-28 bg-ink-950">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center p-8 sm:p-10 rounded-2xl bg-ink-900 border border-green-600/30 shadow-2xl">
            <div className="w-20 h-20 mx-auto rounded-full bg-green-500/10 flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-400" strokeWidth={1.5} />
            </div>
            <h3 className="font-display font-semibold text-2xl text-ink-50 mb-2">
              Request Received!
            </h3>
            <p className="text-ink-300 leading-relaxed mb-6">
              Your request for{' '}
              <span className="text-gold-400 font-medium">
                {successData.event_type || 'Bouncer Services'}
              </span>{' '}
              has been recorded. Connect with our team on WhatsApp or call our hotline directly for immediate confirmation!
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              <a
                href={buildWhatsAppUrl(buildWhatsAppMessage(successData))}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 bg-green-600 hover:bg-green-500 text-white font-semibold text-sm uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-600/20"
              >
                <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
                Send via WhatsApp
              </a>

              <a
                href={buildCallUrl()}
                className="px-5 py-3.5 bg-ink-800 hover:bg-ink-700 border border-gold-500/40 text-gold-400 font-semibold text-sm uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" strokeWidth={1.5} />
                Call Dispatch
              </a>
            </div>

            <button
              onClick={() => setState('idle')}
              className="text-xs font-display tracking-wider uppercase text-ink-400 hover:text-ink-200 transition-colors"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="book" className="py-20 sm:py-28 bg-ink-950 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold-500/5 blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get Started"
          title={
            <>
              Request <span className="text-gradient-gold">Bouncers</span>
            </>
          }
          subtitle="Fill out the form below and our team will get back to you. For urgent enquiries, call or WhatsApp us directly."
        />

        <form
          onSubmit={handleSubmit}
          className="mt-10 sm:mt-12 p-4 sm:p-8 rounded-xl sm:rounded-2xl bg-ink-900 border border-ink-700/50 space-y-5"
          noValidate
        >
          {/* Name + Phone */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className={labelClass}>
                Full Name *
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => update('name', e.target.value)}
                className={inputClass}
                placeholder="Your name"
                disabled={state === 'submitting'}
              />
              {errors.name && <p className={errorClass}>{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone Number *
              </label>
              <input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={(e) => update('phone', e.target.value)}
                className={inputClass}
                placeholder="Your phone number"
                disabled={state === 'submitting'}
              />
              {errors.phone && <p className={errorClass}>{errors.phone}</p>}
            </div>
          </div>

          {/* Email + Event Type */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="email" className={labelClass}>
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
                className={inputClass}
                placeholder="Your email (optional)"
                disabled={state === 'submitting'}
              />
              {errors.email && <p className={errorClass}>{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="event_type" className={labelClass}>
                Event Type *
              </label>
              <select
                id="event_type"
                value={form.event_type}
                onChange={(e) => update('event_type', e.target.value)}
                className={inputClass}
                disabled={state === 'submitting'}
              >
                <option value="">Select event type</option>
                {EVENT_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              {errors.event_type && (
                <p className={errorClass}>{errors.event_type}</p>
              )}
            </div>
          </div>

          {/* Date + Time */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="event_date" className={labelClass}>
                Event Date
              </label>
              <input
                id="event_date"
                type="date"
                value={form.event_date}
                onChange={(e) => update('event_date', e.target.value)}
                className={`${inputClass} [color-scheme:dark]`}
                disabled={state === 'submitting'}
              />
            </div>
            <div>
              <label htmlFor="event_time" className={labelClass}>
                Event Time
              </label>
              <input
                id="event_time"
                type="time"
                value={form.event_time}
                onChange={(e) => update('event_time', e.target.value)}
                className={`${inputClass} [color-scheme:dark]`}
                disabled={state === 'submitting'}
              />
            </div>
          </div>

          {/* Location + Guest Count */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="location" className={labelClass}>
                Event Location
              </label>
              <input
                id="location"
                type="text"
                value={form.location}
                onChange={(e) => update('location', e.target.value)}
                className={inputClass}
                placeholder="Venue / address"
                disabled={state === 'submitting'}
              />
            </div>
            <div>
              <label htmlFor="guest_count" className={labelClass}>
                Expected Guest Count
              </label>
              <input
                id="guest_count"
                type="text"
                value={form.guest_count}
                onChange={(e) => update('guest_count', e.target.value)}
                className={inputClass}
                placeholder="e.g. 200"
                disabled={state === 'submitting'}
              />
            </div>
          </div>

          {/* Bouncer Requirement + Bouncer Count */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="security_requirement" className={labelClass}>
                Bouncer Requirement
              </label>
              <input
                id="security_requirement"
                type="text"
                value={form.security_requirement}
                onChange={(e) => update('security_requirement', e.target.value)}
                className={inputClass}
                placeholder="e.g. Entry control, crowd management"
                disabled={state === 'submitting'}
              />
            </div>
            <div>
              <label htmlFor="bouncer_count" className={labelClass}>
                Number of Bouncers Required
              </label>
              <input
                id="bouncer_count"
                type="text"
                value={form.bouncer_count}
                onChange={(e) => update('bouncer_count', e.target.value)}
                className={inputClass}
                placeholder="e.g. 4"
                disabled={state === 'submitting'}
              />
            </div>
          </div>

          {/* Additional Requirements */}
          <div>
            <label htmlFor="additional_requirements" className={labelClass}>
              Additional Requirements
            </label>
            <textarea
              id="additional_requirements"
              value={form.additional_requirements}
              onChange={(e) => update('additional_requirements', e.target.value)}
              className={`${inputClass} resize-none`}
              rows={3}
              placeholder="Any specific requirements or concerns"
              disabled={state === 'submitting'}
            />
          </div>

          {/* Contact Preference */}
          <div>
            <label htmlFor="contact_preference" className={labelClass}>
              Preferred Contact Method
            </label>
            <select
              id="contact_preference"
              value={form.contact_preference}
              onChange={(e) => update('contact_preference', e.target.value)}
              className={inputClass}
              disabled={state === 'submitting'}
            >
              <option value="WhatsApp">WhatsApp</option>
              <option value="Call">Phone Call</option>
            </select>
          </div>

          {/* Error message */}
          {state === 'error' && (
            <div className="flex items-start gap-3 p-4 rounded-lg bg-red-500/10 border border-red-600/30">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
              <div>
                <p className="text-sm text-red-300 font-medium">
                  Submission failed. Please try again or contact us directly.
                </p>
                <div className="mt-2 flex gap-3">
                  <a
                    href={buildCallUrl()}
                    className="text-xs text-red-300 underline hover:text-red-200"
                  >
                    Call {BUSINESS.phoneDisplay}
                  </a>
                  <a
                    href={buildWhatsAppUrl(buildWhatsAppMessage())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-red-300 underline hover:text-red-200"
                  >
                    Send via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Quick Dispatch Banner */}
          <div className="p-3.5 rounded-lg bg-ink-850/80 border border-gold-500/20 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
            <span className="text-ink-200">
              ⚡ <strong className="text-gold-400">Direct Dispatch:</strong> Send your booking details instantly to our team via WhatsApp or Call.
            </span>
            <span className="text-ink-400 text-[11px]">Instant Response</span>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {/* Direct WhatsApp button */}
            <button
              type="button"
              onClick={handleSendWhatsApp}
              disabled={state === 'submitting'}
              className="px-5 py-4 bg-green-600 hover:bg-green-500 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-lg transition-all duration-300 shadow-lg shadow-green-600/20 disabled:opacity-50 flex items-center justify-center gap-2 group"
            >
              <MessageCircle className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <span>Send via WhatsApp</span>
            </button>

            {/* Submit & Quote button */}
            <button
              type="submit"
              disabled={state === 'submitting'}
              className="btn-shine px-5 py-4 bg-gold-500 hover:bg-gold-400 text-ink-950 font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-lg transition-all duration-300 shadow-lg shadow-gold-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {state === 'submitting' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" strokeWidth={1.5} />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" strokeWidth={1.5} />
                  <span>Request Quote</span>
                </>
              )}
            </button>
          </div>

          <div className="flex items-center justify-center gap-4 pt-1 text-xs text-ink-400">
            <span>Or call directly:</span>
            <a
              href={buildCallUrl()}
              className="inline-flex items-center gap-1.5 text-gold-400 hover:text-gold-300 font-medium"
            >
              <Phone className="w-3.5 h-3.5" strokeWidth={1.5} />
              {BUSINESS.phoneDisplay}
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
