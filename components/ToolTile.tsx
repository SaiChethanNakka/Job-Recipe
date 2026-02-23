import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, ArrowRight, LucideIcon } from 'lucide-react';
import { Tool } from '../types';

interface ToolTileProps {
  tool: Tool;
  isAuthed: boolean;
}

const ToolTile: React.FC<ToolTileProps> = ({ tool, isAuthed }) => {
  const navigate = useNavigate();
  const Icon = tool.icon;

  const handleClick = () => {
    if (isAuthed) {
      navigate(`/tools/${tool.slug}`);
    } else {
      navigate(`/auth?next=/tools/${tool.slug}`);
    }
  };

  return (
    <div
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      className={`
        group relative flex flex-col p-6 rounded-2xl border transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2
        ${isAuthed 
          ? 'bg-white border-stone-200 hover:border-brand-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer' 
          : 'bg-stone-50 border-stone-100 hover:border-brand-200 cursor-pointer'
        }
      `}
    >
      {/* Locked Overlay for Unauthed State */}
      {!isAuthed && (
        <div className="absolute top-4 right-4 z-10">
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-stone-200/50 backdrop-blur-sm rounded-full border border-stone-300/50">
            <Lock size={12} className="text-stone-500" />
            <span className="text-[10px] font-semibold uppercase tracking-wider text-stone-600">
              Locked
            </span>
          </div>
        </div>
      )}

      {/* Icon */}
      <div className={`
        mb-5 h-12 w-12 rounded-xl flex items-center justify-center transition-colors
        ${isAuthed 
          ? 'bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white' 
          : 'bg-stone-200 text-stone-500 grayscale'
        }
      `}>
        <Icon size={24} />
      </div>

      {/* Content */}
      <div className={!isAuthed ? 'opacity-70' : ''}>
        <h3 className="text-lg font-bold text-stone-900 mb-2 group-hover:text-brand-700 transition-colors">
          {tool.name}
        </h3>
        <p className="text-sm text-stone-600 leading-relaxed mb-6">
          {tool.description}
        </p>
      </div>

      {/* Footer Action */}
      <div className="mt-auto flex items-center text-sm font-medium">
        {isAuthed ? (
          <span className="text-brand-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
            Launch Tool <ArrowRight size={16} />
          </span>
        ) : (
          <span className="text-stone-400 group-hover:text-brand-500 transition-colors flex items-center gap-1">
            Login to unlock <Lock size={14} className="ml-1" />
          </span>
        )}
      </div>
    </div>
  );
};

export default ToolTile;
