import React from 'react';
import './PageWrapper.css';

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return <div className="pageWrapper">{children}</div>;
};

export default PageWrapper;
