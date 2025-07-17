'use client';
import MenuCategory from '@/Components/Menu/MenuCategory';
import { motion } from 'framer-motion';

// Service Banner Component
const ServiceBanner = () => (
  <div className="bg-gradient-to-r from-[#DC143C] to-[#B91C3C] rounded-2xl p-8 text-white text-center">
    <h3 className="text-2xl font-bold mb-4">Pelayanan Terbaik untuk Anda</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="flex flex-col items-center">
        <span className="text-3xl mb-2">🍜</span>
        <span className="font-semibold">Fresh Daily</span>
        <span className="text-sm opacity-90">Dibuat segar setiap hari</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-3xl mb-2">🚚</span>
        <span className="font-semibold">Delivery</span>
        <span className="text-sm opacity-90">Antar ke rumah Anda</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-3xl mb-2">💯</span>
        <span className="font-semibold">100% Halal</span>
        <span className="text-sm opacity-90">Terjamin kehalalannya</span>
      </div>
    </div>
  </div>
);

export default function MenuSection() {
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

  // Menu Utama
  const menuUtama = {
    title: 'MENU UTAMA',
    items: [
      {
        name: 'Mie Yamin Manis',
        price: 12000,
        description:
          'Mie dengan bumbu manis khas Tasikmalaya yang autentik. Cita rasa manis gurih yang menggugah selera.',
        imageSrc: '/logo.jpg',
        isHot: true,
      },
      {
        name: 'Mie Yamin Asin',
        price: 12000,
        description:
          'Versi gurih dari mie yamin dengan bumbu asin yang kaya rasa. Perfect untuk yang suka rasa gurih.',
        imageSrc: '/logo.jpg',
        isHot: true,
      },
      {
        name: 'Bakso Urat',
        price: 15000,
        description:
          'Bakso dengan tekstur kasar dari urat sapi pilihan. Kenyal dan penuh dengan cita rasa daging sapi.',
        imageSrc: '/logo.jpg',
        isHot: true,
      },
      {
        name: 'Bakso Halus',
        price: 13000,
        description:
          'Bakso dengan tekstur halus dan lembut, terbuat dari daging sapi pilihan dengan bumbu rahasia.',
        imageSrc: '/logo.jpg',
        isHot: true,
      },
      {
        name: 'Bakso Isi Daging Cincang',
        price: 16000,
        description:
          'Bakso dengan isian daging cincang di dalamnya. Surprise di setiap gigitan!',
        imageSrc: '/logo.jpg',
        isHot: true,
      },
      {
        name: 'Bakso Isi Telur',
        price: 17000,
        description:
          'Bakso dengan isian telur puyuh di tengahnya. Kombinasi protein yang sempurna.',
        imageSrc: '/logo.jpg',
        isHot: true,
      },
      {
        name: 'Bakso Jumbo',
        price: 20000,
        description:
          'Bakso berukuran jumbo untuk yang lapar berat. Satu bakso sudah cukup mengenyangkan!',
        imageSrc: '/logo.jpg',
        isHot: true,
      },
    ],
  };

  // Paket Komplit
  const paketKomplit = {
    title: 'PAKET KOMPLIT',
    items: [
      {
        name: 'Mie Yamin + Bakso Campur + Pangsit Goreng',
        price: 25000,
        description:
          'Paket lengkap dengan mie yamin, aneka bakso (halus, urat, isi), dan pangsit goreng crispy.',
        imageSrc: '/logo.jpg',
        isHot: true,
      },
      {
        name: 'Mie Yamin + Bakso Jumbo',
        price: 28000,
        description:
          'Kombinasi mie yamin dengan bakso jumbo yang mengenyangkan. Perfect untuk yang sangat lapar.',
        imageSrc: '/logo.jpg',
        isHot: true,
      },
      {
        name: 'Pangsit Rebus',
        price: 10000,
        description:
          'Pangsit rebus dengan isian sayuran dan daging, disajikan dalam kuah kaldu sapi hangat.',
        imageSrc: '/logo.jpg',
        isHot: true,
      },
      {
        name: 'Pangsit Goreng',
        price: 10000,
        description:
          'Pangsit goreng crispy dengan isian gurih, cocok sebagai tambahan atau cemilan.',
        imageSrc: '/logo.jpg',
      },
    ],
  };

  // Menu Tambahan
  const menuTambahan = {
    title: 'MENU TAMBAHAN',
    items: [
      {
        name: 'Tahu Bakso',
        price: 8000,
        description:
          'Tahu yang diisi dengan adonan bakso, digoreng hingga crispy. Perpaduan tekstur yang unik.',
        imageSrc: '/logo.jpg',
      },
      {
        name: 'Ceker Ayam',
        price: 12000,
        description:
          'Ceker ayam yang dimasak dengan bumbu special hingga empuk dan meresap.',
        imageSrc: '/logo.jpg',
        isHot: true,
      },
      {
        name: 'Pangsit Goreng Extra',
        price: 8000,
        description:
          'Tambahan pangsit goreng crispy untuk melengkapi mie bakso Anda.',
        imageSrc: '/logo.jpg',
      },
      {
        name: 'Tetelan Sapi',
        price: 15000,
        description:
          'Tetelan sapi yang empuk dan gurih, dimasak dengan bumbu rahasia khas Tasik.',
        imageSrc: '/logo.jpg',
        isHot: true,
      },
    ],
  };

  // Menu Minuman
  const menuMinuman = {
    title: 'MINUMAN SEGAR',
    items: [
      {
        name: 'Es Teh Manis',
        price: 5000,
        description:
          'Teh manis dingin yang menyegarkan, perfect sebagai teman makan mie bakso.',
        imageSrc: '/logo.jpg',
      },
      {
        name: 'Teh Panas',
        price: 4000,
        description:
          'Teh hangat tradisional untuk menghangatkan tubuh, terutama saat cuaca dingin.',
        imageSrc: '/logo.jpg',
        isHot: true,
      },
      {
        name: 'Es Jeruk',
        price: 7000,
        description:
          'Jeruk peras segar dengan es batu, kaya vitamin C dan menyegarkan.',
        imageSrc: '/logo.jpg',
      },
      {
        name: 'Jeruk Panas',
        price: 6000,
        description:
          'Jeruk peras hangat yang cocok untuk cuaca dingin atau saat sedang flu.',
        imageSrc: '/logo.jpg',
        isHot: true,
      },
      {
        name: 'Es Campur',
        price: 10000,
        description:
          'Campuran buah segar, agar-agar, dan sirup dengan es serut. Tersedia terbatas.',
        imageSrc: '/logo.jpg',
      },
      {
        name: 'Es Cendol',
        price: 8000,
        description:
          'Cendol tradisional dengan santan dan gula merah. Kadang tersedia sebagai menu special.',
        imageSrc: '/logo.jpg',
      },
    ],
  };

  return (
    <section id="menu" className="bg-gradient-to-b from-white to-red-50 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {/* Header Section */}
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#DC143C]/10 backdrop-blur-sm rounded-full border border-[#DC143C]/20 mb-6">
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
                Menu Spesial
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Menu <span className="text-[#DC143C]">Mie Bakso</span>
              <br />
              <span className="text-[#B91C3C]">Tasik Baraya</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nikmati berbagai pilihan mie yamin dan bakso khas Tasikmalaya
              dengan cita rasa autentik yang telah diwariskan turun temurun
              selama puluhan tahun.
            </p>
          </motion.div>

          {/* Service Banner */}
          <motion.div
            className="w-full max-w-4xl mx-auto mb-16"
            variants={fadeInUp}
          >
            <ServiceBanner />
          </motion.div>

          {/* Menu Categories */}
          <motion.div
            className="w-full max-w-6xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <MenuCategory {...menuUtama} />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <MenuCategory {...paketKomplit} />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <MenuCategory {...menuTambahan} />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <MenuCategory {...menuMinuman} />
            </motion.div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16 max-w-4xl mx-auto"
            variants={fadeInUp}
          >
            <div className="bg-gradient-to-r from-[#DC143C] to-[#B91C3C] rounded-2xl p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Siap Mencicipi Kelezatan Kami?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Hubungi kami sekarang untuk pemesanan atau kunjungi warung kami
                langsung!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+6281234567890"
                  className="px-8 py-3 bg-white text-[#DC143C] rounded-full font-bold hover:bg-gray-100 transition-colors duration-300"
                >
                  📞 Telepon: 0812-3456-7890
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
