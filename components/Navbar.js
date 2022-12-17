import { useRouter } from "next/router";
import Link from "next/link";

export default function Navbar(props) {
  const router = useRouter();

  const elements = ["Home", "About", "Projects", "Contact"];

  const setActive = (curr) => {
    const path = router.pathname.replace("/", "");
    if (!path.length && curr.toLowerCase() === "home") {
      return "border-primary";
    } else if (path === curr.toLowerCase()) {
      return "border-primary";
    } else {
      return "border-transparent";
    }
  };
  return (
    <div className="p-5 font-normal">
      <ul className="my-auto mx-auto  md:mr-0 w-fit text-lg flex">
        {elements.map((element) => {
          return (
            <li
              key={element}
              className="transition ease-in-out duration-150 hover:scale-110"
            >
              <Link
                href={`/${
                  element.toLowerCase() === "home" ? "" : element.toLowerCase()
                }`}
                className={`mx-1 md:mx-3 px-1 md:px-3 py-1 border-2 ${setActive(
                  element
                )} hover:border-primary rounded-lg hover:cursor-pointer`}
              >
                {element}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
