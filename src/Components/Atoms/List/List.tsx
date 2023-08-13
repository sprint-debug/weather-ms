import React from 'react';
import './List.css';
import Icon from '../Icon/Icon';

interface ListProps {
  items: {
    icon?: React.ReactNode;
    title: string;
    description?: string;
  }[];
}

const List: React.FC<ListProps> = ({ items }) => {
  return (
    <ul className="list">
      {items.map((item, index) => (
        <li key={index}>
          {item.icon && <Icon>{item.icon}</Icon>}
          {item.description ? (
            <>
              {item.title}: {item.description}
            </>
          ) : (
            <h2>{item.title}</h2>
          )}
        </li>
      ))}
    </ul>
  );
};

export default List;
