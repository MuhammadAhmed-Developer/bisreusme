'use client'
import useContactUs from '@/hooks/useContactUs';
import React from 'react';

const ContactForm = () => {
  const {
    handleInputChange,
    handleSubmit,
    formData,
    isLoading,
  } = useContactUs();

  return (
    <div className="flex items-center justify-center mt-10 sm:mt-[80px]">
      <div className="lg:mx-[298px] sm:mx-[60px] mx-[30px] w-full ">
        <h1 className=" text-start text-[24px] sm:text-[32px] lg:text-[48px] text-[#102D59] font-Claris-sans">
          Contact <span className=" text-[#2871DE] ">Form</span>{' '}
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-5 pt-3">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name *"
              className="w-full rounded-md border text-[#000000] border-[#e0e0e0] bg-white py-3 px-5 text-base font-normal placeholder:text-[#6B7280] outline-none focus:border-[#2871DE] focus:shadow-md"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-5">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email *"
              className="w-full rounded-md border text-[#000000] border-[#e0e0e0] bg-white py-3 px-5 text-base font-normal placeholder:text-[#6B7280] outline-none focus:border-[#2871DE] focus:shadow-md"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-5">
            <textarea
              name="message"
              id="message"
              placeholder="Message *"
              className="w-full min-h-[170px] resize-none text-[#000000] rounded-md border border-[#e0e0e0] bg-white !py-3 !px-5 text-base font-normal placeholder:text-[#6B7280] outline-none focus:border-[#2871DE] focus:shadow-md"
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <button
              type="submit"
              className="hover:shadow-form w-full rounded-md bg-[#2871DE] py-3 px-6 text-base font-bold text-white outline-none"
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'SEND'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
