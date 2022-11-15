import Input from "./Input";
import Form from "./Form";
import Links from "./Links";

export default function Contact() {
  return (
    <div className="text-center w-screen">
      <div className="flex flex-col md:flex-row">
        <div className="w-screen md:w-1/2 px-5 md:px-10 lg:px-20 my-5">
          <Form/>
        </div>
        <div className="w-screen md:w-1/2 px-5 md:px-10 lg:px-20 my-5">
          <Links/>
        </div>
      </div>
    </div>
  );
}
