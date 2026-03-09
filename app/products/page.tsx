'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--secondary)] to-[#1a3a4a] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-bold text-white mb-4"
          >
            Nos Jus du Monde 🍊
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            {products.length} saveurs authentiques de {countries.length} pays
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-100 sticky top-16 sm:top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            {/* Country filter */}
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-200 text-sm bg-white text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50"
            >
              <option value="all">Tous les pays</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>

            {/* Category filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-200 text-sm bg-white text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50"
            >
              <option value="all">Toutes les catégories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-200 text-sm bg-white text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50"
            >
              <option value="name">Trier par nom</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
            </select>

            {/* Results count */}
            <div className="flex items-center text-sm text-gray-500 sm:ml-auto">
              {filteredProducts.length} résultat{filteredProducts.length > 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 sm:py-12">
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
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white rounded-2xl overflow-hidden card-hover shadow-sm border border-gray-100 group"
                >
                  {/* Image */}
                  <div className="h-44 bg-gradient-to-br from-[var(--primary-light)]/10 to-[var(--accent)]/10 flex items-center justify-center relative overflow-hidden">
                    <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                      {product.countryFlag}
                    </span>
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="bg-[var(--primary)] text-white text-xs px-2.5 py-1 rounded-full font-medium">
                        {product.category}
                      </span>
                    </div>
                    {product.featured && (
                      <span className="absolute top-3 right-3 bg-[var(--warm)] text-[var(--secondary)] text-xs px-2.5 py-1 rounded-full font-bold">
                        Vedette
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2">
                      <span>{product.countryFlag}</span>
                      <span>{product.country}</span>
                      <span className="text-gray-300">|</span>
                      <span>{product.region}</span>
                    </div>

                    <h3 className="font-bold text-[var(--secondary)] mb-2 leading-tight">
                      {product.name}
                    </h3>

                    <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Ingredients */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {product.ingredients.slice(0, 3).map((ing) => (
                        <span
                          key={ing}
                          className="bg-[var(--cream)] text-[var(--secondary)] text-xs px-2 py-0.5 rounded-full"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <span className="text-xl font-bold text-[var(--primary)]">
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
                        className="flex items-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                        Ajouter
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <span className="text-6xl mb-4 block">🔍</span>
              <h3 className="text-xl font-bold text-[var(--secondary)] mb-2">
                Aucun jus trouvé
              </h3>
              <p className="text-gray-500">
                Essayez de modifier vos filtres pour découvrir d&apos;autres saveurs.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
