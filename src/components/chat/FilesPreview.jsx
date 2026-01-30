import { FileText, X, Loader2 } from 'lucide-react';

function FilesPreview({ files, onRemoveFile, fileLoading }) {
  if (fileLoading) {
    return (
      <div className="flex flex-wrap gap-2 mb-3">
        <div className="inline-flex items-center gap-2 bg-[#A22020]/10 dark:bg-[#A22020]/20 border border-[#A22020]/30 dark:border-[#A22020] rounded-full px-4 py-2.5 text-[13px] text-[#A22020] dark:text-white max-w-[220px] transition-all duration-300 opacity-70 shadow-sm">
          <Loader2 size={16} className="animate-spin flex-shrink-0" />
          <span className="overflow-hidden text-ellipsis whitespace-nowrap flex-1 min-w-0 font-medium">Loading files...</span>
        </div>
      </div>
    );
  }

  if (!files || files.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-3 animate-slide-in max-h-32 overflow-y-auto scroll-smooth pr-1">
      {files.map((file, index) => (
        <div key={index} className="inline-flex items-center gap-2 bg-[#A22020]/10 dark:bg-[#A22020]/20 border border-[#A22020]/30 dark:border-[#A22020] rounded-full px-4 py-2.5 text-[13px] text-[#A22020] dark:text-white max-w-[220px] transition-all duration-300 hover:bg-[#A22020]/20 dark:hover:bg-[#A22020]/30 hover:border-[#A22020] hover:shadow-md hover:scale-105 shadow-sm">
          <FileText size={16} strokeWidth={2.5} className="flex-shrink-0" />
          <span className="overflow-hidden text-ellipsis whitespace-nowrap flex-1 min-w-0 font-medium">{file.name}</span>
          <button type="button" onClick={() => onRemoveFile(index)} className="bg-transparent border-none text-[#A22020] dark:text-white cursor-pointer p-1 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 hover:bg-[#A22020]/20 dark:hover:bg-[#A22020]/30 hover:scale-110 active:scale-95" title="Remove">
            <X size={14} strokeWidth={3} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default FilesPreview;
