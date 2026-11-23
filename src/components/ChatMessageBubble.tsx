import React, { useState } from 'react';
import { ChatMessage } from '../types';
import { Copy, Check, Volume2, Sparkles, User, Bookmark } from 'lucide-react';

interface ChatMessageBubbleProps {
  message: ChatMessage;
  onSelectPrompt?: (prompt: string) => void;
  onSpeak?: (text: string) => void;
}

export const ChatMessageBubble: React.FC<ChatMessageBubbleProps> = ({
  message,
  onSelectPrompt,
  onSpeak
}) => {
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);

  const isBot = message.sender === 'bot';

  const handleCopy = () => {
    navigator.clipboard.writeText(message.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSpeech = () => {
    if (onSpeak) {
      onSpeak(message.text);
    }
  };

  // Render markdown with Blue-White-Yellow highlights
  const renderFormattedText = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let tableRows: string[][] = [];
    let inTable = false;

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      // Table line detect
      if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
        inTable = true;
        const cells = trimmed.split('|').slice(1, -1).map(c => c.trim());
        if (!cells.every(c => c.match(/^-+$/))) {
          tableRows.push(cells);
        }
        return;
      } else if (inTable) {
        inTable = false;
        if (tableRows.length > 0) {
          const header = tableRows[0];
          const body = tableRows.slice(1);
          elements.push(
            <div key={`table-${index}`} className="my-3 overflow-x-auto rounded-lg border-2 border-blue-200 bg-blue-50/40">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-blue-900 border-b-2 border-yellow-400 text-yellow-300 font-bold">
                    {header.map((h, i) => (
                      <th key={i} className="p-2.5 border-r border-blue-800 last:border-0">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {body.map((row, rIdx) => (
                    <tr key={rIdx} className="border-b border-blue-100 hover:bg-blue-100/50">
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="p-2.5 border-r border-blue-100 last:border-0 text-slate-800 font-medium">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
          tableRows = [];
        }
      }

      // Headers (### or ##)
      if (line.startsWith('### ')) {
        elements.push(
          <h4 key={index} className="text-sm font-bold text-blue-900 mt-3 mb-1">
            {line.replace('### ', '')}
          </h4>
        );
        return;
      }

      if (line.startsWith('## ')) {
        elements.push(
          <h3 key={index} className="text-base font-black text-blue-900 mt-4 mb-2">
            {line.replace('## ', '')}
          </h3>
        );
        return;
      }

      // Bullet items (- or *)
      if (line.startsWith('- ') || line.startsWith('* ')) {
        const itemText = line.substring(2);
        elements.push(
          <li key={index} className="ml-4 list-disc text-slate-800 my-1 leading-relaxed">
            {formatInlineBold(itemText)}
          </li>
        );
        return;
      }

      // Numbered lists (1., 2., etc)
      if (line.match(/^\d+\.\s/)) {
        elements.push(
          <li key={index} className="ml-5 list-decimal text-slate-800 my-1 leading-relaxed">
            {formatInlineBold(line.replace(/^\d+\.\s/, ''))}
          </li>
        );
        return;
      }

      // Empty line spacing
      if (!line.trim()) {
        elements.push(<div key={index} className="h-2" />);
        return;
      }

      // Regular paragraph
      elements.push(
        <p key={index} className="my-1 leading-relaxed text-slate-800">
          {formatInlineBold(line)}
        </p>
      );
    });

    if (inTable && tableRows.length > 0) {
      const header = tableRows[0];
      const body = tableRows.slice(1);
      elements.push(
        <div key="table-end" className="my-3 overflow-x-auto rounded-lg border-2 border-blue-200 bg-blue-50/40">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-blue-900 border-b-2 border-yellow-400 text-yellow-300 font-bold">
                {header.map((h, i) => (
                  <th key={i} className="p-2.5 border-r border-blue-800 last:border-0">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {body.map((row, rIdx) => (
                <tr key={rIdx} className="border-b border-blue-100 hover:bg-blue-100/50">
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="p-2.5 border-r border-blue-100 last:border-0 text-slate-800 font-medium">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    return elements;
  };

  // Helper for inline **bold** formatting with Yellow highlight
  const formatInlineBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} className="font-extrabold text-blue-950 bg-yellow-200/70 px-1 rounded">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  const isOutOfScope = message.isOutOfScope || message.text.includes('hanya dapat menjawab pertanyaan seputar Humas');

  return (
    <div className={`flex items-start gap-3 my-3 ${isBot ? '' : 'flex-row-reverse'}`}>
      {/* Avatar */}
      <div className="shrink-0">
        {isBot ? (
          <div className="w-9 h-9 rounded-xl bg-blue-900 border-2 border-yellow-400 flex items-center justify-center font-black text-yellow-400 text-xs shadow-md">
            SIMAS
          </div>
        ) : (
          <div className="w-9 h-9 rounded-xl bg-yellow-400 border-2 border-yellow-500 flex items-center justify-center text-blue-950 shadow-md">
            <User className="w-4 h-4 font-bold" />
          </div>
        )}
      </div>

      {/* Message Box */}
      <div className={`max-w-[85%] sm:max-w-[78%] rounded-2xl p-4 shadow-sm text-xs sm:text-sm ${
        isBot
          ? isOutOfScope
            ? 'bg-yellow-50 border-2 border-yellow-400 text-yellow-950'
            : message.isError
            ? 'bg-rose-50 border-2 border-rose-300 text-rose-900'
            : 'bg-white border-2 border-blue-100 text-slate-800 shadow-md'
          : 'bg-blue-700 text-white rounded-tr-none shadow-md font-medium'
      }`}>
        {/* Header Badges if Bot */}
        {isBot && (
          <div className="flex items-center justify-between gap-2 pb-2 mb-2 border-b border-blue-100 text-[11px]">
            <div className="flex items-center gap-1.5 text-blue-900 font-extrabold">
              <Sparkles className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
              <span>S.I.M.A.S AI Humas UNPI</span>
            </div>
            <span className="text-[10px] text-slate-400 font-medium">{message.timestamp}</span>
          </div>
        )}

        {/* Content */}
        <div className="space-y-1">
          {renderFormattedText(message.text)}
        </div>



        {/* Bot Message Action Bar */}
        {isBot && (
          <div className="mt-3 pt-2 flex items-center justify-between text-[11px] text-slate-500 border-t border-blue-50">
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 hover:text-blue-900 font-medium transition-colors px-1.5 py-0.5 rounded hover:bg-blue-50 cursor-pointer"
                title="Salin jawaban"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Tersalin' : 'Salin'}</span>
              </button>

              <button
                onClick={handleSpeech}
                className="flex items-center gap-1 hover:text-blue-900 font-medium transition-colors px-1.5 py-0.5 rounded hover:bg-blue-50 cursor-pointer"
                title="Dengarkan Suara Pembaca"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Dengar</span>
              </button>

              <button
                onClick={() => setSaved(!saved)}
                className={`flex items-center gap-1 hover:text-blue-900 font-medium transition-colors px-1.5 py-0.5 rounded hover:bg-blue-50 cursor-pointer ${
                  saved ? 'text-amber-600 font-bold' : ''
                }`}
                title="Tandai Jawaban"
              >
                <Bookmark className="w-3.5 h-3.5" />
                <span>{saved ? 'Tersimpan' : 'Simpan'}</span>
              </button>
            </div>

            <span className="text-[10px] text-slate-400">Data Resmi UNPI</span>
          </div>
        )}

        {!isBot && (
          <div className="text-[10px] text-blue-100 text-right mt-1.5 font-normal">
            {message.timestamp}
          </div>
        )}
      </div>
    </div>
  );
};
