import { Building2, Target, Users, GraduationCap, BarChart3, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from '../router';

export function Services() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Nos pôles d'activités
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Des solutions complètes et sur-mesure pour transformer vos ambitions en résultats concrets.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="text-emerald-600" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Conseil & Accompagnement Entreprise
              </h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Optimisez votre performance organisationnelle avec un accompagnement stratégique et opérationnel sur-mesure.
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="font-semibold text-slate-900 text-lg">Nos interventions :</h3>
                {[
                  'Diagnostic stratégique et organisationnel',
                  'Réingénierie des processus métiers',
                  'Amélioration de la performance opérationnelle',
                  'Mise en place de gouvernance efficace'
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle className="text-emerald-600 mr-3 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-emerald-50 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-slate-900 mb-3">Bénéfices business :</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Augmentation de la productivité</li>
                  <li>• Clarification de la structure organisationnelle</li>
                  <li>• Diminution des pertes et inefficacités</li>
                  <li>• Meilleure agilité face au marché</li>
                </ul>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all font-semibold"
              >
                Demander un diagnostic
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 lg:p-12">
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-2">Diagnostic initial</h4>
                  <p className="text-sm text-slate-600">Analyse approfondie de votre organisation</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-2">Plan d'action</h4>
                  <p className="text-sm text-slate-600">Roadmap détaillée et priorisée</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-2">Mise en œuvre</h4>
                  <p className="text-sm text-slate-600">Accompagnement terrain et coaching</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-2">Suivi & optimisation</h4>
                  <p className="text-sm text-slate-600">Mesure des résultats et ajustements</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 lg:p-12">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-4 text-xl">Votre projet mérite les meilleures chances</h4>
                <div className="space-y-3 text-slate-700">
                  <p>✓ Business Model Canvas validé</p>
                  <p>✓ Étude de marché approfondie</p>
                  <p>✓ Plan financier réaliste</p>
                  <p>✓ Stratégie de lancement claire</p>
                  <p>✓ Accompagnement post-lancement</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="text-blue-600" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Conseil & Accompagnement Entrepreneurial
              </h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Maximisez les chances de réussite de votre projet entrepreneurial avec un accompagnement expert et personnalisé.
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="font-semibold text-slate-900 text-lg">Notre accompagnement :</h3>
                {[
                  'Validation et structuration du Business Model',
                  'Étude de marché et positionnement concurrentiel',
                  'Élaboration du plan d\'action opérationnel',
                  'Coaching au lancement et développement'
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-3 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-slate-900 mb-3">Bénéfices :</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Prise de décisions éclairées</li>
                  <li>• Stratégie de go-to-market efficace</li>
                  <li>• Accélération du développement</li>
                  <li>• Réduction des risques d'échec</li>
                </ul>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-semibold"
              >
                Lancer mon projet
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="text-purple-600" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Recrutement axé compétences
              </h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Trouvez les talents qui feront vraiment la différence dans votre organisation avec notre approche centrée sur les compétences réelles.
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="font-semibold text-slate-900 text-lg">Notre processus :</h3>
                {[
                  'Analyse approfondie du besoin et du contexte',
                  'Sourcing ciblé et multicritères',
                  'Préqualification et évaluation des compétences',
                  'Accompagnement à l\'intégration'
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle className="text-purple-600 mr-3 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-purple-50 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-slate-900 mb-3">Bénéfices :</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Gain de temps considérable</li>
                  <li>• Réduction du turnover</li>
                  <li>• Matching durable entreprise-talent</li>
                  <li>• Compétences réellement ciblées</li>
                </ul>
              </div>

              <Link
                to="/recrutement"
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all font-semibold"
              >
                Démarrer un recrutement
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 lg:p-12 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Matching talent-entreprise</h3>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-3xl font-bold text-purple-600 mb-2">75%</div>
                  <p className="text-sm text-slate-700">Réduction du temps de recrutement</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-3xl font-bold text-purple-600 mb-2">90%</div>
                  <p className="text-sm text-slate-700">Taux de rétention à 1 an</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Formats de formation</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-2">Ateliers pratiques</h4>
                  <p className="text-sm text-slate-600">Sessions interactives et participatives</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-2">Formations métiers</h4>
                  <p className="text-sm text-slate-600">Compétences techniques spécialisées</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-2">Leadership</h4>
                  <p className="text-sm text-slate-600">Développement du management</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <GraduationCap className="text-orange-600" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Sensibilisation & Formation continue
              </h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Développez les compétences de vos équipes avec des formations pragmatiques, ancrées dans le terrain et orientées résultats.
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="font-semibold text-slate-900 text-lg">Nos thématiques :</h3>
                {[
                  'Ateliers pratiques sur mesure',
                  'Formations métiers spécialisées',
                  'Développement du leadership',
                  'Management et gestion d\'équipe'
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-orange-50 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-slate-900 mb-3">Bénéfices :</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Performance accrue des équipes</li>
                  <li>• Amélioration de la communication interne</li>
                  <li>• Développement des soft skills</li>
                  <li>• Culture de l'excellence</li>
                </ul>
              </div>

              <Link
                to="/formations"
                className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all font-semibold"
              >
                Voir nos formations
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="text-red-600" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Tenue du contrôle de gestion
              </h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Pilotez votre activité avec précision grâce à un contrôle de gestion opérationnel, des KPIs pertinents et un reporting actionnable.
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="font-semibold text-slate-900 text-lg">Nos prestations :</h3>
                {[
                  'Diagnostic financier et opérationnel',
                  'Mise en place de tableaux de bord',
                  'Reporting et analyse de performance',
                  'Optimisation et maîtrise des coûts'
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle className="text-red-600 mr-3 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-red-50 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-slate-900 mb-3">Bénéfices :</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Pilotage financier en temps réel</li>
                  <li>• Optimisation des coûts opérationnels</li>
                  <li>• Décisions basées sur la data</li>
                  <li>• Anticipation des risques</li>
                </ul>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all font-semibold"
              >
                Optimiser ma gestion
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Tableaux de bord sur-mesure</h3>
              <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <p className="text-sm text-slate-600 mb-1">Chiffre d'affaires</p>
                  <p className="text-2xl font-bold text-slate-900">+24%</p>
                </div>
                <div className="border-b border-slate-200 pb-3">
                  <p className="text-sm text-slate-600 mb-1">Marge opérationnelle</p>
                  <p className="text-2xl font-bold text-slate-900">18.5%</p>
                </div>
                <div className="border-b border-slate-200 pb-3">
                  <p className="text-sm text-slate-600 mb-1">Coûts optimisés</p>
                  <p className="text-2xl font-bold text-slate-900">-12%</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-1">ROI actions</p>
                  <p className="text-2xl font-bold text-slate-900">3.2x</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Prêt à transformer votre organisation ?
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            Échangeons sur vos besoins spécifiques et construisons ensemble votre feuille de route.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 rounded-lg hover:bg-slate-100 transition-all font-semibold text-lg shadow-xl"
          >
            Prendre rendez-vous avec un consultant
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
