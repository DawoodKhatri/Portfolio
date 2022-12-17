export default function Heading(props) {
  return (
    <p
      className={
        "text-xl sm:text-3xl md:text-5xl font-bold my-5 " + props.className
      }
    >
      {props.text}
    </p>
  );
}
