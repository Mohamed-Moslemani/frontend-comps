import { useEffect, useRef } from 'react';
import { Bot } from 'lucide-react';
import Message from './Message';

function Messages({ messages, loading, assistantName = 'Agent', onDownloadExcel }) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  return (
    <div className="flex-1 overflow-y-auto px-8 py-10 flex flex-col gap-8 scroll-smooth bg-gradient-to-br from-white via-burgundy-50/30 to-white dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      {messages.map((m) => (
        <Message key={m.id} message={m} assistantName={assistantName} onDownloadExcel={onDownloadExcel} />
      ))}

      {loading && (
        <div className="flex gap-3 items-start max-w-full animate-slide-in">
          <div className="w-10 h-10 rounded-full grid place-items-center bg-gradient-to-br from-burgundy-600 to-burgundy-700 text-white flex-shrink-0 shadow-lg shadow-burgundy-500/30 animate-pulse-slow">
            <Bot size={20} strokeWidth={2.5} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="mb-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <span>{assistantName}</span>
            </div>
            <div className="flex gap-1.5 py-1">
              <span className="w-2 h-2 rounded-full bg-burgundy-600 dark:bg-burgundy-400 typing-dot"></span>
              <span className="w-2 h-2 rounded-full bg-burgundy-600 dark:bg-burgundy-400 typing-dot"></span>
              <span className="w-2 h-2 rounded-full bg-burgundy-600 dark:bg-burgundy-400 typing-dot"></span>
            </div>
          </div>
        </div>
      )}

      <div ref={messagesEndRef} />
    </div>
  );
}

export default Messages;
