'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const timeline = [
  {
    year: '2024',
    title: 'L\'idée',
    description: 'L\'envie de retrouver les saveurs de chez soi, loin de son pays d\'origine.',
    emoji: '💡',
  },
  {
    year: '2025',
    title: 'Les premiers jus',
    description: 'Recherche des meilleurs fruits et recettes traditionnelles de chaque pays.',
    emoji: '🔬',
  },
  {
    year: '2026',
    title: 'SAFTY est né',
    description: 'Lancement de la boutique avec des jus de 12 pays différents.',
    emoji: '🚀',
  },
];

const values = [
  {
    icon: '🌱',
    title: 'Authenticité',
    description: 'Chaque recette vient directement des traditions locales, sans compromis.',
  },
  {
    icon: '🤝',
    title: 'Communauté',
    description: 'Nous travaillons avec des producteurs locaux pour garantir qualité et équité.',
  },
  {
    icon: '🌍',
    title: 'Diversité',
    description: 'Célébrer la richesse des saveurs du monde, un jus à la fois.',
  },
  {
    icon: '💚',
    title: 'Durabilité',
    description: 'Emballages recyclables et circuits courts quand c\'est possible.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--secondary)] to-[#1a3a4a] py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6"
          >
            <span className="text-6xl sm:text-8xl">🍊</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-5xl font-bold text-white mb-6"
          >
            Notre Histoire
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            SAFTY est né d&apos;une idée simple : les saveurs ont le pouvoir de nous
            ramener chez nous, peu importe la distance.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-24 bg-[var(--cream)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[var(--primary)] font-semibold text-sm uppercase tracking-widest">
              Le Concept
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--secondary)] mt-3 mb-6">
              Se sentir chez soi, à travers les saveurs
            </h2>
            <div className="text-gray-600 text-lg leading-relaxed space-y-4 max-w-3xl mx-auto">
              <p>
                Quand on est loin de chez soi, ce sont souvent les saveurs qui nous
                manquent le plus. Le goût d&apos;un fruit de l&apos;enfance, la fraîcheur d&apos;un
                jus préparé par nos grands-parents, l&apos;arôme d&apos;une boisson qu&apos;on ne
                trouve nulle part ailleurs.
              </p>
              <p>
                Chez <strong className="text-[var(--primary)]">SAFTY</strong>, nous avons
                décidé de capturer ces saveurs. Chaque bouteille est un voyage, chaque
                gorgée un souvenir. Du maracujá de Madère au yuzu de Kōchi, de l&apos;açaï
                d&apos;Amazonie à l&apos;eau de jamaica d&apos;Oaxaca.
              </p>
              <p>
                Notre mission est simple : que chaque personne, où qu&apos;elle soit dans
                le monde, puisse retrouver les saveurs de chez elle.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[var(--primary)] font-semibold text-sm uppercase tracking-widest">
              Notre Parcours
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--secondary)] mt-3">
              De l&apos;idée à la réalité
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 bg-[var(--primary)]/20 -translate-x-1/2" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 sm:left-1/2 w-4 h-4 bg-[var(--primary)] rounded-full -translate-x-1/2 z-10 ring-4 ring-[var(--background)]" />

                {/* Content */}
                <div className={`ml-14 sm:ml-0 sm:w-1/2 ${index % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <span className="text-3xl mb-2 block">{item.emoji}</span>
                    <span className="text-[var(--primary)] font-bold text-lg">{item.year}</span>
                    <h3 className="font-bold text-[var(--secondary)] text-xl mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 bg-[var(--secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[var(--primary-light)] font-semibold text-sm uppercase tracking-widest">
              Ce qui nous guide
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
              Nos valeurs
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors"
              >
                <span className="text-4xl block mb-3">{value.icon}</span>
                <h3 className="font-bold text-white text-lg mb-2">{value.title}</h3>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Rejoignez l&apos;aventure
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Découvrez nos jus et trouvez le goût de chez vous.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-white text-[var(--primary-dark)] px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Découvrir nos jus
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
