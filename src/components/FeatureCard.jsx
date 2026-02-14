// components/ui/FeatureCard.jsx
const FeatureCard = ({
  title,
  description,          // better naming than "desc"
  icon,                 // emoji, lucide icon, or any JSX
  variant = 'default',  // 'default' | 'light' | 'accent'
  className = '',
}) => {
  const baseStyles = `
    group relative overflow-hidden
    rounded-2xl p-7
    transition-all duration-300 ease-out
    cursor-pointer
    hover:shadow-xl hover:-translate-y-1
    focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2
  `;

  const variants = {
    default: `
      bg-gradient-to-br from-indigo-600 via-blue-700 to-purple-700
      text-white
      hover:from-indigo-700 hover:via-blue-800 hover:to-purple-800
    `,
    light: `
      bg-white border border-gray-200 text-gray-900
      hover:border-purple-300 hover:shadow-purple-100/50
    `,
    accent: `
      bg-gradient-to-br from-purple-600 to-pink-600
      text-white
    `,
  };

  return (
    <div
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${className}
      `}
    >
      {/* Optional gradient overlay on hover */}
      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        {icon && (
          <div className="mb-5 text-5xl sm:text-6xl opacity-90 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        )}

        <h4 className="font-bold text-xl mb-3 tracking-tight">
          {title}
        </h4>

        <p className={`text-base ${variant === 'light' ? 'text-gray-600' : 'text-white/90'}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;