import { FileText, Mic, Target, Route, BarChart3 } from 'lucide-react';
import { Tool } from './types';

export const TOOLS: Tool[] = [
  {
    name: 'Resume Master',
    slug: 'resume-master',
    description: 'AI scoring, ATS optimization, and keyword gap detection to get your resume past the bots.',
    icon: FileText,
  },
  {
    name: 'Interview Master',
    slug: 'interview-master',
    description: 'Realistic voice interview simulations with instant feedback on technical accuracy and tone.',
    icon: Mic,
  },
  {
    name: 'Role Finder',
    slug: 'role-finder',
    description: 'Discover roles perfectly aligned with your current skills, interests, and career trajectory.',
    icon: Target,
  },
  {
    name: 'Gap Finder',
    slug: 'gap-finder',
    description: 'Identify skill gaps and generate a step-by-step learning plan with realistic time estimates.',
    icon: Route,
  },
  {
    name: 'Market Standard Finder',
    slug: 'market-standard-finder',
    description: 'Get a reality check on salary expectations, role levels, and market demand for your profile.',
    icon: BarChart3,
  },
];

export const APP_NAME = 'JobRecipie';
