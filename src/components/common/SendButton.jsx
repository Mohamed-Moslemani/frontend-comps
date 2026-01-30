import { Send } from 'lucide-react';

function SendButton({
  type = 'submit',
  title = 'Send',
  disabled = false,
  onClick,
  size = 20,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="btn btn-icon btn-send focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#A22020] dark:focus-visible:ring-[#A22020]"
      disabled={disabled}
      title={title}
      aria-label={title}
    >
      <Send size={size} strokeWidth={2.5} />
    </button>
  );
}

export default SendButton;
