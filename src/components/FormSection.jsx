import React from 'react';
import { useFormContext } from 'react-hook-form';

const FormSection = ({ sectionId, title, children }) => {
  const { watch, setValue } = useFormContext();

  // Watch for checkbox state
  const isChecked = watch(`sections.${sectionId}`, false);

  return (
    <div className="p-4 border rounded mb-4">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setValue(`sections.${sectionId}`, e.target.checked)}
          className="mr-2 w-4 h-4"
        />
        <h2 className="text-lg font-bold">{title}</h2>
      </div>
      {isChecked && <div className="mt-4">{children}</div>}
    </div>
  );
};

export default FormSection;
