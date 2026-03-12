'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#fafaf8]">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-[#0f2027] via-[#203a43] to-[#2c5364] pt-28 pb-20 sm:pt-32 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-[20%] right-[15%] w-64 h-64 bg-[var(--primary)]/10 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-5"
          >
            <Image src="/logo.png" alt="Safty" width={80} height={80} className="w-16 h-16 sm:w-20 sm:h-20 object-contain mx-auto" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
          >
            Contactez-nous
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-lg max-w-xl mx-auto"
          >
            Une question, une suggestion ou envie de partager une recette de votre pays ?
          </motion.p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--secondary)] mb-5">
                Parlons <span className="text-[var(--primary)]">saveurs</span>
              </h2>
              <p className="text-gray-500 mb-10 leading-relaxed">
                Nous sommes toujours ravis d&apos;entendre parler de nouvelles saveurs,
                de recettes familiales ou simplement de recevoir vos retours.
              </p>

              <div className="space-y-6">
                {[
                  { emoji: '📧', title: 'Email', info: 'contact@safty.com', bg: 'from-orange-500/10 to-amber-500/10' },
                  { emoji: '📍', title: 'Adresse', info: 'Luxembourg', bg: 'from-teal-500/10 to-emerald-500/10' },
                  { emoji: '⏰', title: 'Horaires', info: 'Lun - Ven : 9h - 18h', bg: 'from-yellow-500/10 to-orange-500/10' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className={`w-13 h-13 bg-gradient-to-br ${item.bg} rounded-2xl flex items-center justify-center shrink-0 p-3`}>
                      <span className="text-2xl">{item.emoji}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--secondary)]">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.info}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gradient-to-br from-[var(--accent)]/10 to-emerald-500/5 rounded-3xl p-10 text-center border border-[var(--accent)]/20"
                >
                  <span className="text-7xl block mb-5">✅</span>
                  <h3 className="text-2xl font-bold text-[var(--secondary)] mb-3">
                    Message envoyé !
                  </h3>
                  <p className="text-gray-500 mb-8">
                    Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-primary">
                    Envoyer un autre message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-7 sm:p-10 shadow-sm border border-gray-100 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-[var(--secondary)] mb-2">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)] transition-all bg-gray-50/50"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[var(--secondary)] mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)] transition-all bg-gray-50/50"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[var(--secondary)] mb-2">
                      Sujet
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)] transition-all bg-gray-50/50"
                    >
                      <option value="">Choisir un sujet</option>
                      <option value="commande">Question sur une commande</option>
                      <option value="produit">Question sur un produit</option>
                      <option value="suggestion">Suggestion de saveur</option>
                      <option value="partenariat">Partenariat</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[var(--secondary)] mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)] transition-all resize-none bg-gray-50/50"
                      placeholder="Votre message..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] text-white py-4 rounded-xl font-semibold text-lg shadow-lg shadow-[var(--primary)]/20 hover:shadow-xl hover:shadow-[var(--primary)]/30 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Envoyer le message
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
