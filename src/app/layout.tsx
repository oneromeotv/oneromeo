import './globals.css';
import { Inter, Poppins } from 'next/font/google'; // Import both fonts

// 1. Define the primary body font (Inter)
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Regular, SemiBold, Bold
  variable: '--font-inter', // CSS variable for body text
});

// 2. Define the font for headings/UI (Poppins)
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '800'], // SemiBold and ExtraBold for headings
  variable: '--font-poppins', // CSS variable for headings
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 3. Apply BOTH font variables to the <html> tag
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50`}
    >
      <body>{children}</body>
    </html>
  );
}
