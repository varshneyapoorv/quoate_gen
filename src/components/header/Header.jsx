import React from 'react';
import { useFormContext } from 'react-hook-form'; // Importing useFormContext to access methods

const Header = () => {
  const { register, formState: { errors }, trigger } = useFormContext(); // Destructuring methods from context

  return (
    <>
      <div>
        {/* Contact Person Name */}
        <div className="mt-2">
          <label className="block text-sm font-medium">Contact Person Name :</label>
          <input
            {...register('header.contactPersonName', {
              required: 'Contact Person Name is required',
              onBlur: () => trigger('header.contactPersonName'), // Validate on blur
            })}
            className="border px-2 py-1 w-full"
          />
          {errors.header?.contactPersonName && (
            <span className="text-red-500 text-xs">
              {errors.header.contactPersonName.message}
            </span>
          )}
        </div>
        <br />
        {/* Company Name */}
        <div className="mt-2">
          <label className="block text-sm font-medium">Company Name :</label>
          <input
            {...register('header.companyName', {
              required: 'Company Name is required',
              onBlur: () => trigger('header.companyName'),
            })}
            className="border px-2 py-1 w-full"
          />
          {errors.header?.companyName && (
            <span className="text-red-500 text-xs">
              {errors.header.companyName.message}
            </span>
          )}
        </div>
        <br />
        {/* Subject */}
        <div className="mt-2">
          <label className="block text-sm font-medium">Subject :</label>
          <input
            {...register('header.subject', {
              required: 'Subject is required',
              onBlur: () => trigger('header.subject'),
            })}
            className="border px-2 py-1 w-full"
          />
          {errors.header?.subject && (
            <span className="text-red-500 text-xs">
              {errors.header.subject.message}
            </span>
          )}
        </div>
        <br />
        {/* Short Project Name */}

        <div className="mt-2">
          <label className="block text-sm font-medium">Short Project Name :</label>
          <input
            {...register('header.shortProjectName', {
              required: 'Short Project Name is required',
              onBlur: () => trigger('header.shortProjectName'),
            })}
            className="border px-2 py-3 w-full"
          />
          {errors.header?.shortProjectName && (
            <span className="text-red-500 text-xs">
              {errors.header.shortProjectName.message}
            </span>
          )}
        </div>
        <br />
        {/* Thank You Message */}
        <div className="mt-2">
          <label className="block text-sm font-medium">Thank You Message :</label>
          <input
            {...register('header.thankYouMessage', {
              required: 'Thank You Message is required',
              onBlur: () => trigger('header.thankYouMessage'),
            })}
            className="border px-2 py-1 w-full"
          />
          {errors.header?.thankYouMessage && (
            <span className="text-red-500 text-xs">
              {errors.header.thankYouMessage.message}
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
