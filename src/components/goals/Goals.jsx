import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useFormContext } from "react-hook-form";
import axios from "axios";

const Goals = () => {
  const { setValue, trigger, formState: { errors }, register } = useFormContext();
  const [editorContent, setEditorContent] = useState("");
  const [isTextEditorVisible, setIsTextEditorVisible] = useState(false);
  const [normalTextContent, setNormalTextContent] = useState("");
  const [loading, setLoading] = useState(false);

  // Register the goals field with validation
  register("goals.goals_objectives", {
    required: "Goals and Objectives are required",
    minLength: {
      value: 20,
      message: "Goals and Objectives must be at least 20 characters long",
    },
  });

  // Handle changes in the text editor (normal text editor, not CKEditor)
  const handleNormalTextEditorChange = (e) => {
    setNormalTextContent(e.target.value);
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

  // Handle changes in CKEditor (HTML format)
  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setEditorContent(data);
    setValue("goals.goals_objectives", data);
    trigger("goals.goals_objectives");
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "500" }}>
        Goals and Objectives:
      </label>

      <button
        type="button"
        onClick={() => setIsTextEditorVisible(true)}
        style={{
          marginTop: "0.5rem",
          color: "#2563EB",
          border: "1px solid #2563EB",
          padding: "0.5rem 1rem",
          borderRadius: "0.375rem",
          background: "white",
        }}
      >
        Edit Goals and Objectives
      </button>

      {errors.goals?.goals_objectives && (
        <span style={{ color: "#EF4444", fontSize: "0.75rem" }}>
          {errors.goals.goals_objectives.message}
        </span>
      )}

      {isTextEditorVisible && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(107, 114, 128, 0.75)",
            zIndex: 50,
          }}
        >
          <div
            style={{
              background: "white",
              padding: "1.5rem",
              borderRadius: "0.5rem",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              width: "90%",
              maxWidth: "600px",
            }}
          >
            <h3 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "1rem" }}>
              Edit Goals and Objectives (Text Editor)
            </h3>
            <textarea
              value={normalTextContent}
              onChange={handleNormalTextEditorChange}
              style={{
                width: "100%",
                height: "10rem",
                padding: "0.5rem",
                border: "1px solid #D1D5DB",
                borderRadius: "0.375rem",
              }}
            />
            <div style={{ marginTop: "1rem", display: "flex", justifyContent: "space-between" }}>
              <button
                onClick={handleSaveTextEditorContent}
                disabled={loading}
                style={{
                  backgroundColor: "#2563EB",
                  color: "white",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.375rem",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {loading ? "Saving..." : "Save"}
              </button>
              <button
                onClick={handleCancelTextEditor}
                style={{
                  backgroundColor: "#6B7280",
                  color: "white",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.375rem",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {!isTextEditorVisible && (
        <div style={{ marginTop: "1.5rem" }}>
          <h3 style={{ fontSize: "1rem", fontWeight: "700" }}>
            Goals and Objectives (HTML Editor):
          </h3>
          <CKEditor
            editor={ClassicEditor}
            // data={editorContent}
            data = {`<html>
 
<head>
<title>Converted HTML</title>
</head>
 
<body>
<h3>Project Understanding</h3>Car Management System<br><br><b>1.</b> <b>Objective</b>: Develop a
<b>Car Management System</b> to facilitate car-related operations, such as inventory management, booking,
	maintenance tracking, and user interaction.<br><b>2.</b> <b>Modules</b>:<br>
<li><b>Inventory</b>: Add, edit, delete, and search cars.</li><br>
<li><b>Booking</b>: Manage car rentals or sales.</li><br>
<li><b>Maintenance</b>: Log and schedule repairs and servicing.</li><br>
<li><b>User Management</b>: Handle customer and admin accounts.</li><br><b>3.</b> <b>Key Features</b>:<br>
<li>User-friendly <b>dashboard</b> for admin and customers.</li><br>
<li><b>Search and filter</b> cars by type, price, and availability.</li><br>
<li><b>Booking calendar</b> integration for scheduling rentals or purchases.</li><br>
<li><b>Notifications</b> for maintenance and booking updates.</li><br><b>4.</b> <b>Technology Stack</b>:<br>
<li><b>Frontend</b>: HTML, CSS, JavaScript (React/Angular).</li><br>
<li><b>Backend</b>: Node.js/Laravel.</li><br>
<li><b>Database</b>: MySQL/MongoDB.</li><br><b>5.</b> <b>Integrations</b>: Payment gateways, SMS/email
	notifications, and third-party APIs (e.g., car history checks).<br><b>6.</b> <b>Performance Goals</b>: Fast load
	times, scalability, and security (e.g., data encryption, authentication).<br><b>7.</b> <b>Stakeholders</b>: Admins,
	customers, service providers, and potential buyers.<br><b>8.</b> <b>Challenges</b>: Real-time booking conflicts,
	accurate maintenance tracking, and data synchronization.<br><b>9.</b> <b>Future Enhancements</b>:<br>
<li>AI-powered car recommendations.</li><br>
<li>Integration of IoT for live vehicle status updates.</li><br><b>10.</b> <b>Timeline</b>: Estimated project
	completion within <b>3-6 months</b> with milestones for each module.
</body>
 
</html>`}
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
          />
        </div>
      )}
    </div>
  );
};

export default Goals;