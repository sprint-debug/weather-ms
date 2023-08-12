import React from 'react';
import './IconContainer.css';

interface IconContainerProps {
  children: React.ReactNode;
}

const IconContainer: React.FC<IconContainerProps> = ({ children }) => {
  return <span className="iconContainer">{children}</span>;
};

export default IconContainer;
