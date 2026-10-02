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
  contact_preference: 'Call',
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

  const buildWhatsAppMessage = (): string => {
    const lines = [
      'Hello Puduvai Bouncers, I would like to request a bouncer quote:',
      '',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
    ];
    if (form.email) lines.push(`Email: ${form.email}`);
    lines.push(`Event Type: ${form.event_type}`);
    if (form.event_date) lines.push(`Date: ${form.event_date}`);
    if (form.event_time) lines.push(`Time: ${form.event_time}`);
    if (form.location) lines.push(`Location: ${form.location}`);
    if (form.guest_count) lines.push(`Expected Guests: ${form.guest_count}`);
    if (form.security_requirement)
      lines.push(`Bouncer Requirement: ${form.security_requirement}`);
    if (form.bouncer_count)
      lines.push(`Bouncers Required: ${form.bouncer_count}`);
    if (form.additional_requirements)
      lines.push(`Additional: ${form.additional_requirements}`);
    lines.push(`Preferred Contact: ${form.contact_preference || 'Call'}`);
    return lines.join('\n');
  };

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    setState('submitting');
    try {
      const { error } = await supabase.from('booking_requests').insert({
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim() || null,
        event_type: form.event_type,
        event_date: form.event_date || null,
        event_time: form.event_time || null,
        location: form.location.trim() || null,
        guest_count: form.guest_count.trim() || null,
        security_requirement: form.security_requirement.trim() || null,
        bouncer_count: form.bouncer_count.trim() || null,
        additional_requirements: form.additional_requirements.trim() || null,
        contact_preference: form.contact_preference || 'Call',
      });

      if (error) throw error;

      setState('success');
      setForm(EMPTY_FORM);
    } catch (err) {
      console.error('Booking submission failed:', err);
      setState('error');
    }
  };

  if (state === 'success') {
    return (
      <section id="book" className="py-20 sm:py-28 bg-ink-950">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center p-10 rounded-2xl bg-ink-900 border border-green-600/30">
            <div className="w-20 h-20 mx-auto rounded-full bg-green-500/10 flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-400" strokeWidth={1.5} />
            </div>
            <h3 className="font-display font-semibold text-2xl text-ink-50 mb-3">
              Request Received
            </h3>
            <p className="text-ink-300 leading-relaxed mb-8">
              Your request has been received. Our team will contact you shortly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={buildWhatsAppUrl(buildWhatsAppMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-green-600/40 text-green-400 font-semibold text-sm uppercase tracking-wide rounded-md hover:bg-green-600/10 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
                Also Send via WhatsApp
              </a>
              <button
                onClick={() => setState('idle')}
                className="px-6 py-3 bg-gold-500 hover:bg-gold-400 text-ink-950 font-semibold text-sm uppercase tracking-wide rounded-md transition-colors"
              >
                Submit Another Request
              </button>
            </div>
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
          className="mt-12 p-6 sm:p-8 rounded-2xl bg-ink-900 border border-ink-700/50 space-y-5"
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
              <option value="Call">Call</option>
              <option value="WhatsApp">WhatsApp</option>
              <option value="Email">Email</option>
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

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="submit"
              disabled={state === 'submitting'}
              className="btn-shine flex-1 px-6 py-4 bg-gold-500 hover:bg-gold-400 text-ink-950 font-semibold text-sm uppercase tracking-wider rounded-md transition-all duration-300 shadow-lg shadow-gold-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {state === 'submitting' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" strokeWidth={1.5} />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" strokeWidth={1.5} />
                  Request a Quote
                </>
              )}
            </button>
            <a
              href={buildWhatsAppUrl(buildWhatsAppMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-6 py-4 border border-green-600/40 text-green-400 font-semibold text-sm uppercase tracking-wider rounded-md hover:bg-green-600/10 transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
              WhatsApp
            </a>
            <a
              href={buildCallUrl()}
              className="flex-1 px-6 py-4 border border-ink-600 text-ink-100 font-semibold text-sm uppercase tracking-wider rounded-md hover:border-gold-500/40 hover:text-gold-400 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" strokeWidth={1.5} />
              Call Now
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
