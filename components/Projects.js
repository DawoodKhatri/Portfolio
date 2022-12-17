import Heading from "./Heading";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="text-center p-2">
      <Heading
        className=" mb-5 md:mb-10"
        text={
          <>
            These are some of my <span className="text-primary">Projects</span>
          </>
        }
      />
      <div className="inline-grid grid-cols-1 md:grid-cols-3 gap-10 w-fit mx-5 justify-center">
        <ProjectCard
          src="/images/DFlix.jpg"
          title="DFlix"
          description="It is a Movie Info Website, Developed with ReactJS and TMDB API."
          github="https://github.com/DawoodKhatri/DFlix"
          live="https://dflix.onrender.com"
        />
        <ProjectCard
          src="/images/SABI.jpg"
          title="SABI"
          description="It is a Restaurant Management Website, Developed with MERN Stack."
          github="https://github.com/DawoodKhatri/SABI"
          live="https://sabi.onrender.com"
        />
        <ProjectCard
          src="/images/SIH.jpg"
          title="Speech to Text"
          description="It is a Realtime Speech to Text Conversion Website, Developed with Python."
          github="https://github.com/DawoodKhatri/SIH-D-CODERS"
          live="https://sih-d-coders.onrender.com"
        />
      </div>
    </div>
  );
}
