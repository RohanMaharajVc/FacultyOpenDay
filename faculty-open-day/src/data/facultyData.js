export const faculties = [
  {
    id: 'education',
    name: 'School of Education',
    path: '/education',
    color: 'education',
    description: 'Empowering future educators and leaders in learning',
    degree: {
      title: 'Bachelor of Education',
      description: 'A comprehensive program designed to prepare aspiring teachers with the knowledge, skills, and practical experience needed to excel in modern educational environments.',
      downloadUrl: '/downloads/education-degree.pdf'
    },
    higherCertificate: {
      title: 'Higher Certificate in Education',
      description: 'An entry-level qualification for those beginning their journey in education, providing foundational knowledge and skills.',
      downloadUrl: '/downloads/education-certificate.pdf'
    },
    feesUrl: '/downloads/education-fees.pdf'
  },
  {
    id: 'law',
    name: 'School of Law',
    path: '/law',
    color: 'law',
    description: 'Shaping legal minds and champions of justice',
    degree: {
      title: 'Bachelor of Laws (LLB)',
      description: 'A rigorous program that provides comprehensive legal education, critical thinking skills, and practical training for aspiring legal professionals.',
      downloadUrl: '/downloads/law-degree.pdf'
    },
    higherCertificate: {
      title: 'Higher Certificate in Law',
      description: 'An introductory qualification providing foundational legal knowledge and skills for those entering the legal field.',
      downloadUrl: '/downloads/law-certificate.pdf'
    },
    feesUrl: '/downloads/law-fees.pdf'
  },
  {
    id: 'commerce',
    name: 'School of Commerce',
    path: '/commerce',
    color: 'commerce',
    description: 'Building business leaders and economic innovators',
    degree: {
      title: 'Bachelor of Commerce',
      description: 'A dynamic program covering business, finance, economics, and management, preparing students for successful careers in the corporate world.',
      downloadUrl: '/downloads/commerce-degree.pdf'
    },
    higherCertificate: {
      title: 'Higher Certificate in Commerce',
      description: 'A foundational business qualification providing essential skills in commerce, accounting, and business management.',
      downloadUrl: '/downloads/commerce-certificate.pdf'
    },
    feesUrl: '/downloads/commerce-fees.pdf'
  },
  {
    id: 'humanities',
    name: 'School of Humanities',
    path: '/humanities',
    color: 'humanities',
    description: 'Exploring human culture, society, and expression',
    degree: {
      title: 'Bachelor of Arts in Humanities',
      description: 'A diverse program exploring literature, history, philosophy, and social sciences, developing critical thinking and cultural awareness.',
      downloadUrl: '/downloads/humanities-degree.pdf'
    },
    higherCertificate: {
      title: 'Higher Certificate in Humanities',
      description: 'An introductory program providing foundational knowledge in humanities subjects and developing analytical skills.',
      downloadUrl: '/downloads/humanities-certificate.pdf'
    },
    feesUrl: '/downloads/humanities-fees.pdf'
  }
];

export const getFacultyById = (id) => {
  return faculties.find(faculty => faculty.id === id);
};

