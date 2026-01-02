import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-[#fafafa] border-top border-zinc-200 mt-auto">
      <div className="max-w-md mx-auto flex flex-col items-center gap-6">
        {/* Social Icons */}
        <div className="flex items-center gap-8">
          <Link
            href="https://youtube.com/@oneromeo"
            target="_blank"
            className="text-zinc-400 hover:text-red-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-youtube-icon lucide-youtube"
            >
              <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
              <path d="m10 15 5-3-5-3z" />
            </svg>
          </Link>
          <Link
            href="https://facebook.com/oneromeo2025"
            target="_blank"
            className="text-zinc-400 hover:text-blue-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-facebook-icon lucide-facebook"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.2em]">
          © 2025 OneRomeo.com. All Rights Reserved.
        </p>
        <div className=" text-[14px] text-zinc-400 space-x-4">
          <Link href="/privacy">Privacy policy</Link>
          <Link href="/terms">Terms of service</Link>
        </div>
      </div>
    </footer>
  );
}
