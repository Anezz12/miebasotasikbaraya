'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// Customer review card component
interface Review {
  id: number;
  content: string;
  name: string;
  role: string;
  avatarUrl: string;
  rating: number;
  location: string;
  visitCount: string;
}

export default function CustomerReviewCard() {
  const reviews: Review[] = [
    {
      id: 1,
      content:
        'Mie bakso di sini benar-benar autentik! Baksonya kenyal, kuahnya gurih, dan bumbu yamie manisnya pas banget. Sudah langganan 5 tahun dan tidak pernah bosan.',
      name: 'Sari Nurhayati',
      role: 'Ibu Rumah Tangga',
      avatarUrl: '/profile.png',
      rating: 5,
      location: 'Tasikmalaya',
      visitCount: '50+ kali',
    },
    {
      id: 2,
      content:
        'Sebagai anak rantau dari Tasik, mie bakso ini bikin kangen kampung halaman. Rasanya persis seperti yang dibuat nenek dulu.',
      name: 'Ahmad Firdaus',
      role: 'Mahasiswa',
      avatarUrl: '/profile.png',
      rating: 5,
      location: 'Jakarta',
      visitCount: '20+ kali',
    },
    {
      id: 3,
      content:
        'Bakso uratnya juara! Teksturnya perfect, tidak terlalu keras tapi juga tidak lembek. Kuah kaldunya juga bening tapi rasa daging sapinya kuat.',
      name: 'Budi Santoso',
      role: 'Pedagang',
      avatarUrl: '/profile.png',
      rating: 5,
      location: 'Bandung',
      visitCount: '30+ kali',
    },
    {
      id: 4,
      content:
        'Harga terjangkau tapi kualitas premium. Cocok banget buat kantong mahasiswa seperti saya. Porsinya juga mengenyangkan.',
      name: 'Rina Marlina',
      role: 'Mahasiswa',
      avatarUrl: '/profile.png',
      rating: 5,
      location: 'Tasikmalaya',
      visitCount: '40+ kali',
    },
    {
      id: 5,
      content:
        'Keluarga saya suka banget makan di sini. Anak-anak doyan bakso isinya, saya suka mie yamin manisnya. Pelayanannya juga ramah.',
      name: 'Hendra Wijaya',
      role: 'Pegawai Swasta',
      avatarUrl: '/profile.png',
      rating: 5,
      location: 'Ciamis',
      visitCount: '25+ kali',
    },
    {
      id: 6,
      content:
        'Bakso jumbonya gede banget! Satu biji aja udah kenyang. Pas banget buat yang lagi sangat lapar setelah kerja.',
      name: 'Desi Ratnawati',
      role: 'Perawat',
      avatarUrl: '/profile.png',
      rating: 5,
      location: 'Garut',
      visitCount: '15+ kali',
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
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

  // Circular review card component with new design
  const ReviewCard = ({ review, index }: { review: Review; index: number }) => (
    <motion.div
      className={`relative ${
        index % 2 === 0 ? 'mt-0' : 'mt-8'
      } group cursor-pointer`}
      variants={fadeInUp}
      whileHover={{ scale: 1.05, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {/* Circular container */}
      <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-white via-red-50 to-white shadow-2xl border-4 border-[#DC143C]/20 overflow-hidden group-hover:border-[#DC143C]/40 transition-all duration-300">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-6 h-6 text-[#DC143C]">
            🍜
          </div>
          <div className="absolute bottom-10 right-10 w-4 h-4 text-[#DC143C]">
            ⭐
          </div>
          <div className="absolute top-20 right-12 w-3 h-3 bg-[#DC143C] rounded-full"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-8 h-full flex flex-col justify-center items-center text-center">
          {/* Stars rating */}
          <div className="flex mb-4">
            {[...Array(review.rating)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-[#DC143C] fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>

          {/* Review content */}
          <p className="text-sm leading-relaxed text-gray-700 mb-6 line-clamp-4">
            {' ' + review.content + ' '}
          </p>

          {/* Customer info */}
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-full overflow-hidden border-3 border-[#DC143C]/30 mb-3">
              <Image
                src={review.avatarUrl}
                alt={review.name}
                width={56}
                height={56}
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-bold text-gray-800 text-sm">{review.name}</h4>
            <p className="text-xs text-[#DC143C] font-medium">{review.role}</p>
            <div className="mt-2 flex flex-col items-center text-xs text-gray-600">
              <span className="flex items-center gap-1">
                📍 {review.location}
              </span>
              <span className="flex items-center gap-1">
                🍜 {review.visitCount}
              </span>
            </div>
          </div>
        </div>

        {/* Decorative bowl icon */}
        <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-[#DC143C] to-[#B91C3C] rounded-full flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300">
          🍜
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="bg-gradient-to-br from-red-50 via-white to-red-50 relative overflow-hidden py-20">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-[#DC143C] rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-[#B91C3C] rounded-full"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-[#DC143C] rounded-full"></div>
        <div className="absolute top-1/3 right-10 w-20 h-20 bg-[#B91C3C] rounded-full"></div>
      </div>

      {/* Floating elements */}
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
        ⭐
      </motion.div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 relative z-10">
        {/* Header section with new design */}
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
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
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                fill="currentColor"
              />
            </svg>
            <span className="text-sm font-medium text-[#DC143C]">
              Testimoni Pelanggan
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
            variants={fadeInUp}
          >
            Apa Kata <span className="text-[#DC143C]">Pelanggan</span>
            <br />
            <span className="text-[#B91C3C]">Setia Kami</span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Bergabunglah dengan ribuan pelanggan yang telah merasakan kelezatan
            mie bakso khas Tasikmalaya di Tasik Baraya
          </motion.p>

          {/* Stats */}
          <motion.div
            className="flex justify-center items-center gap-8 mt-8"
            variants={fadeInUp}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-[#DC143C]">5,000+</div>
              <div className="text-sm text-gray-600">Pelanggan Puas</div>
            </div>
            <div className="w-1 h-12 bg-[#DC143C]/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#DC143C]">4.9/5</div>
              <div className="text-sm text-gray-600">Rating</div>
            </div>
            <div className="w-1 h-12 bg-[#DC143C]/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#DC143C]">15+</div>
              <div className="text-sm text-gray-600">Tahun Melayani</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Reviews in zigzag pattern */}
        <motion.div
          className="relative"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Desktop: Zigzag layout */}
          <div className="hidden lg:block">
            <div className="flex flex-wrap justify-center gap-8">
              {reviews.map((review, index) => (
                <div
                  key={review.id}
                  className={`${
                    index % 3 === 0
                      ? 'self-start'
                      : index % 3 === 1
                      ? 'self-center'
                      : 'self-end'
                  }`}
                >
                  <ReviewCard review={review} index={index} />
                </div>
              ))}
            </div>
          </div>

          {/* Tablet: Grid layout */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-8 justify-items-center">
            {reviews.slice(0, 4).map((review, index) => (
              <ReviewCard key={review.id} review={review} index={index} />
            ))}
          </div>

          {/* Mobile: Stacked with horizontal scroll preview */}
          <div className="md:hidden">
            <div className="space-y-8 mb-8">
              {reviews.slice(0, 2).map((review, index) => (
                <div key={review.id} className="flex justify-center">
                  <ReviewCard review={review} index={index} />
                </div>
              ))}
            </div>

            {/* Horizontal scroll for more reviews */}
            <div className="overflow-x-auto pb-4">
              <div className="flex space-x-6 w-max pl-4">
                {reviews.slice(2, 5).map((review, index) => (
                  <ReviewCard key={review.id} review={review} index={index} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div className="text-center mt-16" variants={fadeInUp}>
          <div className="bg-gradient-to-r from-[#DC143C] to-[#B91C3C] rounded-3xl p-8 text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ingin Bergabung dengan Mereka?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Rasakan sendiri kelezatan mie bakso khas Tasikmalaya yang telah
              dipercaya ribuan pelanggan!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-[#DC143C] rounded-full font-bold hover:bg-gray-100 transition-colors duration-300">
                🍜 Pesan Sekarang
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-[#DC143C] transition-all duration-300">
                📍 Kunjungi Warung
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
