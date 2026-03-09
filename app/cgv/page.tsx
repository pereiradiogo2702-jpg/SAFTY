'use client';

import { motion } from 'framer-motion';

export default function CGVPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-[var(--secondary)] to-[#1a3a4a] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-2"
          >
            Conditions Générales de Vente
          </motion.h1>
          <p className="text-gray-400 text-sm">Dernière mise à jour : Mars 2026</p>
        </div>
      </section>

      <section className="py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-sm">
            <h2 className="text-[var(--secondary)] font-bold text-lg mb-4">Article 1 - Objet</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Les présentes CGV régissent les ventes de produits (jus de fruits) effectuées par SAFTY via son site internet. Toute commande implique l&apos;acceptation sans réserve des présentes conditions.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-sm">
            <h2 className="text-[var(--secondary)] font-bold text-lg mb-4">Article 2 - Produits</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Les produits proposés sont des jus de fruits traditionnels et régionaux. SAFTY s&apos;efforce de décrire le plus fidèlement possible les produits. Les photographies ne sont pas contractuelles.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-sm">
            <h2 className="text-[var(--secondary)] font-bold text-lg mb-4">Article 3 - Prix</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Les prix sont indiqués en euros (EUR) TTC. La TVA applicable est de 17% (taux normal luxembourgeois). SAFTY se réserve le droit de modifier ses prix à tout moment, les produits étant facturés au prix en vigueur au moment de la commande.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-sm">
            <h2 className="text-[var(--secondary)] font-bold text-lg mb-4">Article 4 - Commandes</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              L&apos;acheteur passe commande sur le site en ajoutant des produits à son panier puis en procédant au paiement. La commande est confirmée par email après paiement effectif.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-sm">
            <h2 className="text-[var(--secondary)] font-bold text-lg mb-4">Article 5 - Paiement</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Le paiement s&apos;effectue par carte bancaire via la plateforme sécurisée Stripe. Les données bancaires ne sont jamais stockées par SAFTY. Le paiement est exigible à la commande.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-sm">
            <h2 className="text-[var(--secondary)] font-bold text-lg mb-4">Article 6 - Livraison</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              La livraison est effectuée à l&apos;adresse indiquée lors de la commande. Les délais de livraison sont indicatifs. La livraison est gratuite pour toute commande.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-sm">
            <h2 className="text-[var(--secondary)] font-bold text-lg mb-4">Article 7 - Droit de rétractation</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Conformément à la législation européenne, vous disposez d&apos;un délai de <strong className="text-[var(--primary)]">14 jours</strong> à compter de la réception pour exercer votre droit de rétractation, sans avoir à justifier de motifs. Les produits alimentaires ouverts ou périssables sont exclus du droit de rétractation.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-sm">
            <h2 className="text-[var(--secondary)] font-bold text-lg mb-4">Article 8 - Garanties</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              SAFTY garantit la conformité des produits à la description et l&apos;absence de défauts. En cas de produit défectueux, contactez-nous dans les 48h suivant la livraison à contact@safty.com.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-sm">
            <h2 className="text-[var(--secondary)] font-bold text-lg mb-4">Article 9 - Responsabilité</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              SAFTY ne saurait être tenu responsable des dommages résultant d&apos;une mauvaise utilisation ou conservation des produits. Consultez les informations allergènes sur chaque fiche produit.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-sm">
            <h2 className="text-[var(--secondary)] font-bold text-lg mb-4">Article 10 - Litiges</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Les présentes CGV sont soumises au droit luxembourgeois. En cas de litige, une solution amiable sera recherchée avant toute action judiciaire. À défaut, les tribunaux du Luxembourg seront compétents.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
