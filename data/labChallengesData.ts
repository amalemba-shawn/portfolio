import { LabChallenge } from '../types';

export const labChallengesData: LabChallenge[] = [
  {
    id: "lc1",
    title: "Memory Forensics - Malicious Process Detection",
    problemStatement: "Analyze a provided memory dump from a compromised Windows machine to identify signs of a rootkit or hidden malicious process, and determine its capabilities and persistence mechanisms.",
    approach: `
      1.  **Initial Overview:** Used Volatility Framework's \`imageinfo\` and \`pslist\` to get basic system information and running processes.
      2.  **Hidden Process Detection:** Employed \`psscan\`, \`pstree\`, and \`dlldump\` to look for discrepancies and identify hidden processes or injected DLLs.
      3.  **Malware Analysis in Memory:** Utilized \`malfind\` and \`hollowfind\` to detect code injection and unusual memory regions. Examined suspicious network connections with \`netscan\`.
      4.  **Registry & Service Analysis:** Investigated potential persistence using \`svcscan\` and registry hive analysis (e.g., \`hivelist\`, \`printkey\`) for suspicious startup entries.
      5.  **Reporting:** Correlated all findings to provide a comprehensive analysis of the malicious activity and persistence.
    `,
    toolsUsed: ["Volatility Framework", "Mandiant Redline", "Autopsy (for initial triage)"],
    screenshots: [
      "https://picsum.photos/800/600?random=5", // Placeholder for Volatility output
      "https://picsum.photos/800/600?random=6", // Placeholder for Redline output
    ],
    lessonsLearned: [
      "Memory analysis is critical for detecting stealthy threats that may evade disk-based scans.",
      "Understanding various Volatility plugins and their outputs is key to effective analysis.",
      "Correlating different memory artifacts provides a more complete picture of the compromise.",
      "Malware often employs techniques like process hollowing and DLL injection, which are visible in memory.",
    ],
  },
  {
    id: "lc2",
    title: "Disk Forensics - Recovering Deleted Data and Timeline Reconstruction",
    problemStatement: "Given a raw disk image, recover deleted files, identify artifacts of data exfiltration, and reconstruct a timeline of user activity leading up to the incident.",
    approach: `
      1.  **Disk Acquisition & Hashing:** Used FTK Imager to acquire the raw disk image and generate cryptographic hashes (MD5, SHA1) to ensure integrity.
      2.  **Keyword Search & File Carving:** Loaded the image into Autopsy and EnCase (trial version) for comprehensive keyword searches. Employed file carving techniques to recover files from unallocated space.
      3.  **Artifact Analysis:** Examined browser history, download directories, recycle bin, and LNK files for evidence of data exfiltration. Focused on MFT entries and journal files for file system changes.
      4.  **Timeline Reconstruction:** Used tools like Sleuth Kit's \`mactime\` on extracted filesystem metadata, complemented by analysis of Windows Prefetch files and event logs, to create a chronological sequence of events.
      5.  **Reporting:** Documented all recovered artifacts, exfiltration evidence, and the reconstructed timeline.
    `,
    toolsUsed: ["FTK Imager", "Autopsy", "EnCase (Trial)", "Sleuth Kit", "OSForensics (Trial)", "Browser History Examiner"],
    screenshots: [
      "https://picsum.photos/800/600?random=7", // Placeholder for Autopsy/EnCase view
      "https://picsum.photos/800/600?random=8", // Placeholder for recovered files
    ],
    lessonsLearned: [
      "Deleted files are often recoverable and can contain crucial evidence.",
      "Understanding file system structures (NTFS, FAT32) is fundamental for effective disk forensics.",
      "Combining automated tools with manual artifact analysis provides deeper insights.",
      "Timeline reconstruction is essential for understanding the sequence and scope of an incident.",
      "The importance of maintaining a strict chain of custody for all digital evidence.",
    ],
  },
  {
    id: "lc3",
    title: "Network Forensics - Incident Reconstruction from PCAP",
    problemStatement: "Analyze a provided PCAP (Packet Capture) file containing network traffic from a simulated security incident to identify the attack vector, compromised systems, data exfiltrated, and reconstruct the sequence of events.",
    approach: `
      1.  **Initial Traffic Overview:** Used Wireshark to inspect the PCAP, focusing on protocol hierarchy, conversations, and suspicious traffic patterns (e.g., high volume to unusual ports).
      2.  **Attack Vector Identification:** Filtered for common attack protocols (e.g., RDP, SMB, HTTP POST requests) and identified initial compromise activities like brute-force attempts or exploit delivery.
      3.  **Compromised Systems & Lateral Movement:** Tracked suspicious IP addresses and communication patterns to identify compromised internal systems and any lateral movement within the network.
      4.  **Data Exfiltration Analysis:** Filtered for traffic to external IPs, looking for large data transfers, file uploads (FTP, HTTP POST), or suspicious DNS queries that might indicate C2 communication.
      5.  **Payload Extraction:** Used Wireshark's "Follow TCP Stream" and NetworkMiner to extract potentially malicious files or command-and-control traffic.
      6.  **Timeline Reconstruction:** Correlated events based on timestamps in the PCAP to reconstruct the complete attack narrative.
    `,
    toolsUsed: ["Wireshark", "NetworkMiner", "tshark", "tcpdump", "CapLoader (for large PCAPs)"],
    screenshots: [
      "https://picsum.photos/800/600?random=9", // Placeholder for Wireshark screenshot
      "https://picsum.photos/800/600?random=10", // Placeholder for NetworkMiner output
    ],
    lessonsLearned: [
      "Network logs are invaluable for understanding how an attack unfolds.",
      "Effective use of display and capture filters in Wireshark is crucial for efficient analysis.",
      "Identifying common attack patterns in network traffic helps pinpoint malicious activity.",
      "Protocol analysis allows for deep understanding of data exchange during an incident.",
      "Extracting files and reconstructing streams from PCAPs can reveal malicious payloads and communications.",
    ],
  },
];