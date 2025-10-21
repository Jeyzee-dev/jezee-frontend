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
    const baseStyles = "font-semibold rounded-xl transition-all duration-300 transform focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none flex items-center justify-center gap-2";
    
    const sizeStyles = {
      small: "px-4 py-2 text-sm min-h-[40px]",
      medium: "px-6 py-3 text-base min-h-[48px]", 
      large: "px-8 py-4 text-lg min-h-[56px]"
    };

    const typeStyles = {
      primary: "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-2xl hover:scale-105 focus:ring-cyan-500/50 shadow-lg hover:from-cyan-600 hover:to-blue-700 active:scale-95",
      secondary: "bg-gray-800 text-white border border-gray-600 hover:bg-gray-700 hover:shadow-xl hover:scale-105 focus:ring-gray-500/50 hover:border-gray-500 active:scale-95",
      outline: "bg-transparent text-cyan-400 border-2 border-cyan-500 hover:bg-cyan-500 hover:text-white hover:shadow-xl hover:scale-105 focus:ring-cyan-500/50 active:scale-95",
      ghost: "bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white hover:shadow-lg focus:ring-gray-500/50 active:scale-95"
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
          {label}
        </>
      )}
    </button>
  );
};

export default PrimaryButton;