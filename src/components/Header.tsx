import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';
import { Link } from '../router';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Accueil', path: '/' },
    { label: 'À propos', path: '/a-propos' },
    { label: 'Nos pôles', path: '/services' },
    { label: 'Formations', path: '/formations' },
    { label: 'Recrutement', path: '/recrutement' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-slate-900">
              <span className="text-emerald-600">CGC</span>
            </div>
            <div className="hidden sm:block text-sm text-slate-600">
              Cabinet Général de Consulting
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-slate-700 hover:text-emerald-600 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+33123456789"
              className="flex items-center space-x-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              <Phone size={18} />
              <span>Nous appeler</span>
            </a>
          </div>
