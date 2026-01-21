import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FacultyCard = ({ faculty }) => {
  const colorClasses = {
    education: 'from-education-light to-education hover:shadow-education/50',
    law: 'from-law-light to-law hover:shadow-law/50',
    commerce: 'from-commerce-light to-commerce hover:shadow-commerce/50',
    humanities: 'from-humanities-light to-humanities hover:shadow-humanities/50',
  };

  return (
    <Link to={faculty.path}>
      <div className={`bg-gradient-to-br ${colorClasses[faculty.color]} rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full`}>
        <h2 className="text-3xl font-bold text-white mb-4">{faculty.name}</h2>
        <p className="text-white/90 mb-6 text-lg">{faculty.description}</p>
        <div className="flex items-center text-white font-semibold">
          <span>Explore Programs</span>
          <ArrowRight className="ml-2" size={20} />
        </div>
      </div>
    </Link>
  );
};

export default FacultyCard;

