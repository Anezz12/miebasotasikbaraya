'use client';
import { motion } from 'framer-motion';

export default function StatsSection() {
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
    <section className="flex justify-center bg-gradient-to-r from-[#DC143C] to-[#B91C3C] relative overflow-hidden py-16">
      {/* Container */}
      <motion.div
        className="relative flex flex-col w-full max-w-[1280px] px-4 md:px-[75px]"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 w-full"
          variants={staggerContainer}
        >
          {/* Stat 1 */}
          <motion.div
            className="flex flex-col items-center text-center group text-white"
            variants={fadeInUp}
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
              5,000+
            </h3>
            <p className="text-sm md:text-base opacity-90 font-medium">
              Pelanggan Puas
            </p>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            className="flex flex-col items-center text-center group text-white"
            variants={fadeInUp}
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
              15
            </h3>
            <p className="text-sm md:text-base opacity-90 font-medium">
              Tahun Pengalaman
            </p>
          </motion.div>

          {/* Stat 3 */}
          <motion.div
            className="flex flex-col items-center text-center group text-white"
            variants={fadeInUp}
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
              500+
            </h3>
            <p className="text-sm md:text-base opacity-90 font-medium">
              Porsi Per Hari
            </p>
          </motion.div>

          {/* Stat 4 */}
          <motion.div
            className="flex flex-col items-center text-center group text-white"
            variants={fadeInUp}
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
              100%
            </h3>
            <p className="text-sm md:text-base opacity-90 font-medium">
              Halal & Berkualitas
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
