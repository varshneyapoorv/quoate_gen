import React from "react";
import { useFormContext } from "react-hook-form";

const Profiles = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <>
      {/* Name Section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Name</h3>
        <input
          {...register("profiles.name", { required: "Name is required" })}
          placeholder="Enter Name"
          className="border px-2 py-1 w-full"
        />
        {errors.profiles?.name && (
          <span className="text-red-500 text-xs">{errors.profiles.name.message}</span>
        )}
      </div>

      {/* Details Section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Details</h3>
        <textarea
          {...register("profiles.details", { required: "Details are required" })}
          placeholder="Enter profile details"
          className="border px-2 py-1 w-full"
          rows={3}
        />
        {errors.profiles?.details && (
          <span className="text-red-500 text-xs">{errors.profiles.details.message}</span>
        )}
      </div>
    </>
  );
};

export default Profiles;
