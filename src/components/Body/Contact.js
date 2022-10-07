import React from "react";

const Contact = () => {
  return (
    <div className="my-10 mt-40">
      <div className="flex justify-center gap-2 items-baseline pb-10">
        <span className="text-2xl">Get</span>
        <span className="text-2xl semi-bold">In Touch</span>
      </div>
      <div className="grid grid-cols-2 gap-20">
        <div className="">
          <div className="mb-8 text-xl">Send Me Your Details</div>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Full Name"
              className="px-4 py-3 rounded bg-zinc-700 text-sm medium-bold focus:bg-zinc-600 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email Address"
              className="px-4 py-3 rounded bg-zinc-700 text-sm medium-bold focus:bg-zinc-600 outline-none"
            />
            <input
              type="number"
              placeholder="Your Contact No."
              className="px-4 py-3 rounded bg-zinc-700 text-sm medium-bold focus:bg-zinc-600 outline-none"
            />
            <textarea
              placeholder="Write a Message for Me"
              className="px-4 py-3 rounded bg-zinc-700 text-sm medium-bold focus:bg-zinc-600 outline-none h-44"
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
