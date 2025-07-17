'use client';
import { motion } from 'framer-motion';

export default function SimpleSteps() {
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
    <section className="w-full overflow-x-hidden py-12 mb-20 md:py-20 bg-gradient-to-b from-white to-red-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col gap-8 md:gap-[50px]">
        {/* Heading */}
        <motion.div
          className="flex flex-col items-center gap-3 text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#DC143C]/10 backdrop-blur-sm rounded-full border border-[#DC143C]/20 mb-2"
            variants={fadeInUp}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="text-[#DC143C]"
            >
              <path
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm font-medium text-[#DC143C]">
              Cara Pemesanan
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-[50px] font-extrabold leading-tight md:leading-[59px] text-gray-800"
            variants={fadeInUp}
          >
            Pesan Mie Bakso dalam{' '}
            <span className="text-[#DC143C]">3 Langkah</span> Mudah
          </motion.h2>

          <motion.p
            className="text-base md:text-lg font-medium leading-[21px] max-w-xl text-gray-600"
            variants={fadeInUp}
          >
            Nikmati kelezatan mie bakso khas Tasikmalaya dengan cara pemesanan
            yang praktis dan cepat
          </motion.p>
        </motion.div>

        {/* Steps Container */}
        <motion.div
          className="w-full max-w-6xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Mobile Steps Counter - Only visible on mobile */}
          <motion.div
            className="md:hidden flex justify-center mb-8"
            variants={fadeInUp}
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#DC143C] to-[#B91C3C] rounded-full shadow-lg">
              <span className="text-white text-sm font-bold">
                🍜 3 Langkah Mudah
              </span>
            </div>
          </motion.div>

          {/* Steps */}
          <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-8 lg:gap-12">
            {/* Step 1 */}
            <motion.div
              className="flex flex-col gap-5 p-6 md:p-8 bg-white rounded-2xl shadow-lg border border-[#DC143C]/10 relative group hover:shadow-xl transition-all duration-300"
              variants={fadeInUp}
            >
              {/* Step Number Badge */}
              <div className="absolute -top-4 left-6 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-[#DC143C] to-[#B91C3C] text-white font-bold text-lg shadow-lg">
                1
              </div>

              <div className="flex flex-col items-center text-center gap-4 mt-4">
                <div className="flex items-center justify-center w-[80px] h-[80px] rounded-full bg-gradient-to-r from-[#DC143C]/10 to-[#B91C3C]/10 shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">📱</span>
                </div>
                <h3 className="text-xl md:text-[22px] font-bold leading-[30px] text-gray-800">
                  Pilih Menu Favorit
                </h3>
              </div>

              <p className="text-[16px] leading-7 font-medium text-gray-600 text-center">
                Lihat menu lengkap kami dan pilih varian mie bakso sesuai
                selera. Mulai dari bakso urat, bakso malang, hingga mie ayam
                spesial.
              </p>

              {/* Icon decoration */}
              <div className="absolute top-4 right-4 opacity-20">
                <span className="text-2xl text-[#DC143C]">🍜</span>
              </div>
            </motion.div>

            {/* Desktop Arrow */}
            <motion.div className="hidden md:block" variants={fadeInUp}>
              <svg
                width="60"
                height="40"
                viewBox="0 0 60 40"
                className="text-[#DC143C]/30"
              >
                <path
                  d="M10 20 L50 20 M35 10 L50 20 L35 30"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>

            {/* Mobile connector line */}
            <div className="md:hidden h-8 w-1 bg-gradient-to-b from-[#DC143C] to-[#B91C3C] opacity-50 mx-auto rounded-full"></div>

            {/* Step 2 */}
            <motion.div
              className="flex flex-col gap-5 p-6 md:p-8 bg-white rounded-2xl shadow-lg border border-[#DC143C]/10 relative group hover:shadow-xl transition-all duration-300"
              variants={fadeInUp}
            >
              {/* Step Number Badge */}
              <div className="absolute -top-4 left-6 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-[#DC143C] to-[#B91C3C] text-white font-bold text-lg shadow-lg">
                2
              </div>

              <div className="flex flex-col items-center text-center gap-4 mt-4">
                <div className="flex items-center justify-center w-[80px] h-[80px] rounded-full bg-gradient-to-r from-[#DC143C]/10 to-[#B91C3C]/10 shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">💬</span>
                </div>
                <h3 className="text-xl md:text-[22px] font-bold leading-[30px] text-gray-800">
                  Konfirmasi Pesanan
                </h3>
              </div>

              <p className="text-[16px] leading-7 font-medium text-gray-600 text-center">
                Hubungi kami melalui WhatsApp atau datang langsung ke warung.
                Tentukan jumlah porsi dan tambahan seperti kerupuk atau es teh.
              </p>

              {/* Icon decoration */}
              <div className="absolute top-4 right-4 opacity-20">
                <span className="text-2xl text-[#DC143C]">📞</span>
              </div>
            </motion.div>

            {/* Desktop Arrow */}
            <motion.div className="hidden md:block" variants={fadeInUp}>
              <svg
                width="60"
                height="40"
                viewBox="0 0 60 40"
                className="text-[#DC143C]/30"
              >
                <path
                  d="M10 20 L50 20 M35 10 L50 20 L35 30"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>

            {/* Mobile connector line */}
            <div className="md:hidden h-8 w-1 bg-gradient-to-b from-[#DC143C] to-[#B91C3C] opacity-50 mx-auto rounded-full"></div>

            {/* Step 3 */}
            <motion.div
              className="flex flex-col gap-5 p-6 md:p-8 bg-white rounded-2xl shadow-lg border border-[#DC143C]/10 relative group hover:shadow-xl transition-all duration-300"
              variants={fadeInUp}
            >
              {/* Step Number Badge */}
              <div className="absolute -top-4 left-6 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-[#DC143C] to-[#B91C3C] text-white font-bold text-lg shadow-lg">
                3
              </div>

              <div className="flex flex-col items-center text-center gap-4 mt-4">
                <div className="flex items-center justify-center w-[80px] h-[80px] rounded-full bg-gradient-to-r from-[#DC143C]/10 to-[#B91C3C]/10 shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">😋</span>
                </div>
                <h3 className="text-xl md:text-[22px] font-bold leading-[30px] text-gray-800">
                  Nikmati Kelezatan
                </h3>
              </div>

              <p className="text-[16px] leading-7 font-medium text-gray-600 text-center">
                Pesanan siap diantar atau bisa diambil langsung. Nikmati mie
                bakso hangat dengan kuah kaldu sapi yang gurih dan bakso kenyal
                buatan sendiri.
              </p>

              {/* Icon decoration */}
              <div className="absolute top-4 right-4 opacity-20">
                <span className="text-2xl text-[#DC143C]">✨</span>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div className="text-center mt-12" variants={fadeInUp}>
            <div className="bg-gradient-to-r from-[#DC143C] to-[#B91C3C] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Siap Memesan?</h3>
              <p className="text-lg mb-6 opacity-90">
                Hubungi kami sekarang dan rasakan kelezatan mie bakso khas
                Tasikmalaya!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+6281234567890"
                  className="px-8 py-3 bg-white text-[#DC143C] rounded-full font-bold hover:bg-gray-100 transition-colors duration-300"
                >
                  📞 Telepon Sekarang
                </a>
                <a
                  href="https://wa.me/6281234567890"
                  className="px-8 py-3 bg-green-500 text-white rounded-full font-bold hover:bg-green-600 transition-colors duration-300"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
