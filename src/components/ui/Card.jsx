import React from 'react';

const Card = ({ 
  icon, 
  title, 
  description, 
  onClick,
  variant = "default",
  size = "medium",
  disabled = false,
  status,
  badge,
  className = "",
  style,
  ...props 
}) => {
  const getCardStyles = () => {
    const baseStyles = "border rounded-xl transition-all duration-500 cursor-pointer group relative overflow-hidden bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-sm";
    
    const sizeStyles = {
      small: "p-4",
      medium: "p-6",
      large: "p-8"
    };

    const variantStyles = {
      default: "border-gray-200/50 hover:shadow-xl hover:border-gray-300/50 hover:scale-105",
      elevated: "border-gray-200/50 shadow-sm hover:shadow-xl hover:border-gray-300/50 hover:scale-105",
      gradient: "border-blue-200/50 bg-gradient-to-br from-blue-50/80 to-blue-100/60 hover:shadow-xl hover:border-blue-300/50 hover:scale-105",
      outline: "border-blue-300/50 hover:bg-gradient-to-br from-blue-50/80 to-blue-100/60 hover:shadow-xl hover:scale-105"
    };

    const disabledStyles = disabled ? "opacity-50 cursor-not-allowed hover:shadow-none hover:border-gray-200/50 hover:scale-100" : "";

    return `
      ${baseStyles}
      ${sizeStyles[size]}
      ${variantStyles[variant]}
      ${disabledStyles}
      ${className}
    `;
  };

  const getIconSize = () => {
    const sizes = {
      small: "text-2xl",
      medium: "text-3xl",
      large: "text-4xl"
    };
    return sizes[size];
  };

  const getTitleSize = () => {
    const sizes = {
      small: "text-lg",
      medium: "text-xl",
      large: "text-2xl"
    };
    return sizes[size];
  };

  const getStatusColor = () => {
    const statusColors = {
      completed: 'bg-green-100/80 text-green-800 border-green-200/50',
      pending: 'bg-yellow-100/80 text-yellow-800 border-yellow-200/50',
      urgent: 'bg-red-100/80 text-red-800 border-red-200/50',
      draft: 'bg-gray-100/80 text-gray-800 border-gray-200/50',
      reviewed: 'bg-blue-100/80 text-blue-800 border-blue-200/50'
    };
    return statusColors[status] || 'bg-gray-100/80 text-gray-800 border-gray-200/50';
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
      style={style}
      {...props}
    >
      {/* Background Glow Effect */}
      {!disabled && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
      )}
      
      {/* Badge */}
      {badge && (
        <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-800 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg z-20 transform group-hover:scale-110 transition-transform duration-300">
          {badge}
        </div>
      )}

      {/* Status Badge */}
      {status && (
        <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${getStatusColor()} z-20 transform group-hover:scale-105 transition-transform duration-300`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        <div className={`${getIconSize()} mb-4 text-blue-800 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ${disabled ? 'group-hover:scale-100 group-hover:rotate-0' : ''} ${status || badge ? 'mt-2' : ''}`}>
          {icon}
        </div>
        
        <h3 className={`${getTitleSize()} font-bold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors duration-300 ${disabled ? 'group-hover:text-gray-900' : ''}`}>
          {title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
          {description}
        </p>
        
        {/* CTA Indicator */}
        {!disabled && onClick && (
          <div className="mt-4 sm:mt-6 flex items-center text-blue-800 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300">
            <span className="text-sm font-medium">
              {onClick ? "Learn more" : "View details"}
            </span>
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </div>
        )}

        {/* Disabled State Indicator */}
        {disabled && (
          <div className="mt-4 flex items-center text-gray-500">
            <span className="text-sm font-medium">Coming soon</span>
          </div>
        )}
      </div>

      {/* Hover Border Effect */}
      {!disabled && (
        <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-blue-500/5 group-hover:to-blue-500/10 transition-all duration-500 opacity-0 group-hover:opacity-100 -z-10"></div>
      )}
    </div>
  );
};

export default Card;