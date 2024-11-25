import React from "react";
import { useFormContext } from "react-hook-form";

const Client = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <>
      {/* Client Reference Number Section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Client Reference Number</h3>
        <input
          {...register("client.referenceNumber", {
            required: "Client Reference Number is required",
            pattern: {
              value: /^[0-9]+$/,  // Regex to ensure only numbers are entered
              message: "Please enter a valid reference number (only numbers allowed)"
            },
            minLength: {
              value: 6,
              message: "Client Reference Number must be at least 6 digits"
            },
            maxLength: {
              value: 12,
              message: "Client Reference Number cannot exceed 12 digits"
            }
          })}
          placeholder="Enter Client Reference Number"
          className="border px-2 py-1 w-full"
          type="text"
        />
        {errors.client?.referenceNumber && (
          <span className="text-red-500 text-xs">{errors.client.referenceNumber.message}</span>
        )}
      </div>
    </>
  );
};

export default Client;
