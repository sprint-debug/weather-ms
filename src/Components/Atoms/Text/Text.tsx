import React from 'react';
import './Text.css';

interface Props {
  content: string;
}

const Text: React.FC<Props> = ({ content }) => {
  return <p className="text">{content}</p>;
};

export default Text;
