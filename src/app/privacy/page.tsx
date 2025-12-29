import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | OneRomeo',
  description: 'How we handle your data and protect your privacy.',
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 font-inter text-zinc-800 dark:text-zinc-200">
      <h1 className="text-4xl font-extrabold font-heading mb-8 text-zinc-900 dark:text-white">
        Privacy policy
      </h1>
      <p className="text-sm text-zinc-500 mb-12">
        Last updated: December 28, 2025
      </p>

      <section className="space-y-12">
        {/* Intro */}
        <div>
          <h2 className="text-xl font-bold mb-4">1. Introduction</h2>
          <p className="leading-relaxed opacity-80">
            At OneRomeo, I value your trust. This policy explains what
            information I collect, how it’s used, and your rights regarding your
            personal data.
          </p>
        </div>

        {/* Payments */}
        <div>
          <h2 className="text-xl font-bold mb-4">
            2. Payments & financial data
          </h2>
          <p className="leading-relaxed opacity-80">
            Payments are processed securely through <strong>Stripe</strong>. I
            do not store your credit card numbers or billing details on my
            servers. Stripe provides me with confirmation of payment and your
            basic contact info to fulfill your eBook order.
          </p>
        </div>

        {/* Data Storage */}
        <div>
          <h2 className="text-xl font-bold mb-4">3. Data storage (Supabase)</h2>
          <p className="leading-relaxed opacity-80">
            I use <strong>Supabase</strong> to store minimal data necessary for
            site functionality, such as purchase records or site preferences.
            This data is encrypted and stored securely.
          </p>
        </div>

        {/* Analytics */}
        <div>
          <h2 className="text-xl font-bold mb-4">4. Analytics</h2>
          <p className="leading-relaxed opacity-80">
            I use <strong>Google Analytics</strong> to understand how visitors
            interact with OneRomeo. This helps me improve the storytelling
            experience. This data is anonymized and does not identify you
            personally.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-bold mb-4">5. Contact</h2>
          <p className="leading-relaxed opacity-80">
            If you have questions about your data, feel free to reach out via
            the
            <a href="/say-hi" className="text-amber-500 hover:underline ml-1">
              Say hi
            </a>{' '}
            page.
          </p>
        </div>
      </section>
    </main>
  );
}
