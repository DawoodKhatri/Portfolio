export default function Title(props) {
  return (
    <p
      className={
        "text-xl sm:text-2xl md:text-4xl font-semibold m-5 " + props.className
      }
    >
      {props.text}
    </p>
  );
}
