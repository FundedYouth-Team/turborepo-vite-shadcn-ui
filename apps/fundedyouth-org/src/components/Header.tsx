import { useState } from "react";
import { Button } from "@repo/ui/components/button";

// Define the type for menu items
interface MenuItem {
  text: string;
  url: string;
}

interface HeaderProps {
  desktop: MenuItem[];
  mobile?: MenuItem[]; // Optional - falls back to desktop if not provided
}

export function Header({ desktop, mobile }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Use mobile menu items if provided, otherwise fall back to desktop items
  const mobileMenuItems = mobile || desktop;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <a href="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-white font-bold backdrop-blur-sm">
                  FY
                </div>
                <span className="text-xl font-semibold text-white">Funded Youth</span>
              </a>

              {/* Desktop Menu - Now hidden on lg and below */}
              <div className="hidden lg:flex items-center space-x-6">
                {desktop.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    className="text-white/90 hover:text-white transition-colors"
                  >
                    {item.text}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Desktop Buttons - Now hidden on lg and below */}
              <Button variant="ghost" className="hidden lg:inline-flex text-white hover:bg-white/20">
                Sign In
              </Button>
              <Button className="hidden lg:inline-flex bg-white text-blue-600 hover:bg-white/90">
                Join Now
              </Button>

              {/* Mobile Hamburger Menu - Now visible on lg and below */}
              <button
                className="lg:hidden p-2 text-white hover:text-white/80 transition-colors"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {mobileMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Slide-out Menu - Now visible on lg and below */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={closeMobileMenu}
        />

        {/* Slide-out Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <a href="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity" onClick={closeMobileMenu}>
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                  FY
                </div>
                <span className="text-xl font-semibold text-gray-900">Funded Youth</span>
              </a>
              <button
                onClick={closeMobileMenu}
                className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Links */}
            <nav className="flex-1 px-6 py-6 overflow-y-auto">
              <div className="flex flex-col space-y-1">
                {mobileMenuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    className="px-4 py-3 text-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={closeMobileMenu}
                  >
                    {item.text}
                  </a>
                ))}
              </div>
            </nav>

            {/* Mobile Menu Actions */}
            <div className="px-6 py-6 border-t border-gray-200 space-y-3">
              <Button
                variant="ghost"
                className="w-full justify-center"
                onClick={closeMobileMenu}
              >
                Sign In
              </Button>
              <Button
                className="w-full justify-center bg-blue-600 hover:bg-blue-700 text-white"
                onClick={closeMobileMenu}
              >
                Join Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}