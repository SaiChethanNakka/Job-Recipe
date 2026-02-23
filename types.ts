import { LucideIcon } from 'lucide-react';

export interface Tool {
  name: string;
  slug: string;
  description: string;
  icon: LucideIcon;
}

export interface AuthContextType {
  isAuthed: boolean;
  login: () => void;
  logout: () => void;
}