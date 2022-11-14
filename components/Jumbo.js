export default function Jumbo(props) {
  return (
    <p
      className={
        "text-7xl sm:text-9xl font-bold " + props.className
      }
    >
      {props.text}
    </p>
  );
}
