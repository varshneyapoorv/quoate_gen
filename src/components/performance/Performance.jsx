import React from "react";
import { useFormContext } from "react-hook-form";

const PerformanceObjectives = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <>
      {/* Objective Title Section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Objective Title</h3>
        <input
          {...register("performanceObjectives.objectiveTitle", { required: "Objective Title is required" })}
          placeholder="Enter Objective Title"
          className="border px-2 py-1 w-full"
        />
        {errors.performanceObjectives?.objectiveTitle && (
          <span className="text-red-500 text-xs">{errors.performanceObjectives.objectiveTitle.message}</span>
        )}
      </div>

      {/* Objective Description Section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Objective Description</h3>
        <textarea
          {...register("performanceObjectives.objectiveDescription", { required: "Objective Description is required" })}
          placeholder="Enter Objective Description"
          className="border px-2 py-1 w-full"
          rows={3}
        />
        {errors.performanceObjectives?.objectiveDescription && (
          <span className="text-red-500 text-xs">{errors.performanceObjectives.objectiveDescription.message}</span>
        )}
      </div>

      {/* Key Results Section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Key Results</h3>
        <textarea
          {...register("performanceObjectives.keyResults", { required: "Key Results are required" })}
          placeholder="Enter Key Results"
          className="border px-2 py-1 w-full"
          rows={3}
        />
        {errors.performanceObjectives?.keyResults && (
          <span className="text-red-500 text-xs">{errors.performanceObjectives.keyResults.message}</span>
        )}
      </div>

      {/* Timeline Section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Timeline</h3>
        <input
          {...register("performanceObjectives.timeline", { required: "Timeline is required" })}
          placeholder="Enter Timeline"
          className="border px-2 py-1 w-full"
        />
        {errors.performanceObjectives?.timeline && (
          <span className="text-red-500 text-xs">{errors.performanceObjectives.timeline.message}</span>
        )}
      </div>

      {/* Performance Metrics Section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Performance Metrics</h3>
        <textarea
          {...register("performanceObjectives.performanceMetrics", { required: "Performance Metrics are required" })}
          placeholder="Enter Performance Metrics"
          className="border px-2 py-1 w-full"
          rows={3}
        />
        {errors.performanceObjectives?.performanceMetrics && (
          <span className="text-red-500 text-xs">{errors.performanceObjectives.performanceMetrics.message}</span>
        )}
      </div>
    </>
  );
};

export default PerformanceObjectives;
