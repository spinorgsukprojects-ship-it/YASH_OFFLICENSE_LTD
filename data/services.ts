import {
  BriefcaseBusiness,
  CalendarClock,
  ClipboardCheck,
  FileCheck2,
  FileSearch,
  FolderCog,
  Landmark,
  LifeBuoy,
  type LucideIcon
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  suitableFor: string[];
  includes: string[];
  customerInfo: string[];
  process: string[];
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "business-licence-support",
    title: "Business Licence Application Support",
    shortDescription: "Guidance with understanding requirements and preparing licence application information.",
    overview: "Practical administrative support for people preparing business licence applications, with careful organisation of information before submission.",
    suitableFor: ["New applicants", "Small businesses", "Limited companies", "Sole traders"],
    includes: ["Requirements checklist", "Document organisation", "Application information review", "Submission preparation guidance"],
    customerInfo: ["Applicant details", "Business information", "Relevant documents", "Authority correspondence, where available"],
    process: ["Discuss the application type", "Identify likely requirements", "Prepare supporting information", "Support follow-up administration"],
    icon: FileCheck2
  },
  {
    slug: "licence-renewal-support",
    title: "Licence Renewal Support",
    shortDescription: "Help tracking renewal needs, organising documents, and preparing renewal information.",
    overview: "Support for customers who need to prepare for renewal windows and keep application documents in order.",
    suitableFor: ["Existing licence holders", "Busy business owners", "Operations teams", "Contractors"],
    includes: ["Renewal checklist", "Deadline planning", "Document updates", "Reminder support"],
    customerInfo: ["Current licence details", "Renewal date", "Updated business details", "Previous application records"],
    process: ["Confirm renewal timing", "Review current information", "Prepare updated documents", "Provide administrative follow-up"],
    icon: CalendarClock
  },
  {
    slug: "document-preparation",
    title: "Document Preparation Assistance",
    shortDescription: "Organised support with gathering, checking, and preparing application documents.",
    overview: "A structured service for customers who want their supporting information presented clearly and consistently.",
    suitableFor: ["Applicants with multiple documents", "Start-ups", "Property businesses", "Hospitality businesses"],
    includes: ["Document checklist", "Formatting guidance", "Completeness review", "Secure handling"],
    customerInfo: ["Identity or business documents, where applicable", "Application forms", "Supporting evidence", "Contact details"],
    process: ["List required documents", "Collect customer information", "Organise files", "Highlight missing items"],
    icon: FolderCog
  },
  {
    slug: "application-review",
    title: "Application Review Support",
    shortDescription: "A careful administrative review before an application is submitted.",
    overview: "Support designed to reduce avoidable admin delays by checking that supplied information appears complete and consistent.",
    suitableFor: ["Customers preparing submissions", "Businesses updating records", "Applicants responding to authority requests"],
    includes: ["Completeness checks", "Consistency review", "Missing-information notes", "Clear next-step summary"],
    customerInfo: ["Draft application", "Supporting documents", "Relevant correspondence", "Business contact details"],
    process: ["Receive draft details", "Review provided materials", "Summarise findings", "Assist with corrections"],
    icon: FileSearch
  },
  {
    slug: "compliance-administration",
    title: "Compliance Administration",
    shortDescription: "General support for keeping licence-related records organised and accessible.",
    overview: "Administrative help for businesses that need a clearer approach to documentation, reminders, and record keeping.",
    suitableFor: ["Small businesses", "Limited companies", "Retail businesses", "Contractors"],
    includes: ["Record organisation", "Checklist creation", "Deadline tracking", "Correspondence support"],
    customerInfo: ["Current records", "Relevant deadlines", "Authority letters", "Business updates"],
    process: ["Map current records", "Identify admin gaps", "Create an action list", "Maintain follow-up reminders"],
    icon: ClipboardCheck
  },
  {
    slug: "business-registration",
    title: "Business Registration Assistance",
    shortDescription: "Administrative guidance for business registration information and supporting records.",
    overview: "Practical support with organising business registration details and preparing information for administrative processes.",
    suitableFor: ["New businesses", "Sole traders", "Start-ups", "Directors organising records"],
    includes: ["Business detail checklist", "Record preparation", "Document organisation", "General administration"],
    customerInfo: ["Business name", "Company number if available", "Address details", "Contact information"],
    process: ["Clarify registration needs", "Collect business details", "Organise documents", "Provide next-step guidance"],
    icon: Landmark
  },
  {
    slug: "renewal-reminders",
    title: "Deadline and Renewal Reminders",
    shortDescription: "Calendar-based support to help customers prepare before important renewal dates.",
    overview: "Reminder support for customers who want to stay ahead of licence, document, or application deadlines.",
    suitableFor: ["Busy owners", "Operations teams", "Contractors", "Property businesses"],
    includes: ["Deadline capture", "Reminder scheduling", "Preparation checklists", "Follow-up prompts"],
    customerInfo: ["Renewal dates", "Contact preference", "Licence reference if available", "Relevant authority details"],
    process: ["Record deadlines", "Agree reminder timing", "Send preparation prompts", "Support next steps"],
    icon: CalendarClock
  },
  {
    slug: "general-business-support",
    title: "General Business Support",
    shortDescription: "Flexible administrative help for business documents, enquiries, and application planning.",
    overview: "General support for customers who need clear, organised help with business administration tasks.",
    suitableFor: ["Individuals", "Sole traders", "Small businesses", "Limited companies"],
    includes: ["Admin guidance", "Document lists", "Enquiry preparation", "Communication support"],
    customerInfo: ["Support request details", "Business information", "Relevant documents", "Preferred contact method"],
    process: ["Understand the request", "Confirm available support", "Prepare an action plan", "Provide practical assistance"],
    icon: LifeBuoy
  }
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const supportAudiences = [
  "Sole Traders",
  "Start-Ups",
  "Small Businesses",
  "Limited Companies",
  "Contractors",
  "Property Businesses",
  "Retail Businesses",
  "Hospitality Businesses"
];

export const choiceFeatures = [
  "Clear Communication",
  "Organised Process",
  "UK-Based Support",
  "Confidential Handling",
  "Practical Guidance",
  "Responsive Assistance"
];
