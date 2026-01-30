import { useEffect, useRef } from 'react';
import { Paperclip } from 'lucide-react';
import SendButton from '../common/SendButton.jsx';
import FilesPreview from './FilesPreview';

function InputBar({
  input,
  setInput,
  loading,
  uploadedFiles,
  fileLoading,
  onFileSelect,
  onRemoveFile,
  onSubmit,
  onKeyDown,
  placeholder,
}) {
  const textareaRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 180) + 'px';
  }, [input]);

  useEffect(() => {
    if (uploadedFiles.length === 0 && fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, [uploadedFiles.length]);

  return (
    <form onSubmit={onSubmit} className="px-6 py-5 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 sticky bottom-0 max-w-4xl mx-auto w-full backdrop-blur-sm">
      <FilesPreview files={uploadedFiles} onRemoveFile={onRemoveFile} fileLoading={fileLoading} />

      <div className="flex items-end gap-2.5 bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-700 rounded-3xl px-4 py-3 transition-all duration-300 shadow-sm hover:shadow-md focus-within:border-[#A22020] dark:focus-within:border-[#A22020] focus-within:shadow-lg">
        <input
          type="file"
          ref={fileInputRef}
          onChange={onFileSelect}
          accept=".pdf,.doc,.docx,.ppt,.pptx,.txt"
          multiple
          style={{ display: 'none' }}
        />
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="w-10 h-10 bg-transparent text-zinc-500 dark:text-zinc-400 rounded-xl grid place-items-center cursor-pointer transition-all duration-300 flex-shrink-0 hover:bg-white/50 dark:hover:bg-zinc-800 hover:text-[#A22020] dark:hover:text-[#A22020] hover:scale-110 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:scale-100"
          disabled={loading || fileLoading}
          title="Attach file"
        >
          <Paperclip size={20} strokeWidth={2.5} />
        </button>
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder={placeholder || 'Type your message...'}
          rows={1}
          disabled={loading}
          className="flex-1 px-3 py-2.5 border-none bg-transparent text-[15px] resize-none max-h-[180px] text-zinc-900 dark:text-zinc-100 outline-none leading-normal placeholder:text-zinc-400 dark:placeholder:text-zinc-500 placeholder:opacity-70 disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <SendButton
          disabled={loading || (!input.trim() && uploadedFiles.length === 0)}
          title="Send"
        />
      </div>
    </form>
  );
}

export default InputBar;
