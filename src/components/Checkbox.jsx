import React from 'react';

const Checkbox = ({ label, isChecked, onChange }) => {
  return (
    <div className="flex items-center mb-2">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        className="mr-2 w-4 h-4"
      />
      <label className="text-sm font-medium">{label}</label>
    </div>
  );
};

export default Checkbox;
