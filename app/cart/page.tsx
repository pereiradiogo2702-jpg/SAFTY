'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useCartStore } from '@/store/cartStore';

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, getTotalPrice, getTotalItems } =
    useCartStore();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#fafaf8] pt-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center px-4"
        >
          <Image src="/logo.png" alt="Safty" width={100} height={100} className="w-20 h-20 object-contain mx-auto mb-6 opacity-30" />
          <span className="text-8xl block mb-6">🧃</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--secondary)] mb-4">
            Votre panier est vide
          </h1>
          <p className="text-gray-400 mb-10 max-w-md mx-auto text-lg">
            Explorez nos jus du monde entier et ajoutez vos saveurs préférées !
          </p>
          <Link href="/products" className="group inline-flex items-center gap-2 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] text-white text-lg px-8 py-4 rounded-full font-semibold shadow-lg shadow-[var(--primary)]/25 hover:-translate-y-0.5 transition-all duration-300">
            Découvrir nos jus
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafaf8]">
      {/* Header */}
      <section className="relative bg-gradient-to-b from-[#0f2027] via-[#203a43] to-[#2c5364] pt-28 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
        <div className="absolute top-[30%] right-[15%] w-48 h-48 bg-[var(--primary)]/10 rounded-full blur-[80px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl font-bold text-white mb-3"
          >
            Votre Panier
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            {getTotalItems()} article{getTotalItems() > 1 ? 's' : ''}
          </motion.p>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-white rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row gap-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-full sm:w-24 h-24 bg-gradient-to-br from-[var(--cream)] to-[var(--primary-light)]/15 rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-4xl">🍹</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-bold text-[var(--secondary)] text-lg">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-400">{item.country}</p>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => removeItem(item.id)}
                        className="text-gray-300 hover:text-[var(--danger)] transition-colors p-1"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </motion.button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3.5 py-2 text-gray-400 hover:text-[var(--primary)] hover:bg-gray-100 transition-colors font-medium"
                        >
                          -
                        </button>
                        <span className="px-4 py-2 font-bold text-[var(--secondary)] border-x border-gray-200 bg-white min-w-[3rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3.5 py-2 text-gray-400 hover:text-[var(--primary)] hover:bg-gray-100 transition-colors font-medium"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-bold text-[var(--primary)] text-xl">
                        {(item.price * item.quantity).toFixed(2)} €
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}

              <button
                onClick={clearCart}
                className="text-sm text-gray-300 hover:text-[var(--danger)] transition-colors mt-2 font-medium"
              >
                Vider le panier
              </button>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 sticky top-36"
              >
                <h2 className="text-xl font-bold text-[var(--secondary)] mb-5">
                  Récapitulatif
                </h2>

                <div className="space-y-3 mb-7">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Sous-total</span>
                    <span className="font-medium text-[var(--foreground)]">{getTotalPrice().toFixed(2)} €</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Livraison</span>
                    <span className="text-[var(--accent)] font-semibold">Gratuite</span>
                  </div>
                  <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
                    <span className="font-bold text-[var(--secondary)] text-lg">Total</span>
                    <span className="font-bold text-2xl text-[var(--primary)]">
                      {getTotalPrice().toFixed(2)} €
                    </span>
                  </div>
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/checkout"
                    className="block w-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] text-white py-4 rounded-xl font-semibold text-center shadow-lg shadow-[var(--primary)]/20 hover:shadow-xl transition-all duration-300"
                  >
                    Passer la commande
                  </Link>
                </motion.div>

                <Link
                  href="/products"
                  className="block text-center text-sm text-gray-400 hover:text-[var(--primary)] mt-5 transition-colors font-medium"
                >
                  Continuer mes achats
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
