import React, { useState, useRef, useEffect } from 'react';
import { Database, MessageSquareText, Settings, Check } from 'lucide-react';

interface NavbarProps {
  currentView: 'chat' | 'database';
  setCurrentView: (view: 'chat' | 'database') => void;
  onClearChat: () => void;
  onOpenContact: () => void;
  ttsEnabled: boolean;
  setTtsEnabled: (enabled: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  setCurrentView
}) => {
  const [isViewMenuOpen, setIsViewMenuOpen] = useState(false);
  const viewMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (viewMenuRef.current && !viewMenuRef.current.contains(event.target as Node)) {
        setIsViewMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const handleSelectView = (view: 'chat' | 'database') => {
    setCurrentView(view);
    setIsViewMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-blue-900 border-b-4 border-yellow-400 shadow-lg text-white">
      <div className="max-w-5xl mx-auto px-2.5 sm:px-4 h-14 sm:h-16 flex items-center justify-between gap-1.5 sm:gap-2">
        
        {/* UNPI Logo & SIMAS AI Identity */}
        <div className="flex items-center gap-2 sm:gap-3 cursor-pointer flex-1 min-w-0 sm:flex-initial" onClick={() => setCurrentView('chat')}>
          <div className="relative shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-yellow-400 p-0.5 shadow-md flex items-center justify-center">
              <div className="w-full h-full bg-blue-950 rounded-[8px] sm:rounded-[10px] flex items-center justify-center font-black text-yellow-400 text-[10px] sm:text-xs tracking-tighter">
                UNPI
              </div>
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 bg-emerald-400 border-2 border-blue-900 rounded-full" title="Server Active"></span>
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1 sm:gap-2 flex-nowrap">
              <h1 className="text-[13px] sm:text-base font-extrabold text-white tracking-tight whitespace-nowrap">
                S.I.M.A.S <span className="text-yellow-400">AI</span>
              </h1>
              <span className="text-[8.5px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded-md bg-yellow-400 text-blue-950 shadow-sm whitespace-nowrap shrink-0">
                Humas UNPI
              </span>
            </div>
            <p className="text-[9.5px] sm:text-[11px] text-blue-100 flex items-center gap-1 min-w-0 mt-0.5">
              <span className="truncate">Chatbot & Pusat Data Resmi UNPI Cianjur</span>
              <span className="text-yellow-400 font-bold shrink-0">•</span>
              <span className="text-emerald-300 font-semibold shrink-0 whitespace-nowrap">Online</span>
            </p>
          </div>
        </div>

        {/* Desktop Compact View Switcher: Chat vs Database */}
        <div className="hidden sm:flex items-center bg-blue-950/80 p-0.5 rounded-lg border border-blue-700/80 text-[11px] font-bold">
          <button
            onClick={() => setCurrentView('chat')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all cursor-pointer whitespace-nowrap ${
              currentView === 'chat'
                ? 'bg-yellow-400 text-blue-950 shadow-sm font-extrabold'
                : 'text-blue-200 hover:text-white'
            }`}
          >
            <MessageSquareText className="w-3 h-3 shrink-0" />
            <span>Chat AI</span>
          </button>

          <button
            onClick={() => setCurrentView('database')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all cursor-pointer whitespace-nowrap ${
              currentView === 'database'
                ? 'bg-yellow-400 text-blue-950 shadow-sm font-extrabold'
                : 'text-blue-200 hover:text-white'
            }`}
          >
            <Database className="w-3 h-3 shrink-0" />
            <span>Database</span>
          </button>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1 sm:hidden shrink-0">
          {/* Mobile Small Settings Switcher (Chat AI / Database) */}
          <div className="relative" ref={viewMenuRef}>
            <button
              onClick={() => setIsViewMenuOpen((prev) => !prev)}
              title="Pengaturan Tampilan (Chat AI / Database)"
              aria-label="Pengaturan Tampilan"
              aria-expanded={isViewMenuOpen}
              className={`p-1.5 rounded-lg border text-xs transition-colors cursor-pointer ${
                isViewMenuOpen || currentView === 'database'
                  ? 'bg-yellow-400 text-blue-950 border-yellow-300 font-bold'
                  : 'bg-blue-800/80 border-blue-700 text-blue-100 hover:text-white hover:bg-blue-800'
              }`}
            >
              <Settings className="w-4 h-4" />
            </button>

            {isViewMenuOpen && (
              <div className="absolute right-0 mt-2 w-44 rounded-xl bg-white text-slate-800 shadow-xl border-2 border-blue-200 p-1.5 z-50">
                <div className="px-2 py-1 text-[10px] font-extrabold uppercase tracking-wider text-blue-900 border-b border-blue-100 mb-1">
                  Pengaturan Menu
                </div>
                <button
                  onClick={() => handleSelectView('chat')}
                  className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    currentView === 'chat'
                      ? 'bg-blue-900 text-yellow-400'
                      : 'text-slate-700 hover:bg-blue-50'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <MessageSquareText className="w-3.5 h-3.5" />
                    Chat AI
                  </span>
                  {currentView === 'chat' && <Check className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={() => handleSelectView('database')}
                  className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer mt-0.5 ${
                    currentView === 'database'
                      ? 'bg-blue-900 text-yellow-400'
                      : 'text-slate-700 hover:bg-blue-50'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Database className="w-3.5 h-3.5" />
                    Database
                  </span>
                  {currentView === 'database' && <Check className="w-3.5 h-3.5" />}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
