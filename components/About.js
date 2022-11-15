import Heading from "./Heading";
import Title from "./Title";
import Paragraph from "./Paragraph";
import Icon from "./Icon";
import {
  faHtml5,
  faCss3,
  faBootstrap,
  faJs,
  faNode,
  faReact,
  faPython,
  faJava,
} from "@fortawesome/free-brands-svg-icons";

export default function About() {
  const skills = [
    { name: "HTML5", icon: faHtml5 },
    { name: "CSS3", icon: faCss3 },
    { name: "Bootstrap", icon: faBootstrap },
    {
      name: "Tailwind CSS",
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
          <path
            d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
            fill="white"
          ></path>
        </svg>
      ),
    },
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
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993" />
          <path d="M15 12v-3" />
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
      <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 w-fit mx-auto justify-center">
        {skills.map((skill) => {
          return (
            <>
              {skill.icon && <Icon icon={skill.icon} text={skill.name} />}
              {!skill.icon && <Icon svg={skill.svg} text={skill.name} />}
            </>
          );
        })}
      </div>
    </div>
  );
}
