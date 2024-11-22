import React from "react";
import { useFormContext } from "react-hook-form";

const Cost = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <>
      {/* Additional Cost Title Section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Cost Deatails</h3>
        <input
          {...register("cost.details", { required: "Cost details is required" })}
          placeholder="Enter Cost Details"
          className="border px-2 py-1 w-full"
        />
        {errors.cost?.title && (
          <span className="text-red-500 text-xs">{errors.cost.title.message}</span>
        )}
      </div>

      
    </>
  );
};

export default Cost;
