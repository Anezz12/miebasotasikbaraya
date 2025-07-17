'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LocationSection() {
  // Location details untuk Mie Bakso Tasik Baraya
  const location = {
    name: 'Mie Bakso Tasik Baraya',
    tagline: 'Warung Mie Bakso Khas Tasikmalaya Sejak 2008',
    address:
      'Jl. Raya Tasikmalaya No. 123, Kecamatan Cihideung, Tasikmalaya, Jawa Barat 46122',
    phone: '+62 812 3456 7890',
    whatsapp: '+62 812 3456 7890',
    hours: [
      { day: 'Senin - Jumat', time: '08:00 - 21:00' },
      { day: 'Sabtu - Minggu', time: '07:00 - 22:00' },
      { day: 'Hari Libur', time: '07:00 - 22:00' },
    ],
    description:
      'Warung mie bakso legendaris yang telah melayani masyarakat Tasikmalaya selama lebih dari 15 tahun dengan resep rahasia turun temurun.',
    specialties: [
      'Mie Yamin Manis Original',
      'Bakso Urat Kenyal',
      'Kuah Kaldu Sapi Asli',
      'Bumbu Rahasia Keluarga',
      'Delivery Gratis Area Tasik',
      'Harga Terjangkau',
    ],
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.9574854124266!2d110.3987937747393!3d-7.7943262922256675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a570032c75215%3A0x88570c75a756dbac!2sTasikmalaya!5e0!3m2!1sen!2sid!4v1748831215716!5m2!1sen!2sid',
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="location"
      className="bg-gradient-to-br from-red-50 via-white to-red-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-[#DC143C] rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-[#B91C3C] rounded-full"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-[#DC143C] rounded-full"></div>
        <div className="absolute top-1/3 right-10 w-20 h-20 bg-[#B91C3C] rounded-full"></div>
      </div>

      {/* Floating mie bakso elements */}
      <motion.div
        className="absolute top-32 left-1/4 text-6xl opacity-10"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        🍜
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-1/4 text-5xl opacity-10"
        animate={{
          y: [0, -15, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 1,
        }}
      >
        🥢
      </motion.div>

      <div className="relative z-10">
        {/* Hero Section dengan diagonal layout */}
        <motion.div
          className="relative py-20 md:py-32"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Diagonal background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#DC143C] to-[#B91C3C] transform -skew-y-3 origin-top-left"></div>

          <div className="relative z-10 container mx-auto px-6">
            <motion.div
              className="flex flex-col lg:flex-row items-center gap-12"
              variants={fadeInUp}
            >
              {/* Left content */}
              <div className="lg:w-1/2 text-white">
                <motion.div
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-6"
                  variants={fadeInUp}
                >
                  <span className="text-2xl">📍</span>
                  <span className="text-sm font-medium">Lokasi Warung</span>
                </motion.div>

                <motion.h1
                  className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                  variants={fadeInUp}
                >
                  Kunjungi <span className="text-yellow-300">Warung</span>
                  <br />
                  <span className="text-white">Legendaris Kami</span>
                </motion.h1>

                <motion.p
                  className="text-xl mb-8 leading-relaxed opacity-90"
                  variants={fadeInUp}
                >
                  Nikmati kehangatan suasana warung keluarga dengan cita rasa
                  mie bakso khas Tasikmalaya yang telah dipercaya sejak tahun
                  2008.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  variants={fadeInUp}
                >
                  <Link
                    href={`https://wa.me/${location.whatsapp.replace(
                      /[^0-9]/g,
                      ''
                    )}`}
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 inline-flex items-center justify-center shadow-lg"
                  >
                    <span className="mr-2">💬</span>
                    WhatsApp Kami
                  </Link>
                  <Link
                    href={`tel:${location.phone}`}
                    className="bg-white/20 border-2 border-white hover:bg-white hover:text-[#DC143C] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 inline-flex items-center justify-center backdrop-blur-sm"
                  >
                    <span className="mr-2">📞</span>
                    Telepon
                  </Link>
                </motion.div>
              </div>

              {/* Right content - Stats cards */}
              <div className="lg:w-1/2">
                <motion.div
                  className="grid grid-cols-2 gap-6"
                  variants={staggerContainer}
                >
                  <motion.div
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
                    variants={fadeInUp}
                  >
                    <div className="text-3xl mb-2">🏆</div>
                    <div className="text-2xl font-bold text-white">15+</div>
                    <div className="text-sm text-white/80">Tahun Melayani</div>
                  </motion.div>

                  <motion.div
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
                    variants={fadeInUp}
                  >
                    <div className="text-3xl mb-2">❤️</div>
                    <div className="text-2xl font-bold text-white">5000+</div>
                    <div className="text-sm text-white/80">Pelanggan Setia</div>
                  </motion.div>

                  <motion.div
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
                    variants={fadeInUp}
                  >
                    <div className="text-3xl mb-2">🍜</div>
                    <div className="text-2xl font-bold text-white">500+</div>
                    <div className="text-sm text-white/80">Mangkuk/Hari</div>
                  </motion.div>

                  <motion.div
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
                    variants={fadeInUp}
                  >
                    <div className="text-3xl mb-2">⭐</div>
                    <div className="text-2xl font-bold text-white">4.9</div>
                    <div className="text-sm text-white/80">Rating Google</div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content dengan asymmetric layout */}
        <div className="container mx-auto px-6 py-20">
          <motion.div
            className="grid grid-cols-1 xl:grid-cols-3 gap-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Left column - Map (takes 2 columns on xl) */}
            <motion.div
              className="xl:col-span-2 order-2 xl:order-1"
              variants={fadeInUp}
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-[#DC143C]/10">
                <div className="bg-gradient-to-r from-[#DC143C] to-[#B91C3C] p-6 text-white">
                  <h3 className="text-2xl font-bold flex items-center">
                    <span className="mr-3 text-3xl">🗺️</span>
                    Lokasi Warung Kami
                  </h3>
                  <p className="mt-2 opacity-90">
                    Mudah ditemukan di pusat kota Tasikmalaya
                  </p>
                </div>
                <div className="h-96 relative">
                  <iframe
                    src={location.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi Mie Bakso Tasik Baraya"
                    className="rounded-b-3xl"
                  />
                  {/* Overlay dengan info singkat */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <h4 className="font-bold text-[#DC143C]">
                      {location.name}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {location.tagline}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right column - Info cards */}
            <motion.div
              className="space-y-6 order-1 xl:order-2"
              variants={fadeInUp}
            >
              {/* Warung Info Card */}
              <div className="bg-white rounded-2xl shadow-xl border border-[#DC143C]/10 overflow-hidden">
                <div className="bg-gradient-to-r from-[#DC143C] to-[#B91C3C] p-6 text-white">
                  <h3 className="text-xl font-bold flex items-center">
                    <span className="mr-3">🏪</span>
                    Info Warung
                  </h3>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">
                      {location.name}
                    </h4>
                    <p className="text-[#DC143C] font-medium">
                      {location.tagline}
                    </p>
                    <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                      {location.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-white rounded-2xl shadow-xl border border-[#DC143C]/10 overflow-hidden">
                <div className="bg-gradient-to-r from-[#DC143C] to-[#B91C3C] p-6 text-white">
                  <h3 className="text-xl font-bold flex items-center">
                    <span className="mr-3">📞</span>
                    Kontak
                  </h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-[#DC143C]/10 p-2 rounded-full">
                      <svg
                        className="w-5 h-5 text-[#DC143C]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">Alamat</h4>
                      <p className="text-gray-600 text-sm">
                        {location.address}
                      </p>
                      <Link
                        href={`https://maps.google.com/?q=${encodeURIComponent(
                          location.address
                        )}`}
                        target="_blank"
                        className="text-[#DC143C] hover:underline text-sm inline-flex items-center mt-1"
                      >
                        Buka di Google Maps →
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">
                        Telepon & WhatsApp
                      </h4>
                      <p className="text-gray-600 text-sm">{location.phone}</p>
                      <div className="flex gap-2 mt-2">
                        <Link
                          href={`tel:${location.phone}`}
                          className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full hover:bg-blue-200 transition-colors"
                        >
                          📞 Telepon
                        </Link>
                        <Link
                          href={`https://wa.me/${location.whatsapp.replace(
                            /[^0-9]/g,
                            ''
                          )}`}
                          className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full hover:bg-green-200 transition-colors"
                        >
                          💬 WhatsApp
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-white rounded-2xl shadow-xl border border-[#DC143C]/10 overflow-hidden">
                <div className="bg-gradient-to-r from-[#DC143C] to-[#B91C3C] p-6 text-white">
                  <h3 className="text-xl font-bold flex items-center">
                    <span className="mr-3">⏰</span>
                    Jam Buka
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    {location.hours.map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                      >
                        <span className="font-medium text-gray-800">
                          {schedule.day}
                        </span>
                        <span className="text-[#DC143C] font-bold">
                          {schedule.time}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <p className="text-green-800 text-sm text-center">
                      <span className="font-semibold">
                        🕐 Buka Setiap Hari!
                      </span>{' '}
                      Siap melayani kapan saja Anda ingin menikmati mie bakso
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
