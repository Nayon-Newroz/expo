"use client";

import { useState } from "react";

const Booking = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [qualification, setQualification] = useState("");
  const [institution, setInstitution] = useState("");

  // New state variables for form functionality
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [responseMessage, setResponseMessage] = useState({ status: "", message: "" });

  // Clear form fields
  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setMobile("");
    setQualification("");
    setInstitution("");
    setErrors({});
  };

  // Validate Bangladesh phone number
  const isValidBDPhone = (phone) => {
    // Remove any non-digit characters
    const digitsOnly = phone.replace(/\D/g, '');

    // Check if it's a valid BD number (starts with 01, followed by 9 digits)
    if (/^01\d{9}$/.test(digitsOnly)) {
      return true;
    }

    // Check if it has country code +880 or 880
    if (/^(?:\+?880|0)?1\d{9}$/.test(digitsOnly)) {
      return true;
    }

    return false;
  };

  // Validate email format
  const isValidEmail = (email) => {
    // More comprehensive email validation
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(String(email).toLowerCase());
  };

  // New function to validate individual fields
  const validateField = (name, value) => {
    let error = "";
    
    switch (name) {
      case "firstName":
        if (!value.trim()) error = "First name is required";
        break;
      case "lastName":
        if (!value.trim()) error = "Last name is required";
        break;
      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (!isValidEmail(value)) {
          error = "Please enter a valid email address";
        }
        break;
      case "mobile":
        if (!value.trim()) {
          error = "Mobile number is required";
        } else if (!isValidBDPhone(value)) {
          error = "Please enter a valid Bangladesh mobile number";
        }
        break;
      case "qualification":
        if (!value.trim()) error = "Academic qualification is required";
        break;
      case "institution":
        if (!value.trim()) error = "Institution is required";
        break;
      default:
        break;
    }
    
    return error;
  };

  // Updated handle change functions
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Update the state based on input name
    switch (name) {
      case "firstName": setFirstName(value); break;
      case "lastName": setLastName(value); break;
      case "email": setEmail(value); break;
      case "mobile": setMobile(value); break;
      case "qualification": setQualification(value); break;
      case "institution": setInstitution(value); break;
      default: break;
    }
    
    // Validate the field
    const errorMessage = validateField(name, value);
    
    // Update errors state
    setErrors(prev => ({
      ...prev,
      [name]: errorMessage
    }));
  };

  // Validate form fields based on API requirements
  const validateForm = () => {
    const newErrors = {};

    // All fields are now required
    if (!firstName.trim()) newErrors.firstName = "First name is required";
    if (!lastName.trim()) newErrors.lastName = "Last name is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!isValidBDPhone(mobile)) {
      newErrors.mobile = "Please enter a valid Bangladesh mobile number";
    }
    
    if (!qualification.trim()) newErrors.qualification = "Academic qualification is required";
    if (!institution.trim()) newErrors.institution = "Institution is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    // API field structure based on documentation:
    // [
    //   { id: 1353, name: "first_name", slug: "first_name", is_required: true },
    //   { id: 1354, name: "last_name", slug: "last_name", is_required: true },
    //   { id: 1355, name: "phone", slug: "phone", is_required: false },
    //   { id: 1356, name: "email", slug: "email", is_required: false },
    //   { id: 1357, name: "Last Academic Qualification", slug: "635dfe48-8258-4484-8e44-7b42e8503c24", is_required: false },
    //   { id: 1358, name: "Passing Institution", slug: "63ab6450-0c4f-4f7a-80bf-2b07621c28b4", is_required: false }
    // ]
    const formData = {
      first_name: firstName,
      last_name: lastName,

      phone: mobile ? {
        number: mobile,
        country_code: "BD",
      } : undefined,
      
      email: email || undefined,

      // Custom fields with their respective slugs
      "635dfe48-8258-4484-8e44-7b42e8503c24": qualification || undefined, // Last Academic Qualification
      "63ab6450-0c4f-4f7a-80bf-2b07621c28b4": institution || undefined, // Passing Institution
    };

    // Remove undefined values
    Object.keys(formData).forEach(key => 
      formData[key] === undefined && delete formData[key]
    );

    console.log("Submitted Data:", formData);

    try {
      const response = await fetch(
        "https://etibd.agentcisapp.com/api/v2/online-form/eduexposite",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiNjYyOGY4MmVlOWFkN2FiZThlNTJhMzUyYjFmYTdkOWM3NDQxMGQ2NGZiYjViNTI2MTQ3MmJkZjQwMmM3ZjI5MmQ2MmEyNjEzZWE5NDNkYzMiLCJpYXQiOjE3NDgxNzEwNjYuMzk5MDk4LCJuYmYiOjE3NDgxNzEwNjYuMzk5MTA0LCJleHAiOjE3Nzk3MDcwNjYuMzc0MDcxLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.gDyqQ9Tg40Tdjq9Fi8YLywEg8indUED_BX-4d_ZtxscXCabjbnrL9As6EtBTL5S3SFAQl__b8_ptNrUBgBOOhTrQwcFfsU8Dw6ueUl7TncLTLyBXjyfZpSaDgFlKqPbOCge0aM7PVFg26rSossfHL9WVT8YVMWbA69oJVblOW7evjTU19s_-ZXOCKCcsyX8Nnkxv8dVNZ5b3Ok3OTzwThPjaoBYHzOP1tKuR_L6nTkvU00GJJCBFDkogYP4RyWKyOs6r9GFMwmzOOK0Jc3-yPzYRUUy4c4HWyT7r32AbSa752DTRvEHlGvyJKFEsWaq29uoi5gBPcAlB6DQuPjv66-rWz12l4NW8cIIRUM7TGxU7UUAlD0EmwVSGSGMtXp-GKT7PT4vzs5xEcSf4hF2tDyVvyPfJFJCTIoCznbtjq_RfHzbQ9Dng4jlj5RE7gwk9wvsC-Ew9e52q_MiaAkePiGNdaIgqZSHJ6eTdR3tDZqQU6xQUt-IsuFsvsKHN2TQ8_w0KJ8J-PfNBy5ah5zy9Q25lRC--yvxPS6p5lSn_GAav48TTqNQvY07Dmr6DlwZqjlRuZ23MyiZdzJYmiF9tLTYiQl3omIVApmLocd1nN3mXfbFPtll_B0XlqyJp9KdQLVLWK8zMrdm5l-oRTK6oCkre08LKpyQBezBhOtTGaHQ",
          },
          body: JSON.stringify(formData),
        }
      );

      const responseData = await response.json();

      if (response.ok) {
        setResponseMessage({
          status: "success",
          message: "Your booking has been submitted successfully!",
          data: responseData
        });
        clearForm();
      } else {
        // Handle validation errors from backend
        if (responseData.errors) {
          const backendErrors = {};
          
          // Process backend validation errors
          Object.keys(responseData.errors).forEach(key => {
            if (key === 'email') {
              backendErrors.email = responseData.errors.email[0];
            } else if (key === 'phone.number') {
              backendErrors.mobile = responseData.errors['phone.number'][0];
            } else {
              // Handle any other errors
              backendErrors[key] = responseData.errors[key][0];
            }
          });
          
          setErrors(prev => ({ ...prev, ...backendErrors }));
        }
        
        setResponseMessage({
          status: "error", 
          message: responseData.message || "Failed to submit form. Please try again later.",
          data: responseData
        });
      }
    } catch (error) {
      setResponseMessage({
        status: "error",
        message: "An error occurred while submitting the form. Please try again.",
      });
    } finally {
      setIsLoading(false);
      setShowModal(true);
    }
  };

  // Modal component
  const ResponseModal = () => {
    if (!showModal) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-lg">
          <div className="flex flex-col items-center text-center">
            {/* Status Icon */}
            <div className={`mb-4 rounded-full p-3 md:p-5 ${responseMessage.status === "success"
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }`}>
              {responseMessage.status === "success" ? (
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                    clipRule="evenodd" 
                  />
                </svg>
              ) : (
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" 
                    clipRule="evenodd" 
                  />
                </svg>
              )}
            </div>

            {/* Status Text */}
            {/* <h3 className="text-xl font-semibold mb-4">
              {responseMessage.status === "success" ? "Success!" : "Error"}
            </h3> */}
            
            {/* Message */}
            <div className="mb-6">
              <p className={`text-gray-700 mb-4`}>
                {responseMessage.message}
              </p>
              {responseMessage.status === "error" && responseMessage.data?.errors && (
                <ul className="mt-4 space-y-2 text-left">
                  {Object.entries(responseMessage.data.errors).map(([key, messages]) => (
                    <li key={key} className="flex items-start">
                      <span className="mr-2 mt-0.5 text-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      <span className="text-sm text-red-600">
                        {key === 'phone.number' ? 'Phone Number' : key.charAt(0).toUpperCase() + key.slice(1)}: {messages[0]}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Full-width Close Button */}
          <button
            onClick={() => setShowModal(false)}
            style={{
              background: responseMessage.status === "success" 
                ? "linear-gradient(to right, #10B981, #059669)"
                : "linear-gradient(to right, #EC4899, #3B82F6)",
            }}
            className="w-full py-2.5 px-4 rounded-full text-white font-medium transition-transform text-center cursor-pointer"
          >
            {responseMessage.status === "success" ? "Done" : "Close"}
          </button>
        </div>
      </div>
    );
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
              className="w-full"
            >
              <div className=" lg:flex gap-4 mb-6">
                <div className="mb-6 lg:mb-0 w-full">
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
                    onChange={handleInputChange}
                    className={`mt-1 w-full border ${errors.firstName ? "border-red-500" : "border-gray-300"
                     } rounded-full py-2 focus:outline-none focus:border-gray-500 px-4 text-gray-600`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1 ml-2">{errors.firstName}</p>
                  )}
                </div>

                <div className="mb-6 lg:mb-0 w-full">
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
                    onChange={handleInputChange}
                    className={`mt-1 w-full border ${errors.lastName ? "border-red-500" : "border-gray-300"
                     } rounded-full py-2 focus:outline-none focus:border-gray-500 px-4 text-gray-600`}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1 ml-2">{errors.lastName}</p>
                  )}
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
                  onChange={handleInputChange}
                  className={`mt-1 w-full border ${errors.email ? "border-red-500" : "border-gray-300"
                   } rounded-full py-2 focus:outline-none focus:border-gray-500 px-4 text-gray-600`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1 ml-2">{errors.email}</p>
                )}
              </div>

              <div className="mb-6">
                <label
                  className="block text-sm font-medium "
                  style={{ color: "#374151" }}
                >
                  Mobile Number
                </label>
                <input
                  type="number"
                  name="mobile"
                  value={mobile}
                  onChange={handleInputChange}
                  className={`mt-1 w-full border ${errors.mobile ? "border-red-500" : "border-gray-300"
                   } rounded-full py-2 focus:outline-none focus:border-gray-500 px-4 text-gray-600`}
                />
                {errors.mobile && (
                  <p className="text-red-500 text-xs mt-1 ml-2">{errors.mobile}</p>
                )}
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
                  onChange={handleInputChange}
                  className={`mt-1 w-full border ${errors.qualification ? "border-red-500" : "border-gray-300"
                   } rounded-full py-2 focus:outline-none focus:border-gray-500 px-4 text-gray-600`}
                />
                {errors.qualification && (
                  <p className="text-red-500 text-xs mt-1 ml-2">{errors.qualification}</p>
                )}
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
                  onChange={handleInputChange}
                  className={`mt-1 w-full border ${errors.institution ? "border-red-500" : "border-gray-300"
                   } rounded-full py-2 focus:outline-none focus:border-gray-500 px-4 text-gray-600`}
                />
                {errors.institution && (
                  <p className="text-red-500 text-xs mt-1 ml-2">{errors.institution}</p>
                )}
              </div>

              <div className="">
                <button
                  type="submit"
                  disabled={isLoading}
                  style={{
                    background: "linear-gradient(to right, #EC4899, #3B82F6)",
                  }}
                  className={`w-full text-white py-2 px-4 rounded-full flex justify-center items-center transition-transform ${isLoading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>
          </div >
        </div >
        <div className="w-full lg:w-1/2 hidden lg:block">
          <img src="/Booking.png" className="w-full" alt="booking image" />
        </div>
      </div >
      <ResponseModal />
    </div >
  );
};

export default Booking;
