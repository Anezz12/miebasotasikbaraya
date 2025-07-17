import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1e3c63] text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="Cheers Labs Logo"
                width={40}
                height={40}
                className="rounded-full bg-white p-1"
              />
              <h2 className="text-2xl font-bold">Cheers Labs</h2>
            </div>
            <p className="mt-4 text-gray-300">
              {
                'Cheers Labs is your go-to destination for the finest coffee and a cozy atmosphere. Join us for a cup of joy!'
              }
            </p>
            <div className="pt-2 flex items-center gap-2">
              <span className="text-blue-300">✉️</span>
              <Link
                href="mailto:wmk08cheerslabs@gmail.com"
                className="hover:text-blue-300 transition-colors"
              >
                contact@cheerslabs
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-600 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-300 transition-colors flex items-center gap-1"
                >
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="hover:text-blue-300 transition-colors flex items-center gap-1"
                >
                  <span>Menu</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-300 transition-colors flex items-center gap-1"
                >
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/location"
                  className="hover:text-blue-300 transition-colors flex items-center gap-1"
                >
                  <span>Location</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-300 transition-colors flex items-center gap-1"
                >
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Coffee Menu - Replaced Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-600 pb-2">
              Our Coffee Menu
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/menu"
                  className="hover:text-blue-300 transition-colors"
                >
                  Coffee Series
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="hover:text-blue-300 transition-colors"
                >
                  V60 Series
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="hover:text-blue-300 transition-colors"
                >
                  Coffee Milk Series
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="hover:text-blue-300 transition-colors"
                >
                  Milk Based Series
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="hover:text-blue-300 transition-colors"
                >
                  Mocktail Series
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-600 pb-2">
              Connect With Us
            </h3>
            <p className="text-gray-300 mb-4">
              Follow us on social media to get the latest updates.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com/cheers_labs"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full text-blue-800 hover:bg-blue-300 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </Link>
              <Link
                href="https://linkedin.com/company/cheerslabs"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full text-blue-800 hover:bg-blue-300 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
              <Link
                href="https://twitter.com/cheerslabs"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full text-blue-800 hover:bg-blue-300 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-blue-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">
            © {currentYear} Cheers Labs. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6 text-sm text-gray-300">
            <Link
              href="/privacy-policy"
              className="hover:text-blue-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-blue-300 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/sitemap"
              className="hover:text-blue-300 transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
