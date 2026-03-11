export interface Profile {
  name: string;
  nameJa: string;
  title: string;
  tagline: string;
  subtitle: string;
  bio: string;
  mottos: string[];
  interests: string[];
  personality: {
    mbti: string;
    strengths: string[];
  };
  location: string;
  education: string;
  links: {
    github: string;
    x: string;
    zenn: string;
    hatena: string;
    email: string;
    source: string;
  };
}

export interface Skill {
  name: string;
  years: number;
  level: "main" | "sub";
}

export interface Skills {
  languages: Skill[];
  frameworks: string[];
  infrastructure: string[];
  databases: string[];
  other: string[];
}

export interface Certification {
  date: string;
  name: string;
  abbr: string;
}

export interface Experience {
  period: string;
  company: string;
  role: string;
  description: string;
  tech: string[];
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  tier: 1 | 2;
}

export interface WritingStats {
  stats: {
    hatenaCount: number;
    zennCount: number;
    tilCategories: number;
  };
  feeds: {
    hatena: string;
    zenn: string;
  };
}
