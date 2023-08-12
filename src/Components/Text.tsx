import React from 'react';

interface Props {
  content: string;
}

const Text: React.FC<Props> = ({ content }) => {
  return <p>{content}</p>;
};

export default Text;
