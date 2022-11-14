import Heading from "./Heading";
import Title from "./Title";
import Paragraph from "./Paragraph";
import Icon from "./Icon";
import {
  faHtml5,
  faCss3,
  faJs,
  faNode,
  faReact,
  faPython,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  const skills = [
    { name: "HTML5", icon: faHtml5 },
    { name: "CSS3", icon: faCss3 },
    { name: "Javascript", icon: faJs },
    { name: "Node.js", icon: faNode },
    { name: "ReactJS", icon: faReact },
    {
      name: "NextJS",
      svg: (
        <svg
          className="svg-inline--fa text-4xl sm:text-5xl md:text-6xl"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />{" "}
          <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993" />{" "}
          <path d="M15 12v-3" />{" "}
        </svg>
      ),
    },
    { name: "Python", icon: faPython },
    { name: "Java", icon: faJava },
  ];

  return (
    <div className="text-center p-2">
      <Heading
        text={
          <>
            My Name is <span className="text-primary">Dawood Khatri</span>
          </>
        }
      />
      <Paragraph
        text="I am in my Third Year Pursuing my Bachelor's of Engineering in
            Information Technology."
      />
      <Paragraph text="I am always Intrested and Exited to learn new Technologies." />
      <Title className="text-primary" text="Technologies I'm Familiar With" />
      <div className="grid grid-cols-4 gap-2 md:gap-4 w-fit mx-auto justify-center">
        {skills.map((skill) => {

          return <>
          {skill.icon && <Icon icon={skill.icon} text={skill.name}/>}
          {!skill.icon && <Icon svg={skill.svg} text={skill.name}/>}
          </>
        })}
      </div>
    </div>
  );
}
