'use client';

import { motion } from 'framer-motion';

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-[var(--secondary)] to-[#1a3a4a] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-2"
          >
            Mentions Légales
          </motion.h1>
          <p className="text-gray-400 text-sm">Dernière mise à jour : Mars 2026</p>
        </div>
      </section>

      <section className="py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-sm">
            <h2 className="text-[var(--secondary)] font-bold text-lg mb-4">1. Éditeur du site</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Le site SAFTY est édité par SAFTY, entreprise individuelle.<br />
              Adresse : Luxembourg<br />
              Email : contact@safty.com
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-sm">
            <h2 className="text-[var(--secondary)] font-bold text-lg mb-4">2. Hébergement</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Le site est hébergé par Vercel Inc.<br />
              Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, USA<br />
              Site : vercel.com
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-sm">
            <h2 className="text-[var(--secondary)] font-bold text-lg mb-4">3. Propriété intellectuelle</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              L&apos;ensemble du contenu du site (textes, images, graphismes, logo, icônes) est la propriété exclusive de SAFTY, sauf mention contraire. Toute reproduction, distribution ou utilisation sans autorisation écrite est strictement interdite.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-sm">
            <h2 className="text-[var(--secondary)] font-bold text-lg mb-4">4. Données personnelles</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez de droits sur vos données personnelles. Pour en savoir plus, consultez notre{' '}
              <a href="/politique-confidentialite" className="text-[var(--primary)] hover:underline">
                Politique de Confidentialité
              </a>.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-sm">
            <h2 className="text-[var(--secondary)] font-bold text-lg mb-4">5. Limitation de responsabilité</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              SAFTY s&apos;efforce d&apos;assurer l&apos;exactitude des informations diffusées sur ce site. Toutefois, SAFTY ne peut garantir l&apos;exactitude, la complétude et l&apos;actualité des informations et décline toute responsabilité en cas d&apos;erreur ou d&apos;omission.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-sm">
            <h2 className="text-[var(--secondary)] font-bold text-lg mb-4">6. Droit applicable</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Le présent site et ses mentions légales sont régis par le droit luxembourgeois. Tout litige relatif à l&apos;utilisation du site sera soumis à la compétence exclusive des tribunaux du Luxembourg.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
