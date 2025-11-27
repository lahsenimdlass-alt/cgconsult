import { Target, Eye, CheckCircle, Users } from 'lucide-react';

export function About() {
  const items = [
    {
      title: 'Approche terrain et opérationnelle',
      icon: CheckCircle,
      description:
        'Nous intervenons directement sur le terrain avec une approche pratique et opérationnelle.',
    },
    {
      title: 'Expertise sectorielle',
      icon: Users,
      description:
        "Nos consultants ont une expérience approfondie dans différents secteurs d'activité.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            À propos de CGC
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Un cabinet d'experts opérationnels dédiés à votre réussite.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="bg-emerald-50 rounded-2xl p-8">
              <div className="w-14 h-14 bg-emerald-600 rounded-lg flex items-center justify-center mb-6">
                <Target className="text-white" size={28} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Notre Mission</h2>
              <p className="text-slate-700 leading-relaxed">
                Accompagner durablement les organisations et entrepreneurs en leur fournissant des solutions intelligentes, pragmatiques et à forte valeur ajoutée.
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Eye className="text-white" size={28} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Notre Vision</h2>
              <p className="text-slate-700 leading-relaxed">
                Devenir un partenaire de référence dans la performance, le recrutement et l'innovation au Maroc et à l'international.
              </p>
            </div>
          </div>

          {/* Pourquoi choisir CGC */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Pourquoi choisir CGC ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {items.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg shadow">
                    <div className="w-12 h-12 mb-4 flex items-center justify-center bg-emerald-600 rounded-full text-white">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-slate-700">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
