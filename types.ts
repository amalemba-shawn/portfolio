export interface ResumeData {
  name: string;
  tagline: string;
  photoUrl: string;
  professionalStatement: string;
  education: EducationEntry[];
  experience: ExperienceEntry[];
  certifications: CertificationEntry[];
  skills: {
    forensicTools: string[];
    operatingSystems: string[];
    scriptingProgramming: string[];
    forensicTechniques: string[];
    incidentResponse: string[];
    standardsCompliance: string[];
    virtualization: string[];
    databases: string[];
  };
}

export interface EducationEntry {
  degree: string;
  institution: string;
  duration: string;
  details?: string[];
}

export interface ExperienceEntry {
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

export interface CertificationEntry {
  name: string;
  issuer: string;
  date: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
}

export interface LabChallenge {
  id: string;
  title: string;
  problemStatement: string;
  approach: string;
  toolsUsed: string[];
  screenshots: string[]; // URLs for screenshots
  lessonsLearned: string[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}