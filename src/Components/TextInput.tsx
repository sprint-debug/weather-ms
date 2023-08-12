import React from 'react';
import './TextInput.css';

interface Props {
  label: string;
  name: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
}

const TextInput: React.FC<Props> = ({ label, name, id, value, onChange }) => {
  return (
    <>
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <input
        className="input"
        name={name}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
};

export default TextInput;
