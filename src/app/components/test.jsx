'use client';
import React, { useState } from 'react';

const test = () => {
  const options = ['1', '2', '3', '4', '5', '6'];
  const [selectedOption, setSelectedOption] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <div>
      <div className="dropdown-button">
        {selectedOption || '--Select an option--'}
      </div>
      {isOpen && (
        <ul className="dropdown-options">
          {options.map((option) => (
            <li key={option}>{option}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default test;
