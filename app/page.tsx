'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { featuredProducts, countries } from '@/lib/products';
import { useCartStore } from '@/store/cartStore';

const countryEmojis: Record<string, string> = {
  'Portugal': '🇵🇹',
  'Brésil': '🇧🇷',
  'Cap-Vert': '🇨🇻',
  'Angola': '🇦🇴',
  'Mozambique': '🇲🇿',
  'France': '🇫🇷',
  'Espagne': '🇪🇸',
  'Italie': '🇮🇹',
  'Maroc': '🇲🇦',
  'Inde': '🇮🇳',
  'Mexique': '🇲🇽',
  'Thaïlande': '🇹🇭',
  'Japon': '🇯🇵',
};

export default function Home() {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary)] via-[#1a3a4a] to-[var(--secondary)]" />

        {/* Decorative circles */}
        <div className="absolute top-20 left-10 w-32 h-32 sm:w-64 sm:h-64 bg-[var(--primary)]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 sm:w-80 sm:h-80 bg-[var(--accent)]/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 sm:w-96 sm:h-96 bg-[var(--warm)]/10 rounded-full blur-3xl" />

        {/* Floating fruits */}
        <div className="absolute top-1/4 left-[10%] text-4xl sm:text-6xl animate-float opacity-60">🍊</div>
        <div className="absolute top-1/3 right-[15%] text-3xl sm:text-5xl animate-float opacity-50" style={{ animationDelay: '1s' }}>🥭</div>
        <div className="absolute bottom-1/3 left-[20%] text-3xl sm:text-5xl animate-float opacity-50" style={{ animationDelay: '0.5s' }}>🫐</div>
        <div className="absolute bottom-1/4 right-[10%] text-4xl sm:text-6xl animate-float opacity-60" style={{ animationDelay: '1.5s' }}>🍋</div>
        <div className="absolute top-[60%] left-[40%] text-2xl sm:text-4xl animate-float opacity-40" style={{ animationDelay: '2s' }}>🍇</div>

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="text-6xl sm:text-8xl">🍊</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Les saveurs du monde
            <br />
            <span className="text-[var(--primary-light)]">dans votre verre</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Chaque jus raconte l&apos;histoire d&apos;un pays. Retrouvez les saveurs
            de chez vous, peu importe où vous êtes dans le monde.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/products" className="btn-primary text-lg px-8 py-4">
              Découvrir nos jus
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/about" className="btn-secondary text-lg px-8 py-4 text-white border-white/40 hover:bg-white hover:text-[var(--secondary)]">
              Notre histoire
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Concept Section */}
      <section className="py-16 sm:py-24 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-[var(--primary)] font-semibold text-sm uppercase tracking-widest">
              Notre Concept
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--secondary)] mt-3 mb-6">
              Un voyage gustatif à chaque gorgée
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Chez SAFTY, nous croyons que les saveurs sont le chemin le plus court
              vers chez soi. Chaque bouteille capture l&apos;essence d&apos;une terre, d&apos;une
              tradition, d&apos;un souvenir. Pour que chaque gorgée vous ramène là où
              votre cœur se sent chez lui.
            </p>
          </motion.div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🌍',
                title: 'Du Monde Entier',
                description: 'Des fruits soigneusement sélectionnés dans leurs régions d\'origine pour une authenticité maximale.',
              },
              {
                icon: '🍃',
                title: '100% Naturel',
                description: 'Sans conservateurs, sans colorants artificiels. Juste des fruits, de l\'eau et parfois un peu de sucre.',
              },
              {
                icon: '❤️',
                title: 'Fait avec Amour',
                description: 'Chaque recette est développée avec les communautés locales pour respecter les traditions.',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 text-center card-hover shadow-sm"
              >
                <span className="text-5xl mb-4 block">{feature.icon}</span>
                <h3 className="text-xl font-bold text-[var(--secondary)] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="text-[var(--primary)] font-semibold text-sm uppercase tracking-widest">
              Sélection
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--secondary)] mt-3">
              Nos jus vedettes
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProducts.slice(0, 6).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden card-hover shadow-sm border border-gray-100"
              >
                {/* Product image placeholder */}
                <div className="h-48 bg-gradient-to-br from-[var(--primary-light)]/20 to-[var(--accent)]/20 flex items-center justify-center relative">
                  <span className="text-6xl">{product.countryFlag}</span>
                  <span className="absolute top-3 right-3 bg-[var(--primary)] text-white text-xs px-3 py-1 rounded-full font-semibold">
                    {product.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-gray-500">{product.country}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-sm text-gray-500">{product.region}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--secondary)] mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[var(--primary)]">
                      {product.price.toFixed(2)} €
                    </span>
                    <button
                      onClick={() =>
                        addItem({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          quantity: 1,
                          image: product.image,
                          country: product.country,
                        })
                      }
                      className="bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white p-3 rounded-full transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link href="/products" className="btn-primary text-lg">
              Voir tous nos jus
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-16 sm:py-24 bg-[var(--secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="text-[var(--primary-light)] font-semibold text-sm uppercase tracking-widest">
              Origines
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
              Des saveurs de 12 pays
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto">
              Chaque pays apporte ses fruits uniques, ses recettes ancestrales
              et ses traditions gustatives.
            </p>
          </motion.div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-6">
            {countries.map((country, index) => (
              <motion.div
                key={country}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-colors cursor-default"
              >
                <span className="text-3xl sm:text-4xl block mb-2">
                  {countryEmojis[country] || '🌍'}
                </span>
                <span className="text-white text-xs sm:text-sm font-medium">
                  {country}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Prêt à voyager par les saveurs ?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Commandez vos jus préférés et recevez un petit bout de chez vous,
              directement à votre porte.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-white text-[var(--primary-dark)] px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Commander maintenant
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
