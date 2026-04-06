import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import { SITE_CONTACT } from '../siteContent';

type ContactFormProps = {
  /** Light fields on white; dark uses translucent fields on ink panels */
  variant?: 'light' | 'dark';
  className?: string;
};

export function ContactForm({ variant = 'light', className = '' }: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isDark = variant === 'dark';

  const fieldBase =
    'w-full rounded-lg border px-4 py-3 text-sm transition placeholder:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2';
  const fieldLight = 'border-ink/15 bg-white text-ink placeholder:text-ink/40 focus:border-gold/60';
  const fieldDark = 'border-white/15 bg-white/5 text-white placeholder:text-white/40 focus:border-gold/50 focus-visible:ring-offset-ink';

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSending(true);
    setError(null);

    try {
      const response = await fetch('https://formsubmit.co/ajax/sales@prishametalint.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
          _subject: 'Website inquiry',
          _captcha: 'false',
        }),
      });

      if (!response.ok) {
        const errorBody = await response.json().catch(() => null);
        throw new Error(errorBody?.message || 'Unable to send inquiry. Please try again.');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred.');
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className={`rounded-xl border p-8 text-center ${isDark ? 'border-white/15 bg-white/5 text-white' : 'border-ink/10 bg-[#f6f5f1] text-ink'}`}
      >
        <p className="font-medium">Thank you.</p>
        <p className={`mt-2 text-sm ${isDark ? 'text-white/70' : 'text-ink/65'}`}>
          Your inquiry has been received and has been forwarded to sales@prishametalint.com for our team to follow up.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className={`mt-6 text-xs font-semibold uppercase tracking-widest ${isDark ? 'text-gold hover:text-gold/80' : 'text-gold hover:text-ink'}`}
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-5 ${className}`}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className={`mb-1.5 block text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-white/55' : 'text-ink/50'}`}>
            Name
          </span>
          <input
            required
            name="name"
            autoComplete="name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            className={`${fieldBase} ${isDark ? fieldDark : fieldLight}`}
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className={`mb-1.5 block text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-white/55' : 'text-ink/50'}`}>
            Email
          </span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            className={`${fieldBase} ${isDark ? fieldDark : fieldLight}`}
            placeholder="you@company.com"
          />
        </label>
      </div>
      <label className="block">
        <span className={`mb-1.5 block text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-white/55' : 'text-ink/50'}`}>
          Phone
        </span>
        <input
          type="tel"
          name="phone"
          autoComplete="tel"
          value={phone}
          onChange={(ev) => setPhone(ev.target.value)}
          className={`${fieldBase} ${isDark ? fieldDark : fieldLight}`}
          placeholder="Optional"
        />
      </label>
      <label className="block">
        <span className={`mb-1.5 block text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-white/55' : 'text-ink/50'}`}>
          Message
        </span>
        <textarea
          required
          name="message"
          rows={4}
          value={message}
          onChange={(ev) => setMessage(ev.target.value)}
          className={`${fieldBase} resize-y min-h-[120px] ${isDark ? fieldDark : fieldLight}`}
          placeholder="Project scope, quantities, finishes, timelines…"
        />
      </label>
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
      <motion.button
        type="submit"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        disabled={sending}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold py-3.5 text-sm font-semibold tracking-wide text-ink shadow-lg shadow-gold/20 transition hover:bg-gold/90 disabled:cursor-not-allowed disabled:bg-gold/70 sm:w-auto sm:min-w-[200px]"
      >
        <Send size={18} aria-hidden />
        Send inquiry
      </motion.button>
    </form>
  );
}
