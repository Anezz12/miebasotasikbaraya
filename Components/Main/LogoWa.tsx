'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { event } from 'nextjs-google-analytics';

function LogoWa() {
  const [showButton, setShowButton] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.pageYOffset;
      if (scrollHeight > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to handle WhatsApp click tracking
  const handleWhatsAppClick = () => {
    event('whatsapp_click', {
      category: 'engagement',
      label: 'whatsapp_contact',
      value: 1,
    });

    // Additional tracking for contact method
    event('contact_method_selected', {
      category: 'lead_generation',
      label: 'whatsapp',
    });
  };

  // Function to handle hover tracking (optional)
  const handleWhatsAppHover = () => {
    event('whatsapp_hover', {
      category: 'engagement',
      label: 'whatsapp_button_hover',
    });
  };

  return (
    <AnimatePresence>
      {showButton && (
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          <div
            className="relative"
            onMouseEnter={() => {
              setIsHovered(true);
              handleWhatsAppHover(); // Track hover event
            }}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Pulse Effect */}
            <div
              className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-ping"
              style={{ animationDuration: '3s' }}
            ></div>

            {/* WhatsApp Button */}
            <Link
              href="https://api.whatsapp.com/send?phone=6285161457365"
              target="_blank"
              rel="noopener noreferrer"
              className="relative block"
              aria-label="Contact us on WhatsApp"
              onClick={handleWhatsAppClick} // Track click event
            >
              {/* Button Content */}
              <motion.div
                className="flex items-center bg-green-600 rounded-full shadow-lg overflow-hidden"
                animate={{
                  width: isHovered ? 'auto' : '52px',
                }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut',
                }}
              >
                <div className="flex items-center py-3 pl-3 pr-4">
                  {/* WhatsApp Logo */}
                  <div className={`flex-shrink-0 ${isHovered ? 'mr-3' : ''}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 256 258"
                      className="text-white drop-shadow-sm"
                    >
                      <defs>
                        <linearGradient
                          id="logosWhatsappIcon0"
                          x1="50%"
                          x2="50%"
                          y1="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#1faf38" />
                          <stop offset="100%" stopColor="#60d669" />
                        </linearGradient>
                        <linearGradient
                          id="logosWhatsappIcon1"
                          x1="50%"
                          x2="50%"
                          y1="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#f9f9f9" />
                          <stop offset="100%" stopColor="#fff" />
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#logosWhatsappIcon0)"
                        d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"
                      />
                      <path
                        fill="url(#logosWhatsappIcon1)"
                        d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"
                      />
                      <path
                        fill="#fff"
                        d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"
                      />
                    </svg>
                  </div>

                  {/* Text container with fixed dimensions to avoid layout shift */}
                  <div className="overflow-hidden">
                    <motion.span
                      className="font-medium whitespace-nowrap text-sm text-white block"
                      animate={{
                        opacity: isHovered ? 1 : 0,
                        x: isHovered ? 0 : -20,
                      }}
                      transition={{ duration: 0.2, delay: isHovered ? 0.1 : 0 }}
                    >
                      Chat with us
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Tooltip */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  className="absolute -top-12 right-0 bg-white text-gray-800 px-3 py-1 rounded-lg shadow-md text-sm whitespace-nowrap"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  Contact via WhatsApp
                  <div className="absolute bottom-[-6px] right-4 w-3 h-3 bg-white transform rotate-45"></div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LogoWa;
