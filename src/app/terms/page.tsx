import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | OneRomeo',
  description:
    'The terms and conditions for using OneRomeo and purchasing digital products.',
};

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 font-inter text-zinc-800 dark:text-zinc-200">
      <h1 className="text-4xl font-extrabold font-heading mb-8 text-zinc-900 dark:text-white">
        Terms of service
      </h1>
      <p className="text-sm text-zinc-500 mb-12">
        Effective date: December 28, 2025
      </p>

      <section className="space-y-12">
        {/* Digital Products */}
        <div>
          <h2 className="text-xl font-bold mb-4">
            1. Digital products & refunds
          </h2>
          <p className="leading-relaxed opacity-80">
            Due to the nature of digital content, all sales of the "Not in a
            Million Years&quot; eBook are final. Once the download link has been
            generated or accessed, we cannot offer refunds or exchanges.
          </p>
        </div>

        {/* Intellectual Property */}
        <div>
          <h2 className="text-xl font-bold mb-4">2. Intellectual property</h2>
          <p className="leading-relaxed opacity-80">
            All content on OneRomeo, including text, photographs, and the eBook
            itself, is the exclusive property of Arnold Meindertsma. Your
            purchase grants you a personal, non-transferable license to read the
            book. You may not redistribute, resell, or reproduce any part of the
            book without explicit permission.
          </p>
        </div>

        {/* License */}
        <div>
          <h2 className="text-xl font-bold mb-4">3. Usage license</h2>
          <p className="leading-relaxed opacity-80">
            You are permitted to download and store the eBook on your personal
            devices. Commercial use of the stories or photography within is
            strictly prohibited.
          </p>
        </div>

        {/* Disclaimer */}
        <div>
          <h2 className="text-xl font-bold mb-4">4. Disclaimer of liability</h2>
          <p className="leading-relaxed opacity-80">
            OneRomeo provides content for storytelling and artistic purposes. We
            are not liable for any damages arising from the use of this website
            or the inability to download products due to user-side technical
            issues.
          </p>
        </div>
      </section>
    </main>
  );
}
