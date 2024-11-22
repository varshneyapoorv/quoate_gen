import React from 'react';
import { useFormContext } from 'react-hook-form'; // Import useFormContext to access methods from parent form

const Understanding = () => {
  // Get methods from FormProvider via useFormContext
  const { register, formState: { errors }, trigger } = useFormContext();

  return (
    <div className="mt-2">
      <label className="block text-sm font-medium">Project Understanding :</label>
      <input
        {...register('understandings.project_understanding', {
          required: 'Description is required',
          onBlur: () => trigger('understandings.project_understanding'), // Validate on blur
        })}
        className="border px-2 py-6 w-full"
      />
      {errors.understandings?.project_understanding && (
        <span className="text-red-500 text-xs">
          {errors.understandings.project_understanding.message}
        </span>
      )}
    </div>
  );
};

export default Understanding;
