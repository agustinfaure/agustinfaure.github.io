
export type Project = {
  title: string;
  coauthors?: string[];
  venue?: string;
  year?: string | number;
  abstract: string;
};

export const projects: Project[] = [
  {
    title: "Climbing or Leaving",
    coauthors: ["Coauthor A", "Coauthor B"],
    venue: "Working Paper",
    year: "2025",
    abstract:
      "Short 3–5 sentence abstract describing the question, data, identification, and primary result. Keep it crisp.",
  },
  {
    title: "Bureaucrats’ Engagement & Administrative Agility",
    coauthors: ["Coauthor C"],
    venue: "Draft",
    year: "2025",
    abstract:
      "Short abstract. This will be hidden by default and expands on click.",
  },
];
