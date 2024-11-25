import React from "react";
import { useFormContext } from "react-hook-form";

const Cost = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <>
      {/* Cost Details Section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Cost Details</h3>
        <input
          {...register("cost.details", {
            required: "Cost details are required",
            minLength: { value: 5, message: "Cost details must be at least 5 characters long" },
            maxLength: { value: 200, message: "Cost details cannot exceed 200 characters" }
          })}
          placeholder="Enter Cost Details"
          className="border px-2 py-1 w-full"
        />
        {errors.cost?.details && (
          <span className="text-red-500 text-xs">{errors.cost.details.message}</span>
        )}
      </div>
    </>
  );
};

export default Cost;
