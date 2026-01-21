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
        // Professional Subjects - Semester 1
        { code: 'INPCF110', name: 'Introduction to Personal Computing', credits: 5, semester: 1, nqf: 5, category: 'Professional Subjects' },
        { code: 'FAFR6121/FALX6121/FALZ6121/FALN6111', name: 'First Additional Languages: Afrikaans/IsiXhosa/IsiZulu/Northern Sotho', credits: 12, semester: 1, nqf: 6, category: 'Professional Subjects' },
        { code: 'ITSA5111', name: 'Introduction to Scholarship A', credits: 8, semester: 1, nqf: 5, category: 'Professional Subjects' },
        // Professional Themes - Semester 1
        { code: 'PSED5111', name: 'Psychology for Educators 1A', credits: 12, semester: 1, nqf: 5, category: 'Professional Themes' },
        { code: 'IPTL6111', name: 'IP Teaching and Learning', credits: 7, semester: 1, nqf: 6, category: 'Professional Themes' },
        // Professional Didactics I - Semester 1
        { code: 'TISS5111', name: 'TIP* Social Sciences 1', credits: 8, semester: 1, nqf: 5, category: 'Professional Didactics I' },
        { code: 'TIMA5111', name: 'TIP* Mathematics 1A', credits: 8, semester: 1, nqf: 5, category: 'Professional Didactics I' },

        // Professional Subjects - Semester 2
        { code: 'ENED6122', name: 'English for Education 1', credits: 12, semester: 2, nqf: 6, category: 'Professional Subjects' },
        { code: 'COLA5112/COLX5112/COLZ5112/COLN5112', name: 'Communicative Languages: Afrikaans/IsiXhosa/IsiZulu/Northern Sotho', credits: 12, semester: 2, nqf: 5, category: 'Professional Subjects' },
        { code: 'IEMS5111', name: 'Introduction to EMS', credits: 5, semester: 2, nqf: 5, category: 'Professional Subjects' },
        // Professional Themes - Semester 2
        { code: 'PSED5112', name: 'Psychology for Educators 1B', credits: 12, semester: 2, nqf: 5, category: 'Professional Themes' },
        // Professional Didactics I - Semester 2
        { code: 'TIPM6112', name: 'TIP* Mathematics 1B', credits: 8, semester: 2, nqf: 6, category: 'Professional Didactics I' },
        { code: 'TNST5112', name: 'TIP* Nat Sciences and Technology 1', credits: 8, semester: 2, nqf: 5, category: 'Professional Didactics I' },

        // Year Long
        { code: 'TEIP5119', name: 'Teaching Experience 1', credits: 6, semester: 0, nqf: 5, category: 'Year Long' },
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
    feesUrl: '/src/assets/fees.pdf'
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
    feesUrl: '/src/assets/fees.pdf'
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
      downloadUrl: '/src/assets/Commerce/iie-bachelor-of-commerce-full-time-fact-sheet-2026.pdf',
      modules: [
        { code: 'ACBP5121', name: 'Accounting 1A', credits: 15, semester: 1, nqf: 5 },
        { code: 'APCT5131', name: 'Applied Communication Techniques', credits: 15, semester: 1, nqf: 5 },
        { code: 'BMNG5121', name: 'Business Management 1A', credits: 15, semester: 1, nqf: 5 },
        { code: 'PMIC5111', name: 'Economics 1A', credits: 15, semester: 1, nqf: 5 },
        { code: 'ACBP5122', name: 'Accounting 1B', credits: 15, semester: 2, nqf: 5 },
        { code: 'BMNG5122', name: 'Business Management 1B', credits: 15, semester: 2, nqf: 5 },
        { code: 'PMAC5112', name: 'Economics 1B', credits: 15, semester: 2, nqf: 5 },
        { code: 'MAKT5112', name: 'Introduction to Marketing Theory and Practice', credits: 15, semester: 2, nqf: 5 },
      ]
    },
    higherCertificate: {
      title: 'Higher Certificate in Commerce',
      description: 'A foundational business qualification providing essential skills in commerce, accounting, and business management.',
      downloadUrl: '/src/assets/Commerce/iie-higher-certificate-in-business-principles-and-practice.pdf',
      modules: [
        { code: 'IQTT5111', name: 'Introduction to Quantitative Techniques and Techniques', credits: 15, semester: 1, nqf: 5 },
        { code: 'INAC5111', name: 'Introduction to Accounting 1A', credits: 15, semester: 1, nqf: 5 },
        { code: 'BMAD5121', name: 'Business Management & Administration A', credits: 15, semester: 1, nqf: 5 },
        { code: 'DIAL5111', name: 'Digital and Academic Literacies', credits: 15, semester: 1, nqf: 5 },
        { code: 'PRMA5122', name: 'Project Management and Administration', credits: 15, semester: 2, nqf: 5 },
        { code: 'ACSO5112', name: 'Accounting Software', credits: 15, semester: 2, nqf: 5 },
        { code: 'BMAD5112', name: 'Business Management & Administration B', credits: 15, semester: 2, nqf: 5 },
        { code: 'XBPP5129', name: 'Work Integrated Learning', credits: 15, semester: 2, nqf: 5 },
      ]
    },
    feesUrl: '/src/assets/fees.pdf'
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
    feesUrl: '/src/assets/fees.pdf'
  }
];

export const getFacultyById = (id) => {
  return faculties.find(faculty => faculty.id === id);
};

