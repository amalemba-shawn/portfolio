import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Automated Forensic Triage Script",
    description: "Developed a Python script to automate initial forensic triage steps on Windows systems. The script efficiently collects volatile data (e.g., running processes, network connections), system logs, and user activity artifacts. This significantly reduces initial response time in incident handling scenarios.",
    imageUrl: "https://picsum.photos/600/400?random=1",
    technologies: ["Python", "PowerShell", "WMI", "JSON", "Batch Scripting"],
    githubUrl: "https://github.com/janedoe/forensic-triage-script",
    liveDemoUrl: "#", // Placeholder for conceptual or internal project
  },
  {
    id: "2",
    title: "Memory Forensics Framework Extension",
    description: "Extended the Volatility Framework with custom Python plugins to analyze specific malware persistence mechanisms in Windows memory dumps. The plugins were instrumental in identifying hidden processes, injected code, and obscured rootkit components that evaded standard detection methods.",
    imageUrl: "https://picsum.photos/600/400?random=2",
    technologies: ["Python", "Volatility Framework", "Windows API", "Assembly (basic)"],
    githubUrl: "https://github.com/janedoe/volatility-malware-plugins",
    liveDemoUrl: "#", // Placeholder for conceptual or internal project
  },
  {
    id: "3",
    title: "Secure Digital Evidence Locker (Conceptual)",
    description: "Designed a conceptual blockchain-based system for ensuring the integrity and maintaining a verifiable chain of custody for digital evidence. This project aimed to enhance non-repudiation from the point of acquisition through analysis and presentation in court, leveraging cryptographic hashing and distributed ledger technology.",
    imageUrl: "https://picsum.photos/600/400?random=3",
    technologies: ["Blockchain (Conceptual)", "IPFS (Conceptual)", "Cryptography Principles", "System Design"],
    githubUrl: "https://github.com/janedoe/blockchain-evidence-locker",
    liveDemoUrl: "#", // Placeholder for conceptual or internal project
  },
  {
    id: "4",
    title: "Network Intrusion Detection & Analysis Simulation",
    description: "Configured and monitored a simulated network environment to capture live traffic, identify intrusion attempts using custom Suricata/Snort rules, and perform detailed packet analysis with Wireshark. The simulation allowed for the reconstruction of attack timelines and identification of compromised assets during a simulated breach.",
    imageUrl: "https://picsum.photos/600/400?random=4",
    technologies: ["Wireshark", "Suricata", "Snort", "tcpdump", "ELK Stack (Elasticsearch, Logstash, Kibana)", "Virtual Machines"],
    githubUrl: "https://github.com/janedoe/network-forensics-lab",
    liveDemoUrl: "#", // Placeholder for conceptual or internal project
  },
];