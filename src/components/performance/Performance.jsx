import React from "react";
import { useFormContext } from "react-hook-form";

const PerformanceObjectives = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <>
     

      {/* Objective Description Section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Objective Description</h3>
        <textarea
          {...register("performanceObjectives.objectiveDescription", {
            required: "Objective Description is required",
            minLength: { value: 10, message: "Objective Description must be at least 10 characters long" },
            maxLength: { value: 500, message: "Objective Description cannot exceed 500 characters" },
          })}
          placeholder="Enter Objective Description"
          className="border px-2 py-1 w-full"
          rows={3}
        />
        {errors.performanceObjectives?.objectiveDescription && (
          <span className="text-red-500 text-xs">{errors.performanceObjectives.objectiveDescription.message}</span>
        )}
      </div>

      
    </>
  );
};

export default PerformanceObjectives;
