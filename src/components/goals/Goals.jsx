import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill's CSS for styling
import axios from "axios";

const Goals = () => {
  const { setValue, trigger, formState: { errors }, register } = useFormContext();
  const [editorContent, setEditorContent] = useState("");
  const [normalTextContent, setNormalTextContent] = useState("");
  const [isTextEditorVisible, setIsTextEditorVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  // Register the goals field with validation
  register("goals.goals_objectives", {
    required: "Goals and Objectives are required",
    // minLength: {
    //   value: 20,
    //   message: "Goals and Objectives must be at least 20 characters long",
    // },
  });

  // Handle changes in the normal text editor (contentEditable div)
  const handleNormalTextEditorChange = (e) => {
    setNormalTextContent(e.target.innerHTML);
  };

  // Handle saving content from normal text editor with API call
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
      setEditorContent(html); // Set formatted content
      setValue("goals.goals_objectives", html); // Save to form state
      trigger("goals.goals_objectives");
      setIsTextEditorVisible(false);
    } catch (error) {
      console.error("Error formatting content:", error);
      alert("Failed to save and format the content. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle canceling the editing of normal text editor
  const handleCancelTextEditor = () => {
    setIsTextEditorVisible(false);
  };

  // Handle changes in ReactQuill (HTML format)
  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setEditorContent(data);
    setValue("goals.goals_objectives", data);
    trigger("goals.goals_objectives");
  };

//   return (
//     <div className="mt-4">
//       <label className="block text-sm font-medium">
//         Goals and Objectives:
//       </label>

//       <button
//         type="button"
//         onClick={() => setIsTextEditorVisible(true)}
//         className="mt-2 text-white border px-4 py-2 rounded"
//       >
//         Edit Goals and Objectives
//       </button>

//       {errors.goals?.goals_objectives && (
//         <span className="text-red-500 text-xs">
//           {errors.goals.goals_objectives.message}
//         </span>
//       )}

//       {isTextEditorVisible && (
//         <div
//           className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50"
//         >
//           <div
//             className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2 py-20"
//           >
//             <h3 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "1rem" }}>
//               Edit Goals and Objectives (Text Editor)
//             </h3>
//             <textarea
//               value={normalTextContent}
//               onChange={handleNormalTextEditorChange}
//               style={{
//                 width: "100%",
//                 height: "10rem",
//                 padding: "0.5rem",
//                 border: "1px solid #D1D5DB",
//                 borderRadius: "0.375rem",
//               }}
//             />
//             <div style={{ marginTop: "1rem", display: "flex", justifyContent: "space-between" }}>
//               <button
//                 onClick={handleSaveTextEditorContent}
//                 disabled={loading}
//                 style={{
//                   backgroundColor: "#2563EB",
//                   color: "white",
//                   padding: "0.5rem 1rem",
//                   borderRadius: "0.375rem",
//                   border: "none",
//                   cursor: "pointer",
//                 }}
//               >
//                 {loading ? "Saving..." : "Save"}
//               </button>
//               <button
//                 onClick={handleCancelTextEditor}
//                 style={{
//                   backgroundColor: "#6B7280",
//                   color: "white",
//                   padding: "0.5rem 1rem",
//                   borderRadius: "0.375rem",
//                   border: "none",
//                   cursor: "pointer",
//                 }}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {!isTextEditorVisible && (
//         <div style={{ marginTop: "1.5rem" }}>
//           <h3 style={{ fontSize: "1rem", fontWeight: "700" }}>
//             Goals and Objectives (HTML Editor):
//           </h3>
//           <CKEditor
//             editor={ClassicEditor}
//             // data={editorContent}
//             data = {`<html>
 
// <head>
// <title>Converted HTML</title>
// </head>
 
// <body>
// <h3>Project Understanding</h3>Car Management System<br><br><b>1.</b> <b>Objective</b>: Develop a
// <b>Car Management System</b> to facilitate car-related operations, such as inventory management, booking,
// 	maintenance tracking, and user interaction.<br><b>2.</b> <b>Modules</b>:<br>
// <li><b>Inventory</b>: Add, edit, delete, and search cars.</li><br>
// <li><b>Booking</b>: Manage car rentals or sales.</li><br>
// <li><b>Maintenance</b>: Log and schedule repairs and servicing.</li><br>
// <li><b>User Management</b>: Handle customer and admin accounts.</li><br><b>3.</b> <b>Key Features</b>:<br>
// <li>User-friendly <b>dashboard</b> for admin and customers.</li><br>
// <li><b>Search and filter</b> cars by type, price, and availability.</li><br>
// <li><b>Booking calendar</b> integration for scheduling rentals or purchases.</li><br>
// <li><b>Notifications</b> for maintenance and booking updates.</li><br><b>4.</b> <b>Technology Stack</b>:<br>
// <li><b>Frontend</b>: HTML, CSS, JavaScript (React/Angular).</li><br>
// <li><b>Backend</b>: Node.js/Laravel.</li><br>
// <li><b>Database</b>: MySQL/MongoDB.</li><br><b>5.</b> <b>Integrations</b>: Payment gateways, SMS/email
// 	notifications, and third-party APIs (e.g., car history checks).<br><b>6.</b> <b>Performance Goals</b>: Fast load
// 	times, scalability, and security (e.g., data encryption, authentication).<br><b>7.</b> <b>Stakeholders</b>: Admins,
// 	customers, service providers, and potential buyers.<br><b>8.</b> <b>Challenges</b>: Real-time booking conflicts,
// 	accurate maintenance tracking, and data synchronization.<br><b>9.</b> <b>Future Enhancements</b>:<br>
// <li>AI-powered car recommendations.</li><br>
// <li>Integration of IoT for live vehicle status updates.</li><br><b>10.</b> <b>Timeline</b>: Estimated project
// 	completion within <b>3-6 months</b> with milestones for each module.
// </body>
 
// </html>`}
//             onChange={handleEditorChange}
//             config={{
//               toolbar: [
//                 "heading",
//                 "|",
//                 "bold",
//                 "italic",
//                 "link",
//                 "bulletedList",
//                 "numberedList",
//                 "|",
//                 "undo",
//                 "redo",
//               ],
//             }}
//           />
//         </div>
//       )}
//     </div>
//   );


return (
  <div className="mt-4">
    <label className="block text-sm font-medium">
    Goals & Objectives:</label>
    

    {/* Button to open the normal text editor */}
    <button
      type="button"
      onClick={() => setIsTextEditorVisible(true)} // Open the normal text editor
      className="mt-2 text-white border px-4 py-2 rounded"
    >
      Edit Goals & Objectives
    </button>

    {/* Show validation errors */}
    {errors?.goals?.goals_objectives && (
      <span className="text-red-500 text-xs">
        {errors.goals.goals_objectives.message}
      </span>
    )}

    {/* Normal text editor (contentEditable div) */}
    {isTextEditorVisible && (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2 py-20">
          <h3 className="text-xl font-bold mb-4">Edit Goals and Objectives</h3>

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
        <h3 className="text-lg font-bold">Goals and Objectives:</h3>

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

export default Goals;