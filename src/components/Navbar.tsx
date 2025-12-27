'use client';
import Link from 'next/link';
import { Fragment, useState } from 'react';
import { Loader2, Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '/', isCta: false },
  { label: 'Who', href: '/who', isCta: false },
  { label: 'eBook', href: '/ebook', isCta: false },
  { label: 'Notes', href: '/notes', isCta: false },
  { label: 'Say hi', href: '/say-hi', isCta: false },
  { label: 'Read eBook', href: '/api/checkout', isCta: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const handleCtaClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (isRedirecting) return;

    setIsRedirecting(true);
    try {
      const response = await fetch('/api/checkout', { method: 'POST' });
      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error('Checkout failed');
      }
    } catch (error) {
      console.error('Navbar checkout error:', error);
      setIsRedirecting(false);
      alert('Could not connect to Stripe. Please try again.');
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-extrabold font-heading text-zinc-900 dark:text-white hover:text-amber-600 transition-colors">
              OneRomeo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center space-x-6 font-inter">
            {NAV_ITEMS.map((item) => (
              <Fragment key={item.label}>
                {!item.isCta ? (
                  <Link
                    href={item.href}
                    className="text-base font-medium text-zinc-600 dark:text-zinc-400 hover:text-amber-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onClick={handleCtaClick}
                    disabled={isRedirecting}
                    className="inline-flex items-center px-5 py-2 text-sm font-bold rounded-full shadow-sm 
                               bg-amber-600 text-white hover:bg-amber-700 transition-all 
                               hover:scale-105 active:scale-95 disabled:opacity-70 disabled:scale-100"
                  >
                    {isRedirecting ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      item.label
                    )}
                  </button>
                )}
              </Fragment>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden p-2 rounded-md text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`sm:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen
            ? 'max-h-screen border-t border-zinc-200 dark:border-zinc-800'
            : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col p-6 space-y-4 font-inter">
          {NAV_ITEMS.map((item) => (
            <Fragment key={item.label}>
              {item.isCta ? (
                <button
                  onClick={handleCtaClick}
                  disabled={isRedirecting}
                  className="w-full py-4 text-lg font-bold rounded-2xl bg-amber-600 text-white shadow-lg flex items-center justify-center"
                >
                  {isRedirecting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    item.label
                  )}
                </button>
              ) : (
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="block py-2 text-xl font-semibold text-center text-zinc-600 dark:text-zinc-400 hover:text-amber-600"
                >
                  {item.label}
                </Link>
              )}
            </Fragment>
          ))}
        </nav>
      </div>
    </header>
  );
}
