import { Search, UserCheck, Target, TrendingUp, CheckCircle, Upload, ArrowRight } from 'lucide-react';
import { Link } from '../router';
import { useState } from 'react';
import { submitContactForm } from '../lib/supabase';

export function Recrutement() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      await submitContactForm({
        ...formData,
        type: 'candidature'
      });
      setSubmitSuccess(true);
      setFormData({ nom: '', email: '', telephone: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Recrutement axé compétences
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Matching durable entre talents et entreprises pour construire des équipes performantes.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Pour les entreprises
            </h2>
            <p className="text-xl text-slate-600">
              Un recrutement adapté à votre métier et à vos besoins réels
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Notre processus</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                {
                  step: '1',
                  icon: Target,
                  title: 'Analyse besoin',
                  description: 'Compréhension approfondie du poste et du contexte'
                },
                {
                  step: '2',
                  icon: Search,
                  title: 'Sourcing',
                  description: 'Recherche ciblée et multicritères des talents'
                },
                {
                  step: '3',
                  icon: UserCheck,
                  title: 'Sélection',
                  description: 'Évaluation des compétences techniques et comportementales'
                },
                {
                  step: '4',
                  icon: CheckCircle,
                  title: 'Matching',
                  description: 'Présentation des profils les plus adaptés'
                },
                {
                  step: '5',
                  icon: TrendingUp,
                  title: 'Suivi intégration',
                  description: 'Accompagnement post-recrutement'
                }
              ].map((phase, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow h-full">
                    <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                      {phase.step}
                    </div>
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <phase.icon className="text-emerald-600" size={24} />
                    </div>
                    <h4 className="font-bold text-slate-900 text-center mb-2">{phase.title}</h4>
                    <p className="text-sm text-slate-600 text-center">{phase.description}</p>
                  </div>
                  {index < 4 && (
                    <div className="hidden md:block absolute top-1/4 -right-3 w-6 h-0.5 bg-emerald-300"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              Bénéfices pour votre entreprise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Gain de temps',
                  description: 'Réduction de 75% du temps de recrutement',
                  stat: '75%'
                },
                {
                  title: 'RH optimisée',
                  description: 'Concentration sur les candidats qualifiés',
                  stat: '100%'
                },
                {
                  title: 'Réduction coûts',
                  description: 'Baisse du turnover et des erreurs de casting',
                  stat: '-60%'
                },
                {
                  title: 'Matching durable',
                  description: 'Taux de rétention à 1 an supérieur',
                  stat: '90%'
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-emerald-50 rounded-xl">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">{benefit.stat}</div>
                  <h4 className="font-bold text-slate-900 mb-2">{benefit.title}</h4>
                  <p className="text-sm text-slate-700">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all font-semibold text-lg shadow-lg"
            >
              Lancer un recrutement
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Pour les candidats
            </h2>
            <p className="text-xl text-slate-600">
              Rejoignez des entreprises qui valorisent vos compétences
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 lg:p-12 mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Pourquoi postuler avec CGC ?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Accès à des opportunités de qualité',
                'Accompagnement personnalisé',
                'Matching basé sur vos vraies compétences',
                'Confidentialité garantie',
                'Préparation aux entretiens',
                'Suivi post-embauche'
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-emerald-600 mr-3 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 lg:p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Soumettez votre candidature
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nom" className="block text-sm font-semibold text-slate-700 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  required
                  value={formData.nom}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-colors"
                  placeholder="Votre nom et prénom"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="telephone" className="block text-sm font-semibold text-slate-700 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    required
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-colors"
                    placeholder="+33 6 12 34 56 78"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="cv" className="block text-sm font-semibold text-slate-700 mb-2">
                  CV (PDF, DOC, DOCX) *
                </label>
                <div className="relative border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-emerald-500 transition-colors cursor-pointer">
                  <input
                    type="file"
                    id="cv"
                    name="cv"
                    accept=".pdf,.doc,.docx"
                    required
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <Upload className="mx-auto mb-4 text-slate-400" size={40} />
                  <p className="text-slate-700 font-semibold mb-2">Cliquez pour télécharger votre CV</p>
                  <p className="text-sm text-slate-500">ou glissez-déposez votre fichier ici</p>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                  Message (optionnel)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-colors resize-none"
                  placeholder="Parlez-nous de vous, de vos compétences et de vos aspirations professionnelles..."
                ></textarea>
              </div>

              {submitSuccess && (
                <div className="bg-emerald-50 border-2 border-emerald-500 rounded-lg p-4 flex items-center space-x-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0" size={24} />
                  <p className="text-emerald-700 font-medium">Merci ! Votre candidature a été envoyée avec succès. Nous étudierons votre profil et vous contacterons rapidement.</p>
                </div>
              )}

              {submitError && (
                <div className="bg-red-50 border-2 border-red-500 rounded-lg p-4">
                  <p className="text-red-700 font-medium">{submitError}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Envoi en cours...' : 'Soumettre ma candidature'}
              </button>

              <p className="text-sm text-slate-600 text-center">
                Vos données sont traitées de manière confidentielle et ne seront jamais partagées sans votre accord.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Des questions sur nos services de recrutement ?
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            Notre équipe est à votre écoute pour vous accompagner dans votre recherche de talents ou d'opportunités.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 rounded-lg hover:bg-slate-100 transition-all font-semibold text-lg shadow-xl"
          >
            Nous contacter
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
