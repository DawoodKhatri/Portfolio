import ContactForm from "@/components/contact/form";
import ContactHeading from "@/components/contact/heading";
import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center gap-10 p-10 md:p-20">
      <ContactHeading />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
