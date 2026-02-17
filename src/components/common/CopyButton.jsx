import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      const content = typeof text === 'string' ? text : String(text);
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error('Failed to copy to clipboard', e);
    }
  };

  return (
    <button
      type="button"
      onClick={copyToClipboard}
      className={`bg-white dark:bg-zinc-800 border px-2.5 py-1.5 rounded-lg text-xs cursor-pointer transition-all duration-300 flex items-center gap-1.5 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 ${
        copied
          ? 'border-green-500 dark:border-green-600 bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-400'
          : 'border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:bg-[#A22020]/10 dark:hover:bg-[#A22020]/20 hover:text-[#A22020] dark:hover:text-[#A22020] hover:border-[#A22020]'
      }`}
      title={copied ? 'Copied!' : 'Copy response'}
    >
      {copied ? (
        <>
          <Check size={14} strokeWidth={2.5} />
          <span>Copied!</span>
        </>
      ) : (
        <Copy size={14} strokeWidth={2.5} />
      )}
    </button>
  );
}

export default CopyButton;
