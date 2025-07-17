'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Simple icon components
  const InstagramIcon = ({ className = 'w-5 h-5' }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );

  const FacebookIcon = ({ className = 'w-5 h-5' }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );

  const WhatsAppIcon = ({ className = 'w-5 h-5' }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
    </svg>
  );

  const PhoneIcon = ({ className = 'w-5 h-5' }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  );

  const LocationIcon = ({ className = 'w-5 h-5' }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <footer className="bg-gradient-to-br from-[#1a1a1a] to-[#2d1810] text-white">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div className="text-center mb-12" variants={fadeInUp}>
            <h2 className="text-3xl font-bold text-white mb-4">
              Mie Bakso <span className="text-[#DC143C]">Tasik Baraya</span>
            </h2>
            <p className="text-gray-300">
              Warung mie bakso khas Tasikmalaya sejak 2008
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-lg font-semibold mb-4 text-white">
                Tentang Kami
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Warung mie bakso legendaris yang telah melayani masyarakat
                Tasikmalaya dengan resep rahasia turun temurun selama lebih dari
                15 tahun.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <PhoneIcon className="w-4 h-4 text-[#DC143C]" />
                  <span className="text-gray-300 text-sm">
                    +62 812 3456 7890
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <LocationIcon className="w-4 h-4 text-[#DC143C] mt-0.5" />
                  <span className="text-gray-300 text-sm">
                    Jl. Raya Tasikmalaya No. 123, Cihideung, Tasikmalaya
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-lg font-semibold mb-4 text-white">
                Menu Utama
              </h3>
              <ul className="space-y-2">
                {[
                  { name: 'Beranda', href: '/' },
                  { name: 'Menu Kami', href: '/menu' },
                  { name: 'Tentang Kami', href: '/about' },
                  { name: 'Lokasi', href: '/location' },
                  { name: 'Kontak', href: '/contact' },
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 text-sm hover:text-[#DC143C] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Menu */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-lg font-semibold mb-4 text-white">
                Menu Populer
              </h3>
              <ul className="space-y-2">
                {[
                  { name: 'Mie Yamin Manis', price: 'Rp 15.000' },
                  { name: 'Bakso Urat Jumbo', price: 'Rp 12.000' },
                  { name: 'Mie Bakso Komplit', price: 'Rp 18.000' },
                  { name: 'Bakso Isi Ayam', price: 'Rp 10.000' },
                  { name: 'Paket Keluarga', price: 'Rp 50.000' },
                ].map((menu, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">{menu.name}</span>
                    <span className="text-[#DC143C] text-sm font-medium">
                      {menu.price}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact & Social */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-lg font-semibold mb-4 text-white">
                Hubungi Kami
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-white mb-2">
                    Jam Buka
                  </h4>
                  <div className="text-gray-300 text-sm space-y-1">
                    <div className="flex justify-between">
                      <span>Senin - Jumat</span>
                      <span className="text-[#DC143C]">08:00 - 21:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sabtu - Minggu</span>
                      <span className="text-[#DC143C]">07:00 - 22:00</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-white mb-3">
                    Ikuti Kami
                  </h4>
                  <div className="flex space-x-3">
                    <Link
                      href="https://instagram.com/tasikbaraya"
                      className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center text-white"
                    >
                      <InstagramIcon className="w-4 h-4" />
                    </Link>
                    <Link
                      href="https://facebook.com/tasikbaraya"
                      className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white"
                    >
                      <FacebookIcon className="w-4 h-4" />
                    </Link>
                    <Link
                      href="https://wa.me/628123456789"
                      className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center"
            variants={fadeInUp}
          >
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Mie Bakso Tasik Baraya. Hak cipta dilindungi.
            </p>

            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-[#DC143C]"
              >
                Kebijakan Privasi
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-[#DC143C]"
              >
                Syarat & Ketentuan
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
