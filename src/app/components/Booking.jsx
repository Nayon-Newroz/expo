"use client";

import React, { useState } from "react";

const Booking = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [qualification, setQualification] = useState("");
  const [institution, setInstitution] = useState("");

  // Clear form fields
  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setMobile("");
    setQualification("");
    setInstitution("");
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      first_name: firstName,
      last_name: lastName,

      phone: {
        number: mobile,
        country_code: "BD",
      },
      email,

      "635dfe48-8258-4484-8e44-7b42e8503c24": qualification,
      "63ab6450-0c4f-4f7a-80bf-2b07621c28b4": institution,
    };

    console.log("Submitted Data:", formData);

    try {
      const response = await fetch(
        "https://etibd.agentcisapp.com/api/v2/online-form/eduexposite",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Authorization:
            //   "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiNjYyOGY4MmVlOWFkN2FiZThlNTJhMzUyYjFmYTdkOWM3NDQxMGQ2NGZiYjViNTI2MTQ3MmJkZjQwMmM3ZjI5MmQ2MmEyNjEzZWE5NDNkYzMiLCJpYXQiOjE3NDgxNzEwNjYuMzk5MDk4LCJuYmYiOjE3NDgxNzEwNjYuMzk5MTA0LCJleHAiOjE3Nzk3MDcwNjYuMzc0MDcxLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.gDyqQ9Tg40Tdjq9Fi8YLywEg8indUED_BX-4d_ZtxscXCabjbnrL9As6EtBTL5S3SFAQl__b8_ptNrUBgBOOhTrQwcFfsU8Dw6ueUl7TncLTLyBXjyfZpSaDgFlKqPbOCge0aM7PVFg26rSossfHL9WVT8YVMWbA69oJVblOW7evjTU19s_-ZXOCKCcsyX8Nnkxv8dVNZ5b3Ok3OTzwThPjaoBYHzOP1tKuR_L6nTkvU00GJJCBFDkogYP4RyWKyOs6r9GFMwmzOOK0Jc3-yPzYRUUy4c4HWyT7r32AbSa752DTRvEHlGvyJKFEsWaq29uoi5gBPcAlB6DQuPjv66-rWz12l4NW8cIIRUM7TGxU7UUAlD0EmwVSGSGMtXp-GKT7PT4vzs5xEcSf4hF2tDyVvyPfJFJCTIoCznbtjq_RfHzbQ9Dng4jlj5RE7gwk9wvsC-Ew9e52q_MiaAkePiGNdaIgqZSHJ6eTdR3tDZqQU6xQUt-IsuFsvsKHN2TQ8_w0KJ8J-PfNBy5ah5zy9Q25lRC--yvxPS6p5lSn_GAav48TTqNQvY07Dmr6DlwZqjlRuZ23MyiZdzJYmiF9tLTYiQl3omIVApmLocd1nN3mXfbFPtll_B0XlqyJp9KdQLVLWK8zMrdm5l-oRTK6oCkre08LKpyQBezBhOtTGaHQ",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log("Form submitted successfully");
        clearForm();
      } else {
        console.error("Failed to submit form:", response.status);
      }
    } catch (error) {
      console.error("An error occurred while submitting the form:", error);
    }
  };
  return (
    <div className="py-12 max-w-[900px] mx-auto">
      <h1 className="text-center lg:text-left text-3xl md:text-4xl font-bold mb-5 px-4 md:px-0">
        Book Your Free Entry Now
      </h1>

      <div
        className="lg:flex w-full h-auto rounded-2xl bg-white overflow-hidden"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
        }}
      >
        <div className="w-full lg:w-1/2 p-8 lg:p-8">
          <div className="h-full lg:flex items-center justify-center">
            <form
              onSubmit={handleSubmit}
              // className="max-w-xl mx-auto p-6 bg-white shadow rounded-lg space-y-4"
            >
              <div className=" lg:flex gap-4 mb-6">
                <div className="mb-6 lg:mb-0">
                  <label
                    className="block text-sm font-medium "
                    style={{ color: "#374151" }}
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="mt-1 w-full border border-gray-300 rounded-full py-2 focus:outline-none focus:border-gray-500 px-4 text-gray-600"
                  />
                </div>

                <div className="mb-6 lg:mb-0">
                  <label
                    className="block text-sm font-medium "
                    style={{ color: "#374151" }}
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    className="mt-1 w-full border border-gray-300 rounded-full py-2 focus:outline-none focus:border-gray-500 px-4 text-gray-600"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  className="block text-sm font-medium"
                  style={{ color: "#374151" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full border border-gray-300 rounded-full py-2 focus:outline-none focus:border-gray-500 px-4 text-gray-600"
                />
              </div>

              <div className="mb-6">
                <label
                  className="block text-sm font-medium "
                  style={{ color: "#374151" }}
                >
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="mt-1 w-full border border-gray-300 rounded-full py-2 focus:outline-none focus:border-gray-500 px-4 text-gray-600"
                />
              </div>

              <div className="mb-6">
                <label
                  className="block text-sm font-medium "
                  style={{ color: "#374151" }}
                >
                  Last Academic Qualification
                </label>
                <input
                  type="text"
                  name="qualification"
                  value={qualification}
                  onChange={(e) => setQualification(e.target.value)}
                  className="mt-1 w-full border border-gray-300 rounded-full py-2 focus:outline-none focus:border-gray-500 px-4 text-gray-600"
                />
              </div>

              <div className="mb-6">
                <label
                  className="block text-sm font-medium "
                  style={{ color: "#374151" }}
                >
                  Passing Institution
                </label>
                <input
                  type="text"
                  name="institution"
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  className="mt-1 w-full border border-gray-300 rounded-full py-2 focus:outline-none focus:border-gray-500 px-4 text-gray-600"
                />
              </div>

              <div className="">
                <button
                  type="submit"
                  style={{
                    background: "linear-gradient(to right, #EC4899, #3B82F6)",
                  }}
                  className="w-full  text-white py-2 px-4 rounded-full "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full lg:w-1/2 hidden lg:block">
          <img src="/Booking.png" className="w-full" alt="booking image" />
        </div>
      </div>
    </div>
  );
};

export default Booking;
