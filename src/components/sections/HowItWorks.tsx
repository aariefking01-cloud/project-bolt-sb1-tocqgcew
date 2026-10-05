import { ClipboardList, MessageSquare, Users, ShieldCheck } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

const STEPS = [
  {
    icon: ClipboardList,
    step: '01',
    title: 'Tell Us About Your Event',
    description:
      'Share your event details — type, date, location and expected guests.',
  },
  {
    icon: MessageSquare,
    step: '02',
    title: 'Discuss Your Bouncer Requirements',
    description:
      'Talk through your specific bouncer needs and concerns with our team.',
  },
  {
    icon: Users,
    step: '03',
    title: 'Plan the Required Bouncer Team',
    description:
      'We help determine the right number and type of bouncer personnel for your event.',
  },
  {
    icon: ShieldCheck,
    step: '04',
    title: 'Professional Bouncer Support',
    description:
      'Our team arrives prepared to provide professional bouncer presence at your event.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 sm:py-28 bg-ink-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Process"
          title="How It Works"
          subtitle="Booking bouncers for your event is simple. Four steps from enquiry to professional bouncer support."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.step} delay={i * 120}>
              <div className="relative">
                {/* Connector line */}
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] right-[-40%] h-px bg-gradient-to-r from-gold-500/40 to-transparent" />
                )}

                <div className="relative z-10 text-center lg:text-left">
                  <div className="relative inline-flex lg:flex items-center justify-center w-20 h-20 rounded-full bg-ink-850 border border-ink-700/60 mb-5 group hover:border-gold-500/40 transition-colors duration-300">
                    <step.icon
                      className="w-8 h-8 text-gold-400 group-hover:scale-110 transition-transform duration-300"
                      strokeWidth={1.5}
                    />
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gold-500 text-ink-950 font-display font-bold text-xs flex items-center justify-center">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-lg text-ink-50 tracking-wide mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-ink-300 leading-relaxed max-w-xs mx-auto lg:mx-0">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
