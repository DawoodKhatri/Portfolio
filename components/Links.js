import Heading from "./Heading";
import Title from "./Title";
import Paragraph from "./Paragraph";
import Icon from "./Icon";
import Modal from "./Modal";
import {
  faWhatsapp,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faCopy } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Links() {
  const Email = {
    heading: "Email Address",
    text: "dawoodkhatri18@gmail.com",
    btn: "Close",
    btnClick: () => {},
  };
  const Whatsapp = {
    heading: "Whatsapp Number",
    text: "+918169008712",
    btn: "Close",
    btnClick: () => {},
  };
  const [modal, setModal] = useState(false);
  return (
    <>
      <Modal modal={modal} setModal={setModal} />
      <Title
        text={
          <>
            Other <span className="text-primary">Links</span>
          </>
        }
      />

      <div className="grid grid-cols-4 gap-4 md:gap-10 w-fit mx-auto md:my-10">
        <Icon
          icon={faEnvelope}
          onClick={() => {
            setModal(Email);
          }}
        />
        <Icon icon={faWhatsapp} url="https://wa.me/+918169008712" />
        <Icon icon={faLinkedin} url="https://linkedin.com/in/DawoodKhatri" />
        <Icon icon={faGithub} url="https://github.com/DawoodKhatri" />
      </div>
    </>
  );
}
