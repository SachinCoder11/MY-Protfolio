import React, { useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';

export default function ImageModal({ isOpen, imageSrc, imageAlt, title, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl max-h-[90vh] bg-white rounded-xl overflow-hidden shadow-2xl border border-slate-700 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 bg-slate-900 text-white border-b border-slate-800">
          <span className="text-sm font-semibold truncate">{title || imageAlt}</span>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="overflow-auto p-2 bg-slate-950 flex items-center justify-center">
          <img 
            src={imageSrc} 
            alt={imageAlt} 
            className="max-h-[80vh] w-auto object-contain rounded"
          />
        </div>
      </div>
    </div>
  );
}
