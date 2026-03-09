'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, getTotalPrice, getTotalItems } =
    useCartStore();

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <span className="text-8xl block mb-6">🧃</span>
            <h1 className="text-3xl font-bold text-[var(--secondary)] mb-4">
              Votre panier est vide
            </h1>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              Explorez nos jus du monde entier et ajoutez vos saveurs préférées !
            </p>
            <Link href="/products" className="btn-primary text-lg">
              Découvrir nos jus
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-[var(--secondary)] to-[#1a3a4a] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-2"
          >
            Votre Panier 🛒
          </motion.h1>
          <p className="text-gray-300">
            {getTotalItems()} article{getTotalItems() > 1 ? 's' : ''}
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row gap-4 shadow-sm border border-gray-100"
                >
                  {/* Item image placeholder */}
                  <div className="w-full sm:w-24 h-24 bg-gradient-to-br from-[var(--primary-light)]/20 to-[var(--accent)]/20 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-3xl">🍹</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-bold text-[var(--secondary)]">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500">{item.country}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-[var(--danger)] transition-colors p-1"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-gray-200 rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 text-gray-500 hover:text-[var(--primary)] transition-colors"
                        >
                          -
                        </button>
                        <span className="px-3 py-1 font-semibold text-[var(--secondary)] border-x border-gray-200">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 text-gray-500 hover:text-[var(--primary)] transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-bold text-[var(--primary)] text-lg">
                        {(item.price * item.quantity).toFixed(2)} €
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}

              <button
                onClick={clearCart}
                className="text-sm text-gray-400 hover:text-[var(--danger)] transition-colors mt-2"
              >
                Vider le panier
              </button>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 sticky top-36">
                <h2 className="text-lg font-bold text-[var(--secondary)] mb-4">
                  Récapitulatif
                </h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Sous-total</span>
                    <span className="font-medium">{getTotalPrice().toFixed(2)} €</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Livraison</span>
                    <span className="text-[var(--accent)] font-medium">Gratuite</span>
                  </div>
                  <div className="border-t border-gray-100 pt-3 flex justify-between">
                    <span className="font-bold text-[var(--secondary)]">Total</span>
                    <span className="font-bold text-xl text-[var(--primary)]">
                      {getTotalPrice().toFixed(2)} €
                    </span>
                  </div>
                </div>

                <Link
                  href="/checkout"
                  className="btn-primary w-full justify-center text-center"
                >
                  Passer la commande
                </Link>

                <Link
                  href="/products"
                  className="block text-center text-sm text-gray-500 hover:text-[var(--primary)] mt-4 transition-colors"
                >
                  Continuer mes achats
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
