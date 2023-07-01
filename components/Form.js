import Title from "./Title";
import Paragraph from "./Paragraph";
import Input from "./Input";
import Alert from "./Alert";
import { useState } from "react";

export default function Form() {
  const [alert, setAlert] = useState(false);

  const sendMail = async (e) => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    const query = `?name=${name}&email=${email}&subject=${subject}&message=${message}`;
    fetch("/api/SendMail/" + query).then((res) => {
      res.json().then((data) => {
        if (data.success) {
          setAlert("Message Sent Successfully!");
        } else {
          setAlert("Message not Sent");
        }
      });
    });
  };

  return (
    <>
      <Alert alert={alert} setAlert={setAlert} />
      <Title
        text={
          <>
            Send a <span className="text-primary">Message</span>
          </>
        }
      />
      <Input id="name" rows="1" type="text" placeholder="Name" />
      <Input id="email" rows="1" type="text" placeholder="Email address" />
      <Input id="subject" rows="1" type="text" placeholder="Subject" />
      <Input id="message" rows="4" type="text" placeholder="Message" />
      <button
        className="px-3 py-1 text-light bg-primary rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-secondary"
        onClick={sendMail}
      >
        <Paragraph text="Send Message" />
      </button>
    </>
  );
}
