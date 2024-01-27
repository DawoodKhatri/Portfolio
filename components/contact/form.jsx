"use client";
import React from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const sendMail = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const fields = {
      from: e.target[0].value,
      email: e.target[1].value,
      subject: e.target[2].value,
      message: e.target[3].value,
    };

    if (Object.values(fields).includes("")) {
      toast.error("Fill all fields");
      return;
    }

    const alert = toast.loading("Sending Message");
    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        body: JSON.stringify(fields),
      });
      const { success } = await res.json();

      toast.dismiss(alert);

      if (success) {
        toast.success("Message sent successfully");
      } else {
        toast.error("Unable to send message");
      }
    } catch (error) {
      toast.dismiss(alert);
      toast.error("Unable to send message");
    }
  };

  return (
    <div className="max-w-2xl w-full glass p-8">
      <form
        className="flex flex-col justify-center items-center gap-5"
        onSubmit={sendMail}
      >
        <input placeholder="Your name" name="name" />
        <input placeholder="Your email address" name="email" />
        <input placeholder="Subject" name="subject" />
        <textarea placeholder="Your message" name="message" rows={3} />
        <button
          className="px-4 py-2 bg-primary rounded-lg xl:text-lg font-semibold hover:bg-opacity-75 transition-all ease-in-out duration-300"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
