'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
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
    <section id="about" className="bg-gradient-to-b from-red-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative py-20 md:py-32 overflow-hidden">
        <motion.section
          className="text-center mb-20"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#DC143C]/10 backdrop-blur-sm rounded-full border border-[#DC143C]/20 mb-6"
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
                d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm font-medium text-[#DC143C]">
              Kisah Kami
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6"
            variants={fadeInUp}
          >
            Cita Rasa <span className="text-[#DC143C]">Autentik</span>
            <br />
            <span className="text-[#B91C3C]">Tasikmalaya</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Mie Bakso Tasik Baraya adalah warisan kuliner khas Tasikmalaya yang
            telah menghadirkan kelezatan autentik selama puluhan tahun. Setiap
            mangkuk yang kami sajikan adalah kombinasi sempurna antara tradisi
            dan kualitas terbaik.
          </motion.p>
        </motion.section>

        {/* Content Sections */}
        <div className="space-y-24">
          {/* Awal Mula */}
          <motion.section
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="space-y-6" variants={fadeInUp}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#DC143C]/5 rounded-full">
                <div className="w-2 h-2 bg-[#DC143C] rounded-full"></div>
                <span className="text-sm font-medium text-[#DC143C]">
                  Bab 1
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Warisan Turun Temurun
              </h2>

              <p className="text-gray-700 leading-relaxed text-lg">
                Didirikan lebih dari 15 tahun yang lalu di kota Tasikmalaya, Mie
                Bakso Tasik Baraya lahir dari resep keluarga yang telah
                diwariskan turun temurun. Dengan komitmen untuk mempertahankan
                cita rasa asli, kami menggunakan bahan-bahan pilihan dan bumbu
                rahasia yang telah teruji waktu untuk menghadirkan kelezatan
                yang tak terlupakan.
              </p>

              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-[#DC143C]/10">
                  <div className="text-2xl font-bold text-[#DC143C]">15+</div>
                  <div className="text-sm text-gray-600">Tahun</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-[#DC143C]/10">
                  <div className="text-2xl font-bold text-[#DC143C]">100%</div>
                  <div className="text-sm text-gray-600">Halal</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-[#DC143C]/10">
                  <div className="text-2xl font-bold text-[#DC143C]">500+</div>
                  <div className="text-sm text-gray-600">Porsi/Hari</div>
                </div>
              </div>
            </motion.div>

            <motion.div className="relative group" variants={fadeInUp}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#DC143C]/20 to-[#B91C3C]/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/logo.jpg"
                  alt="Mie Bakso Tasik Baraya"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          </motion.section>

          {/* Keunggulan & Lokasi */}
          <motion.section
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div
              className="relative group order-2 lg:order-1"
              variants={fadeInUp}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#B91C3C]/20 to-[#DC143C]/20 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/logo.jpg"
                  alt="Keunggulan Mie Bakso"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>

            <motion.div
              className="space-y-6 order-1 lg:order-2"
              variants={fadeInUp}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#DC143C]/5 rounded-full">
                <div className="w-2 h-2 bg-[#DC143C] rounded-full"></div>
                <span className="text-sm font-medium text-[#DC143C]">
                  Bab 2
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Keunggulan & Kualitas Terbaik
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#DC143C] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Bakso Buatan Sendiri
                    </h4>
                    <p className="text-gray-600">
                      Dibuat fresh setiap hari dengan daging sapi pilihan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#DC143C] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Kuah Kaldu Segar
                    </h4>
                    <p className="text-gray-600">
                      Direbus dengan tulang sapi selama berjam-jam
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#DC143C] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Bumbu Rahasia
                    </h4>
                    <p className="text-gray-600">
                      Resep turun temurun khas Tasikmalaya
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#DC143C] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Pelayanan Ramah
                    </h4>
                    <p className="text-gray-600">
                      Suasana keluarga yang hangat dan nyaman
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* Philosophy Section */}
          <motion.section
            className="relative py-20 bg-gradient-to-br from-[#DC143C] to-[#B91C3C] rounded-3xl overflow-hidden"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-24 h-24 border border-white rounded-full"></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center px-6 space-y-8">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm font-medium text-white">
                  Filosofi Kami
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Kehangatan dalam Setiap{' '}
                <span className="text-yellow-300">Suapan</span>
              </h2>

              <div className="space-y-6 text-lg text-gray-200 leading-relaxed">
                <p>
                  Kami percaya bahwa makanan bukan hanya tentang mengenyangkan
                  perut, tetapi juga tentang menghangatkan hati dan mempererat
                  tali silaturahmi. Setiap mangkuk mie bakso yang kami sajikan
                  adalah wujud kasih sayang dan dedikasi untuk memberikan yang
                  terbaik bagi keluarga Indonesia.
                </p>

                <p>
                  Dengan semangat gotong royong dan kekeluargaan, kami terus
                  berinovasi sambil mempertahankan keaslian cita rasa. Karena
                  bagi kami, pelanggan bukan hanya pembeli, tetapi bagian dari
                  keluarga besar Tasik Baraya.
                </p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </section>
  );
}
