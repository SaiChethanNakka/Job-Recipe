import React from 'react';
import { TOOLS } from '../constants';
import ToolTile from './ToolTile';

interface ToolGridProps {
  isAuthed: boolean;
}

const ToolGrid: React.FC<ToolGridProps> = ({ isAuthed }) => {
  return (
    <section id="tools-grid" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl mb-4">
            Powerful tools for every stage
          </h2>
          <p className="text-lg text-stone-600">
            From discovering your ideal role to mastering the interview, we have a specialized agent for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {TOOLS.map((tool) => (
            <ToolTile key={tool.slug} tool={tool} isAuthed={isAuthed} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolGrid;
