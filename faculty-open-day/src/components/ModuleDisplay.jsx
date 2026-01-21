import { useState } from 'react';
import { BookOpen, Calendar, Award } from 'lucide-react';

const ModuleDisplay = ({ higherCertModules, degreeModules, facultyColor }) => {
  const [activeTab, setActiveTab] = useState('degree');

  const colorClasses = {
    education: {
      tab: 'border-blue-500 text-blue-600',
      tabHover: 'hover:border-blue-300 hover:text-blue-500',
      card: 'hover:border-blue-400 hover:shadow-blue-100',
      badge: 'bg-blue-100 text-blue-700',
    },
    law: {
      tab: 'border-purple-500 text-purple-600',
      tabHover: 'hover:border-purple-300 hover:text-purple-500',
      card: 'hover:border-purple-400 hover:shadow-purple-100',
      badge: 'bg-purple-100 text-purple-700',
    },
    commerce: {
      tab: 'border-green-500 text-green-600',
      tabHover: 'hover:border-green-300 hover:text-green-500',
      card: 'hover:border-green-400 hover:shadow-green-100',
      badge: 'bg-green-100 text-green-700',
    },
    humanities: {
      tab: 'border-orange-500 text-orange-600',
      tabHover: 'hover:border-orange-300 hover:text-orange-500',
      card: 'hover:border-orange-400 hover:shadow-orange-100',
      badge: 'bg-orange-100 text-orange-700',
    },
  };

  const colors = colorClasses[facultyColor] || colorClasses.education;
  const modules = activeTab === 'degree' ? degreeModules : higherCertModules;

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            First Year Modules
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the modules you'll study in your first year
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('degree')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === 'degree'
                  ? `bg-white ${colors.tab} shadow-md`
                  : `text-gray-600 ${colors.tabHover}`
              }`}
            >
              Degree Year 1
            </button>
            <button
              onClick={() => setActiveTab('certificate')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === 'certificate'
                  ? `bg-white ${colors.tab} shadow-md`
                  : `text-gray-600 ${colors.tabHover}`
              }`}
            >
              Higher Certificate
            </button>
          </div>
        </div>

        {/* Module Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, index) => (
            <div
              key={module.code}
              className={`bg-white border-2 border-gray-200 rounded-xl p-6 transition-all duration-300 ${colors.card} hover:shadow-xl transform hover:-translate-y-1`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Module Code Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-bold ${colors.badge}`}>
                  {module.code}
                </span>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>Sem {module.semester}</span>
                </div>
              </div>

              {/* Module Name */}
              <h3 className="text-lg font-bold text-gray-900 mb-4 min-h-[3rem] flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-gray-400 flex-shrink-0" />
                <span>{module.name}</span>
              </h3>

              {/* Credits */}
              <div className="flex items-center text-gray-600 pt-4 border-t border-gray-100">
                <Award className="w-5 h-5 mr-2" />
                <span className="font-semibold">{module.credits} Credits</span>
              </div>
            </div>
          ))}
        </div>

        {/* Total Credits Summary */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gray-50 rounded-lg px-8 py-4 border-2 border-gray-200">
            <p className="text-gray-600 mb-1">Total Credits</p>
            <p className="text-3xl font-bold text-gray-900">
              {modules.reduce((sum, module) => sum + module.credits, 0)} Credits
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleDisplay;

