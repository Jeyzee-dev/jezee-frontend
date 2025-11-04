import React from 'react';

const PrimaryButton = ({ 
  label, 
  onClick, 
  type = "primary", 
  size = "medium", 
  disabled = false,
  loading = false,
  icon = null,
  fullWidth = false,
  className = "",
  ...props 
}) => {
  const getButtonStyles = () => {
    const baseStyles = "font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2";
    
    const sizeStyles = {
      small: "px-4 py-2 text-sm",
      medium: "px-6 py-3 text-base", 
      large: "px-8 py-4 text-lg"
    };

    const typeStyles = {
      primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-white",
      secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-white",
      outline: "bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500 focus:ring-offset-white",
      ghost: "bg-transparent text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:ring-gray-500 focus:ring-offset-white"
    };

    const widthStyle = fullWidth ? "w-full" : "";

    return `
      ${baseStyles}
      ${sizeStyles[size]}
      ${typeStyles[type]}
      ${widthStyle}
      ${className}
    `;
  };

  const LoadingSpinner = () => (
    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
  );

  return (
    <button 
      className={getButtonStyles()} 
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <LoadingSpinner />}
      {icon && !loading && <span>{icon}</span>}
      {loading ? "Processing..." : label}
    </button>
  );
};

export default PrimaryButton;