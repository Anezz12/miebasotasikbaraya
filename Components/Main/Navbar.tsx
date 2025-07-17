'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { event } from 'nextjs-google-analytics';

export default function NavbarPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle screen resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // Track scrolling to adjust background opacity
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Google Analytics event handlers
  const handleOrderOnlineClick = () => {
    event('order_online_click', {
      category: 'engagement',
      label: 'navbar_order_online',
      value: 1,
    });

    // Additional tracking for conversion funnel
    event('conversion_intent', {
      category: 'lead_generation',
      label: 'order_online_intent',
    });
  };

  const handleBookTableClick = () => {
    event('book_table_click', {
      category: 'engagement',
      label: 'navbar_book_table',
      value: 1,
    });

    // Additional tracking for conversion funnel
    event('conversion_intent', {
      category: 'lead_generation',
      label: 'book_table_intent',
    });
  };

  // Navigation link tracking
  const handleNavLinkClick = (linkName: string) => {
    event('navigation_click', {
      category: 'navigation',
      label: `navbar_${linkName.toLowerCase().replace(' ', '_')}`,
    });
  };

  return (
    <header>
      <nav
        className={`fixed z-50 ${
          isMobile ? 'top-[15px] w-[calc(100%-30px)]' : 'top-[30px] w-[1130px]'
        } left-1/2 -translate-x-1/2 flex items-center rounded-[100px] py-2.5 px-[15px] md:px-[30px] transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-lg'
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <Link
          href="/"
          className="shrink-0 relative w-[90px] h-[32px] flex items-center justify-center"
          onClick={() => handleNavLinkClick('logo')}
        >
          {isMobile ? (
            <Image
              src="/logo.jpg"
              alt="Logo Mie Bakso Tasik Baraya"
              height={250}
              width={45}
              style={{ objectFit: 'contain' }}
              className="rounded-[100px] transition-all"
              priority
            />
          ) : (
            <Image
              src="/logo.jpg"
              alt="Logo Mie Bakso Tasik Baraya"
              height={300}
              width={70}
              style={{ objectFit: 'contain' }}
              className="rounded-[100px] transition-all"
              priority
            />
          )}
        </Link>

        {/* Mobile menu button */}
        {isMobile && (
          <button
            className="ml-auto p-2 text-[#DC143C]"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              event('mobile_menu_toggle', {
                category: 'navigation',
                label: isMenuOpen ? 'menu_close' : 'menu_open',
              });
            }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
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
              >
                <path d="M18 6L6 18M6 6l12 12"></path>
              </svg>
            ) : (
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
              >
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="18" x2="20" y2="18"></line>
              </svg>
            )}
          </button>
        )}

        {/* Desktop navigation */}
        {!isMobile && (
          <>
            <div className="bg-[#DC143C]/20 w-[1px] h-[50px] ml-[30px]"></div>
            <ul className="flex items-center gap-5 md:gap-10 ml-[30px]">
              <li>
                <Link
                  href="#about"
                  className="text-[#DC143C] text-[16px] font-semibold transition-all duration-300 hover:text-[#B91C3C] hover:underline"
                  onClick={() => handleNavLinkClick('about')}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#menu"
                  className="text-[#DC143C] text-[16px] font-semibold transition-all duration-300 hover:text-[#B91C3C] hover:underline"
                  onClick={() => handleNavLinkClick('menu')}
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="#location"
                  className="text-[#DC143C] text-[16px] font-semibold transition-all duration-300 hover:text-[#B91C3C] hover:underline"
                  onClick={() => handleNavLinkClick('location')}
                >
                  Location
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-[#DC143C] text-[16px] font-semibold transition-all duration-300 hover:text-[#B91C3C] hover:underline"
                  onClick={() => handleNavLinkClick('contact')}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="ml-auto flex items-center gap-3.5">
              <Link
                href="#"
                className="px-5 h-[43px] flex items-center rounded-[100px] border border-[#DC143C] text-[#DC143C] text-[16px] font-bold leading-[19px] transition-all duration-300 hover:bg-[#DC143C] hover:text-white text-center"
                onClick={handleOrderOnlineClick}
              >
                Order Online
              </Link>
              <Link
                href="#"
                className="bg-[#DC143C] text-white text-[16px] font-semibold px-5 h-[43px] flex items-center rounded-[100px] transition-all duration-300 hover:bg-[#B91C3C]"
                onClick={handleBookTableClick}
              >
                Book a Table
              </Link>
            </div>
          </>
        )}

        {/* Mobile dropdown menu */}
        {isMobile && isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-[#DC143C]/10">
            <ul className="flex flex-col space-y-4 mb-4">
              <li>
                <Link
                  href="#about"
                  className="block text-[#DC143C] text-[16px] font-semibold transition-all duration-300 hover:text-[#B91C3C]"
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleNavLinkClick('about mobile');
                  }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#menu"
                  className="block text-[#DC143C] text-[16px] font-semibold transition-all duration-300 hover:text-[#B91C3C]"
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleNavLinkClick('menu mobile');
                  }}
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="#location"
                  className="block text-[#DC143C] text-[16px] font-semibold transition-all duration-300 hover:text-[#B91C3C]"
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleNavLinkClick('location mobile');
                  }}
                >
                  Location
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="block text-[#DC143C] text-[16px] font-semibold transition-all duration-300 hover:text-[#B91C3C]"
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleNavLinkClick('contact mobile');
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="flex flex-col gap-3">
              <Link
                href="#"
                className="text-[#DC143C] border border-[#DC143C] text-center text-[16px] font-semibold px-5 py-3 rounded-[100px] transition-all duration-300 hover:bg-[#DC143C]/5"
                onClick={() => {
                  setIsMenuOpen(false);
                  handleOrderOnlineClick();
                }}
              >
                Order Online
              </Link>
              <Link
                href="#"
                className="bg-[#DC143C] text-white text-center text-[16px] font-semibold px-5 py-3 rounded-[100px] transition-all duration-300 hover:bg-[#B91C3C]"
                onClick={() => {
                  setIsMenuOpen(false);
                  handleBookTableClick();
                }}
              >
                Book a Table
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
