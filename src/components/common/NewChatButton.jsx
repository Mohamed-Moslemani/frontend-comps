import { Plus } from 'lucide-react';

function NewChatButton({ title = 'New chat', onClick, size = 20, disabled = false }) {
  return (
    <button
      type="button"
      className="btn btn-icon btn-header focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70"
      onClick={onClick}
      title={title}
      aria-label={title}
      disabled={disabled}
    >
      <Plus size={size} strokeWidth={2.5} />
    </button>
  );
}

export default NewChatButton;
