import Jumbo from "../components/Jumbo";
import Title from "../components/Title";
import Paragraph from "../components/Paragraph";
import { useEffect } from "react";

export default function notfound() {
  if (typeof window !== "undefined") {
    window.location.href = window.location.href.toLowerCase();
  }
  return (
    <>
      <Jumbo className="text-primary" text="404" />
      <Title text="Page not found" />
      <Paragraph text="The page you are looking for does not exist." />
    </>
  );
}
