/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ChatInterface } from './components/ChatInterface';
import { DatabaseView } from './components/DatabaseView';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [currentView, setCurrentView] = useState<'chat' | 'database'>('chat');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [ttsEnabled, setTtsEnabled] = useState(false);
  const [clearTrigger, setClearTrigger] = useState(0);

  const handleClearChat = () => {
    if (window.confirm('Bersihkan seluruh percakapan?')) {
      setClearTrigger((prev) => prev + 1);
    }
  };

  const handleAskAIFromDb = (query: string) => {
    setCurrentView('chat');
    setTimeout(() => {
      const inputEl = document.querySelector('input[type="text"]') as HTMLInputElement;
      if (inputEl) {
        inputEl.value = query;
        inputEl.focus();
        const formEl = inputEl.closest('form');
        if (formEl) {
          formEl.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
        }
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-amber-50/30 text-slate-800 font-['Plus_Jakarta_Sans',sans-serif] flex flex-col selection:bg-yellow-400 selection:text-blue-950">
      {/* Clean Navbar Top Bar with View Switcher */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        onClearChat={handleClearChat}
        onOpenContact={() => setIsContactOpen(true)}
        ttsEnabled={ttsEnabled}
        setTtsEnabled={setTtsEnabled}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentView === 'chat' && (
          <ChatInterface
            ttsEnabled={ttsEnabled}
            onOpenContact={() => setIsContactOpen(true)}
            clearTrigger={clearTrigger}
          />
        )}

        {currentView === 'database' && (
          <DatabaseView onAskAIFromDb={handleAskAIFromDb} />
        )}
      </main>

      {/* Contact Humas Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
