import Title from "./Title";
import Paragraph from "./Paragraph";
import Input from "./Input";

export default function Form() {
  return (
    <form>
      <Title
        text={
          <>
            Send a <span className="text-primary">Message</span>
          </>
        }
      />
      <Input rows="1" type="text" placeholder="Name" />
      <Input rows="1" type="text" placeholder="Email address" />
      <Input rows="4" type="text" placeholder="Message" />
      <button className="px-3 py-1 text-light bg-primary rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-secondary">
        <Paragraph text="Send Message"/>
      </button>
    </form>
  );
}
