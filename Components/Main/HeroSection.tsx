'use client';
import Link from 'next/link';
import ImageSlideShow from '@/Components/Main/ImageSlideShow';
import { motion } from 'framer-motion';

export default function HeroSection() {
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

  const fadeInLeft = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section className="pt-24 md:pt-32 bg-gradient-to-br from-red-50 to-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6 lg:px-48 pb-10">
        <motion.div
          className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-[40px] items-center min-h-[80vh]"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {/* Text Content and Desktop Buttons */}
          <motion.div
            className="flex flex-col gap-6 md:gap-8 lg:gap-[35px] w-full lg:w-1/2 py-8 md:py-12 lg:py-[100px]"
            variants={fadeInLeft}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight md:leading-[1.1] lg:leading-[80px] text-center lg:text-left text-gray-800"
              variants={fadeInUp}
            >
              <span className="block mb-2">
                Cita Rasa{' '}
                <mark className="bg-[#DC143C] text-white -mx-1 inline-flex items-center justify-center h-12 md:h-15 lg:h-20 px-3 rounded-lg">
                  Autentik
                </mark>
              </span>
              <span className="block">
                Mie Bakso{' '}
                <mark className="bg-gradient-to-r from-[#DC143C] to-[#B91C3C] text-white -mx-1 inline-flex items-center justify-center h-12 md:h-15 lg:h-20 px-3 rounded-lg">
                  Tasik Baraya
                </mark>
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl leading-8 md:leading-9 lg:leading-10 font-medium text-gray-600 text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
              variants={fadeInUp}
            >
              Nikmati kelezatan mie bakso dengan kuah kaldu sapi yang gurih dan
              bakso kenyal buatan sendiri. Warisan cita rasa khas Tasikmalaya
              yang telah turun temurun, disajikan dengan penuh kehangatan untuk
              keluarga Indonesia.
            </motion.p>

            {/* Highlight Features */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-[#DC143C]/20">
                <div className="w-2 h-2 bg-[#DC143C] rounded-full"></div>
                <span className="text-sm font-semibold text-gray-700">
                  Bakso Buatan Sendiri
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-[#DC143C]/20">
                <div className="w-2 h-2 bg-[#DC143C] rounded-full"></div>
                <span className="text-sm font-semibold text-gray-700">
                  Kuah Kaldu Segar
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-[#DC143C]/20">
                <div className="w-2 h-2 bg-[#DC143C] rounded-full"></div>
                <span className="text-sm font-semibold text-gray-700">
                  Resep Turun Temurun
                </span>
              </div>
            </motion.div>

            {/* Desktop Buttons - Only visible on desktop */}
            <motion.div
              className="hidden lg:flex flex-row gap-5 justify-start"
              variants={fadeInUp}
            >
              <Link
                href="#"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#DC143C] to-[#B91C3C] text-white text-lg font-bold shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 text-center"
              >
                Pesan Sekarang
              </Link>
              <Link
                href="/menu"
                className="px-8 py-4 rounded-full border-2 border-[#DC143C] text-[#DC143C] text-lg font-bold transition-all duration-300 hover:bg-[#DC143C] hover:text-white hover:scale-105 text-center"
              >
                Lihat Menu
              </Link>
            </motion.div>
          </motion.div>

          {/* Mobile Slideshow Container */}
          <motion.div className="w-full lg:hidden my-8" variants={fadeInUp}>
            <div className="w-full h-[350px] sm:h-[400px] md:h-[450px] rounded-[30px] overflow-hidden shadow-2xl border-4 border-white">
              <ImageSlideShow />
            </div>
          </motion.div>

          {/* Mobile Buttons - Only visible on mobile and tablet */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center w-full lg:hidden mb-6"
            variants={fadeInUp}
          >
            <Link
              href="#"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#DC143C] to-[#B91C3C] text-white text-lg font-bold shadow-lg transition-all duration-300 hover:shadow-xl text-center"
            >
              Pesan Sekarang
            </Link>
            <Link
              href="/menu"
              className="px-8 py-4 rounded-full border-2 border-[#DC143C] text-[#DC143C] text-lg font-bold transition-all duration-300 hover:bg-[#DC143C] hover:text-white text-center"
            >
              Lihat Menu
            </Link>
          </motion.div>

          {/* Image Content - Only visible on desktop and larger screens */}
          <motion.div
            className="relative w-full lg:w-1/2 h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] hidden lg:block"
            variants={fadeInRight}
          >
            {/* Main Image */}
            <motion.div
              className="relative mx-auto lg:ml-[60px] lg:mr-[60px] w-[80%] sm:w-[70%] md:w-[60%] lg:w-[480px] h-full rounded-[30px] overflow-hidden shadow-2xl border-4 border-white"
              variants={fadeInUp}
            >
              <ImageSlideShow />
            </motion.div>

            {/* Review Badge */}
            <motion.div
              className="hidden md:block absolute bottom-[8%] left-[8%] lg:bottom-[20px] lg:left-4 w-[180px] lg:w-[280px] h-[100px] lg:h-[140px]"
              variants={fadeInLeft}
            >
              <div className="relative w-full h-full">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-[#DC143C]/20">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex text-[#DC143C]">{'★'.repeat(5)}</div>
                    <span className="text-sm font-bold text-gray-700">
                      4.9/5
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 font-medium">
                    {
                      '"Mie Bakso Tasik Baraya adalah tempat favorit saya untuk menikmati mie bakso yang lezat. Rasa kuahnya yang gurih dan bakso kenyalnya membuat saya ketagihan!"'
                    }
                  </p>
                  <p className="text-xs text-[#DC143C] font-semibold mt-1">
                    - Pelanggan Setia
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Quality Badge */}
            <motion.div
              className="hidden md:block absolute top-[15%] right-[12%] lg:top-[40px] lg:right-4 w-[120px] lg:w-[160px] h-[120px] lg:h-[160px]"
              variants={fadeInRight}
            >
              <div className="relative w-full h-full">
                <div className="bg-gradient-to-br from-[#DC143C] to-[#B91C3C] rounded-full p-6 shadow-lg flex flex-col items-center justify-center text-white">
                  <div className="text-2xl lg:text-3xl font-bold mb-1">
                    100%
                  </div>
                  <div className="text-xs lg:text-sm font-semibold text-center leading-tight">
                    Halal & Berkualitas
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute top-[10%] left-[15%] w-4 h-4 bg-[#DC143C] rounded-full opacity-60"
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
            <motion.div
              className="absolute bottom-[25%] right-[8%] w-6 h-6 bg-[#B91C3C] rounded-full opacity-40"
              animate={{
                y: [0, -15, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: 'reverse',
                delay: 1,
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
