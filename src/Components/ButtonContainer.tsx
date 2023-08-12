import React from 'react';
import './ButtonContainer.css';

interface ButtonContainerProps {
  children: React.ReactNode;
}

const ButtonContainer: React.FC<ButtonContainerProps> = ({ children }) => {
  return <div className="buttonContainer">{children}</div>;
};

export default ButtonContainer;
