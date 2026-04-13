export type ImagePosition = "left" | "right";

export type ProjectCategoryGallery = {
  wireframes: string[];
  iterations: string[];
  final: string[];
};

export type ProjectLinks = {
  figma?: string | null;
  github?: string | null;
  liveDemo?: string | null;
};

export type ProjectEmbeds = {
  /** iframe live site (Vercel e.d.); zelfde presentatie als Figma; kan geblokkeerd worden */
  liveDemo: boolean;
  /** Figma embed (officiële embed-URL) */
  figma: boolean;
};

export type RecruiterSnapshot = {
  role?: string;
  team?: string;
  duration?: string;
  contribution?: string;
  impact?: string;
};

export type Project = {
  id: string;
  order: number;
  title: string;
  /** Korte beschrijving (samenvatting voor bovenaan de case) */
  description: string;
  /** Optionele ondertitel: rol, team, context */
  subtitle?: string;
  /** Knelpunten / vraagstuk van de opdracht */
  problem: string;
  /** Hoe je het aanpakte: onderzoek, ontwerp, samenwerking */
  approach: string;
  /** Wat het opleverde (kort; beelden/demo volgen in de Resultaat-sectie) */
  result: string;
  /** Waar het spannend of lastig werd */
  challenges: string;
  /** Reflectie: wat neem je mee */
  learnings: string;
  heroImage: string;
  imagePosition: ImagePosition;
  techStack: string[];
  /** Compacte sollicitatie-samenvatting (optioneel) */
  recruiter?: RecruiterSnapshot;
  links: ProjectLinks;
  embeds: ProjectEmbeds;
  categories: ProjectCategoryGallery;
};

export type ProjectsFile = {
  projects: Project[];
};
