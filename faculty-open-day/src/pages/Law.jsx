import ProgramSection from '../components/ProgramSection';
import DownloadButton from '../components/DownloadButton';
import { getFacultyById } from '../data/facultyData';
import { BookOpen, Award, DollarSign } from 'lucide-react';

const Law = () => {
  const faculty = getFacultyById('law');

  return (
    <div className="min-h-screen bg-gradient-to-br from-law-light to-purple-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-law-dark mb-4">{faculty.name}</h1>
          <p className="text-xl text-gray-700">{faculty.description}</p>
        </div>

        {/* Programs Grid */}
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Degree Program */}
          <ProgramSection
            title={faculty.degree.title}
            description={faculty.degree.description}
            downloadUrl={faculty.degree.downloadUrl}
            color="law"
            icon={BookOpen}
          />

          {/* Higher Certificate */}
          <ProgramSection
            title={faculty.higherCertificate.title}
            description={faculty.higherCertificate.description}
            downloadUrl={faculty.higherCertificate.downloadUrl}
            color="law"
            icon={Award}
          />

          {/* Fees Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <DollarSign className="text-law mr-3" size={32} />
              <h3 className="text-2xl font-bold text-gray-800">Fees Information</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Download our comprehensive fees structure document for detailed information about tuition, registration, and other costs.
            </p>
            <DownloadButton label="Download Fees Information" url={faculty.feesUrl} color="law" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Law;

