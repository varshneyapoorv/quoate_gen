import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form'; 
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const Understanding = ({ sectionActive, resetSection }) => {
  const { formState: { errors }, setValue, trigger, clearErrors } = useFormContext();
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to manage popup visibility
  const [textEditorContent, setTextEditorContent] = useState(""); // State to hold content for the normal text editor inside popup
  const [editorContent, setEditorContent] = useState(""); // State to hold content for the editor
  // const [isTextEditorVisible, setIsTextEditorVisible] = useState(false); // State to control visibility of 
  // Reset form field when section is deactivated
  React.useEffect(() => {
    if (!sectionActive) {
      setValue('understandings.project_understanding', ''); // Reset field value when section is not active
      clearErrors('understandings.project_understanding'); // Clear errors
    }
  }, [sectionActive, setValue, clearErrors]);

  // Handle changes in the text editor and sync with form state and preview
  const handleTextEditorChange = (event) => {
    const data = event.target.value; // Get content from text editor
    setTextEditorContent(data); // Update text editor content state
    setValue('understandings.project_understanding', data); // Update form state
    trigger('understandings.project_understanding'); // Trigger validation
  };

  // Handle save button in the popup
  const handleSave = () => {
    setValue('understandings.project_understanding', textEditorContent); // Save content to form state
    setIsPopupOpen(false); // Close the popup
  };

  // Handle cancel button in the popup
  const handleCancel = () => {
    setIsPopupOpen(false); // Close the popup without saving
  };

  // Handle editing in the preview section
  const handlePreviewEdit = (event) => {
    const data = event.target.value; // Get content from the preview editor
    setTextEditorContent(data); // Update text editor content state
  };

  return (
    <div className="mt-2">
      <label className="block text-sm font-medium">Project Understanding:</label>

      {/* Button to open the popup */}
      <button
        type="button"
        onClick={() => setIsPopupOpen(true)}
        className="mt-2 text-white border px-4 py-2 rounded"
      >
        Edit Project Understanding
      </button>

      {/* Display Validation Errors */}
      {errors.understandings?.project_understanding && (
        <span className="text-red-500 text-xs">
          {errors.understandings.project_understanding.message}
        </span>
      )}

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2">
            <h3 className="text-xl font-bold mb-4">Edit Project Understanding</h3>

            {/* Normal Text Editor (textarea) */}
            <textarea
              value={textEditorContent} // Bind the text editor content to state
              onChange={handleTextEditorChange}
              placeholder="Type your project understanding here..."
              className="border px-2 py-3 w-full"
              style={{height:"550px"}}
            />

            {/* Save and Cancel Buttons */}
            <div className="mt-4 flex justify-between">
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Show the value in the input as preview */}
      <div className="mt-6">
        {/* <h3 className="text-lg font-bold">Preview:</h3> */}

        {/* Preview Editing Area */}
        <div style={{height:"auto"}}>
        <CKEditor
            editor={ClassicEditor}
            data={editorContent} // Set the initial HTML content from the normal text editor
            // onChange={handleEditorChange} // Handle changes in CKEditor
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
            className="tetst" 
            
          />
        </div>
      </div>
    </div>
  );
};

export default Understanding;
