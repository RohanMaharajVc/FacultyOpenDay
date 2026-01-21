import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import ProgramSection from '../components/ProgramSection';
import DownloadButton from '../components/DownloadButton';
import ModuleDisplay from '../components/ModuleDisplay';
import { getFacultyById } from '../data/facultyData';
import { BookOpen, Award, DollarSign, TrendingUp, Briefcase, Users } from 'lucide-react';
import { commerceParticles } from '../config/particlesConfig';

const Commerce = () => {
  const faculty = getFacultyById('commerce');
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-green-700 to-emerald-700"></div>

        {/* Interactive Particles - Rising Bubbles */}
        {init && (
          <Particles
            id="tsparticles-commerce"
            particlesLoaded={particlesLoaded}
            options={commerceParticles}
            className="absolute inset-0"
          />
        )}

        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              {faculty.name}
            </h1>
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
              {faculty.description}
            </p>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F9FAFB"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto -mt-20 relative z-20">
            {/* Stat 1 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="bg-gradient-to-br from-green-600 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Briefcase className="text-white" size={32} />
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">35+</h3>
              <p className="text-gray-600 font-medium">Years in Business Education</p>
            </div>

            {/* Stat 2 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="bg-gradient-to-br from-green-600 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">4500+</h3>
              <p className="text-gray-600 font-medium">Business Leaders</p>
            </div>

            {/* Stat 3 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="bg-gradient-to-br from-green-600 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">97%</h3>
              <p className="text-gray-600 font-medium">Career Placement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Module Display Section */}
      <ModuleDisplay
        degreeModules={faculty.degree.modules}
        higherCertModules={faculty.higherCertificate.modules}
        facultyColor="commerce"
      />

      {/* Programs Section */}
      <div className="container mx-auto px-4 py-12">

        {/* Programs Grid */}
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Degree Program */}
          <ProgramSection
            title={faculty.degree.title}
            description={faculty.degree.description}
            downloadUrl={faculty.degree.downloadUrl}
            color="commerce"
            icon={BookOpen}
          />

          {/* Higher Certificate */}
          <ProgramSection
            title={faculty.higherCertificate.title}
            description={faculty.higherCertificate.description}
            downloadUrl={faculty.higherCertificate.downloadUrl}
            color="commerce"
            icon={Award}
          />

          {/* Fees Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <DollarSign className="text-commerce mr-3" size={32} />
              <h3 className="text-2xl font-bold text-gray-800">Fees Information</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Download our comprehensive fees structure document for detailed information about tuition, registration, and other costs.
            </p>
            <DownloadButton label="Download Fees Information" url={faculty.feesUrl} color="commerce" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commerce;

