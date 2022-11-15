export default function Paragraph(props) {
  return <p className={"text-base sm:text-xl md:text-2xl py-1 "+props.className}>{props.text}</p>;
}
