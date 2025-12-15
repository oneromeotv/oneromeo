'use client';
import Link from 'next/link';
import { Fragment, useState } from 'react';

// 2. DEFINE THE NAVIGATION STRUCTURE (Copied from your input)
const NAV_ITEMS = [
  { label: 'Home', href: '/', isCta: false },
  { label: 'Ebook', href: '/ebook', isCta: false },
  { label: 'About Me', href: '/about', isCta: false },
  { label: 'Contact', href: '/contact', isCta: false },
  { label: 'Order Ebook', href: '/order', isCta: true },
];

export default function Navbar() {
  // 3. State to manage mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the menu after a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* 1. Logo / Site Title (Link to Home) */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-extrabold font-heading text-zinc-900 dark:text-white hover:text-amber-600 transition-colors">
              OneRomeo
            </span>
          </Link>

          {/* 2. Desktop Navigation (Always visible on 'sm' and larger) */}
          <nav className="hidden sm:flex items-center space-x-6 font-inter">
            {NAV_ITEMS.map((item) => (
              <Fragment key={item.label}>
                {/* Standard Link */}
                {!item.isCta && (
                  <Link
                    href={item.href}
                    className="text-base font-medium text-zinc-600 dark:text-zinc-400 hover:text-amber-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
                {/* CTA Button */}
                {item.isCta && (
                  <Link
                    href={item.href}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-semibold rounded-full shadow-sm 
                               bg-amber-600 text-white 
                               hover:bg-amber-700 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                )}
              </Fragment>
            ))}
          </nav>

          {/* 3. Hamburger Menu Button (Visible only on mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden p-2 rounded-md text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {/* Simple SVG icon for the hamburger/close state */}
            {isOpen ? (
              // Close Icon (X)
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              // Hamburger Icon (Three lines)
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* 4. Collapsible Mobile Menu Panel */}
      <div
        className={`sm:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen
            ? 'max-h-screen border-t border-zinc-200 dark:border-zinc-800'
            : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col p-4 space-y-3 font-inter">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={closeMenu} // Close menu when a link is clicked
              // Apply conditional mobile styling
              className={`block px-3 py-2 text-lg font-semibold rounded-md transition-colors text-center ${
                item.isCta
                  ? 'bg-amber-600 text-white hover:bg-amber-700'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-amber-600 hover:bg-zinc-100 dark:hover:bg-zinc-800'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
