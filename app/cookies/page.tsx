'use client';

import { motion } from 'framer-motion';

export default function CookiesPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-[var(--secondary)] to-[#1a3a4a] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-2"
          >
            Politique des Cookies
          </motion.h1>
          <p className="text-gray-400 text-sm">Dernière mise à jour : Mars 2026</p>
        </div>
      </section>

      <section className="py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-sm">
            <h2 className="text-[var(--secondary)] font-bold text-lg mb-4">1. Qu&apos;est-ce qu&apos;un cookie ?</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Un cookie est un petit fichier texte déposé sur votre appareil lors de votre visite sur notre site. Les cookies permettent au site de fonctionner, de mémoriser vos préférences et votre panier d&apos;achat.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-sm">
            <h2 className="text-[var(--secondary)] font-bold text-lg mb-4">2. Cookies utilisés</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-[var(--primary)] font-semibold text-sm mb-2">Cookies essentiels</h3>
                <p className="text-gray-600 text-sm mb-2">Nécessaires au fonctionnement du site.</p>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                  <li><strong>Panier (safty-cart) :</strong> mémoriser vos articles — durée : 30 jours</li>
                  <li><strong>Session :</strong> maintenir votre navigation — durée : session</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[var(--primary)] font-semibold text-sm mb-2">Cookies de paiement (tiers)</h3>
                <p className="text-gray-600 text-sm mb-2">Déposés par Stripe lors du paiement.</p>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                  <li><strong>Stripe :</strong> sécurisation du paiement — durée : session</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-sm">
            <h2 className="text-[var(--secondary)] font-bold text-lg mb-4">3. Gestion des cookies</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Vous pouvez modifier vos préférences de cookies via les paramètres de votre navigateur. La désactivation des cookies essentiels peut affecter le fonctionnement du panier.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-sm">
            <h2 className="text-[var(--secondary)] font-bold text-lg mb-4">4. Durée de conservation</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Conformément aux recommandations de la CNPD, les cookies non essentiels ont une durée maximale de <strong className="text-[var(--primary)]">13 mois</strong>.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-sm">
            <h2 className="text-[var(--secondary)] font-bold text-lg mb-4">5. En savoir plus</h2>
            <ul className="text-gray-600 text-sm space-y-2 list-disc list-inside">
              <li>Notre <a href="/politique-confidentialite" className="text-[var(--primary)] hover:underline">Politique de Confidentialité</a></li>
              <li>CNPD : <span className="text-gray-400">https://cnpd.public.lu</span></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
