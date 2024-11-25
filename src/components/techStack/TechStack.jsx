import React from "react";
import { useFormContext, useFieldArray } from "react-hook-form";

const TechStack = () => {
  const { control, register, trigger, formState: { errors } } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "techStack.technologies", // Nested under 'techStack' for better structure
  });

  return (
    <div className="border border-gray-300 p-4 rounded">
      {/* Tech Stack Title */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Tech Stack</h3>
        <input
          {...register("techStack.title", { 
            required: "Title is required",
            onBlur: () => trigger("techStack.title"), // Trigger validation on blur
          })}
          placeholder="Enter Tech Stack Title"
          className="border px-2 py-1 w-full"
        />
        {errors.techStack?.title && (
          <span className="text-red-500 text-xs">{errors.techStack.title.message}</span>
        )}
      </div>

      {/* Details Section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Details</h3>
        <textarea
          {...register("techStack.details", {
            required: "Details are required",
            onBlur: () => trigger("techStack.details"), // Trigger validation on blur
          })}
          placeholder="Enter details about the tech stack"
          className="border px-2 py-1 w-full"
          rows={3}
        />
        {errors.techStack?.details && (
          <span className="text-red-500 text-xs">{errors.techStack.details.message}</span>
        )}
      </div>

      {/* Image Upload Section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Image</h3>
        <input
          type="file"
          {...register("techStack.image")}
          className="border px-2 py-1 w-full"
        />
      </div>

      {/* Select/Add Technologies Section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Select/Add Technologies</h3>
        <button
          type="button"
          onClick={() =>
            append({
              name: "",
              details: "",
            })
          }
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Technology
        </button>

        {/* Technologies Table */}
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Details</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {fields.map((field, index) => (
              <tr key={field.id}>
                {/* Technology Name */}
                <td className="border p-2">
                  <input
                    {...register(`techStack.technologies.${index}.name`, {
                      required: "Name is required",
                      onBlur: () => trigger(`techStack.technologies.${index}.name`), // Validate on blur
                    })}
                    placeholder="Technology Name"
                    defaultValue={field.name}
                    className="border px-2 py-1 w-full"
                  />
                  {errors.techStack?.technologies?.[index]?.name && (
                    <span className="text-red-500 text-xs">
                      {errors.techStack.technologies[index].name.message}
                    </span>
                  )}
                </td>

                {/* Technology Details */}
                <td className="border p-2">
                  <textarea
                    {...register(`techStack.technologies.${index}.details`, {
                      required: "Details are required",
                      onBlur: () => trigger(`techStack.technologies.${index}.details`), // Validate on blur
                    })}
                    placeholder="Technology Details"
                    defaultValue={field.details}
                    className="border px-2 py-1 w-full"
                    rows={2}
                  />
                  {errors.techStack?.technologies?.[index]?.details && (
                    <span className="text-red-500 text-xs">
                      {errors.techStack.technologies[index].details.message}
                    </span>
                  )}
                </td>

                {/* Remove Technology Button */}
                <td className="border p-2">
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="px-2 py-1 bg-red-500 text-white rounded"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TechStack;
