export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  body: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "preparing-documents-for-a-business-licence-application",
    title: "Preparing Documents for a Business Licence Application",
    description: "A simple overview of how to organise information before starting a licence-related application.",
    body: [
      "Good preparation starts with understanding what information the relevant authority is likely to request. Keep business details, contact information, previous correspondence, and supporting records in one place.",
      "Before submitting anything, check that names, addresses, dates, and reference numbers are consistent across documents. Small inconsistencies can create avoidable follow-up questions."
    ]
  },
  {
    slug: "common-reasons-applications-are-delayed",
    title: "Common Reasons Applications Are Delayed",
    description: "General administrative issues that can slow down applications and how to reduce avoidable delays.",
    body: [
      "Applications can be delayed when required documents are missing, forms are incomplete, or contact details are unclear. Keeping a clear checklist can make follow-up easier.",
      "Processing times are controlled by the relevant authority, but organised documentation can help customers respond more quickly if additional information is requested."
    ]
  },
  {
    slug: "how-to-keep-track-of-licence-renewal-dates",
    title: "How to Keep Track of Licence Renewal Dates",
    description: "Practical ways to plan ahead for renewals and avoid last-minute administration.",
    body: [
      "Record renewal dates as soon as they are issued and set reminders well before the deadline. It is often useful to keep copies of the original application and any authority correspondence.",
      "A renewal checklist can help you confirm whether business details, addresses, or supporting records have changed since the previous application."
    ]
  },
  {
    slug: "a-simple-business-compliance-checklist",
    title: "A Simple Business Compliance Checklist",
    description: "A general checklist for keeping business records easier to review and update.",
    body: [
      "Keep core company information, contact details, application references, renewal dates, and key documents in a secure place. Review these records periodically.",
      "If something changes, such as address or contact details, note the change clearly and check whether any authority needs to be informed."
    ]
  },
  {
    slug: "questions-to-ask-before-starting-an-application",
    title: "Questions to Ask Before Starting an Application",
    description: "Useful planning questions before you begin a business application or licensing process.",
    body: [
      "Before starting, ask which authority handles the application, what supporting information is required, whether a renewal date applies, and how updates will be communicated.",
      "Clear answers at the planning stage can make the process easier to manage and help identify missing information early."
    ]
  }
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
