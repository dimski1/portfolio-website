import type { IconType } from "react-icons";
import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiMysql,
  SiPandas,
  SiNumpy,
  SiSalesforce,
  SiJira,
  SiConfluence,
  SiTrello,
  SiNotion,
  SiGithub,
  SiGit,
  SiGoogle,
  SiGooglesheets,
  SiLooker,
  SiMiro,
} from "react-icons/si";

export const profile = {
  name: "Dimas Alif Rayhan",
  role: "Business Process & IT",
  tagline:
    "Turning manual operations into automated workflows through process design, low-code/no-code tooling, and data analytics.",
  location: "Jakarta, Indonesia",
  email: "dimasalif5@gmail.com",
  phone: "+62 857 1472 9854",
  linkedin: "https://linkedin.com/in/dimas-alif/",
  github: "https://github.com/dimski1",
  githubUsername: "dimski1",
  linkedinUsername: "dimas-alif",
};

export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  highlights: string[];
};

export const experiences: ExperienceItem[] = [
  {
    company: "Ocean Network Express",
    role: "Senior Associate — Business Process Management & IT",
    location: "Jakarta, Indonesia",
    period: "Oct 2024 — Present",
    current: true,
    highlights: [
      "Excelled in a 12-month graduate program by proposing and developing 7+ business process improvement projects across Sales, Finance, GA, Trade & Commercial, Operations, Customer Service, and Documentation — generating ~$1,600 in monthly cost savings, cutting up to 2.5 hours of manual work/day, and surfacing ~$37,500 in potential sales pipeline.",
      "Led end-to-end Low-Code/No-Code (LCNC) development — from pain-point discovery and process mapping to system design, UAT, and deployment. Notable launch: an HR Handover System (AppSheet) that automates task management during employee leave.",
      "Built SQL queries in BigQuery and analytics dashboards in Google Looker Studio for sales performance, customer service agent KPIs, and EDI performance.",
      "Designed and authored user guides, technical documentation, and SOPs for internal/external users on EDI integrations, custom AppSheet/AppScript tools, and customer service operations.",
      "Ran PONC (Price of Non-Conformance) analysis to eliminate operational error sources and led the company's Business Continuity Plan drill across all departments.",
    ],
  },
  {
    company: "Ministry of Health RI",
    role: "Personal Assistant & Translator",
    location: "Jakarta, Indonesia",
    period: "Nov 2023 — Oct 2024",
    highlights: [
      "Provided English–Indonesian language support; translated 40+ documents including briefing sheets, meeting minutes, and presentation slides — and interpreted live discussions with foreign high-level officials (UK government, ADB, IsDB, etc.).",
      "Optimised the Director General's calendar by prioritising 5–10 daily agendas and arranging cross-city travel logistics for 13+ national ministerial events.",
      "Managed the DG's inbox, drafted personalised responses, and coordinated document delivery to directorate leaders via WhatsApp and Gmail.",
    ],
  },
  {
    company: "DANA Indonesia",
    role: "Project Management Intern",
    location: "Jakarta, Indonesia",
    period: "Oct 2022 — Oct 2023",
    highlights: [
      "Led daily stand-ups and sprint reviews for multiple data projects, including Data Migration, Warehouse Remodelling, and the Credit Scoring Engine.",
      "Co-developed project management artefacts with the lead PM — Work Breakdown Structure, Communication Plan, and Gantt-based project timelines.",
      "Managed the team's JIRA board through card and epic creation plus task tracking automation.",
    ],
  },
  {
    company: "Kyou Hobby Shop",
    role: "Product Marketing & Copywriter (Part-Time)",
    location: "Remote",
    period: "Jul 2024 — Jun 2025",
    highlights: [
      "Drafted ad copy and executed campaigns across Meta Ads and Google Ads for 12 monthly campaigns, focused on high-conversion ACG product categories.",
      "Synthesised market trend reports on Japanese anime industry developments and IP popularity to back evidence-based procurement recommendations.",
      "Maintained the digital asset infrastructure on Dropbox, ensuring 100% availability of marketing materials across promotional cycles.",
    ],
  },
];

export type SkillCategory = {
  title: string;
  items: { name: string; icon?: IconType }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Automation & Process",
    items: [
      { name: "Google AppScript", icon: SiGoogle },
      { name: "AppSheet", icon: SiGooglesheets },
      { name: "Excel Macro" },
      { name: "Process Automation" },
      { name: "Business Analysis" },
      { name: "Agile / Scrum" },
      { name: "Waterfall PM" },
      { name: "Low-Code / No-Code" },
    ],
  },
  {
    title: "Data & Analytics",
    items: [
      { name: "SQL", icon: SiMysql },
      { name: "BigQuery" },
      { name: "Looker Studio", icon: SiLooker },
      { name: "Python", icon: SiPython },
      { name: "pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
      { name: "Matplotlib" },
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      { name: "Salesforce", icon: SiSalesforce },
      { name: "SAP" },
      { name: "JIRA", icon: SiJira },
      { name: "Confluence", icon: SiConfluence },
      { name: "Trello", icon: SiTrello },
      { name: "Notion", icon: SiNotion },
      { name: "Miro", icon: SiMiro },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML", icon: SiHtml5 },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
    ],
  },
];

export type Project = {
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  repo: string;
  award?: string;
  category: string;
};

export const projects: Project[] = [
  {
    title: "Email Sending Workflow Automation",
    tagline: "Data-driven email notifications triggered by Google Sheet edits",
    description:
      "A Google Apps Script solution that sends automated, templated email notifications based on user selections in a Google Sheet — wiring up dependent dropdowns, configurable templates, and Drive attachments through a centralized CONFIG object.",
    highlights: [
      "3-level dependent dropdowns (Region → Country → Branch) with dynamic data validation",
      "Centralized CONFIG object so column mappings, recipients, and templates are tweakable in one place",
      "Automatic email triggering on data changes with HTML-table email bodies",
      "Optional Google Drive attachments and a custom Sheets menu for one-click setup",
    ],
    tech: ["Google AppScript", "JavaScript", "Google Sheets", "Gmail API", "Google Drive"],
    repo: "https://github.com/dimski1/email_sending_workflow_automation",
    category: "Automation · Google Workspace",
  },
  {
    title: "Sheets Email Automation",
    tagline: "Bulk and ad-hoc reminder emails for missing documents",
    description:
      "An Apps Script tool that drives two distinct email workflows directly from Google Sheets: bulk campaigns to recipient lists and individual task-based reminders triggered by dropdowns — with HTML email templates and automatic status tracking.",
    highlights: [
      "Dual workflow — Bulk Tasks for campaigns and Ad-Hoc Tasks for single-trigger reminders",
      "HTML email template with dynamic placeholders and conditional formatting for visual status",
      "Automatic status + timestamp tracking written back to the sheet on every send",
      "Custom Sheets menu and a centralized CONFIG object for fast tenant-style configuration",
    ],
    tech: ["Google AppScript", "JavaScript", "HTML", "Google Sheets", "Gmail API"],
    repo: "https://github.com/dimski1/sheets-email-automation",
    category: "Automation · Document Tracking",
  },
  {
    title: "LinkedIn Transcript Extractor",
    tagline: "One-click transcript copy for LinkedIn Learning videos",
    description:
      "A lightweight Chrome extension (Manifest V3) that lets you copy the full transcript of any LinkedIn Learning video to your clipboard with one click — either through a floating in-page button or a popup interface.",
    highlights: [
      "Floating copy button injected directly on LinkedIn Learning video pages",
      "Manual extraction option via the extension popup as a fallback",
      "Minimal permissions: activeTab, scripting, and clipboardWrite",
      "Tested on Chrome and Edge; small, dependency-free codebase",
    ],
    tech: ["Chrome Extension", "Manifest V3", "JavaScript", "HTML", "Content Scripts"],
    repo: "https://github.com/dimski1/linkedin-transcript-extractor",
    category: "Browser Extension · Productivity",
  },
];

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  location: string;
  gpa: string;
  coursework: string[];
};

export const educationItems: EducationItem[] = [
  {
    school: "Universitas Indonesia",
    degree: "Bachelor of Arts, English Studies",
    period: "2019 — 2023",
    location: "Depok, Indonesia",
    gpa: "3.50 / 4.00",
    coursework: [
      "Critical Thinking & Analysis",
      "Research Methods",
      "Digital Humanities",
    ],
  },
  {
    school: "Nanyang Technological University",
    degree: "Short-Term Fellowship · Temasek Foundation LEaRN Program",
    period: "2023",
    location: "Singapore",
    gpa: "4.00 / 4.00",
    coursework: [
      "Industry Competitiveness & Strategies",
      "Business Idea Pitch",
      "Financing for Entrepreneurs",
    ],
  },
];

export const achievements = [
  {
    title: "1st Place — Best Policy Paper",
    issuer: "Young ASEAN Leaders Policy Initiative",
    date: "Jan 2023",
    detail:
      "Policy recommendations to mitigate election misinformation in ASEAN via information-sharing mechanisms between tech platforms and public institutions.",
  },
  {
    title: "Most Innovative Program Pilot",
    issuer: "AUA Future of Learning Accelerator",
    date: "Sep 2021",
    detail:
      "Designed a cloud-based educational platform for student collaboration across the AWASAR region.",
  },
];

export const certifications = [
  {
    name: "LSP Certified Digital Marketing",
    issuer: "BNSP",
    date: "Nov 2024",
  },
  {
    name: "TOEFL ITP — Score 607",
    issuer: "LBI FIB UI",
    date: "Sep 2021",
  },
  {
    name: "Fundamentals of Waterfall Project Management",
    issuer: "PMI",
    date: "Dec 2022",
  },
];

export const languages = [
  { name: "Indonesian", level: "Native" },
  { name: "English", level: "TOEFL ITP 607" },
  { name: "Japanese", level: "Conversational" },
];
