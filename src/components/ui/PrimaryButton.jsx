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
    const baseStyles = "font-semibold rounded-xl transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-sm flex items-center justify-center gap-2 backdrop-blur-sm";
    
    const sizeStyles = {
      small: "px-4 py-2 text-sm",
      medium: "px-6 py-3 text-base", 
      large: "px-8 py-4 text-lg"
    };

    const typeStyles = {
      primary: "bg-gradient-to-r from-blue-800 to-blue-700 text-white hover:from-blue-900 hover:to-blue-800 focus:ring-blue-500 focus:ring-offset-white shadow-md hover:shadow-lg",
      secondary: "bg-gradient-to-r from-gray-800 to-gray-700 text-white hover:from-gray-900 hover:to-gray-800 focus:ring-gray-500 focus:ring-offset-white shadow-md hover:shadow-lg",
      outline: "bg-transparent text-blue-800 border-2 border-blue-800 hover:bg-gradient-to-r hover:from-blue-800 hover:to-blue-700 hover:text-white hover:border-transparent focus:ring-blue-500 focus:ring-offset-white hover:shadow-md",
      ghost: "bg-transparent text-gray-600 hover:bg-gray-100/80 hover:text-gray-800 focus:ring-gray-500 focus:ring-offset-white hover:shadow-sm"
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
    <div className="flex items-center justify-center">
      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <button 
      className={getButtonStyles()} 
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <LoadingSpinner />
          <span>Processing...</span>
        </>
      ) : (
        <>
          {icon && <span className="text-lg">{icon}</span>}
          <span className="transform group-hover:scale-105 transition-transform duration-300">
            {label}
          </span>
        </>
      )}
    </button>
  );
};

export default PrimaryButton;