import { ArrowRight, Target, Shield, TrendingUp, Building2, Users, Briefcase, GraduationCap, BarChart3, MessageSquare, CheckCircle } from 'lucide-react';
import { Link } from '../router';

export function Home() {
  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              CGC — Cabinet Général de Consulting
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 mb-10 leading-relaxed">
              Conseil, accompagnement, formation & recrutement pour accélérer votre croissance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Demander un rendez-vous
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <a
                href="https://wa.me/33123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-all font-semibold text-lg shadow-lg"
              >
                <MessageSquare className="mr-2" size={20} />
                Contacter un consultant
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Votre partenaire de croissance
            </h2>
            <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
              <p>
                CGC accompagne durablement entreprises, entrepreneurs et organisations dans leur développement stratégique et opérationnel.
              </p>
              <p>
                Nous offrons une expertise opérationnelle à forte valeur ajoutée, avec des solutions concrètes, évolutives et orientées résultats.
              </p>
              <p>
                Notre approche terrain garantit un accompagnement humain, personnalisé et ancré dans la réalité de votre activité.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Nos 5 pôles d'expertise
            </h2>
            <p className="text-xl text-slate-600">
              Des solutions complètes pour toutes vos ambitions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: 'Conseil & Accompagnement Entreprise',
                benefits: ['Optimisation des processus', 'Structuration organisationnelle', 'Performance mesurable'],
                color: 'emerald'
              },
              {
                icon: Target,
                title: 'Conseil & Accompagnement Entrepreneurial',
                benefits: ['Validation du business model', 'Structuration du projet', 'Accélération du lancement'],
                color: 'blue'
              },
              {
                icon: Users,
                title: 'Recrutement axé compétences',
                benefits: ['Matching talent-entreprise', 'Gain de temps RH', 'Baisse du turnover'],
                color: 'purple'
              },
              {
                icon: GraduationCap,
                title: 'Sensibilisation & Formation continue',
                benefits: ['Montée en compétences', 'Leadership renforcé', 'Performance collective'],
                color: 'orange'
              },
              {
                icon: BarChart3,
                title: 'Tenue du contrôle de gestion',
                benefits: ['Pilotage financier', 'Optimisation des coûts', 'Reporting actionnable'],
                color: 'red'
              }
            ].map((pole, index) => (
              <div
                key={index}
                className="bg-white border-2 border-slate-200 rounded-xl p-8 hover:border-emerald-500 hover:shadow-xl transition-all group"
              >
                <div className={`w-14 h-14 bg-${pole.color}-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <pole.icon className={`text-${pole.color}-600`} size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">
                  {pole.title}
                </h3>
                <ul className="space-y-3 mb-6">
                  {pole.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start text-slate-700">
                      <CheckCircle className="text-emerald-600 mr-2 flex-shrink-0 mt-0.5" size={18} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
                >
                  Découvrir
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Nos valeurs fondamentales
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'INTÉGRITÉ',
                description: 'Respect des engagements, confidentialité et loyauté envers nos clients. Nous plaçons la confiance au cœur de chaque collaboration.'
              },
              {
                icon: Target,
                title: 'TRANSPARENCE',
                description: 'Méthodes claires, communication continue et suivi rigoureux. Vous savez toujours où vous en êtes dans votre projet.'
              },
              {
                icon: TrendingUp,
                title: 'ENGAGEMENT',
                description: 'Orientation résultats, accompagnement humain et durabilité. Nous nous investissons pleinement dans votre réussite.'
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-slate-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Notre impact en chiffres
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '+50', label: 'Entreprises accompagnées', description: 'De la TPE au grand groupe' },
              { number: '300+', label: 'Heures de formation', description: 'Dispensées à nos clients' },
              { number: '92%', label: 'Satisfaction client', description: 'Recommandent nos services' }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg">
                <div className="text-5xl font-bold text-emerald-600 mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-slate-900 mb-2">{stat.label}</div>
                <div className="text-slate-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Vous avez un projet ? Parlez à un consultant CGC.
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            Échangeons sur vos enjeux et trouvons ensemble les solutions adaptées à vos ambitions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 rounded-lg hover:bg-slate-100 transition-all font-semibold text-lg shadow-xl"
          >
            Prendre un rendez-vous
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
