import Title from "./Title";
import Paragraph from "./Paragraph";
import Link from "next/link";

export default function ProjectCard(props) {
  return (
    <div className="rounded-xl overflow-hidden flex flex-col h-full m-auto border-2 border-light transition ease-in-out duration-150 hover:scale-105 hover:cursor-pointer">
      <img className="border-b-2" src={props.src} />
      <Title className="text-primary mt-3 mb-0" text={props.title} />
      <Paragraph className="m-3 mt-0 flex-1 lg:text-xl" text={props.description} />
      <div className="flex">
        <Link
          className="flex-1 px-3 py-1 text-light bg-primary border-light border-t-2 border-r transition-colors duration-150 hover:bg-secondary"
          href={props.github}
          target="_blank"
        >
          <Paragraph text="Github Code" />
        </Link>
        <Link
          className="flex-1 px-3 py-1 text-light bg-primary  border-t-2 border-l transition-colors duration-150 hover:bg-secondary"
          href={props.live}
          target="_blank"
        >
          <Paragraph text="Live Demo" />
        </Link>
      </div>
    </div>
  );
}
