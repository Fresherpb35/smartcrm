const Button = ({ children, onClick, variant = "primary", icon, fullWidth = false, disabled = false }) => {
  const baseClasses = "px-4 py-2.5 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-500 border border-gray-300",
    outline: "bg-white text-gray-700 hover:bg-gray-50 focus:ring-gray-500 border border-gray-300"
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${fullWidth ? 'w-full' : ''}`}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;