import FacultyCard from '../components/FacultyCard';
import { faculties } from '../data/facultyData';
import { GraduationCap } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <GraduationCap size={80} className="text-blue-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            Welcome to Faculty Open Day
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our diverse range of academic programs and discover your path to success
          </p>
        </div>

        {/* Faculty Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {faculties.map((faculty) => (
            <FacultyCard key={faculty.id} faculty={faculty} />
          ))}
        </div>

        {/* Footer Info */}
        <div className="text-center mt-16 text-gray-600">
          <p className="text-lg">Click on any faculty to explore degree programs, certificates, and fee information</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

