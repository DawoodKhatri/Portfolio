export default function Input(props) {
  return (
    <>
      {props.rows === "1" && (
        <input
          type={props.type}
          name={props.name}
          className={
            "block w-full mt-1 mb-6 bg-transparent border-light text-light placeholder-light rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-30 " +
            props.className
          }
          placeholder={props.placeholder}
        />
      )}
      {props.rows !== "1" && (
        <textarea
          type={props.type}
          name={props.name}
          className={
            "block w-full mt-1 mb-6 bg-transparent border-light text-light placeholder-light rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-30 " +
            props.className
          }
          placeholder={props.placeholder}
          rows={props.rows}
        />
      )}
    </>
  );
}
