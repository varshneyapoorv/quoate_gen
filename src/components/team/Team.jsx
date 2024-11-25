import React from "react";
import { useFormContext } from "react-hook-form";

const TeamStructure = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <>
      {/* Team Member Name Section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Team Member Name</h3>
        <input
          {...register("team.memberName", {
            required: "Team Member Name is required",
            minLength: { value: 3, message: "Name must be at least 3 characters long" },
            maxLength: { value: 50, message: "Name cannot exceed 50 characters" }
          })}
          placeholder="Enter Team Member Name"
          className="border px-2 py-1 w-full"
        />
        {errors.team?.memberName && (
          <span className="text-red-500 text-xs">{errors.team.memberName.message}</span>
        )}
      </div>

      {/* Role Section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Role</h3>
        <input
          {...register("team.role", {
            required: "Role is required",
            minLength: { value: 3, message: "Role must be at least 3 characters long" },
            maxLength: { value: 50, message: "Role cannot exceed 50 characters" }
          })}
          placeholder="Enter Role"
          className="border px-2 py-1 w-full"
        />
        {errors.team?.role && (
          <span className="text-red-500 text-xs">{errors.team.role.message}</span>
        )}
      </div>

      {/* Responsibilities Section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Responsibilities</h3>
        <textarea
          {...register("team.responsibilities", {
            required: "Responsibilities are required",
            minLength: { value: 10, message: "Responsibilities must be at least 10 characters long" },
            maxLength: { value: 500, message: "Responsibilities cannot exceed 500 characters" }
          })}
          placeholder="Enter Team Member Responsibilities"
          className="border px-2 py-1 w-full"
          rows={3}
        />
        {errors.team?.responsibilities && (
          <span className="text-red-500 text-xs">{errors.team.responsibilities.message}</span>
        )}
      </div>

      {/* Experience Section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Experience</h3>
        <input
          {...register("team.experience", {
            required: "Experience is required",
            minLength: { value: 5, message: "Experience must be at least 5 characters long" },
            maxLength: { value: 200, message: "Experience cannot exceed 200 characters" }
          })}
          placeholder="Enter Team Member Experience"
          className="border px-2 py-1 w-full"
        />
        {errors.team?.experience && (
          <span className="text-red-500 text-xs">{errors.team.experience.message}</span>
        )}
      </div>

      {/* Contact Info Section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Contact Info</h3>
        <input
          {...register("team.contactInfo", {
            required: "Contact Info is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Contact Info must be a valid 10-digit phone number"
            }
          })}
          placeholder="Enter Team Member Contact Info"
          className="border px-2 py-1 w-full"
        />
        {errors.team?.contactInfo && (
          <span className="text-red-500 text-xs">{errors.team.contactInfo.message}</span>
        )}
      </div>

      {/* Team Member Photo Section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Team Member Photo</h3>
        <input
          {...register("team.photo", {
            required: "Photo is required",
            validate: {
              validateImage: (files) => files[0]?.size <= 5000000 || "File size should be less than 5MB", // Max size 5MB
              validateImageType: (files) => 
                ["image/jpeg", "image/png", "image/gif"].includes(files[0]?.type) || "Only JPEG, PNG, and GIF formats are allowed"
            }
          })}
          type="file"
          className="border px-2 py-1 w-full"
        />
        {errors.team?.photo && (
          <span className="text-red-500 text-xs">{errors.team.photo.message}</span>
        )}
      </div>
    </>
  );
};

export default TeamStructure;
