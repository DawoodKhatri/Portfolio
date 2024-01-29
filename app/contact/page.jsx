import ContactForm from "@/components/contact/form";
import ContactHeading from "@/components/contact/heading";
import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-[calc(100vh-102px)] flex flex-col justify-center items-center gap-8 p-8 md:p-16">
      <ContactHeading />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
