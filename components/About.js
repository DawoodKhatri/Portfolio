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
    {
      name: "MongoDB",
      svg: (
        <svg
          className="svg-inline--fa text-4xl sm:text-5xl md:text-6xl"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 600 1333"
          stroke-width="1"
          stroke="currentColor"
          fill="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <g xmlns="http://www.w3.org/2000/svg">
            <path
              d="M295.27 3.65l35.58 66.83c8 12.33 16.67 23.25 26.87 33.42 29.79 29.79 58.08 60.99 83.5 94.41 60.28 79.16 100.95 167.07 129.98 262.14 17.42 58.08 26.87 117.66 27.58 177.9 2.91 180.11-58.83 334.76-183.31 463.28-20.33 20.33-42.08 39.16-65.41 55.91-12.33 0-18.17-9.46-23.25-18.16-9.45-15.96-15.25-34.17-18.16-52.29-4.38-21.8-7.25-43.58-5.83-66.08v-10.16c-1-2.17-11.87-1002.07-7.54-1007.19v.01z"
              fill="currentColor"
            />
            <path
              d="M295.27 1.43c-1.46-2.91-2.91-.71-4.38.71.71 14.58-4.38 27.58-12.33 40-8.75 12.33-20.33 21.8-31.96 31.96-64.57 55.91-115.4 123.45-156.11 198.98C36.33 374.74 8.41 483.68.5 598.38c-3.62 41.37 13.09 187.36 26.13 229.48 35.58 111.82 99.49 205.52 182.27 286.84 20.33 19.58 42.08 37.74 64.58 55.2 6.54 0 7.25-5.83 8.74-10.17 2.85-9.28 5.06-18.76 6.54-28.34l14.58-108.9L295.26 1.43z"
              fill="currentColor"
            />
            <path
              d="M330.85 1201.77c1.46-16.67 9.46-30.5 18.17-44.29-8.75-3.62-15.25-10.83-20.33-18.87-4.38-7.25-8-15.96-10.83-23.96-10.17-30.5-12.33-62.5-15.25-93.66v-18.87c-3.62 2.91-4.38 27.58-4.38 31.25-2.03 32.85-6.54 65.8-13.08 98.05-2.17 13.08-3.62 26.12-11.67 37.74 0 1.46 0 2.91.71 5.09 13.08 38.5 16.67 77.7 18.87 117.66v14.58c0 17.41-.71 13.74 13.75 19.58 5.83 2.17 12.33 2.91 18.16 7.25 4.38 0 5.09-3.62 5.09-6.54l-2.17-23.96v-66.83c-.71-11.67 1.46-23.25 2.91-34.16l.05-.06z"
              fill="currentColor"
            />
          </g>
        </svg>
      ),
    },
    {
      name: "ExpressJS",
      svg: (
        <svg
          className="svg-inline--fa text-4xl sm:text-5xl md:text-6xl"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -333 1333 1333"
          stroke-width="1"
          stroke="currentColor"
          fill="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M1333.33 753.49c-48.5 12.33-78.5.54-105.41-39.87L1036.5 448.79l-27.67-36.67L785.29 714.5c-25.54 36.38-52.33 52.2-100 39.33l286.25-384.25-266.5-347.09c45.83-8.91 77.5-4.38 105.62 36.67l198.54 268.13 200-266.67c25.62-36.38 53.17-50.2 99.17-36.8l-103.33 137-140 182.29c-16.67 20.83-14.38 35.09.96 55.2l267.33 355.18zM.34 363.16l23.41-115.17c63.75-227.92 325-322.63 505.17-181.8 105.29 82.83 131.46 200 126.25 331.25H61.67C52.76 633.69 222.8 776.27 439.58 703.53c76.04-25.54 120.83-85.09 143.25-159.58 11.38-37.33 30.2-43.17 65.29-32.5-17.91 93.17-58.33 171-143.75 219.71-127.62 72.91-309.8 49.33-405.62-52C41.66 620.36 18.08 545.87 7.5 466.2c-1.67-13.17-5-25.71-7.5-38.33.22-21.56.34-43.11.34-64.67v-.04zm62.41-15.83h536.33c-3.5-170.83-109.87-292.17-255.25-293.2-159.58-1.25-274.17 117.2-281.09 293.2h.01z" />
        </svg>
      ),
    },
    { name: "ReactJS", icon: faReact },
    { name: "Node.js", icon: faNode },
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
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 md:gap-4 w-fit mx-auto justify-center">
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
