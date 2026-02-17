import { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';

function DownloadButton({ extractedData, onDownloadExcel }) {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    if (!onDownloadExcel || !extractedData) return;
    setDownloading(true);
    try {
      await onDownloadExcel(extractedData);
    } catch (e) {
      console.error('Excel download failed', e);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleDownload}
      disabled={downloading}
      className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 px-2.5 py-1.5 rounded-lg text-xs cursor-pointer transition-all duration-300 flex items-center gap-1.5 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 text-zinc-500 dark:text-zinc-400 hover:bg-emerald-50 dark:hover:bg-emerald-950 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed"
      title="Download as Excel"
    >
      {downloading ? (
        <Loader2 size={14} strokeWidth={2.5} className="animate-spin" />
      ) : (
        <Download size={14} strokeWidth={2.5} />
      )}
    </button>
  );
}

export default DownloadButton;
