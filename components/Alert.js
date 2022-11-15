import "animate.css";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Alert(props) {
  return (
    <>
      {props.alert && (
        <div
          id="alert"
          className=" animate__animated animate__fadeInRight bottom-0 right-0 fixed text-dark w-fit px-6 py-4 border-0 rounded-md mb-4 mr-4 flex bg-primary"
        >
          <span className="my-auto mr-8 font-semibold">{props.alert}</span>
          <button
            className="bg-transparent my-auto  text-lg font-medium outline-none focus:outline-none"
            onClick={() => {
              document
                .getElementById("alert")
                .classList.add("animate__fadeOutRight");
              setTimeout(() => {
                props.setAlert(false);
              }, 2000);
            }}
          >
            <FontAwesomeIcon icon={faClose} size="1x" />
          </button>
        </div>
      )}
    </>
  );
}
