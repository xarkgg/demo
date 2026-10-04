import React from 'react';
import { X, ExternalLink, ArrowRight } from 'lucide-react';

interface ProjectDetailModalProps {
  project: {
    title: string;
    description: string;
    details: string;
    role: string;
    year: string;
    client: string;
    tags: string[];
    link?: string;
  } | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl space-y-5 border border-[#EEEEEE]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono text-[#003FC0] uppercase tracking-wider font-semibold">
            {project.client} · {project.year}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="p-4 bg-[#F8F8F8] rounded-2xl space-y-2 text-xs text-neutral-700 border border-[#EEEEEE]">
          <div className="flex justify-between">
            <span className="text-neutral-400">Role:</span>
            <span className="font-medium text-neutral-900">{project.role}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-400">Industry:</span>
            <span className="font-medium text-neutral-900">{project.client}</span>
          </div>
          <p className="text-neutral-600 pt-2 border-t border-[#EEEEEE] leading-relaxed font-sans">
            {project.details}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 bg-neutral-100 rounded-full text-[11px] text-neutral-600 border border-[#EEEEEE]">
              {tag}
            </span>
          ))}
        </div>

        <div className="pt-2">
          <button
            type="button"
            onClick={onClose}
            className="w-full py-3 text-xs font-semibold text-white bg-[#003FC0] hover:bg-[#023EC0] rounded-full transition-colors cursor-pointer shadow-xs"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
