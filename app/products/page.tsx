'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { products, countries, categories } from '@/lib/products';
import { useCartStore } from '@/store/cartStore';

export default function ProductsPage() {
  const [selectedCountry, setSelectedCountry] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const addItem = useCartStore((state) => state.addItem);

  const filteredProducts = products
    .filter((p) => selectedCountry === 'all' || p.country === selectedCountry)
    .filter((p) => selectedCategory === 'all' || p.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return a.name.localeCompare(b.name);
    });

  return (
    <div className="min-h-screen bg-[#fafaf8]">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-[#0f2027] via-[#203a43] to-[#2c5364] pt-28 pb-20 sm:pt-32 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-[10%] w-72 h-72 bg-[var(--primary)]/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-[10%] w-64 h-64 bg-[var(--accent)]/10 rounded-full blur-[80px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-5"
          >
            <Image src="/logo.png" alt="Safty" width={80} height={80} className="w-16 h-16 sm:w-20 sm:h-20 object-contain mx-auto" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
          >
            Nos Jus du Monde
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            {products.length} saveurs authentiques de {countries.length} pays
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white/80 backdrop-blur-lg border-b border-gray-100 sticky top-16 sm:top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm bg-white text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)] transition-all"
            >
              <option value="all">Tous les pays</option>
              {countries.map((country) => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm bg-white text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)] transition-all"
            >
              <option value="all">Toutes les catégories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm bg-white text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)] transition-all"
            >
              <option value="name">Trier par nom</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
            </select>

            <div className="flex items-center text-sm text-gray-400 sm:ml-auto font-medium">
              {filteredProducts.length} résultat{filteredProducts.length > 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCountry}-${selectedCategory}-${sortBy}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  whileHover={{ y: -6 }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100/80 transition-all duration-300"
                >
                  <div className="h-48 bg-gradient-to-br from-[var(--cream)] to-[var(--primary-light)]/10 flex items-center justify-center relative overflow-hidden">
                    <span className="text-6xl group-hover:scale-125 transition-transform duration-500">
                      {product.countryFlag}
                    </span>
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="bg-[var(--secondary)]/90 backdrop-blur-sm text-white text-[10px] px-2.5 py-1 rounded-full font-semibold uppercase tracking-wider">
                        {product.category}
                      </span>
                    </div>
                    {product.featured && (
                      <span className="absolute top-3 right-3 bg-gradient-to-r from-[var(--warm)] to-[var(--primary-light)] text-[var(--secondary)] text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                        Vedette
                      </span>
                    )}
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-1.5 text-[11px] text-gray-400 mb-2 font-medium">
                      <span>{product.countryFlag}</span>
                      <span>{product.country}</span>
                      <span className="w-0.5 h-0.5 bg-gray-300 rounded-full" />
                      <span>{product.region}</span>
                    </div>

                    <h3 className="font-bold text-[var(--secondary)] mb-2 leading-tight group-hover:text-[var(--primary)] transition-colors">
                      {product.name}
                    </h3>

                    <p className="text-gray-400 text-sm mb-3 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {product.ingredients.slice(0, 3).map((ing) => (
                        <span
                          key={ing}
                          className="bg-[var(--cream)] text-[var(--secondary)]/70 text-[10px] px-2 py-0.5 rounded-full font-medium"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-xl font-bold text-[var(--primary)]">
                        {product.price.toFixed(2)} €
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
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
                        className="flex items-center gap-1.5 bg-[var(--secondary)] hover:bg-[var(--primary)] text-white px-4 py-2.5 rounded-full text-xs font-semibold transition-colors duration-300"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                        Ajouter
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-24"
            >
              <span className="text-7xl mb-6 block">🔍</span>
              <h3 className="text-2xl font-bold text-[var(--secondary)] mb-3">
                Aucun jus trouvé
              </h3>
              <p className="text-gray-400 mb-6">
                Modifiez vos filtres pour découvrir d&apos;autres saveurs.
              </p>
              <button
                onClick={() => { setSelectedCountry('all'); setSelectedCategory('all'); }}
                className="btn-primary"
              >
                Réinitialiser les filtres
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
