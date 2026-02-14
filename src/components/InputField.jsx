// src/components/ui/InputField.jsx
const InputField = ({
  label,
  placeholder,
  type = "text",
  name,
  value,
  onChange,
  error,
  required = true,
  className = "",
  ...props
}) => {
  return (
    <div className={`space-y-1.5 ${className}`}>
      {/* Label */}
      <label 
        htmlFor={name}
        className="block text-sm font-medium text-slate-700"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      {/* Input */}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`
          w-full px-4 py-2.5 
          bg-white border border-slate-300 
          rounded-lg shadow-sm 
          text-slate-900 placeholder-slate-400
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500
          hover:border-slate-400
          disabled:bg-slate-50 disabled:text-slate-500 disabled:cursor-not-allowed
          ${error ? 'border-red-500 focus:ring-red-500/40 focus:border-red-500' : ''}
        `}
        {...props}
      />

      {/* Error message */}
      {error && (
        <p className="text-sm text-red-600 mt-1.5">
          {error}
        </p>
      )}
    </div>
  );
};

export default InputField;