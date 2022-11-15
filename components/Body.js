import { useEffect } from "react";
import Animation from "./Animation";
import colors from "tailwindcss/colors";
import Navbar from "./Navbar";

export default function Body(props) {
  useEffect(() => {
    document.body.classList.add("bg-dark");
    document.body.classList.add("text-light");
    document.body.classList.add("overflow-x-hidden");
  });

  return (
    <>
      <div className="flex flex-col h-screen">
        <Animation color={colors.green[500]} />
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center">
          {props.element}
        </div>
      </div>
    </>
  );
}
