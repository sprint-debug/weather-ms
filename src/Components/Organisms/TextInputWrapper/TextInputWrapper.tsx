import React from 'react';
import './TextInputWrapper.css';

interface TextInpterWrapperProps {
  children: React.ReactNode;
}

const TextInputWrapper: React.FC<TextInpterWrapperProps> = ({ children }) => {
  return <div className="inputWrapper">{children}</div>;
};

export default TextInputWrapper;
