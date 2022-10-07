import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    contact_no: "",
    message: "",
  });
  const [formError, setFormError] = useState({
    full_name: "",
    email: "",
    contact_no: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormError({ ...formError, [e.target.name]: "" });
  };

  const validateData = (data) => {
    let validate = true;
    if (data.full_name === "") {
      setFormError({ ...formError, full_name: "Please add some value." });
      validate = false;
    }
    if (data.email === "") {
      setFormError({ ...formError, email: "Please add some value." });
      validate = false;
    }
    if (data.contact_no === "") {
      setFormError({ ...formError, contact_no: "Please add some value." });
      validate = false;
    }
    {
      setFormError({ ...formError, message: "Please add some value." });
      validate = false;
    }
    return validate;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateData(formData) === true) {
      console.log("submitted");
    } else {
      console.log("not submitted");
    }
  };

  return (
    <div className="my-10 mt-40">
      <div className="flex justify-center gap-2 items-baseline pb-10">
        <span className="text-2xl">Get</span>
        <span className="text-2xl semi-bold">In Touch</span>
      </div>
      <div className="grid grid-cols-2 gap-20">
        <div className="">
          <div className="mb-8 text-xl">Send Me Your Details</div>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="full_name"
              placeholder="Your Full Name"
              className={`${
                formError.full_name !== "" ? "error" : ""
              } px-4 py-3 rounded bg-zinc-700 text-sm medium-bold focus:bg-zinc-600 outline-none`}
              onChange={handleChange}
              value={formData.full_name}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              className={`${
                formError.email !== "" ? "error" : ""
              } px-4 py-3 rounded bg-zinc-700 text-sm medium-bold focus:bg-zinc-600 outline-none`}
              onChange={handleChange}
              value={formData.email}
            />
            <input
              type="number"
              name="contact_no"
              placeholder="Your Contact No."
              className={`${
                formError.contact_no !== "" ? "error" : ""
              } px-4 py-3 rounded bg-zinc-700 text-sm medium-bold focus:bg-zinc-600 outline-none`}
              onChange={handleChange}
              value={formData.contact_no}
            />
            <textarea
              placeholder="Write a Message"
              name="message"
              className={`${
                formError.message !== "" ? "error" : ""
              } px-4 py-3 rounded bg-zinc-700 text-sm medium-bold focus:bg-zinc-600 outline-none h-44`}
              onChange={handleChange}
              value={formData.message}
            />
            <button
              type="submit"
              className="btn text-white hover:text-black bg-zinc-700 hover:bg-white w-1/4"
            >
              Send
            </button>
          </form>
        </div>
        <div>
          <div className="mb-8 text-xl">My Contact Details</div>
          <div className="pb-4">
            <div className="text-sm tracking-wider text-blue-700 pb-2">
              EMAIL
            </div>
            <div className="text-sm text-zinc-400">senma777@gmail.com</div>
          </div>
          <div className="pb-4">
            <div className="text-sm tracking-wider text-blue-700 pb-2">
              CONTACT NO.
            </div>
            <div className="text-sm text-zinc-400">+977-9849786283</div>
          </div>
          <div>
            <div className="text-sm tracking-wider text-blue-700 pb-2">
              ADDRESS
            </div>
            <div className="text-sm text-zinc-400">
              <div>Bhaisepati, Lalitpur 25</div>
              <div>Nepal</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
