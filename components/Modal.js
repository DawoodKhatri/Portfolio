import Title from "./Title";
import Paragraph from "./Paragraph";

export default function Modal(props) {
  return (
    <>
      {props.modal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border border-primary rounded-lg shadow-lg relative flex flex-col w-full bg-dark outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-primary rounded-t">
                  <Paragraph text={props.modal.heading} />
                  <button
                    className="p-1 ml-auto my-auto bg-transparent border-0 text-light hover:text-primary float-right text-2xl leading-none font-semibold"
                    onClick={() => props.setModal(false)}
                  >
                    x
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="md:mx-10 my-3 text-light text-lg md:text-xl leading-relaxed">
                    {props.modal.text}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-primary rounded-b">
                  <button
                    className="px-3 py-1 text-light bg-primary rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-secondary"
                    onClick={() => {
                        props.modal.btnClick();
                      props.setModal(false);
                    }}
                  >
                    <Paragraph text={props.modal.btn} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
