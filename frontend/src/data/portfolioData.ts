export type Project = {
  title: string
  description: string
  tags: string[]
  liveDemo: string
  sourceCode: string
  featured?: boolean
}

export type Certification = {
  title: string
  issuer: string
  // Use ISO date format (YYYY-MM-DD) for correct reverse-date sorting.
  issuedOn: string
  credentialId?: string
  credentialUrl: string
}

export type SkillItem = {
  name: string
  category:
    | 'Programming Languages'
    | 'Frontend'
    | 'Backend'
    | 'Databases'
    | 'Tools/Platforms'
  level: number
}

export const profile = {
  brandName: 'VK Portfolio',
  name: 'Vaibhav Kumar',
  role: 'Full Stack Developer',
  intro:
    'Welcome to my digital portfolio! I build scalable and user-focused web applications using modern technologies and clean design.',
  location: 'Bihar, India',
  education: 'Pursuing B.Tech in Computer Science',
  experience: 'X+ Years',
  journey:
    'I’m a passionate developer focused on building polished and user-friendly web experiences. I enjoy transforming ideas into reliable products while continuously learning and improving my skills.',
  approach:
    'I believe great technology should be practical and human-centered. I focus on clean architecture, thoughtful user experience, and writing scalable, maintainable code.',
  hobbies: ['Exploring new tech', 'Music', 'Learning new tools'],
  skills: ['C++ (Major)', 'Java', 'Python', 'C', 'JavaScript', 'PHP', 'HTML', 'CSS'],
  achievements: [
    'Solved 300+ coding problems across platforms.',
    'Built and deployed multiple full-stack projects.',
    'Actively learning system design and cloud services.',
  ],
  resumeUrl: 'https://example.com/your-resume.pdf',
  contact: {
    email: 'vaibjais123456@gmail.com',
    phone: '+91-8873465131',
    linkedin: 'https://www.linkedin.com/in/vaibhavkumar-/',
    github: 'https://github.com/VaibhavKumar22',
  },
}

export const projects: Project[] = [
  {
    title: 'Project One',
    description:
      'Briefly describe what this project does, what problem it solves, and who it is for.',
    tags: ['Full Stack', 'React', 'Node.js'],
    liveDemo: 'https://example.com',
    sourceCode: 'https://github.com/your-github/project-one',
    featured: true,
  },
  {
    title: 'Project Two',
    description:
      'Briefly describe this project and highlight one or two technical details that stand out.',
    tags: ['Frontend', 'API Integration', 'Tailwind CSS'],
    liveDemo: 'https://example.com',
    sourceCode: 'https://github.com/your-github/project-two',
  },
  {
    title: 'Project Three',
    description:
      'Briefly explain what users can do in this app and why this project matters.',
    tags: ['Web App', 'MongoDB', 'Express'],
    liveDemo: 'https://example.com',
    sourceCode: 'https://github.com/your-github/project-three',
    featured: true,
  },
]

export const certifications: Certification[] = [
  {
    title: 'Privacy and Security in Online Social Media',
    issuer: 'NPTEL',
    issuedOn: '2026-03-13',
    credentialUrl:
      'https://drive.google.com/file/d/1FSUx7mxcP4GMxYFVkBGNYAOJkEdEWByZ/view?usp=sharing',
  },
  {
    title: 'PEP VAIBHAV',
    issuer: 'PEP',
    issuedOn: '2026-03-12',
    credentialUrl:
      'https://drive.google.com/file/d/1UTlujLhM7VR9EopnrLSbLj4BWKPK5fY4/view?usp=sharing',
  },
  {
    title: 'Communication in the 21st Century Workplace',
    issuer: 'Coursera',
    issuedOn: '2026-03-11',
    credentialUrl:
      'https://drive.google.com/file/d/1b0pQOtdQTUJ2ZpBY3A42Xlim1fKuvgGH/view?usp=sharing',
  },
  {
    title: 'Full Stack Web Development with Laravel',
    issuer: 'Coursera',
    issuedOn: '2026-03-10',
    credentialUrl:
      'https://drive.google.com/file/d/1z624GR7L8yEVyYccbTiQdGBKmsUFIUIH/view?usp=sharing',
  },
  {
    title: 'TCP/IP and Advanced Topics',
    issuer: 'Coursera',
    issuedOn: '2026-03-09',
    credentialUrl:
      'https://drive.google.com/file/d/1kB7sQ8x1n0IP0_QnuIYRpTefNuuwmRyA/view?usp=sharing',
  },
  {
    title: 'Introduction to Hardware and Operating Systems',
    issuer: 'Coursera',
    issuedOn: '2026-03-08',
    credentialUrl:
      'https://drive.google.com/file/d/1mnjaY7LXaRGHq0MzDAS_P5ueS-aEOn0s/view?usp=sharing',
  },
  {
    title: 'Packet Switching Networks and Algorithms',
    issuer: 'Coursera',
    issuedOn: '2026-03-07',
    credentialUrl:
      'https://drive.google.com/file/d/1hyN9MNFLemlG-vbi_kysN2aRDMJndpop/view?usp=sharing',
  },
  {
    title: 'Fundamentals of Network Communication',
    issuer: 'Coursera',
    issuedOn: '2026-03-06',
    credentialUrl:
      'https://drive.google.com/file/d/1OgEfiLNd57LIuTNvxw-XFzHIfRkv4HeW/view?usp=sharing',
  },
  {
    title: 'The Bits and Bytes of Computer Networking',
    issuer: 'Google / Coursera',
    issuedOn: '2026-03-05',
    credentialUrl:
      'https://drive.google.com/file/d/1MtmB4p8e0K40fIlSdXxaZ6O9ZcnMe_CN/view?usp=sharing',
  },
  {
    title: 'C++',
    issuer: 'Skill Up',
    issuedOn: '2026-03-04',
    credentialUrl:
      'https://drive.google.com/file/d/1AZtAKBe4EbaPpd5R1P5kimYjdB3MNlig/view?usp=sharing',
  },
  {
    title: 'Full Stack Web Development - Skill Up4',
    issuer: 'Skill Up4',
    issuedOn: '2026-03-03',
    credentialUrl:
      'https://drive.google.com/file/d/1HJepO7Dcged7nwDbPfvCgoTv8PCetizO/view?usp=sharing',
  },
  {
    title: "MongoDB Developer's Toolkit CRUD Mastery with Node.js Java Python C#",
    issuer: 'Udemy',
    issuedOn: '2026-03-02',
    credentialUrl:
      'https://drive.google.com/file/d/1ihpDtRr9TrBfY5uXb7Ua388hHQqBhVui/view?usp=sharing',
  },
  {
    title: 'Python',
    issuer: 'Skill Up',
    issuedOn: '2026-03-01',
    credentialUrl:
      'https://drive.google.com/file/d/1ATW-QfodqWMOowAKEBN4OdMm5md8VF_p/view?usp=sharing',
  },
  {
    title: 'Problem Solving Basic - HackerRank',
    issuer: 'HackerRank',
    issuedOn: '2026-02-28',
    credentialUrl:
      'https://drive.google.com/file/d/1xFFtzTj20Oj3BnUza6x_NyE56hvBnaYf/view?usp=sharing',
  },
  {
    title: 'Problem Solving Intermediate - HackerRank',
    issuer: 'HackerRank',
    issuedOn: '2026-02-27',
    credentialUrl:
      'https://drive.google.com/file/d/1qH98Ruso54L69P5I2SM56o6PCDElU9f7/view?usp=sharing',
  },
  {
    title: 'SQL (Basic) - HackerRank',
    issuer: 'HackerRank',
    issuedOn: '2026-02-26',
    credentialUrl:
      'https://drive.google.com/file/d/17qXVrP8S_mitTQEeRqwy6CRTZdWLfV7Q/view?usp=sharing',
  },
  {
    title: 'SQL (Intermediate) - HackerRank',
    issuer: 'HackerRank',
    issuedOn: '2026-02-25',
    credentialUrl:
      'https://drive.google.com/file/d/1LcqPmuK1Zi5aW2CdHBwT19rDwD1CrIy-/view?usp=sharing',
  },
  {
    title: 'Build Generative AI Apps and Solutions with No-Code Tools',
    issuer: 'Coursera',
    issuedOn: '2026-02-24',
    credentialUrl:
      'https://drive.google.com/file/d/1436fsai3p_a4h7L1UGL-WZjVr-GBI7Zw/view?usp=sharing',
  },
  {
    title: 'Master Generative AI and Generative AI Tools (ChatGPT and more)',
    issuer: 'Udemy',
    issuedOn: '2026-02-23',
    credentialUrl:
      'https://drive.google.com/file/d/1j4GiGCSTC-A5J9j49meVlI-5P7J49qB6/view?usp=sharing',
  },
  {
    title: 'ChatGPT-4 Prompt Engineering, Generative AI and LLM',
    issuer: 'Wingspan',
    issuedOn: '2026-02-22',
    credentialUrl:
      'https://drive.google.com/file/d/1w4pAf97YoRKTlYuqabe4AXiPJQgpgrdo/view?usp=sharing',
  },
  {
    title: 'Computational Theory Language Principle and Finite Automata Theory',
    issuer: 'NPTEL',
    issuedOn: '2026-02-21',
    credentialUrl:
      'https://drive.google.com/file/d/1LUtsBkEf6Sf2IhvByrxDGHZeORmPhezk/view?usp=sharing',
  },
]

export const skillItems: SkillItem[] = [
  { name: 'C++ (Major)', category: 'Programming Languages', level: 90 },
  { name: 'Java', category: 'Programming Languages', level: 82 },
  { name: 'Python', category: 'Programming Languages', level: 80 },
  { name: 'C', category: 'Programming Languages', level: 78 },
  { name: 'JavaScript', category: 'Programming Languages', level: 84 },
  { name: 'PHP', category: 'Programming Languages', level: 75 },
  { name: 'HTML', category: 'Programming Languages', level: 92 },
  { name: 'CSS', category: 'Programming Languages', level: 90 },
  { name: 'React.js', category: 'Frontend', level: 88 },
  { name: 'Tailwind CSS', category: 'Frontend', level: 86 },
  { name: 'Bootstrap', category: 'Frontend', level: 84 },
  { name: 'Node.js', category: 'Backend', level: 83 },
  { name: 'Express.js', category: 'Backend', level: 80 },
  { name: 'REST API Integration', category: 'Backend', level: 85 },
  { name: 'Authentication', category: 'Backend', level: 82 },
  { name: 'RBAC', category: 'Backend', level: 78 },
  { name: 'PHP (Backend)', category: 'Backend', level: 75 },
  { name: 'MySQL', category: 'Databases', level: 82 },
  { name: 'MongoDB', category: 'Databases', level: 84 },
  { name: 'PostgreSQL', category: 'Databases', level: 79 },
  { name: 'Git', category: 'Tools/Platforms', level: 88 },
  { name: 'GitHub', category: 'Tools/Platforms', level: 88 },
  { name: 'XAMPP', category: 'Tools/Platforms', level: 74 },
  { name: 'Cloudinary', category: 'Tools/Platforms', level: 80 },
  { name: 'Vercel', category: 'Tools/Platforms', level: 86 },
  { name: 'Netlify', category: 'Tools/Platforms', level: 84 },
  { name: 'VS Code', category: 'Tools/Platforms', level: 92 },
  { name: 'Postman', category: 'Tools/Platforms', level: 87 },
]
