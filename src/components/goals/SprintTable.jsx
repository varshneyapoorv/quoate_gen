// import React from "react";
// import { useFormContext, useFieldArray } from "react-hook-form";

// const SprintTable = () => {
//   const { control, register, trigger, formState: { errors } } = useFormContext();

//   const { fields, append, remove } = useFieldArray({
//     control,
//     name: "phases.sprints", // Nested under 'phases' for better structure
//   });

//   return (
//     <div>
//       {/* Add Phase Button */}
//       <button
//         type="button"
//         onClick={() =>
//           append({
//             number: fields.length + 1,
//             description: "",
//             category: "",
//             keyDeliverables: "",
//           })
//         }
//         className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
//       >
//         Add Sprint
//       </button>

//       {/* Sprint Table */}
//       <table className="table-auto w-full border-collapse border border-gray-300">
//         <thead>
//           <tr>
//             <th className="border p-2">Sprint Number</th>
//             <th className="border p-2">Description</th>
//             <th className="border p-2">Category</th>
//             <th className="border p-2">Key Deliverables</th>
//             <th className="border p-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {fields.map((field, index) => (
//             <tr key={field.id}>
//               {/* Sprint Number (Read-only) */}
//               <td className="border p-2">{field.number}</td>

//               {/* Sprint Description */}
//               <td className="border p-2">
//                 <input
//                   {...register(`phases.sprints.${index}.description`, {
//                     required: "Description is required",
//                     onBlur: () => trigger(`phases.sprints.${index}.description`), // Validate on blur
//                   })}
//                   defaultValue={field.description}
//                   className="border px-2 py-1 w-full"
//                 />
//                 {errors.phases?.sprints?.[index]?.description && (
//                   <span className="text-red-500 text-xs">
//                     {errors.phases.sprints[index].description.message}
//                   </span>
//                 )}
//               </td>

//               {/* Task Category */}
//               <td className="border p-2">
//                 <input
//                   {...register(`phases.sprints.${index}.category`, {
//                     required: "Category is required",
//                     onBlur: () => trigger(`phases.sprints.${index}.category`), // Validate on blur
//                   })}
//                   defaultValue={field.category}
//                   className="border px-2 py-1 w-full"
//                 />
//                 {errors.phases?.sprints?.[index]?.category && (
//                   <span className="text-red-500 text-xs">
//                     {errors.phases.sprints[index].category.message}
//                   </span>
//                 )}
//               </td>

//               {/* Key Deliverables */}
//               <td className="border p-2">
//                 <textarea
//                   {...register(`phases.sprints.${index}.keyDeliverables`, {
//                     required: "Key Deliverables are required",
//                     onBlur: () =>
//                       trigger(`phases.sprints.${index}.keyDeliverables`), // Validate on blur
//                   })}
//                   defaultValue={field.keyDeliverables}
//                   className="border px-2 py-1 w-full"
//                   rows={2}
//                 />
//                 {errors.phases?.sprints?.[index]?.keyDeliverables && (
//                   <span className="text-red-500 text-xs">
//                     {errors.phases.sprints[index].keyDeliverables.message}
//                   </span>
//                 )}
//               </td>

//               {/* Remove Button */}
//               <td className="border p-2">
//                 <button
//                   type="button"
//                   onClick={() => remove(index)}
//                   className="px-2 py-1 bg-red-500 text-white rounded"
//                 >
//                   Remove
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default SprintTable;



import React from "react";
import { useFormContext, useFieldArray } from "react-hook-form";

const SprintTable = () => {
  const { control, register, trigger, formState: { errors } } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "phases.sprints", // Nested under 'phases' for better structure
  });

  return (
    <div className="border border-gray-300 p-4 rounded mt-5">
      {/* Title Section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">a. Title</h3>
        <input
          {...register("phases.title", { 
            required: "Title is required",
            maxLength: { value: 100, message: "Title should not exceed 100 characters" }
          })}
          placeholder="Enter phase title"
          className="border px-2 py-1 w-full"
        />
        {errors.phases?.title && (
          <span className="text-red-500 text-xs">{errors.phases.title.message}</span>
        )}
      </div>

      {/* Objective Section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">b. Objective</h3>
        <textarea
          {...register("phases.objective", { 
            required: "Objective is required",
            minLength: { value: 20, message: "Objective must be at least 20 characters" }
          })}
          placeholder="Enter phase objective"
          className="border px-2 py-1 w-full"
          rows={3}
        />
        {errors.phases?.objective && (
          <span className="text-red-500 text-xs">{errors.phases.objective.message}</span>
        )}
      </div>

      {/* Sprint Table Section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">c. Sprint Table</h3>
        <button
          type="button"
          onClick={() =>
            append({
              number: fields.length + 1,
              description: "",
              category: "",
              keyDeliverables: "",
            })
          }
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Sprint
        </button>

        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border p-2">Sprint Number</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Key Deliverables</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {fields.map((field, index) => (
              <tr key={field.id}>
                {/* Sprint Number (Read-only) */}
                <td className="border p-2">{field.number}</td>

                {/* Sprint Description */}
                <td className="border p-2">
                  <input
                    {...register(`phases.sprints.${index}.description`, {
                      required: "Description is required",
                      minLength: { value: 10, message: "Description must be at least 10 characters" }
                    })}
                    defaultValue={field.description}
                    className="border px-2 py-1 w-full"
                  />
                  {errors.phases?.sprints?.[index]?.description && (
                    <span className="text-red-500 text-xs">
                      {errors.phases.sprints[index].description.message}
                    </span>
                  )}
                </td>

                {/* Task Category */}
                <td className="border p-2">
                  <input
                    {...register(`phases.sprints.${index}.category`, {
                      required: "Category is required",
                      maxLength: { value: 50, message: "Category should not exceed 50 characters" }
                    })}
                    defaultValue={field.category}
                    className="border px-2 py-1 w-full"
                  />
                  {errors.phases?.sprints?.[index]?.category && (
                    <span className="text-red-500 text-xs">
                      {errors.phases.sprints[index].category.message}
                    </span>
                  )}
                </td>

                {/* Key Deliverables */}
                <td className="border p-2">
                  <textarea
                    {...register(`phases.sprints.${index}.keyDeliverables`, {
                      required: "Key Deliverables are required",
                      minLength: { value: 20, message: "Key Deliverables must be at least 20 characters" }
                    })}
                    defaultValue={field.keyDeliverables}
                    className="border px-2 py-1 w-full"
                    rows={2}
                  />
                  {errors.phases?.sprints?.[index]?.keyDeliverables && (
                    <span className="text-red-500 text-xs">
                      {errors.phases.sprints[index].keyDeliverables.message}
                    </span>
                  )}
                </td>

                {/* Remove Button */}
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

      {/* Key Deliverables Section */}
      <div>
        <h3 className="text-lg font-bold mb-2">d. Key Deliverables</h3>
        <textarea
          {...register("phases.keyDeliverables", {
            required: "Key Deliverables summary is required",
            minLength: { value: 20, message: "Summary must be at least 20 characters" }
          })}
          placeholder="Enter overall key deliverables"
          className="border px-2 py-1 w-full"
          rows={3}
        />
        {errors.phases?.keyDeliverables && (
          <span className="text-red-500 text-xs">{errors.phases.keyDeliverables.message}</span>
        )}
      </div>
    </div>
  );
};

const GoalsAndObjectives = () => {
  return (
    <div className="border border-gray-300 p-6 rounded mt-6">
      <h2 className="text-lg font-bold">Phases Table</h2>
      <SprintTable />
    </div>
  );
};

export default GoalsAndObjectives;
