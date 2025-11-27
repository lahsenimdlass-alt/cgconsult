import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { Link } from '../router';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              <span className="text-emerald-500">CGC</span>
            </h3>
            <p className="text-sm leading-relaxed">
              Cabinet Général de Consulting - Conseil, accompagnement, formation & recrutement pour accélérer votre croissance.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
