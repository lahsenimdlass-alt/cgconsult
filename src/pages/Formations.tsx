import { Clock, Users, Award, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from '../router';

export function Formations() {
  const formations = [
    {
      name: 'Leadership & Management d\'équipe',
      objectif: 'Développer les compétences managériales et le leadership opérationnel',
      public: 'Managers, chefs d\'équipe, futurs leaders',
      duree: '3 jours',
      format: 'Présentiel ou en ligne',
      certification: true,
      color: 'emerald'
    },
    {
      name: 'Gestion de projet agile',
      objectif: 'Maîtriser les méthodologies agiles et piloter des projets complexes',
      public: 'Chefs de projet, product owners, équipes transverses',
      duree: '2 jours',
      format: 'Présentiel ou en ligne',
      certification: true,
      color: 'blue'
    },
    {
      name: 'Contrôle de gestion opérationnel',
      objectif: 'Piloter la performance financière et optimiser les coûts',
      public: 'Contrôleurs de gestion, directeurs financiers, entrepreneurs',
      duree: '4 jours',
      format: 'Présentiel',
      certification: true,
      color: 'purple'
    },
    {
      name: 'Communication professionnelle & influence',
      objectif: 'Améliorer son impact relationnel et sa communication stratégique',
      public: 'Tous collaborateurs, managers, commerciaux',
      duree: '2 jours',
      format: 'Présentiel ou en ligne',
      certification: false,
      color: 'orange'
    },
    {
      name: 'Stratégie d\'entreprise',
      objectif: 'Élaborer et déployer une stratégie d\'entreprise performante',
      public: 'Dirigeants, comités de direction, entrepreneurs',
      duree: '3 jours',
      format: 'Présentiel',
      certification: true,
      color: 'red'
    },
    {
      name: 'Gestion du temps & productivité',
      objectif: 'Optimiser son organisation personnelle et gagner en efficacité',
      public: 'Tous collaborateurs',
      duree: '1 jour',
      format: 'En ligne ou présentiel',
      certification: false,
      color: 'teal'
    }
  ];

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Formations & Programmes
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Développez les compétences de vos équipes avec des formations pragmatiques et orientées résultats.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {formations.map((formation, index) => (
              <div
                key={index}
                className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-emerald-500 hover:shadow-xl transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900 leading-tight flex-1">
                    {formation.name}
                  </h3>
                  {formation.certification && (
                    <Award className="text-emerald-600 flex-shrink-0 ml-2" size={24} />
                  )}
                </div>

                <p className="text-slate-700 mb-6 leading-relaxed">
                  {formation.objectif}
                </p>

                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex items-center text-slate-600">
                    <Users size={16} className="mr-2 flex-shrink-0" />
                    <span>{formation.public}</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <Clock size={16} className="mr-2 flex-shrink-0" />
                    <span>{formation.duree}</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <CheckCircle size={16} className="mr-2 flex-shrink-0" />
                    <span>{formation.format}</span>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors w-full justify-center py-3 border-2 border-emerald-600 rounded-lg hover:bg-emerald-50"
                >
                  Demander un devis
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Méthodologie pédagogique
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Approche active',
                    description: 'Exercices pratiques, mises en situation, études de cas réels'
                  },
                  {
                    title: 'Ancrage terrain',
                    description: 'Exemples concrets tirés de votre secteur d\'activité'
                  },
                  {
                    title: 'Interactivité',
                    description: 'Échanges, partages d\'expérience, co-construction'
                  },
                  {
                    title: 'Application immédiate',
                    description: 'Outils et méthodes directement utilisables en entreprise'
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-start bg-white rounded-lg p-4 shadow-sm">
                    <CheckCircle className="text-emerald-600 mr-3 flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-slate-700">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Résultats de formation
              </h2>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                  <p className="text-slate-700 font-semibold mb-1">Taux de satisfaction</p>
                  <p className="text-sm text-slate-600">Participants recommandent nos formations</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-4xl font-bold text-blue-600 mb-2">+40%</div>
                  <p className="text-slate-700 font-semibold mb-1">Gain en compétences</p>
                  <p className="text-sm text-slate-600">Amélioration mesurée post-formation</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
                  <p className="text-slate-700 font-semibold mb-1">Application terrain</p>
                  <p className="text-sm text-slate-600">Mise en pratique dans les 30 jours</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 lg:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Formations sur-mesure
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Besoin d'une formation spécifique adaptée à votre contexte ? Nous concevons des programmes sur-mesure répondant précisément à vos enjeux business et aux besoins de vos équipes.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-bold text-slate-900 mb-2">1. Diagnostic</h3>
                  <p className="text-sm text-slate-700">Analyse des besoins et objectifs</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-bold text-slate-900 mb-2">2. Conception</h3>
                  <p className="text-sm text-slate-700">Création du programme adapté</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-bold text-slate-900 mb-2">3. Déploiement</h3>
                  <p className="text-sm text-slate-700">Animation et suivi post-formation</p>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all font-semibold text-lg shadow-lg"
              >
                Créer ma formation sur-mesure
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Investissez dans vos équipes
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            Les compétences de vos collaborateurs sont votre meilleur actif. Développons-les ensemble.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 rounded-lg hover:bg-slate-100 transition-all font-semibold text-lg shadow-xl"
          >
            Demander un catalogue complet
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
