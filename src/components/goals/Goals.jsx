// import React from "react";
// import { useFormContext } from "react-hook-form";
// import ReactQuill from "react-quill"; // Import the Quill editor
// import "react-quill/dist/quill.snow.css"; // Import styles for the editor

// const Goals = () => {
//   const { setValue, watch, trigger, formState: { errors } } = useFormContext();

//   // Watch the current value for the editor
//   const projectUnderstanding = watch("goals.project_understanding", "");

//   // Handle the editor content change
//   const handleEditorChange = (value) => {
//     setValue("goals.project_understanding", value); // Update form value
//     trigger("goals.project_understanding"); // Trigger validation
//   };

//   return (
//     <div className="mt-2">
//       <label className="block text-sm font-medium">Project Understanding:</label>
      
//       {/* Quill Editor */}
//       <ReactQuill
//         value={projectUnderstanding} // Controlled value
//         onChange={handleEditorChange}
//         className="border px-2 py-12 w-full"
//       />
      
//       {/* Validation Error */}
//       {errors.goals?.project_understanding && (
//         <span className="text-red-500 text-xs">
//           {errors.goals.project_understanding.message}
//         </span>
//       )}
//     </div>
//   );
// };

// export default Goals;

import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useFormContext } from "react-hook-form";
import parse from "html-react-parser";

const Goals = () => {
  const { setValue, trigger, formState: { errors } } = useFormContext();
  const [previewContent, setPreviewContent] = useState(""); // State to hold the rendered HTML content for preview

  const handleEditorChange = (event, editor) => {
    const data = editor.getData(); // Retrieve the HTML content
    setValue("goals.goals_objectives", data); // Update the form state with the HTML content
    setPreviewContent(data); // Update the preview content
    trigger("goals.goals_objectives"); // Trigger validation for the field
  };

  return (
    <div className="mt-4">
      <label className="block text-sm font-medium">Goals and Objectives:</label>

      {/* CKEditor Component */}
      <CKEditor
        editor={ClassicEditor}
        data={previewContent} // Set the initial value for the editor
        onChange={handleEditorChange}
        config={{
          toolbar: [
            "heading",
            "|",
            "bold",
            "italic",
            "link",
            "bulletedList",
            "numberedList",
            "|",
            "undo",
            "redo",
          ],
        }}
        className="border px-2 py-9 w-full"
      />

      {/* Display Validation Errors */}
      {errors.goals?.goals_objectives && (
        <span className="text-red-500 text-xs">
          {errors.goals.goals_objectives.message}
        </span>
      )}

      {/* Preview Section */}
      <div className="mt-6">
        <h3 className="text-lg font-bold">Preview:</h3>
        <div className="border px-4 py-3 bg-gray-50">
          {previewContent ? parse(previewContent) : <em>No content to preview</em>}
        </div>
      </div>
    </div>
  );
};

export default Goals;
