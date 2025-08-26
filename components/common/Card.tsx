import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  padding = 'md',
  shadow = 'md',
  rounded = 'lg',
  onClick,
  ...props
}) => {
  const baseStyles = 'transition-all duration-200';
  
  const paddingStyles = {
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6'
  };

  const shadowStyles = {
    sm: 'shadow-sm hover:shadow-md',
    md: 'shadow-md hover:shadow-lg',
    lg: 'shadow-lg hover:shadow-xl'
  };

  const roundedStyles = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg'
  };

  const clickableStyles = onClick ? 'cursor-pointer hover:scale-[1.02]' : '';

  const combinedStyles = `${baseStyles} ${paddingStyles[padding]} ${roundedStyles[rounded]} ${clickableStyles} ${className}`;

  return (
    <div
      className={combinedStyles}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
