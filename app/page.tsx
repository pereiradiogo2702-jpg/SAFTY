'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { featuredProducts, countries } from '@/lib/products';
import { useCartStore } from '@/store/cartStore';

const countryEmojis: Record<string, string> = {
  'Portugal': '🇵🇹', 'Brésil': '🇧🇷', 'Cap-Vert': '🇨🇻', 'Angola': '🇦🇴',
  'Mozambique': '🇲🇿', 'France': '🇫🇷', 'Espagne': '🇪🇸', 'Italie': '🇮🇹',
  'Maroc': '🇲🇦', 'Inde': '🇮🇳', 'Mexique': '🇲🇽', 'Thaïlande': '🇹🇭', 'Japon': '🇯🇵',
};

const saftyProducts = [
  {
    id: 'safty-1',
    name: 'Original',
    image: '/cans/bottle.png',
    description: 'Notre jus signature aux fruits frais, un melange parfait de saveurs tropicales.',
    color: '#4CAF50',
    tags: ['Naturel', 'Vitamine C', 'Sans sucre ajouté'],
  },
  {
    id: 'safty-2',
    name: 'Tropical',
    image: '/cans/bottle.png',
    description: 'Un voyage exotique avec mangue, passion et ananas. Fraicheur garantie.',
    color: '#FF9800',
    tags: ['Exotique', 'Antioxydants', 'Bio'],
  },
  {
    id: 'safty-3',
    name: 'Vitality',
    image: '/cans/bottle.png',
    description: 'Boost d\'énergie naturelle avec gingembre, citron et pomme verte.',
    color: '#8BC34A',
    tags: ['Énergie', 'Gingembre', 'Detox'],
  },
  {
    id: 'safty-4',
    name: 'Berry Mix',
    image: '/cans/bottle.png',
    description: 'Explosion de baies: myrtille, framboise et açai pour un plaisir intense.',
    color: '#9C27B0',
    tags: ['Baies', 'Oméga-3', 'Premium'],
  },
];

export default function Home() {
  const addItem = useCartStore((state) => state.addItem);
  const heroRef = useRef<HTMLElement>(null);
  const conceptRef = useRef<HTMLElement>(null);
  const countriesRef = useRef<HTMLElement>(null);

  // Modal state
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const isOpen = selectedIndex !== null;
  const selected = selectedIndex !== null ? saftyProducts[selectedIndex] : null;

  const openModal = useCallback((index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setSelectedIndex(null);
    document.body.style.overflow = '';
  }, []);

  const navigate = useCallback((dir: -1 | 1) => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + dir + saftyProducts.length) % saftyProducts.length);
  }, [selectedIndex]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') navigate(-1);
      if (e.key === 'ArrowRight') navigate(1);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, closeModal, navigate]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    setMousePos({
      x: ((e.clientX - cx) / cx) * 12,
      y: ((e.clientY - cy) / cy) * -8,
    });
  }, []);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroLogoScale = useTransform(heroProgress, [0, 0.5], [1, 1.3]);
  const heroLogoY = useTransform(heroProgress, [0, 1], [0, -150]);
  const heroOpacity = useTransform(heroProgress, [0, 0.5], [1, 0]);
  const heroBgY = useTransform(heroProgress, [0, 1], [0, 150]);

  const { scrollYProgress: conceptProgress } = useScroll({
    target: conceptRef,
    offset: ['start end', 'end start'],
  });
  const conceptY = useTransform(conceptProgress, [0, 1], [80, -40]);

  const { scrollYProgress: countriesProgress } = useScroll({
    target: countriesRef,
    offset: ['start end', 'end start'],
  });
  const countriesScale = useTransform(countriesProgress, [0, 0.5], [0.85, 1]);

  return (
    <div className="min-h-screen overflow-x-hidden">

      {/* ═══════════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Background Image with parallax */}
        <motion.div style={{ y: heroBgY }} className="absolute inset-0">
          <Image src="/hero-bg.jpg" alt="" fill priority className="object-cover scale-110" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/40" />
        </motion.div>

        {/* ── Center content ── */}
        <div className="relative z-10 flex flex-col items-center text-center w-full px-4 sm:px-6 mx-auto pt-28 sm:pt-32">
          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.3, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, type: 'spring', bounce: 0.25 }}
            style={{ scale: heroLogoScale, y: heroLogoY }}
            className="mb-6"
          >
            <Image
              src="/logo.png"
              alt="Safty"
              width={500}
              height={500}
              priority
              className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-contain drop-shadow-[0_0_80px_rgba(224,123,57,0.45)]"
            />
          </motion.div>

          {/* ── 4 BOTTLES ── */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex items-end justify-center gap-6 sm:gap-10 lg:gap-14 mb-10 w-full"
          >
            {saftyProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 + index * 0.15, type: 'spring', bounce: 0.3 }}
                whileHover={{ y: -40, x: -10, scale: 1.15, rotate: -3, transition: { type: 'tween', duration: 0.15, ease: 'easeOut' } }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openModal(index)}
                className="relative cursor-pointer group w-[28vw] sm:w-[22vw] lg:w-[18vw] max-w-[280px]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-contain drop-shadow-[0_15px_40px_rgba(0,0,0,0.5)] group-hover:drop-shadow-[0_30px_60px_rgba(224,123,57,0.5)] transition-[filter] duration-200"
                />
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-150 whitespace-nowrap">
                  <span className="text-white text-xs sm:text-sm font-semibold bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    {product.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            style={{ opacity: heroOpacity }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-4"
          >
            <Link href="/products" className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] text-white text-lg px-8 py-4 rounded-full font-semibold shadow-lg shadow-[var(--primary)]/25 hover:shadow-xl hover:shadow-[var(--primary)]/40 hover:-translate-y-1 transition-all duration-300">
              <span className="relative z-10 flex items-center gap-2">
                Découvrir nos jus
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
            <Link href="/about" className="inline-flex items-center gap-2 text-white text-lg px-8 py-4 rounded-full font-semibold border border-white/25 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">
              Notre histoire
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          style={{ opacity: heroOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white/80 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════
          MODAL - Full screen 3D product view
          ═══════════════════════════════════════════════ */}
      <AnimatePresence>
        {isOpen && selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
            onMouseMove={handleMouseMove}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
              style={{
                background: `radial-gradient(ellipse at 35% 50%, ${selected.color}dd, ${selected.color}99 40%, rgba(20,15,12,0.97) 80%)`,
              }}
            />

            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white/15 hover:rotate-90 hover:scale-110 transition-all duration-300 cursor-pointer"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/12 bg-white/5 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white/15 hover:scale-110 transition-all duration-300 cursor-pointer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/12 bg-white/5 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white/15 hover:scale-110 transition-all duration-300 cursor-pointer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </button>

            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 max-w-[1100px] w-full px-8 pt-16 md:pt-0">
              {/* Big can with 3D tilt */}
              <motion.div
                initial={{ opacity: 0, scale: 0.3, rotateY: 15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.6, type: 'spring', bounce: 0.2 }}
                className="relative flex-shrink-0"
                style={{
                  transform: `perspective(1000px) rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg)`,
                }}
              >
                <div
                  className="absolute -inset-[40%] rounded-full blur-[80px] opacity-35 -z-10"
                  style={{ background: selected.color }}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="w-[120px] sm:w-[180px] md:w-[220px] h-auto object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.35)]"
                />
              </motion.div>

              {/* Details */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-white max-w-[380px] text-center md:text-left flex-shrink-0"
              >
                <span className="text-[0.7rem] tracking-[0.25em] uppercase text-white/45 mb-3 block">SAFTY</span>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 tracking-tight">
                  {selected.name}
                </h2>
                <p className="text-white/65 text-sm sm:text-base leading-relaxed mb-6">
                  {selected.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start">
                  {selected.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-1.5 rounded-full text-xs font-medium text-white/85 border border-white/10 bg-white/5 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => {
                    addItem({
                      id: selected.id,
                      name: selected.name,
                      price: 4.99,
                      quantity: 1,
                      image: selected.image,
                      country: 'Monde',
                    });
                    closeModal();
                  }}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider cursor-pointer hover:brightness-110 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                  style={{ background: selected.color, color: '#1a1210' }}
                >
                  Ajouter au panier
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </motion.div>
            </div>

            {/* Nav dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
              {saftyProducts.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setSelectedIndex(i); }}
                  className={`w-2.5 h-2.5 rounded-full border-none cursor-pointer transition-all duration-300 ${
                    selectedIndex === i ? 'bg-white scale-150' : 'bg-white/20 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══════════════════════════════════════════════
          CONCEPT - Features with parallax
          ═══════════════════════════════════════════════ */}
      <section ref={conceptRef} className="py-24 sm:py-36 bg-[var(--cream)] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[var(--secondary)]/10 to-transparent" />

        <motion.div style={{ y: conceptY }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="inline-block bg-[var(--primary)]/10 text-[var(--primary)] font-semibold text-xs uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-5">
              Notre Concept
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[var(--secondary)] mb-6 leading-tight">
              Un voyage gustatif
              <br className="hidden sm:block" />
              <span className="text-[var(--primary)]">à chaque gorgée</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Chez SAFTY, nous croyons que les saveurs sont le chemin le plus court
              vers chez soi. Chaque bouteille capture l&apos;essence d&apos;une terre, d&apos;une
              tradition, d&apos;un souvenir.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: '🌍', title: 'Du Monde Entier', description: 'Des fruits soigneusement sélectionnés dans leurs régions d\'origine.', color: 'from-blue-500/10 to-teal-500/10' },
              { icon: '🍃', title: '100% Naturel', description: 'Sans conservateurs, sans colorants. Juste des fruits et de l\'eau.', color: 'from-green-500/10 to-emerald-500/10' },
              { icon: '❤️', title: 'Fait avec Amour', description: 'Chaque recette est développée avec les communautés locales.', color: 'from-rose-500/10 to-orange-500/10' },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`bg-gradient-to-br ${feature.color} bg-white rounded-3xl p-8 sm:p-10 text-center border border-white shadow-sm hover:shadow-2xl transition-all duration-500`}
              >
                <motion.span
                  initial={{ scale: 0, rotate: -30 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.15, type: 'spring', bounce: 0.5 }}
                  className="text-5xl sm:text-6xl mb-5 block"
                >
                  {feature.icon}
                </motion.span>
                <h3 className="text-xl font-bold text-[var(--secondary)] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════
          FEATURED PRODUCTS
          ═══════════════════════════════════════════════ */}
      <section className="py-24 sm:py-36 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[var(--primary)]/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-[var(--accent)]/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-[var(--primary)]/10 text-[var(--primary)] font-semibold text-xs uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-5">
              Sélection
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[var(--secondary)] leading-tight">
              Nos jus vedettes
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.slice(0, 6).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100/80 transition-all duration-500"
              >
                <div className="h-52 bg-gradient-to-br from-[var(--cream)] to-[var(--primary-light)]/10 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
                  <motion.span
                    whileHover={{ scale: 1.4, rotate: 15 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="text-7xl relative z-10"
                  >
                    {product.countryFlag}
                  </motion.span>
                  <span className="absolute top-4 right-4 bg-[var(--primary)] text-white text-[11px] px-3 py-1.5 rounded-full font-semibold uppercase tracking-wide">
                    {product.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-gray-400 font-medium">{product.country}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span className="text-xs text-gray-400">{product.region}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--secondary)] mb-2 group-hover:text-[var(--primary)] transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-5 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[var(--primary)]">
                      {product.price.toFixed(2)} €
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
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
                      className="bg-[var(--secondary)] hover:bg-[var(--primary)] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-14"
          >
            <Link href="/products" className="group inline-flex items-center gap-2 bg-[var(--secondary)] text-white text-lg px-8 py-4 rounded-full font-semibold hover:bg-[var(--primary)] transition-all duration-300 shadow-lg hover:-translate-y-1">
              Voir tous nos jus
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          COUNTRIES
          ═══════════════════════════════════════════════ */}
      <section ref={countriesRef} className="py-24 sm:py-36 bg-gradient-to-b from-[#0f2027] via-[#203a43] to-[#2c5364] overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-14"
          >
            <span className="inline-block bg-white/10 text-[var(--primary-light)] font-semibold text-xs uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-5">
              Origines
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Des saveurs de <span className="text-[var(--primary-light)]">12 pays</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-lg">
              Chaque pays apporte ses fruits uniques et ses traditions gustatives.
            </p>
          </motion.div>

          <motion.div
            style={{ scale: countriesScale }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-5"
          >
            {countries.map((country, index) => (
              <motion.div
                key={country}
                initial={{ opacity: 0, scale: 0.5, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05, type: 'spring', bounce: 0.4 }}
                whileHover={{ scale: 1.15, y: -8 }}
                className="bg-white/8 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-5 text-center hover:bg-white/18 hover:border-white/25 transition-all duration-300 cursor-default group"
              >
                <motion.span
                  className="text-3xl sm:text-4xl block mb-2 group-hover:scale-110 transition-transform duration-300"
                >
                  {countryEmojis[country] || '🌍'}
                </motion.span>
                <span className="text-white/80 text-xs sm:text-sm font-medium group-hover:text-white transition-colors">
                  {country}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CTA
          ═══════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-[var(--primary)] via-[var(--primary-dark)] to-[#a14520] overflow-hidden relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-[20%] w-64 h-64 bg-white/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-[20%] w-80 h-80 bg-[var(--warm)]/20 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: 'spring', bounce: 0.4 }}
              className="mb-8"
            >
              <Image
                src="/logo.png"
                alt="Safty"
                width={120}
                height={120}
                className="w-20 h-20 sm:w-28 sm:h-28 object-contain mx-auto drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
              />
            </motion.div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Prêt à voyager
              <br />
              par les saveurs ?
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-lg mx-auto">
              Commandez vos jus préférés et recevez un petit bout de chez vous,
              directement à votre porte.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/products"
                className="group inline-flex items-center gap-2 bg-white text-[var(--primary-dark)] px-10 py-5 rounded-full text-lg font-bold hover:bg-gray-50 transition-all duration-300 shadow-2xl shadow-black/20 hover:-translate-y-1"
              >
                Commander maintenant
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
