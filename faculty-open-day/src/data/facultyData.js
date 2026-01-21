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
      downloadUrl: '/downloads/education-degree.pdf',
      modules: [
        { code: 'EDU101', name: 'Introduction to Education', credits: 15, semester: 1 },
        { code: 'PSY102', name: 'Educational Psychology', credits: 15, semester: 1 },
        { code: 'CUR103', name: 'Curriculum Development', credits: 15, semester: 1 },
        { code: 'LIT104', name: 'Literacy and Numeracy', credits: 15, semester: 1 },
        { code: 'EDU201', name: 'Teaching Methods', credits: 15, semester: 2 },
        { code: 'ASS202', name: 'Assessment and Evaluation', credits: 15, semester: 2 },
        { code: 'INC203', name: 'Inclusive Education', credits: 15, semester: 2 },
        { code: 'PRA204', name: 'Teaching Practice I', credits: 15, semester: 2 },
      ]
    },
    higherCertificate: {
      title: 'Higher Certificate in Education',
      description: 'An entry-level qualification for those beginning their journey in education, providing foundational knowledge and skills.',
      downloadUrl: '/downloads/education-certificate.pdf',
      modules: [
        { code: 'FED101', name: 'Foundations of Education', credits: 12, semester: 1 },
        { code: 'COM102', name: 'Communication Skills', credits: 12, semester: 1 },
        { code: 'CHD103', name: 'Child Development', credits: 12, semester: 1 },
        { code: 'LRN104', name: 'Learning Theories', credits: 12, semester: 1 },
        { code: 'CLS201', name: 'Classroom Management', credits: 12, semester: 2 },
        { code: 'EDM202', name: 'Educational Media', credits: 12, semester: 2 },
      ]
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
      downloadUrl: '/downloads/law-degree.pdf',
      modules: [
        { code: 'LAW101', name: 'Introduction to Law', credits: 15, semester: 1 },
        { code: 'CON102', name: 'Constitutional Law', credits: 15, semester: 1 },
        { code: 'CRI103', name: 'Criminal Law', credits: 15, semester: 1 },
        { code: 'LRW104', name: 'Legal Research & Writing', credits: 15, semester: 1 },
        { code: 'CON201', name: 'Contract Law', credits: 15, semester: 2 },
        { code: 'TOR202', name: 'Law of Delict/Tort', credits: 15, semester: 2 },
        { code: 'ADM203', name: 'Administrative Law', credits: 15, semester: 2 },
        { code: 'ETH204', name: 'Legal Ethics', credits: 15, semester: 2 },
      ]
    },
    higherCertificate: {
      title: 'Higher Certificate in Law',
      description: 'An introductory qualification providing foundational legal knowledge and skills for those entering the legal field.',
      downloadUrl: '/downloads/law-certificate.pdf',
      modules: [
        { code: 'FLW101', name: 'Foundations of Law', credits: 12, semester: 1 },
        { code: 'LSY102', name: 'Legal Systems', credits: 12, semester: 1 },
        { code: 'BLW103', name: 'Basic Legal Writing', credits: 12, semester: 1 },
        { code: 'CRJ104', name: 'Criminal Justice', credits: 12, semester: 1 },
        { code: 'HRL201', name: 'Human Rights Law', credits: 12, semester: 2 },
        { code: 'LPA202', name: 'Legal Practice & Administration', credits: 12, semester: 2 },
      ]
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
      downloadUrl: '/downloads/commerce-degree.pdf',
      modules: [
        { code: 'ACC101', name: 'Financial Accounting', credits: 15, semester: 1 },
        { code: 'ECO102', name: 'Microeconomics', credits: 15, semester: 1 },
        { code: 'BUS103', name: 'Business Management', credits: 15, semester: 1 },
        { code: 'STA104', name: 'Business Statistics', credits: 15, semester: 1 },
        { code: 'ACC201', name: 'Management Accounting', credits: 15, semester: 2 },
        { code: 'ECO202', name: 'Macroeconomics', credits: 15, semester: 2 },
        { code: 'MKT203', name: 'Marketing Principles', credits: 15, semester: 2 },
        { code: 'FIN204', name: 'Financial Management', credits: 15, semester: 2 },
      ]
    },
    higherCertificate: {
      title: 'Higher Certificate in Commerce',
      description: 'A foundational business qualification providing essential skills in commerce, accounting, and business management.',
      downloadUrl: '/downloads/commerce-certificate.pdf',
      modules: [
        { code: 'BAC101', name: 'Basic Accounting', credits: 12, semester: 1 },
        { code: 'BEC102', name: 'Business Economics', credits: 12, semester: 1 },
        { code: 'COM103', name: 'Business Communication', credits: 12, semester: 1 },
        { code: 'MAT104', name: 'Business Mathematics', credits: 12, semester: 1 },
        { code: 'OFM201', name: 'Office Management', credits: 12, semester: 2 },
        { code: 'ENT202', name: 'Entrepreneurship', credits: 12, semester: 2 },
      ]
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
      downloadUrl: '/downloads/humanities-degree.pdf',
      modules: [
        { code: 'ENG101', name: 'English Literature', credits: 15, semester: 1 },
        { code: 'HIS102', name: 'World History', credits: 15, semester: 1 },
        { code: 'PHI103', name: 'Introduction to Philosophy', credits: 15, semester: 1 },
        { code: 'SOC104', name: 'Sociology', credits: 15, semester: 1 },
        { code: 'LIT201', name: 'Literary Analysis', credits: 15, semester: 2 },
        { code: 'CUL202', name: 'Cultural Studies', credits: 15, semester: 2 },
        { code: 'PSY203', name: 'Psychology', credits: 15, semester: 2 },
        { code: 'ART204', name: 'Art History', credits: 15, semester: 2 },
      ]
    },
    higherCertificate: {
      title: 'Higher Certificate in Humanities',
      description: 'An introductory program providing foundational knowledge in humanities subjects and developing analytical skills.',
      downloadUrl: '/downloads/humanities-certificate.pdf',
      modules: [
        { code: 'FEN101', name: 'Foundations of English', credits: 12, semester: 1 },
        { code: 'HUM102', name: 'Introduction to Humanities', credits: 12, semester: 1 },
        { code: 'CRT103', name: 'Critical Thinking', credits: 12, semester: 1 },
        { code: 'WRT104', name: 'Academic Writing', credits: 12, semester: 1 },
        { code: 'MED201', name: 'Media Studies', credits: 12, semester: 2 },
        { code: 'COM202', name: 'Communication & Culture', credits: 12, semester: 2 },
      ]
    },
    feesUrl: '/downloads/humanities-fees.pdf'
  }
];

export const getFacultyById = (id) => {
  return faculties.find(faculty => faculty.id === id);
};

