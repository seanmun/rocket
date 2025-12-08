'use client';

import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

export function EmailSignup() {
  const [step, setStep] = useState<'email' | 'name' | 'complete'>('email');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsSubmitting(false);
    setStep('name');
  };

  const handleNameSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsSubmitting(false);
    setStep('complete');
  };

  if (step === 'complete') {
    return (
      <div className="bg-rpt-gray-800 rounded-lg p-8 border border-rpt-teal/30 text-center">
        <CheckCircle className="w-16 h-16 text-rpt-teal mx-auto mb-4" />
        <h3 className="font-heading font-bold text-2xl mb-3">
          You're all set{firstName ? `, ${firstName}` : ''}!
        </h3>
        <p className="text-gray-300 mb-4">
          We've sent a confirmation email to <span className="text-rpt-teal">{email}</span>
        </p>
        <div className="bg-rpt-gray-900 rounded-lg p-6 border border-rpt-gray-700">
          <p className="text-sm text-gray-400 mb-2">What to expect:</p>
          <ul className="text-sm text-gray-300 space-y-2 text-left">
            <li className="flex items-start">
              <span className="text-rpt-teal mr-2">•</span>
              <span>Latest news and event announcements</span>
            </li>
            <li className="flex items-start">
              <span className="text-rpt-teal mr-2">•</span>
              <span>Exclusive player interviews and behind-the-scenes content</span>
            </li>
            <li className="flex items-start">
              <span className="text-rpt-teal mr-2">•</span>
              <span>Early access to ticket sales and special offers</span>
            </li>
            <li className="flex items-start">
              <span className="text-rpt-teal mr-2">•</span>
              <span>Stats, highlights, and match recaps</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  if (step === 'name') {
    return (
      <div className="bg-rpt-gray-800 rounded-lg p-8 border border-rpt-teal/30">
        <h3 className="font-heading font-bold text-2xl mb-2 text-center">Thanks!</h3>
        <p className="text-gray-300 mb-6 text-center">Tell us your first name</p>
        <form onSubmit={handleNameSubmit} className="space-y-4">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First name"
            className="w-full px-4 py-3 bg-rpt-gray-900 border border-rpt-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-rpt-teal transition-colors"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-3 bg-rpt-teal hover:bg-rpt-teal-dark text-white font-heading font-bold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Continue'}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="bg-rpt-gray-800 rounded-lg p-8 border border-rpt-teal/30">
      <div className="flex items-center justify-center mb-4">
        <Mail className="w-8 h-8 text-rpt-teal" />
      </div>
      <h3 className="font-heading font-bold text-2xl mb-2 text-center">Stay in the Loop</h3>
      <p className="text-gray-300 mb-6 text-center">
        Get the latest updates, exclusive content, and early access to tickets
      </p>
      <form onSubmit={handleEmailSubmit} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-3 bg-rpt-gray-900 border border-rpt-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-rpt-teal transition-colors"
          required
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-rpt-teal hover:bg-rpt-teal-dark text-white font-heading font-bold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Sign Up'}
        </button>
      </form>
      <p className="text-xs text-gray-500 text-center mt-4">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
}
