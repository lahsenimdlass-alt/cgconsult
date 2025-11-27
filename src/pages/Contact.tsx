import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { submitContactForm } from '../lib/supabase';

export function Contact() {
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
        type: 'contact'
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
            Contactez-nous
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Nous sommes à votre écoute pour échanger sur vos projets et ambitions.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Parlons de votre projet
              </h2>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                Que vous ayez besoin de conseil, de formation, de recrutement ou simplement d'échanger sur vos enjeux, notre équipe est disponible pour vous accompagner.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Téléphone</h3>
                    <a href="tel:+33123456789" className="text-emerald-600 hover:text-emerald-700 font-medium">
                      +212 6 23 45 67 89
                    </a>
                    <p className="text-sm text-slate-600 mt-1">Lun-Ven : 9h-18h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                    <a href="mailto:contact@cgc-consulting.fr" className="text-emerald-600 hover:text-emerald-700 font-medium">
                      contact@cgc-consulting.fr
                    </a>
                    <p className="text-sm text-slate-600 mt-1">Réponse sous 24h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">WhatsApp Business</h3>
                    <a
                      href="https://wa.me/33123456789"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:text-emerald-700 font-medium"
                    >
                      +212 6 23 45 67 89
                    </a>
                    <p className="text-sm text-slate-600 mt-1">Chat instantané</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Adresse</h3>
                    <p className="text-slate-700">
                      123 Avenue Zerktouni<br />
                      75, casablanca
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Horaires</h3>
                    <p className="text-slate-700">
                      Lundi - Vendredi : 9h00 - 18h00<br />
                      Samedi - Dimanche : Fermé
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Envoyez-nous un message
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
                      placeholder="+212 6 12 34 56 78"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-colors resize-none"
                      placeholder="Parlez-nous de votre projet, vos besoins, vos enjeux..."
                    ></textarea>
                  </div>

                  {submitSuccess && (
                    <div className="bg-emerald-50 border-2 border-emerald-500 rounded-lg p-4 flex items-center space-x-3">
                      <CheckCircle className="text-emerald-600 flex-shrink-0" size={24} />
                      <p className="text-emerald-700 font-medium">Merci ! Votre message a été envoyé avec succès. Nous vous recontacterons rapidement.</p>
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
                    className="w-full py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="mr-2" size={20} />
                    {isSubmitting ? 'Envoi en cours...' : 'Planifier un rendez-vous'}
                  </button>

                  <p className="text-sm text-slate-600 text-center">
                    En soumettant ce formulaire, vous acceptez d'être contacté par CGC concernant votre demande.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-100 rounded-2xl overflow-hidden shadow-lg">
            <div className="aspect-[21/9] bg-slate-200 relative">
              <iframe
                src="<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1696020.7618470904!2d-7.1695847!3d33.8757298!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7d207210f057645%3A0xa80cb181e2e08b24!2sCabinet%20General%20de%20Consulting!5e0!3m2!1sfr!2sma!4v1764285642161!5m2!1sfr!2sma" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            Notre équipe de consultants experts est à votre disposition pour transformer vos ambitions en réalité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+21223456789"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 rounded-lg hover:bg-slate-100 transition-all font-semibold text-lg shadow-xl"
            >
              <Phone className="mr-2" size={20} />
              Appelez maintenant
            </a>
            <a
              href="mailto:contact@cgc-consulting.fr"
              className="inline-flex items-center justify-center px-8 py-4 bg-emerald-800 text-white rounded-lg hover:bg-emerald-900 transition-all font-semibold text-lg shadow-xl"
            >
              <Mail className="mr-2" size={20} />
              Envoyez un email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
