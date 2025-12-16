// Define the component using TypeScript
export default function SayHiPage() {
  // Placeholder for the form action (replace with your form service endpoint)
  const FORM_ACTION_URL = 'YOUR_FORM_SERVICE_ENDPOINT_HERE';

  return (
    <div className="flex min-h-screen justify-center bg-zinc-50 dark:bg-zinc-900">
      <main className="w-full max-w-4xl mx-auto py-16 px-6 md:px-12 space-y-16">
        {/* 1. Header and Mission Statement */}
        <header className="text-center space-y-4 max-w-2xl mx-auto">
          <h1 className="text-5xl font-extrabold font-heading text-zinc-700 dark:text-white leading-tight">
            Let’s Connect. Say Hi!
          </h1>
          <p className="text-xl font-semibold text-amber-700 dark:text-amber-500">
            I love hearing from readers and fellow explorers of human
            connection. Drop me a note below—I read every message!
          </p>
        </header>

        {/* 2. Contact Form */}
        <section className="bg-white dark:bg-zinc-800 p-8 sm:p-12 rounded-xl shadow-xl max-w-2xl mx-auto">
          <form action={FORM_ACTION_URL} method="POST" className="space-y-6">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="mt-1 block w-full rounded-lg border-zinc-300 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white shadow-sm focus:border-amber-600 focus:ring-amber-600 text-lg p-3"
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Email Address
              </label>
              <input
                type="email"
                name="_replyto" // Common field for email service providers
                id="email"
                required
                className="mt-1 block w-full rounded-lg border-zinc-300 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white shadow-sm focus:border-amber-600 focus:ring-amber-600 text-lg p-3"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-1 block w-full rounded-lg border-zinc-300 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white shadow-sm focus:border-amber-600 focus:ring-amber-600 text-lg p-3"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full inline-flex justify-center py-3 px-4 border border-transparent 
                           shadow-sm text-lg font-bold rounded-lg text-white 
                           bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>

        {/* 3. Social Links / Alternative Contact (Optional) */}
        <section className="text-center pt-8">
          <p className="text-lg text-zinc-700 dark:text-zinc-300">
            Prefer social media? Find me on:
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            {/* YouTube Link */}
            <a
              href="[Your YouTube URL]"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-zinc-600 dark:text-zinc-400 hover:text-amber-600 transition-colors"
              aria-label="YouTube Channel"
            >
              {/* Placeholder for a YouTube Icon (using a simple circle) */}
              <span className="w-8 h-8 inline-flex items-center justify-center rounded-full bg-red-600 text-white font-bold">
                Y
              </span>
            </a>
            {/* Twitter/X Link */}
            <a
              href="[Your Twitter/X URL]"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-zinc-600 dark:text-zinc-400 hover:text-amber-600 transition-colors"
              aria-label="Twitter/X Profile"
            >
              {/* Placeholder for a Twitter Icon */}
              <span className="w-8 h-8 inline-flex items-center justify-center rounded-full bg-blue-400 text-white font-bold">
                X
              </span>
            </a>
            {/* Add other platforms as needed */}
          </div>
        </section>
      </main>
    </div>
  );
}
