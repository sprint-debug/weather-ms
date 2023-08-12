import React from 'react';
import './TextInputContainer.css';

interface TextInputContainerProps {
  children: React.ReactNode;
}

const TextInputContainer: React.FC<TextInputContainerProps> = ({
  children,
}) => {
  return <div className="inputContainer">{children}</div>;
};

export default TextInputContainer;
