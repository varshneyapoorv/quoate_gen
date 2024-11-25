import React from "react";
import { useFormContext } from "react-hook-form";

const CaseStudies = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <>
      {/* Case Study Title */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Title</h3>
        <input
          {...register("caseStudies.title", { 
            required: "Title is required",
            minLength: { value: 3, message: "Title must be at least 3 characters" }
          })}
          placeholder="Enter Case Study Title"
          className="border px-2 py-1 w-full"
        />
        {errors.caseStudies?.title && (
          <span className="text-red-500 text-xs">{errors.caseStudies.title.message}</span>
        )}
      </div>

      {/* Description Section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Description</h3>
        <textarea
          {...register("caseStudies.description", { 
            required: "Description is required", 
            minLength: { value: 10, message: "Description must be at least 10 characters" }
          })}
          placeholder="Enter description for the case study"
          className="border px-2 py-1 w-full"
          rows={3}
        />
        {errors.caseStudies?.description && (
          <span className="text-red-500 text-xs">{errors.caseStudies.description.message}</span>
        )}
      </div>

      {/* Problem Identification / Feasibility Section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Problem Identification / Feasibility</h3>
        <textarea
          {...register("caseStudies.problemIdentification", { 
            required: "Problem Identification is required", 
            minLength: { value: 10, message: "Problem Identification must be at least 10 characters" }
          })}
          placeholder="Enter Problem Identification / Feasibility"
          className="border px-2 py-1 w-full"
          rows={3}
        />
        {errors.caseStudies?.problemIdentification && (
          <span className="text-red-500 text-xs">{errors.caseStudies.problemIdentification.message}</span>
        )}
      </div>

      {/* Process Followed Section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Process Followed</h3>
        <textarea
          {...register("caseStudies.processFollowed", { 
            required: "Process Followed is required", 
            minLength: { value: 10, message: "Process Followed must be at least 10 characters" }
          })}
          placeholder="Enter the process followed"
          className="border px-2 py-1 w-full"
          rows={3}
        />
        {errors.caseStudies?.processFollowed && (
          <span className="text-red-500 text-xs">{errors.caseStudies.processFollowed.message}</span>
        )}
      </div>

      {/* Features/Functionalities Added Section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Features/Functionalities Added</h3>
        <textarea
          {...register("caseStudies.featuresAdded", { 
            required: "Features/Functionalities Added is required", 
            minLength: { value: 10, message: "Features/Functionalities Added must be at least 10 characters" }
          })}
          placeholder="Enter Features/Functionalities Added"
          className="border px-2 py-1 w-full"
          rows={3}
        />
        {errors.caseStudies?.featuresAdded && (
          <span className="text-red-500 text-xs">{errors.caseStudies.featuresAdded.message}</span>
        )}
      </div>

      {/* Challenges Section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Challenges</h3>
        <textarea
          {...register("caseStudies.challenges", { 
            required: "Challenges are required", 
            minLength: { value: 10, message: "Challenges must be at least 10 characters" }
          })}
          placeholder="Enter challenges faced during the project"
          className="border px-2 py-1 w-full"
          rows={3}
        />
        {errors.caseStudies?.challenges && (
          <span className="text-red-500 text-xs">{errors.caseStudies.challenges.message}</span>
        )}
      </div>

      {/* Final Outcome Section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Final Outcome</h3>
        <textarea
          {...register("caseStudies.finalOutcome", { 
            required: "Final Outcome is required", 
            minLength: { value: 10, message: "Final Outcome must be at least 10 characters" }
          })}
          placeholder="Enter the final outcome of the case study"
          className="border px-2 py-1 w-full"
          rows={3}
        />
        {errors.caseStudies?.finalOutcome && (
          <span className="text-red-500 text-xs">{errors.caseStudies.finalOutcome.message}</span>
        )}
      </div>
    </>
  );
};

export default CaseStudies;
