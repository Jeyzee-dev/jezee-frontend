import React from 'react';

const Card = ({ 
  icon, 
  title, 
  description, 
  onClick,
  variant = "default",
  size = "medium",
  disabled = false,
  className = "",
  ...props 
}) => {
  const getCardStyles = () => {
    const baseStyles = "backdrop-blur-sm border rounded-2xl transition-all duration-500 cursor-pointer group relative overflow-hidden";
    
    const sizeStyles = {
      small: "p-4",
      medium: "p-6",
      large: "p-8"
    };

    const variantStyles = {
      default: "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:-translate-y-1",
      elevated: "bg-white/10 border-white/15 hover:bg-white/15 hover:border-white/25 hover:shadow-2xl hover:-translate-y-2 shadow-lg",
      gradient: "bg-gradient-to-br from-white/5 to-white/10 border-white/10 hover:from-white/10 hover:to-white/15 hover:border-white/20 hover:shadow-2xl hover:-translate-y-1",
      outline: "bg-transparent border-cyan-500/30 hover:bg-cyan-500/10 hover:border-cyan-500/50 hover:shadow-2xl hover:-translate-y-1"
    };

    const disabledStyles = disabled ? "opacity-50 cursor-not-allowed hover:transform-none hover:shadow-none" : "";

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
      {/* Background Glow Effect */}
      {!disabled && (
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        <div className={`${getIconSize()} mb-4 text-cyan-400 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ${disabled ? 'group-hover:scale-100 group-hover:rotate-0' : ''}`}>
          {icon}
        </div>
        
        <h3 className={`${getTitleSize()} font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 ${disabled ? 'group-hover:text-white' : ''}`}>
          {title}
        </h3>
        
        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
          {description}
        </p>
        
        {/* CTA Indicator */}
        {!disabled && (
          <div className="mt-4 sm:mt-6 flex items-center text-cyan-400 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300">
            <span className="text-sm font-medium">Learn more</span>
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
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/20 group-hover:via-cyan-500/10 group-hover:to-cyan-500/20 transition-all duration-500 opacity-0 group-hover:opacity-100 -z-10"></div>
      )}
    </div>
  );
};

export default Card;