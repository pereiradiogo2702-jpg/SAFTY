'use client';

import Link from 'next/link';

const footerLinks = {
  navigation: [
    { href: '/', label: 'Accueil' },
    { href: '/products', label: 'Nos Jus' },
    { href: '/about', label: 'Notre Histoire' },
    { href: '/contact', label: 'Contact' },
  ],
  categories: [
    { label: 'Tropical' },
    { label: 'Agrumes' },
    { label: 'Superaliments' },
    { label: 'Tradition' },
  ],
  legal: [
    { href: '/mentions-legales', label: 'Mentions Légales' },
    { href: '/politique-confidentialite', label: 'Confidentialité' },
    { href: '/cgv', label: 'CGV' },
    { href: '/cookies', label: 'Cookies' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[var(--secondary)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🍊</span>
              <span className="text-2xl font-bold">SAFTY</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Des saveurs authentiques du monde entier, pour se sentir chez soi
              où que l&apos;on soit.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold mb-4 text-[var(--primary-light)]">
              Navigation
            </h3>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold mb-4 text-[var(--primary-light)]">
              Catégories
            </h3>
            <ul className="space-y-2">
              {footerLinks.categories.map((cat) => (
                <li key={cat.label}>
                  <span className="text-gray-300 text-sm">{cat.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold mb-4 text-[var(--primary-light)]">
              Informations
            </h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} SAFTY. Tous droits réservés.
          </p>
          <p className="text-gray-500 text-xs">
            Site web créé par{' '}
            <span className="text-[var(--primary-light)]">drecord.web</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
