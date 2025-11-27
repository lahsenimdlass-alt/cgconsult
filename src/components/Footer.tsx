import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { Link } from '../router';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo & description */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              <span className="text-emerald-500">CGC</span>
            </h3>
            <p className="text-sm leading-relaxed">
              Cabinet Général de Consulting - Conseil, accompagnement, formation & recrutement pour accélérer votre croissance.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:underline">Accueil</Link></li>
              <li><Link to="/a-propos" className="hover:underline">À propos</Link></li>
              <li><Link to="/services" className="hover:underline">Nos pôles</Link></li>
              <li><Link to="/formations" className="hover:underline">Formations</Link></li>
              <li><Link to="/recrutement" className="hover:underline">Recrutement</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <MapPin size={16} /> <span>123 Rue Exemple, Agadir</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} /> <a href="tel:+212600000000" className="hover:underline">+212 600 000 000</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} /> <a href="mailto:contact@cgc.com" className="hover:underline">contact@cgc.com</a>
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h4 className="text-white font-semibold mb-4">Suivez-nous</h4>
            <ul className="flex space-x-4">
              <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a></li>
              {/* Ajoute d'autres icônes si besoin */}
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
