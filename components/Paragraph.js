export default function Paragraph(props) {
  return <p className={props.className+" text-md sm:text-lg md:text-xl py-1"}>{props.text}</p>;
}
