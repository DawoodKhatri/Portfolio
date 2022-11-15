import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Paragraph from "./Paragraph";

export default function Icon(props) {
  return (
    <a href={props.url} target="_blank" rel="noreferrer" onClick={props.onClick} className="p-3 rounded-xl border-2 border-transparent hover:border-primar transition ease-in-out duration-150 hover:scale-110 hover:cursor-pointer">
      {props.icon && (
        <FontAwesomeIcon
          className="text-4xl sm:text-5xl md:text-6xl"
          icon={props.icon}
        />
      )}
      {!props.icon && props.svg}
      {props.text && <Paragraph text={props.text} />}
    </a>
  );
}
