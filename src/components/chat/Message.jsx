import { User, Bot } from 'lucide-react';
import CopyButton from '../common/CopyButton';
import DownloadButton from '../common/DownloadButton';

function Message({ message, assistantName = 'Agent', onDownloadExcel }) {
  const isAssistant = message.role === 'assistant';

  const hasExtractedData = isAssistant && message.extractedData && message.extractedData.length > 0;
  
  const isTSV = isAssistant && typeof message.content === 'string' && message.content.includes('\t');
  
  const renderTSVTable = (content) => {
    const lines = content.trim().split('\n');
    if (lines.length < 2) return content;
    
    const headers = lines[0].split('\t');
    const rows = lines.slice(1).map(line => line.split('\t'));
    
    return (
      <div className="overflow-x-auto rounded-lg border border-[#A22020]/30 dark:border-[#A22020] shadow-md">
        <table className="w-full border-collapse bg-white dark:bg-zinc-900 text-sm">
          <thead>
            <tr className="bg-[#A22020]">
              {headers.map((header, i) => (
                <th 
                  key={i} 
                  className="px-2.5 py-1.5 text-left text-xs font-semibold text-white border-r border-white/20 last:border-r-0 whitespace-nowrap"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr 
                key={i} 
                className="border-b border-zinc-200 dark:border-zinc-800 last:border-b-0 hover:bg-[#A22020]/5 dark:hover:bg-[#A22020]/10 transition-colors"
              >
                {row.map((cell, j) => (
                  <td 
                    key={j} 
                    className="px-2.5 py-1.5 text-xs text-zinc-800 dark:text-zinc-200 border-r border-zinc-200 dark:border-zinc-800 last:border-r-0"
                  >
                    {cell || '-'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  return (
    <div
      className={`flex gap-3 items-start max-w-full animate-slide-in ${message.role === 'system' ? 'justify-center' : ''}`}
    >
      {message.role !== 'system' && (
        <div className={`w-10 h-10 rounded-full grid place-items-center flex-shrink-0 shadow-lg transition-all duration-300 hover:scale-110 bg-[#A22020] text-white`}>
          {message.role === 'user' ? (
            <User size={20} strokeWidth={2.5} />
          ) : (
            <Bot size={20} strokeWidth={2.5} />
          )}
        </div>
      )}
      <div className="flex-1 min-w-0">
        {message.role === 'system' ? (
          <div className="bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 rounded-2xl px-4 py-2 text-sm text-zinc-600 dark:text-zinc-300 backdrop-blur-sm">
            {message.content}
          </div>
        ) : (
          <>
            <div className="mb-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <span>{message.role === 'user' ? 'You' : assistantName}</span>
              {isAssistant && (
                <>
                  <CopyButton text={message.content} />
                  {hasExtractedData && (
                    <DownloadButton extractedData={message.extractedData} onDownloadExcel={onDownloadExcel} />
                  )}
                </>
              )}
            </div>
            {isAssistant ? (
              isTSV ? (
                <div className="space-y-3">
                  {renderTSVTable(message.content)}
                </div>
              ) : (
                <pre className={`whitespace-pre-wrap break-words leading-relaxed text-[15px] ${message.isError ? 'text-red-600 dark:text-red-400' : 'text-zinc-800 dark:text-zinc-200'}`} style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Inter", "Roboto", sans-serif' }}>
                  {message.content}
                </pre>
              )
            ) : (
              <div className="whitespace-pre-wrap break-words leading-relaxed text-[15px] text-zinc-800 dark:text-zinc-200">{message.content}</div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Message;
