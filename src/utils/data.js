export const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export const aboutSummary =
  'I am Om Raj, a Computer Science Engineering student focused on building reliable software and scalable delivery pipelines. My toolkit spans C, Python, Java, MERN development, CI/CD automation, and data analysis for practical decision-making.';

export const categorizedSkills = [
  {
    category: 'Programming',
    items: [
      { name: 'C', level: 85 },
      { name: 'Python', level: 90 },
      { name: 'Java', level: 82 },
    ],
  },
  {
    category: 'Technologies',
    items: [
      { name: 'MERN', level: 88 },
      { name: 'MySQL', level: 84 },
      { name: 'MongoDB', level: 86 },
      { name: 'Git', level: 89 },
    ],
  },
  {
    category: 'Concepts',
    items: [
      { name: 'DSA', level: 83 },
      { name: 'OS', level: 80 },
      { name: 'DBMS', level: 86 },
      { name: 'CN', level: 78 },
      { name: 'CI/CD', level: 88 },
    ],
  },
];

export const projects = [
  {
    title: 'Student Course Management System',
    description:
      'Managed 500+ records with robust CRUD flows and optimized queries that improved data retrieval speed by 30%.',
    tech: ['React', 'Node.js', 'Express', 'MySQL'],
    github: 'https://github.com/om-raj/student-course-management',
  },
  {
    title: 'Internship Management System',
    description:
      'Designed role-based workflows for Admin, Mentor, and Student users and automated key hand-offs to reduce manual work by 40%.',
    tech: ['MERN', 'JWT Auth', 'REST API'],
    github: 'https://github.com/om-raj/internship-management-system',
  },
  {
    title: 'BDD Testing Project',
    description:
      'Automated website scenarios with behavior-driven tests, increasing test coverage by 35% and reducing testing time by 25%.',
    tech: ['Java', 'Selenium', 'Cucumber', 'TestNG'],
    github: 'https://github.com/om-raj/bdd-testing-project',
  },
];

export const experience = {
  role: 'Virtual Internship – British Airways',
  points: [
    'Performed data analysis using Python for practical business scenarios.',
    'Executed data cleaning and visualization workflows to improve data quality.',
    'Extracted and presented insights from datasets to support decision-making.',
  ],
};

export const education = [
  {
    program: 'B.Tech CSE',
    school: 'KL University',
    score: 'CGPA: 8.9',
  },
  {
    program: 'Diploma CSE',
    school: 'Galgotias University',
    score: 'CGPA: 8.4',
  },
];

export const leadership = {
  title: 'Social Media Team Lead – Startup Society',
  points: ['Managed content strategy and team coordination.', 'Improved audience engagement through consistent campaigns.'],
};

export const certifications = ['Full Stack Development – Wipro Talent Next', 'Software Programmer – PMKVY'];

export const contactLinks = [
  { label: 'GitHub', href: 'https://github.com/om-raj' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/om-raj' },
  { label: 'LeetCode', href: 'https://leetcode.com/om-raj' },
];
