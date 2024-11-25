import React from 'react';
import { useFormContext } from 'react-hook-form';

const TSM = () => {
  // Get the form methods from the FormProvider
  const { register, trigger, formState: { errors } } = useFormContext();

  return (
    <div className="mt-2">
      <label className="block text-sm font-medium">
        Training, Support, Maintenance:
      </label>
      <input
        {...register("tsm.Training_Support_Maintenance", {
          required: "Description is required", // Required field
          minLength: { value: 10, message: "Description must be at least 10 characters long" }, // Minimum length validation
          maxLength: { value: 200, message: "Description should not exceed 200 characters" }, // Maximum length validation
          pattern: {
            value: /^[a-zA-Z0-9\s,.'-]*$/, // Regex for alphanumeric and certain symbols
            message: "Description contains invalid characters" // Custom message for invalid pattern
          },
          onBlur: () => trigger("tsm.Training_Support_Maintenance"), // Validate on blur
        })}
        className="border px-2 py-6 w-full"
      />
      {errors.tsm?.Training_Support_Maintenance && (
        <span className="text-red-500 text-xs">
          {errors.tsm.Training_Support_Maintenance.message}
        </span>
      )}
    </div>
  );
};

export default TSM;
