import React, { useState } from 'react';

const ResourceTable = () => {
  const [resources, setResources] = useState([]);

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

  return (
    <div>
      <button onClick={addResource} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
        Add Resource
      </button>
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
              <td className="border p-2">
                <input
                  type="text"
                  value={resource.name}
                  onChange={(e) => updateResource(index, 'name', e.target.value)}
                  className="border px-2 py-1"
                />
              </td>
              <td className="border p-2">
                <input
                  type="number"
                  value={resource.count}
                  onChange={(e) => updateResource(index, 'count', e.target.value)}
                  className="border px-2 py-1"
                />
              </td>
              <td className="border p-2">
                <input
                  type="number"
                  value={resource.hourlyCost}
                  onChange={(e) => updateResource(index, 'hourlyCost', e.target.value)}
                  className="border px-2 py-1"
                />
              </td>
              <td className="border p-2">
                <button
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
    </div>
  );
};

export default ResourceTable;
