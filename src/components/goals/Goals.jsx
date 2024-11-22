import React, { useRef } from "react";
import { useFormContext } from "react-hook-form";
import ReactQuill from "react-quill"; // Import the Quill editor
import "react-quill/dist/quill.snow.css"; // Import the styles for the editor

const Goals = () => {
  const { register, setValue, trigger, formState: { errors } } = useFormContext();
  const quillRef = useRef(null);

  // Handle the editor content change
  const handleEditorChange = (value) => {
    setValue("goals.project_understanding", value); // Set form value to the Quill editor content
    trigger("goals.project_understanding"); // Trigger validation on change
  };

  return (
    <div className="mt-2">
      <label className="block text-sm font-medium">Project Understanding:</label>
      
      {/* Quill Editor */}
      <ReactQuill
        ref={quillRef}
        value={register("goals.project_understanding").value || ""} // Set the initial value
        onChange={handleEditorChange}
        className="border px-2 py-12 w-full"
      />
      
      {errors.goals?.project_understanding && (
        <span className="text-red-500 text-xs">
          {errors.goals.project_understanding.message}
        </span>
      )}
    </div>
  );
};

export default Goals;
