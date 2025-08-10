export interface ResumeItem {
  title?: string;
  subtitle?: string;
  date?: string;
  description: string;
}

export interface ResumeSection {
  title: string;
  items: ResumeItem[];
}

export interface ResumeData {
  sections: ResumeSection[];
}