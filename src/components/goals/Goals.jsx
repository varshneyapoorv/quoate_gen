import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useFormContext } from "react-hook-form";
import axios from 'axios'; // Import axios


const Goals = () => {
  const { setValue, trigger, formState: { errors }, register } = useFormContext();
  const [editorContent, setEditorContent] = useState("");
  const [isTextEditorVisible, setIsTextEditorVisible] = useState(false); // State to control visibility of text editor popup
  const [normalTextContent, setNormalTextContent] = useState(""); // State to hold content from normal text editor
  const [loading, setLoading] = useState(false);
  // comst [response, setResponce = useState(false)];

  // Register the goals field with validation
  register("goals.goals_objectives", {
    required: "Goals and Objectives are robjectequired",
    minLength: {
      value: 20,
      message: "Goals and Objectives must be at least 20 characters long",
    },
  });

  // Handle changes in the text editor (normal text editor, not CKEditor)
  const handleNormalTextEditorChange = (e) => {
    setNormalTextContent(e.target.value); // Update the normal text editor content
  };

  // Handle saving content from normal text editor with API call

  const handleSaveTextEditorContent = async () => {
    setLoading(true);
    try {
      // Make API call using axios
      const response = await axios.post(
        "https://bt6sm1bk-4000.inc1.devtunnels.ms/api/v1/format-to-html",
        { text: normalTextContent }, // Request body as plain JavaScript object
        {
          headers: {
            "Content-Type": "application/json", // Content type set to JSON
          },
        }
      );
      
      console.log(response); // Log the entire response
  
      if (response.status !== 200) {
        // Check if the status code is not 200 (OK), throw error
        throw new Error("Failed to format content");
      }
  
      const { formattedContent } = response.data; // Get the formatted content from the response data
      console.log(formattedContent); // Log the formatted content
  
      // Set the formatted content to the editor and form state
      setEditorContent(formattedContent);
      setValue("goals.goals_objectives", formattedContent);
      trigger("goals.goals_objectives");
      setIsTextEditorVisible(false); // Close the normal text editor popup
    } catch (error) {
      console.error("Error formatting content:", error);
      alert("Failed to save and format the content. Please try again.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };
  

  // Handle canceling the editing of normal text editor
  const handleCancelTextEditor = () => {
    setIsTextEditorVisible(false); // Close the normal text editor without saving
  };

  // Handle changes in CKEditor (HTML format)
  const handleEditorChange = (event, editor) => {
    const data = editor.getData(); // Get HTML content from CKEditor
    setEditorContent(data); // Update CKEditor content state
    setValue("goals.goals_objectives", data); // Sync with form state
    trigger("goals.goals_objectives"); // Trigger validation
  };

  return (
    <div className="mt-4">
      <label className="block text-sm font-medium">Goals and Objectives:</label>

      {/* Button to open the normal text editor popup */}
      <button
        type="button"
        onClick={() => setIsTextEditorVisible(true)} // Open normal text editor popup
        className="mt-2 text-blue-500 border px-4 py-2 rounded"
      >
        Edit Goals and Objectives
      </button>

      {/* Display Validation Errors */}
      {errors.goals?.goals_objectives && (
        <span className="text-red-500 text-xs">
          {errors.goals.goals_objectives.message}
        </span>
      )}

      {/* Show the normal text editor popup */}
      {isTextEditorVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2 py-20">
            <h3 className="text-xl font-bold mb-4">Edit Goals and Objectives (Text Editor)</h3>

            {/* Normal text editor (textarea) inside popup */}
            <textarea
              value={normalTextContent} // Bind content to the normal text editor state
              onChange={handleNormalTextEditorChange} // Handle changes in the normal text editor
              className="border px-2 py-2 w-full h-40"
            />

            {/* Save and Cancel Buttons for text editor */}
            <div className="mt-4 flex justify-between">
              <button
                onClick={handleSaveTextEditorContent} // Save content to CKEditor
                className="bg-blue-500 text-white px-4 py-2 rounded"
                disabled={loading}
              >
                {loading ? "Saving..." : "Save"}
              </button>
              <button
                onClick={handleCancelTextEditor} // Close the editor without saving
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* If normal text editor is not visible, show CKEditor for HTML preview/edit */}
      {!isTextEditorVisible && (
        <div className="mt-6">
          <h3 className="text-lg font-bold">Goals and Objectives (HTML Editor):</h3>

          {/* CKEditor to display the HTML content */}
          <CKEditor
            editor={ClassicEditor}
            data={editorContent} // Set the initial HTML content from the normal text editor
            onChange={handleEditorChange} // Handle changes in CKEditor
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
            className="border px-2 py-9 w-full py-30"
          />
        </div>
      )}
    </div>
  );
};

export default Goals;