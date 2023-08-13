import React from 'react';
import './Icon.css';

interface IconProps {
  children: React.ReactNode;
}

const Icon: React.FC<IconProps> = ({ children }) => {
  return <span className="icon">{children}</span>;
};

export default Icon;
