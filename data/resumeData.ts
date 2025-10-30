import { ResumeData } from '../types';

export const resumeData: ResumeData = {
  name: "Shawn Amalemba",
  tagline: "Computer Forensics Analyst | Malware analysis | Data Recovery ",
  photoUrl: "1.png",
  professionalStatement: `A dedicated and highly skilled Computer Forensics Analyst with proven expertise in digital forensic investigations, evidence preservation, incident response, and malware analysis. Proficient in utilizing industry-standard tools and techniques to uncover digital evidence, reconstruct events, and prepare comprehensive reports for legal and organizational needs. Committed to upholding strict ethical and legal standards in all forensic activities.`,
  education: [
    {
      degree: "Master of Science in Cybersecurity & Digital Forensics",
      institution: "University of Technology",
      duration: "2018 - 2020",
      details: ["Specialization in Advanced Digital Forensics", "Thesis: 'Advanced Memory Forensics Techniques for APT Detection'"]
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "State Engineering College",
      duration: "2014 - 2018",
      details: ["Graduated with Honors", "Focus on Network Security and Operating Systems"]
    },
  ],
  experience: [
    {
      title: "Senior Forensics Analyst",
      company: "CyberSecure Solutions Inc.",
      duration: "Jan 2022 - Present",
      responsibilities: [
        "Led complex digital forensic investigations for data breaches, insider threats, and intellectual property theft.",
        "Developed and implemented standardized forensic procedures and protocols, improving efficiency by 25%.",
        "Mentored junior analysts in evidence acquisition, analysis, and reporting.",
        "Specialized in advanced persistent threat (APT) analysis and large-scale incident response engagements.",
        "Prepared and presented expert witness testimony and detailed forensic reports for legal proceedings."
      ],
    },
    {
      title: "Digital Forensics Investigator",
      company: "SecureTrace Forensics",
      duration: "Jul 2020 - Dec 2021",
      responsibilities: [
        "Performed forensic acquisitions of hard drives, mobile devices, and cloud data while maintaining chain of custody.",
        "Conducted in-depth analysis to recover deleted files, identify hidden partitions, and reconstruct user activity.",
        "Performed malware analysis to understand functionality, indicators of compromise (IOCs), and attack vectors.",
        "Collaborated with legal teams to ensure evidence admissibility and adherence to legal standards.",
        "Utilized forensic tools such as EnCase, FTK Imager, Autopsy, and Volatility for case examinations.",
      ],
    },
  ],
  certifications: [
    {
      name: "GIAC Certified Forensic Examiner (GCFE)",
      issuer: "GIAC Certifications",
      date: "Aug 2023",
    },
    {
      name: "EnCase Certified Examiner (EnCE)",
      issuer: "OpenText Cybersecurity",
      date: "Mar 2022",
    },
    {
      name: "CompTIA CySA+",
      issuer: "CompTIA",
      date: "Nov 2021",
    },
  ],
  skills: {
    forensicTools: ["EnCase", "FTK Imager", "Autopsy", "Volatility Framework", "Wireshark", "Splunk", "Sleuth Kit", "X-Ways Forensics", "Cellebrite", "Magnet AXIOM", "OSQuery", "Mandiant Redline"],
    operatingSystems: ["Windows (Client/Server)", "Linux (Ubuntu, Kali, CentOS)", "macOS", "Android", "iOS"],
    scriptingProgramming: ["Python (automation, data parsing)", "PowerShell", "Bash", "SQL"],
    forensicTechniques: ["Disk Forensics", "Memory Forensics", "Network Forensics", "Mobile Device Forensics", "Cloud Forensics", "Malware Analysis", "Data Recovery", "Timeline Reconstruction", "Registry Analysis", "Email Forensics", "Log Analysis"],
    incidentResponse: ["Threat Hunting", "SIEM Management", "SOAR Integration", "Containment", "Eradication", "Recovery", "Post-Incident Analysis"],
    standardsCompliance: ["Chain of Custody", "ISO 27001", "NIST SP 800-86", "GDPR", "HIPAA", "Expert Witness Testimony", "Legal Holds"],
    virtualization: ["VMware", "VirtualBox", "KVM"],
    databases: ["SQL (evidence extraction)", "NoSQL (basic analysis)"],
  },
};