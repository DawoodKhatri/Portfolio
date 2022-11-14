import Heading from "./Heading";
import Paragraph from "./Paragraph";

export default function Home() {
  return (
    <div className="text-center">
      <Heading
        text={
          <>
            HEY, I&apos;M <span className="text-primary">DAWOOD KHATRI</span>
          </>
        }
      />
      <Paragraph
        text={
          <>
            I am a Student at M.H. Saboo Siddik College of Engineering
            <br />
            Pursuing my Bachelor&apos;s of Engineering in Information Technology.
          </>
        }
      />
    </div>
  );
}
