'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

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
  { icon: '🌱', title: 'Authenticité', description: 'Chaque recette vient directement des traditions locales, sans compromis.' },
  { icon: '🤝', title: 'Communauté', description: 'Nous travaillons avec des producteurs locaux pour garantir qualité et équité.' },
  { icon: '🌍', title: 'Diversité', description: 'Célébrer la richesse des saveurs du monde, un jus à la fois.' },
  { icon: '💚', title: 'Durabilité', description: 'Emballages recyclables et circuits courts quand c\'est possible.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-[#0f2027] via-[#203a43] to-[#2c5364] pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-[var(--primary)]/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-[10%] right-[15%] w-80 h-80 bg-[var(--accent)]/10 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: 'spring' }}
            className="mb-8"
          >
            <Image
              src="/logo.png"
              alt="Safty"
              width={200}
              height={200}
              className="w-36 h-36 sm:w-48 sm:h-48 object-contain mx-auto drop-shadow-[0_0_50px_rgba(224,123,57,0.3)]"
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Notre Histoire
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            SAFTY est né d&apos;une idée simple : les saveurs ont le pouvoir de nous
            ramener chez nous, peu importe la distance.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 sm:py-32 bg-[var(--cream)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="inline-block bg-[var(--primary)]/10 text-[var(--primary)] font-semibold text-xs uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-4">
              Le Concept
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[var(--secondary)] mb-8 leading-tight">
              Se sentir chez soi,
              <br />
              <span className="text-[var(--primary)]">à travers les saveurs</span>
            </h2>
            <div className="text-gray-500 text-lg leading-relaxed space-y-5 max-w-3xl mx-auto">
              <p>
                Quand on est loin de chez soi, ce sont souvent les saveurs qui nous
                manquent le plus. Le goût d&apos;un fruit de l&apos;enfance, la fraîcheur d&apos;un
                jus préparé par nos grands-parents.
              </p>
              <p>
                Chez <strong className="text-[var(--primary)] font-bold">SAFTY</strong>, nous avons
                décidé de capturer ces saveurs. Chaque bouteille est un voyage, chaque
                gorgée un souvenir. Du maracujá de Madère au yuzu de Kōchi, de l&apos;açaï
                d&apos;Amazonie à l&apos;agua de jamaica d&apos;Oaxaca.
              </p>
              <p>
                Notre mission : que chaque personne puisse retrouver les saveurs de chez elle,
                où qu&apos;elle soit dans le monde.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-[var(--primary)]/10 text-[var(--primary)] font-semibold text-xs uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-4">
              Notre Parcours
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[var(--secondary)] leading-tight">
              De l&apos;idée à la réalité
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--primary)]/40 via-[var(--primary)]/20 to-transparent -translate-x-1/2" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`relative flex items-center mb-14 last:mb-0 ${
                  index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                <div className="absolute left-6 sm:left-1/2 w-5 h-5 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] rounded-full -translate-x-1/2 z-10 ring-4 ring-white shadow-lg shadow-[var(--primary)]/20" />

                <div className={`ml-16 sm:ml-0 sm:w-1/2 ${index % 2 === 0 ? 'sm:pr-14 sm:text-right' : 'sm:pl-14'}`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300"
                  >
                    <span className="text-4xl mb-3 block">{item.emoji}</span>
                    <span className="text-[var(--primary)] font-bold text-xl">{item.year}</span>
                    <h3 className="font-bold text-[var(--secondary)] text-xl mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">{item.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-32 bg-gradient-to-b from-[#0f2027] via-[#203a43] to-[#2c5364]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block bg-white/10 text-[var(--primary-light)] font-semibold text-xs uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-4">
              Ce qui nous guide
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
              Nos valeurs
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="bg-white/8 backdrop-blur-md border border-white/10 rounded-2xl p-7 text-center hover:bg-white/15 hover:border-white/20 transition-all duration-300"
              >
                <span className="text-4xl block mb-4">{value.icon}</span>
                <h3 className="font-bold text-white text-lg mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-[var(--primary)] via-[var(--primary-dark)] to-[#a14520]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Rejoignez l&apos;aventure
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
              Découvrez nos jus et trouvez le goût de chez vous.
            </p>
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 bg-white text-[var(--primary-dark)] px-10 py-5 rounded-full text-lg font-bold hover:bg-gray-50 transition-all duration-300 shadow-2xl shadow-black/20 hover:-translate-y-1"
            >
              Découvrir nos jus
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
