'use client';

import { motion } from 'framer-motion';

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-[var(--secondary)] to-[#1a3a4a] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-2"
          >
            Politique de Confidentialité
          </motion.h1>
          <p className="text-gray-400 text-sm">Dernière mise à jour : Mars 2026</p>
        </div>
      </section>

      <section className="py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-sm">
            <h2 className="text-[var(--secondary)] font-bold text-lg mb-4">1. Responsable du traitement</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Le responsable du traitement des données personnelles est SAFTY.<br />
              Email : contact@safty.com
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-sm">
            <h2 className="text-[var(--secondary)] font-bold text-lg mb-4">2. Données collectées</h2>
            <ul className="text-gray-600 text-sm space-y-2 list-disc list-inside">
              <li><strong>Données de commande :</strong> nom, email, adresse de livraison, téléphone</li>
              <li><strong>Données de paiement :</strong> traitées exclusivement par Stripe (nous ne stockons aucune donnée bancaire)</li>
              <li><strong>Données de navigation :</strong> cookies essentiels pour le panier</li>
              <li><strong>Formulaire de contact :</strong> nom, email, message</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-sm">
            <h2 className="text-[var(--secondary)] font-bold text-lg mb-4">3. Finalités</h2>
            <ul className="text-gray-600 text-sm space-y-2 list-disc list-inside">
              <li>Traitement et suivi des commandes</li>
              <li>Gestion du panier d&apos;achat</li>
              <li>Réponse aux demandes de contact</li>
              <li>Amélioration de nos services</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-sm">
            <h2 className="text-[var(--secondary)] font-bold text-lg mb-4">4. Durée de conservation</h2>
            <ul className="text-gray-600 text-sm space-y-2 list-disc list-inside">
              <li><strong>Données de commande :</strong> 5 ans (obligation légale comptable)</li>
              <li><strong>Données de contact :</strong> 3 ans après le dernier contact</li>
              <li><strong>Cookies :</strong> 13 mois maximum</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-sm">
            <h2 className="text-[var(--secondary)] font-bold text-lg mb-4">5. Vos droits (RGPD)</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="text-gray-600 text-sm space-y-1 list-disc list-inside">
              <li>Droit d&apos;accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l&apos;effacement (&quot;droit à l&apos;oubli&quot;)</li>
              <li>Droit à la portabilité</li>
              <li>Droit d&apos;opposition</li>
              <li>Droit à la limitation du traitement</li>
            </ul>
            <p className="text-gray-600 text-sm mt-3">
              Pour exercer vos droits : <span className="text-[var(--primary)]">contact@safty.com</span>
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-sm">
            <h2 className="text-[var(--secondary)] font-bold text-lg mb-4">6. Autorité de contrôle</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Vous pouvez introduire une réclamation auprès de la CNPD (Commission Nationale pour la Protection des Données du Luxembourg) : <span className="text-gray-400">https://cnpd.public.lu</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
