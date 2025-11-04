import React from 'react';

const Card = ({ 
  icon, 
  title, 
  description, 
  onClick,
  disabled = false,
  className = "",
  ...props 
}) => {
  const getCardStyles = () => {
    const baseStyles = "border border-gray-200 rounded-lg bg-white transition-colors duration-200 cursor-pointer";
    
    const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "hover:shadow-md hover:border-gray-300";

    return `
      ${baseStyles}
      ${disabledStyles}
      ${className}
    `;
  };

  return (
    <div 
      className={getCardStyles()} 
      onClick={disabled ? undefined : onClick}
      role={onClick ? "button" : "article"}
      tabIndex={onClick && !disabled ? 0 : -1}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && onClick && !disabled) {
          e.preventDefault();
          onClick();
        }
      }}
      {...props}
    >
      <div className="p-6">
        {icon && (
          <div className="text-2xl text-blue-600 mb-4">
            {icon}
          </div>
        )}
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
        
        {!disabled && onClick && (
          <div className="mt-4 flex items-center text-blue-600 text-sm font-medium">
            Learn more →
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;