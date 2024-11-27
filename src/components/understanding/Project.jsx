// import React, { useState } from 'react';
// import { useFormContext } from 'react-hook-form';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css'; // Import Quill's CSS for styling
// import axios from 'axios';

// const Project = () => {
//   const { setValue, trigger, formState: { errors }, register } = useFormContext();
//   const [editorContent, setEditorContent] = useState(""); // Store HTML content from ReactQuill
//   const [isTextEditorVisible, setIsTextEditorVisible] = useState(false); // State to control visibility of text editor popup
//   const [normalTextContent, setNormalTextContent] = useState(""); // State for plain text editor content
//   const [loading, setLoading] = useState(false); // Loading state for save operation

//   // Register the field with validation for project understanding
//   register("project.project_understanding", {
//     required: "Project Understanding is required",
//     message: "Project and Understanding must be at least 20 characters long",
//   });

//   // Handle changes in the normal text editor (textarea)
//   const handleNormalTextEditorChange = (e) => {
//     setNormalTextContent(e.target.value); // Update plain text content
//   };

//   // Handle saving content from the normal text editor (converting to HTML)
//   const handleSaveTextEditorContent = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.post(
//         "https://bt6sm1bk-4000.inc1.devtunnels.ms/api/v1/format-to-html",
//         { text: normalTextContent },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//             // change to make
//       setEditorContent(response.data.html);

//       if (response.status === 200) {
//         const formattedContent = response.data.formattedContent || ""; // Get the formatted HTML
//         setEditorContent(formattedContent); // Update ReactQuill content
//         setValue("project.project_understanding", formattedContent); // Update form value
//         trigger("project.project_understanding"); // Trigger validation
//         setIsTextEditorVisible(false); // Close the plain text editor
//       } else {
//         throw new Error("Failed to format content");
//       }
//     } catch (error) {
//       console.error("Error formatting content:", error);
//       alert("Failed to save and format the content. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle canceling the editing (close the text editor)
//   const handleCancelTextEditor = () => {
//     setIsTextEditorVisible(false); // Close the editor without saving
//   };

//   // Handle changes in ReactQuill (HTML format)
//   const handleEditorChange = (content) => {
//     setEditorContent(content); // Update ReactQuill content state
//     setValue("project.project_understanding", content); // Sync with form state
//     trigger("project.project_understanding"); // Trigger validation
//   };

//   return (
//     <div className="mt-4">
//       <label className="block text-sm font-medium">Project Understanding:</label>

//       {/* Button to open the normal text editor */}
//       <button
//         type="button"
//         onClick={() => setIsTextEditorVisible(true)} // Open the normal text editor
//         className="mt-2 text-blue-500 border px-4 py-2 rounded"
//       >
//         Edit Project Understanding
//       </button>

//       {/* Show validation errors */}
//       {errors?.project?.project_understanding && (
//         <span className="text-red-500 text-xs">
//           {errors.project.project_understanding.message}
//         </span>
//       )}

//       {/* Normal text editor (textarea) popup */}
//       {isTextEditorVisible && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2 py-20">
//             <h3 className="text-xl font-bold mb-4">Edit Project Understanding (Text Editor)</h3>

//             {/* Textarea editor */}
//             <textarea
//               value={normalTextContent} // Bind content to the state
//               onChange={handleNormalTextEditorChange} // Update state on change
//               className="border px-2 py-2 w-full h-40"
//             />

//             {/* Save and cancel buttons */}
//             <div className="mt-4 flex justify-between">
//               <button
//                 onClick={handleSaveTextEditorContent}
//                 className="bg-blue-500 text-white px-4 py-2 rounded"
//                 disabled={loading}
//               >
//                 {loading ? "Saving..." : "Save"}
//               </button>
//               <button
//                 onClick={handleCancelTextEditor}
//                 className="bg-gray-500 text-white px-4 py-2 rounded"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* If normal text editor is not visible, show ReactQuill for HTML content */}
//       {!isTextEditorVisible && (
//         <div className="mt-6">
//           <h3 className="text-lg font-bold">Project Understanding (HTML Editor):</h3>

//           {/* ReactQuill editor for HTML content */}
//           <ReactQuill
//             value={editorContent} // Bind HTML content to the editor
//             onChange={handleEditorChange} // Update content on change
//             modules={{
//               toolbar: [
//                 [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
//                 [{ 'list': 'ordered' }, { 'list': 'bullet' }],
//                 ['bold', 'italic', 'underline'],
//                 ['link'],
//                 [{ 'align': [] }],
//                 ['image'],
//                 ['blockquote', 'code-block'],
//                 ['undo'], // Only include undo
//                 ['redo'], // Ensure these are supported
//               ],
//             }}
//             className="border px-2 py-9 w-full py-30"
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Project;



import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill's CSS for styling
import axios from "axios";


const Project = () => {
  const { setValue, trigger, formState: { errors }, register } = useFormContext();
  const [editorContent, setEditorContent] = useState(""); // Store HTML content for ReactQuill
  const [normalTextContent, setNormalTextContent] = useState(""); // Store plain text content
  const [isTextEditorVisible, setIsTextEditorVisible] = useState(false); // State for showing/hiding normal text editor
  const [loading, setLoading] = useState(false); // Loading state for save operation

  // Register the field with validation for project understanding
  register("project.project_understanding", {
    required: "Project Understanding is required",
  });

  // Handle changes in the normal text editor (contentEditable div)
  const handleNormalTextEditorChange = (e) => {
    setNormalTextContent(e.target.innerHTML); // Update plain text content
  };

  // Save plain text content and display it in ReactQuill
  const handleSaveTextEditorContent = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://bt6sm1bk-4000.inc1.devtunnels.ms/api/v1/format-to-html",
        { text: normalTextContent },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status !== 200) {
        throw new Error("Failed to format content");
      }

      const { html } = response.data;
      setEditorContent(html);
      setValue("project.project_understanding", html);
      trigger("project.project_understanding");
      setIsTextEditorVisible(false);
    } catch (error) {
      console.error("Error formatting content:", error);
      alert("Failed to save and format the content. Please try again.");
    } finally {
      setLoading(false);
    }
    // setEditorContent(normalTextContent); // Set content for ReactQuill
    // setValue("project.project_understanding", normalTextContent); // Update form value
    // trigger("project.project_understanding"); // Trigger validation
    // setIsTextEditorVisible(false); // Close normal text editor
  };

  // Handle canceling the editing (close the editor)
  const handleCancelTextEditor = () => {
    setIsTextEditorVisible(false); // Close the editor without saving
  };

  // Handle changes in ReactQuill (HTML format)
  const handleEditorChange = (content) => {
    console.log(content)
    setEditorContent(content); // Update ReactQuill content state
    setValue("project.project_understanding", content); // Sync with form state
    trigger("project.project_understanding"); // Trigger validation
  };

  return (
    <div className="mt-4">
      <label className="block text-sm font-medium">Project Understanding:</label>

      {/* Button to open the normal text editor */}
      <button
        type="button"
        onClick={() => setIsTextEditorVisible(true)} // Open the normal text editor
        className="mt-2 text-white border px-4 py-2 rounded"
      >
        Edit Project Understanding
      </button>

      {/* Show validation errors */}
      {errors?.project?.project_understanding && (
        <span className="text-red-500 text-xs">
          {errors.project.project_understanding.message}
        </span>
      )}

      {/* Normal text editor (contentEditable div) */}
      {isTextEditorVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2 py-20">
            <h3 className="text-xl font-bold mb-4">Edit Project Understanding (Text Editor)</h3>

            {/* ContentEditable div to allow rich text input */}
            <div
              contentEditable
              dangerouslySetInnerHTML={{ __html: normalTextContent }} // Initialize with existing content
              onInput={handleNormalTextEditorChange} // Update content on change
              className="border px-2 py-56 w-full h-96"
              style={{ minHeight: '200px', borderColor: '#ddd', borderRadius: '8px', padding: '10px' }}
            />
            {/* Save and cancel buttons */}
            <div className="mt-4 flex justify-between">
              <button
                onClick={handleSaveTextEditorContent}
                className="bg-blue-500 text-white px-4 py-2 rounded"
                disabled={loading}
              >
                {loading ? "Saving..." : "Save"}
              </button>
              <button
                onClick={handleCancelTextEditor}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* If normal text editor is not visible, show ReactQuill for HTML content */}
      {!isTextEditorVisible && (
        <div className="mt-6">
          <h3 className="text-lg font-bold">Project Understanding (HTML Editor):</h3>

          {/* ReactQuill editor for HTML content */}
          <ReactQuill 
            value={editorContent} // Bind HTML content to the editor
            onChange={handleEditorChange} // Update content on change
            modules={{
              toolbar: [
                [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                ['bold', 'italic', 'underline'],
                ['link'],
                [{ 'align': [] }],
                ['image'],
                ['blockquote', 'code-block'],
                ['undo', 'redo'],
              ],
            }}
            className="border px-2 py-3 w-full py-30 min-h-48"
          />
        </div>
      )}
    </div>
  );
};

export default Project;
