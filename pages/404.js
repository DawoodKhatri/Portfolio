import Jumbo from "../components/Jumbo";
import Title from "../components/Title";
import Paragraph from "../components/Paragraph";

export default function notfound() {
  return (
    <>
      <Jumbo className="text-primary" text="404"/>
      <Title text="Page not found"/>
      <Paragraph text="The page you are looking for does not exist."/>
    </>
  );
}
