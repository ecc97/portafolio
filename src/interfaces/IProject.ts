export interface Project {
  id: string;
  title: string;
  description: string;
  linkRepo: string;
  linkDemo?: string;
  image: string;
  badges: string[];
}