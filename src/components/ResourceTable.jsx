import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

const ResourceTable = () => {
  const [resources, setResources] = useState([]);
  const { control, handleSubmit, setValue, trigger, formState: { errors } } = useForm();

  const addResource = () => {
    setResources([...resources, { name: '', count: '', hourlyCost: '' }]);
  };

  const removeResource = (index) => {
    setResources(resources.filter((_, i) => i !== index));
  };

  const updateResource = (index, field, value) => {
    const updatedResources = [...resources];
    updatedResources[index][field] = value;
    setResources(updatedResources);
  };

  const onSubmit = (data) => {
    console.log('Form submitted with data:', data);
  };

  return (
    <div>
      <button onClick={addResource} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
        Add Resource
      </button>
      <form onSubmit={handleSubmit(onSubmit)}>

        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Count</th>
              <th className="border p-2">Hourly Cost</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {resources.map((resource, index) => (
              <tr key={index}>
                {/* Name Field */}
                <td className="border p-2">
                  <Controller
                    name={`resources[${index}].name`}
                    control={control}
                    rules={{ required: "Name is required" }}
                    defaultValue={resource.name}
                    render={({ field }) => (
                      <>
                        <input
                          {...field}
                          type="text"
                          onChange={(e) => {
                            field.onChange(e);
                            updateResource(index, 'name', e.target.value);
                          }}
                          className="border px-2 py-1"
                        />
                        {errors.resources?.[index]?.name && (
                          <span className="text-red-500 text-xs">{errors.resources[index].name.message}</span>
                        )}
                      </>
                    )}
                  />
                </td>

                {/* Count Field */}
                <td className="border p-2">
                  <Controller
                    name={`resources[${index}].count`}
                    control={control}
                    rules={{
                      required: "Count is required",
                      min: { value: 1, message: "Count must be greater than 0" },
                    }}
                    defaultValue={resource.count}
                    render={({ field }) => (
                      <>
                        <input
                          {...field}
                          type="number"
                          onChange={(e) => {
                            field.onChange(e);
                            updateResource(index, 'count', e.target.value);
                          }}
                          className="border px-2 py-1"
                        />
                        {errors.resources?.[index]?.count && (
                          <span className="text-red-500 text-xs">{errors.resources[index].count.message}</span>
                        )}
                      </>
                    )}
                  />
                </td>

                {/* Hourly Cost Field */}
                <td className="border p-2">
                  <Controller
                    name={`resources[${index}].hourlyCost`}
                    control={control}
                    rules={{
                      required: "Hourly cost is required",
                      min: { value: 0, message: "Hourly cost must be greater than or equal to 0" },
                    }}
                    defaultValue={resource.hourlyCost}
                    render={({ field }) => (
                      <>
                        <input
                          {...field}
                          type="number"
                          onChange={(e) => {
                            field.onChange(e);
                            updateResource(index, 'hourlyCost', e.target.value);
                          }}
                          className="border px-2 py-1"
                        />
                        {errors.resources?.[index]?.hourlyCost && (
                          <span className="text-red-500 text-xs">{errors.resources[index].hourlyCost.message}</span>
                        )}
                      </>
                    )}
                  />
                </td>

                {/* Remove Button */}
                <td className="border p-2">
                  <button
                    type="button"
                    onClick={() => removeResource(index)}
                    className="px-2 py-1 bg-red-500 text-white rounded"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button type="submit" className="mt-4 px-4 py-2 bg-green-500 text-white rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ResourceTable;
