"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";

/*
 * ═══════════════════════════════════════════════════════════
 *  ProductShowcase — Animation cannette 3D avec modal
 * ═══════════════════════════════════════════════════════════
 *
 *  UTILISATION :
 *  
 *  import ProductShowcase from "@/components/ProductShowcase";
 *  
 *  const saveurs = [
 *    {
 *      id: "citron",
 *      name: "Citron",
 *      image: "/images/cans/citron.png",       // ta photo de cannette
 *      description: "Une acidité subtile...",
 *      color: "#E8D44D",                        // couleur dominante
 *      bgColor: "#FFF8DC",                      // fond clair pour le modal
 *      tags: ["Acidulé", "17 kcal", "Probiotiques"],
 *    },
 *    // ... autres saveurs
 *  ];
 *  
 *  <ProductShowcase products={saveurs} />
 *
 * ═══════════════════════════════════════════════════════════
 */

// ─── TYPES ───
interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  color: string;
  bgColor: string;
  tags: string[];
}

interface Props {
  products: Product[];
}

// ─── COMPONENT ───
export default function ProductShowcase({ products }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const modalRef = useRef<HTMLDivElement>(null);
  const canRefs = useRef<(HTMLDivElement | null)[]>([]);

  const isOpen = selectedIndex !== null;

  // ─── OPEN MODAL ───
  const openModal = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setSelectedIndex(index);
      document.body.style.overflow = "hidden";
      setTimeout(() => setIsAnimating(false), 800);
    },
    [isAnimating]
  );

  // ─── CLOSE MODAL ───
  const closeModal = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSelectedIndex(null);
    document.body.style.overflow = "";
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating]);

  // ─── NAVIGATE ───
  const navigate = useCallback(
    (dir: -1 | 1) => {
      if (selectedIndex === null || isAnimating) return;
      setIsAnimating(true);
      const next =
        (selectedIndex + dir + products.length) % products.length;
      setSelectedIndex(next);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [selectedIndex, products.length, isAnimating]
  );

  // ─── KEYBOARD ───
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, closeModal, navigate]);

  // ─── 3D TILT ON MOUSE ───
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isOpen) return;
      const { clientX, clientY } = e;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      setMousePos({
        x: ((clientX - cx) / cx) * 12,
        y: ((clientY - cy) / cy) * -8,
      });
    },
    [isOpen]
  );

  const selected = selectedIndex !== null ? products[selectedIndex] : null;

  return (
    <>
      <style>{showcaseStyles}</style>

      {/* ═══ CANS ROW ═══ */}
      <section className="ps-showcase">
        <div className="ps-cans-row">
          {products.map((product, i) => (
            <div
              key={product.id}
              ref={(el) => { canRefs.current[i] = el; }}
              className={`ps-can-wrapper ${
                isOpen && selectedIndex !== i ? "ps-dimmed" : ""
              } ${isOpen && selectedIndex === i ? "ps-selected" : ""}`}
              style={{
                animationDelay: `${i * 0.08}s`,
                "--can-color": product.color,
              } as React.CSSProperties}
              onClick={() => openModal(i)}
            >
              <div className="ps-can-img-container">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={120}
                  height={280}
                  className="ps-can-img"
                  priority={i < 3}
                />
              </div>
              <div className="ps-can-shadow" />
              <span className="ps-can-name">{product.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ MODAL OVERLAY ═══ */}
      <div
        ref={modalRef}
        className={`ps-modal ${isOpen ? "ps-modal-open" : ""}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeModal();
        }}
        onMouseMove={handleMouseMove}
      >
        {/* Backdrop */}
        <div
          className="ps-modal-backdrop"
          style={{
            background: selected
              ? `radial-gradient(ellipse at 35% 50%, ${selected.color}dd, ${selected.color}99 40%, rgba(20,15,12,0.97) 80%)`
              : "rgba(20,15,12,0.97)",
          }}
        />

        {/* Close */}
        <button className="ps-close" onClick={closeModal} aria-label="Fermer">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Arrows */}
        <button
          className="ps-arrow ps-arrow-left"
          onClick={(e) => { e.stopPropagation(); navigate(-1); }}
          aria-label="Précédent"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          className="ps-arrow ps-arrow-right"
          onClick={(e) => { e.stopPropagation(); navigate(1); }}
          aria-label="Suivant"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </button>

        {/* Content */}
        <div className="ps-modal-content">
          {/* Big can */}
          <div
            className="ps-big-can"
            style={{
              transform: isOpen
                ? `perspective(1000px) rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg) scale(1)`
                : "perspective(1000px) rotateY(15deg) scale(0.3) translateZ(-500px)",
            }}
          >
            {selected && (
              <>
                <div
                  className="ps-big-can-glow"
                  style={{ background: selected.color }}
                />
                <Image
                  src={selected.image}
                  alt={selected.name}
                  width={220}
                  height={500}
                  className="ps-big-can-img"
                  priority
                />
              </>
            )}
          </div>

          {/* Details */}
          <div className="ps-details">
            {selected && (
              <>
                <span className="ps-details-tag">SAFTY</span>
                <h2 className="ps-details-title">{selected.name}</h2>
                <p className="ps-details-desc">{selected.description}</p>
                <div className="ps-details-tags">
                  {selected.tags.map((tag) => (
                    <span
                      key={tag}
                      className="ps-tag"
                      style={{
                        borderColor: `${selected.color}44`,
                        color: "rgba(255,255,255,0.85)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  className="ps-details-cta"
                  style={{ background: selected.color }}
                >
                  Ajouter au panier
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Nav dots */}
        <div className="ps-dots">
          {products.map((_, i) => (
            <button
              key={i}
              className={`ps-dot ${selectedIndex === i ? "ps-dot-active" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                if (selectedIndex !== null) {
                  setSelectedIndex(i);
                }
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

// ═══════════════════════════════════════════════════════════
// ═══ STYLES (embedded CSS — tu peux extraire en .module.css)
// ═══════════════════════════════════════════════════════════
const showcaseStyles = `

/* ─── CANS ROW ─── */
.ps-showcase {
  padding: 2rem 1rem;
  width: 100%;
}

.ps-cans-row {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: clamp(1.2rem, 3vw, 2.8rem);
  padding: 2rem 0 3rem;
  perspective: 1200px;
}

/* ─── SINGLE CAN WRAPPER ─── */
.ps-can-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1),
              filter 0.4s ease,
              opacity 0.4s ease;
  transform-style: preserve-3d;
  will-change: transform;
  position: relative;
}

.ps-can-wrapper:hover {
  transform: translateY(-18px) scale(1.06);
}
.ps-can-wrapper:hover .ps-can-shadow {
  transform: scaleX(1.3);
  opacity: 0.5;
}

/* When another can is selected */
.ps-can-wrapper.ps-dimmed {
  filter: blur(5px) brightness(0.45);
  opacity: 0.25;
  pointer-events: none;
  transform: scale(0.85) translateZ(-150px);
}

/* The selected can (briefly visible before modal takes over) */
.ps-can-wrapper.ps-selected {
  transform: scale(1.1) translateY(-10px);
  z-index: 10;
}

/* ─── CAN IMAGE ─── */
.ps-can-img-container {
  position: relative;
  width: clamp(75px, 11vw, 120px);
  height: clamp(190px, 28vw, 290px);
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.ps-can-img {
  width: 100% !important;
  height: 100% !important;
  object-fit: contain;
  filter: drop-shadow(0 20px 40px rgba(0,0,0,0.2));
  transition: filter 0.4s;
}
.ps-can-wrapper:hover .ps-can-img {
  filter: drop-shadow(0 25px 50px rgba(0,0,0,0.3));
}

/* ─── CAN SHADOW ─── */
.ps-can-shadow {
  width: 65%;
  height: 14px;
  margin-top: 8px;
  background: radial-gradient(ellipse, rgba(0,0,0,0.13), transparent 70%);
  border-radius: 50%;
  transition: transform 0.5s, opacity 0.5s;
}

/* ─── CAN NAME (under each can) ─── */
.ps-can-name {
  margin-top: 0.8rem;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  opacity: 0.6;
  transition: opacity 0.3s;
}
.ps-can-wrapper:hover .ps-can-name {
  opacity: 1;
}

/* ═══════════════════════════════════
   ═══ MODAL
   ═══════════════════════════════════ */
.ps-modal {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.45s ease;
}
.ps-modal.ps-modal-open {
  pointer-events: all;
  opacity: 1;
}

/* ─── BACKDROP ─── */
.ps-modal-backdrop {
  position: absolute;
  inset: 0;
  transition: opacity 0.6s ease;
  opacity: 0;
}
.ps-modal-open .ps-modal-backdrop {
  opacity: 1;
}

/* ─── CLOSE BTN ─── */
.ps-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 20;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.15);
  background: rgba(255,255,255,0.06);
  backdrop-filter: blur(12px);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: transform 0.35s, background 0.3s;
}
.ps-close:hover {
  transform: rotate(90deg) scale(1.1);
  background: rgba(255,255,255,0.15);
}

/* ─── ARROWS ─── */
.ps-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(12px);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  opacity: 0;
  transition: opacity 0.4s 0.6s, transform 0.3s, background 0.3s;
}
.ps-modal-open .ps-arrow {
  opacity: 1;
}
.ps-arrow:hover {
  background: rgba(255,255,255,0.15);
  transform: translateY(-50%) scale(1.1);
}
.ps-arrow-left { left: 1.5rem; }
.ps-arrow-right { right: 1.5rem; }

/* ─── MODAL CONTENT ─── */
.ps-modal-content {
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(3rem, 8vw, 7rem);
  max-width: 1100px;
  width: 100%;
  padding: 2rem;
}

/* ─── BIG CAN (the 3D animated can) ─── */
.ps-big-can {
  position: relative;
  flex-shrink: 0;
  /* Start state */
  opacity: 0;
  transition:
    transform 0.8s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.5s ease;
  will-change: transform;
}
.ps-modal-open .ps-big-can {
  opacity: 1;
}

.ps-big-can-glow {
  position: absolute;
  inset: -40%;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0;
  transition: opacity 0.8s ease 0.2s;
  z-index: -1;
}
.ps-modal-open .ps-big-can-glow {
  opacity: 0.35;
}

.ps-big-can-img {
  width: clamp(140px, 20vw, 220px) !important;
  height: auto !important;
  object-fit: contain;
  filter: drop-shadow(0 40px 80px rgba(0,0,0,0.35));
  position: relative;
  z-index: 2;
}

/* ─── DETAILS PANEL ─── */
.ps-details {
  color: white;
  max-width: 380px;
  flex-shrink: 0;
}

.ps-details-tag {
  display: inline-block;
  font-size: 0.7rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.45);
  margin-bottom: 0.8rem;
  transform: translateY(25px);
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.16,1,0.3,1) 0.25s;
}
.ps-modal-open .ps-details-tag {
  transform: translateY(0);
  opacity: 1;
}

.ps-details-title {
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 800;
  line-height: 1.05;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  transform: translateY(35px);
  opacity: 0;
  transition: all 0.7s cubic-bezier(0.16,1,0.3,1) 0.35s;
}
.ps-modal-open .ps-details-title {
  transform: translateY(0);
  opacity: 1;
}

.ps-details-desc {
  font-size: 0.95rem;
  line-height: 1.75;
  color: rgba(255,255,255,0.65);
  margin-bottom: 1.8rem;
  transform: translateY(25px);
  opacity: 0;
  transition: all 0.7s cubic-bezier(0.16,1,0.3,1) 0.45s;
}
.ps-modal-open .ps-details-desc {
  transform: translateY(0);
  opacity: 1;
}

/* ─── TAGS ─── */
.ps-details-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.16,1,0.3,1) 0.55s;
}
.ps-modal-open .ps-details-tags {
  transform: translateY(0);
  opacity: 1;
}

.ps-tag {
  padding: 0.4rem 0.9rem;
  border-radius: 50px;
  border: 1px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.07);
  backdrop-filter: blur(8px);
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.04em;
}

/* ─── CTA ─── */
.ps-details-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.9rem 1.8rem;
  border: none;
  border-radius: 50px;
  color: #1a1210;
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  cursor: pointer;
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.16,1,0.3,1) 0.65s;
}
.ps-modal-open .ps-details-cta {
  transform: translateY(0);
  opacity: 1;
}
.ps-details-cta:hover {
  filter: brightness(1.1);
  box-shadow: 0 12px 30px rgba(0,0,0,0.25);
  transform: translateY(-2px) scale(1.03) !important;
}

/* ─── NAV DOTS ─── */
.ps-dots {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.7rem;
  z-index: 20;
  opacity: 0;
  transition: opacity 0.4s 0.7s;
}
.ps-modal-open .ps-dots { opacity: 1; }

.ps-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  border: none;
  background: rgba(255,255,255,0.2);
  cursor: pointer;
  transition: all 0.3s;
}
.ps-dot-active {
  background: white;
  transform: scale(1.4);
}
.ps-dot:hover {
  background: rgba(255,255,255,0.5);
}

/* ─── RESPONSIVE ─── */
@media (max-width: 768px) {
  .ps-cans-row {
    gap: 0.5rem;
    padding: 1rem 0 2rem;
    flex-wrap: nowrap;
    overflow-x: auto;
    justify-content: flex-start;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }
  .ps-cans-row::-webkit-scrollbar { display: none; }

  .ps-modal-content {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    padding-top: 5rem;
  }
  .ps-details { text-align: center; }
  .ps-details-tags { justify-content: center; }
  .ps-arrow { display: none; }

  .ps-big-can-img {
    width: 120px !important;
  }
}
`;
