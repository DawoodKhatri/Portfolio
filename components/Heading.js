export default function Heading(props) {
  return (
    <p
      className={
        "text-2xl sm:text-4xl md:text-6xl font-bold my-5 " + props.className
      }
    >
      {props.text}
    </p>
  );
}
