import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import LineGradient from "./LineGradient";

const MyModal = ({ title, img, description, visible, onClose, lang, git, live }) => {
  if (!visible) return null;

  const handleOnCLose = (e) => {
    e.stopPropagation();
    if (e.target.id === "container") onClose();
  };
  
  return (
    <div
      id="container"
      onClick={handleOnCLose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <div className="bg-white w-4/5 h-[580px] sm:h-3/5 md:h-[550px] lg:w-[880px] p-2 rounded">
        <div className="flex justify-between p-4">
          <h1 className="text-black text-[24px] lg:text-[32px] font-semibold">{title}</h1>
          <button className="text-black text-lg font-semibold " onClick={onClose}>
            X
          </button>
        </div>
        <div className="mb-5">
        <LineGradient />
        </div>
        <div className="flex flex-wrap gap-2 mb-5">
        {lang?.map((item) => (
        <ul key={item.id}>
                <li className="text-black text-[14px] border-black border-[1px] p-1 md:text-[17px]">
                    {item}
                </li>
        </ul>
         ))
             }
        </div>

        <div className="flex flex-col sm:flex-row sm:gap-3 md:gap-3">
          <img className="ss:w-4/5 sm:w-2/5 md:w-3/5 lg:w-3/5" src={img} alt="" />
          <div className="flex flex-col">
            <p className="text-black text-lg md:w-4/5 mt-10">{description}</p>
            <div className="flex gap-[20px]">
              <a
                className="bg-gradient-rainblue text-deep-blue rounded-sm w-32 h-12 font-semibold
              hover:bg-blue hover:text-white transition duration-500 mt-5 py-3 px-6 cursor-pointer"
              target={"_blank"}
              href={live}
              >
                See Live
              </a>
              <a
                className="bg-gradient-rainblue text-deep-blue rounded-sm w-32 h-12 font-semibold
              hover:bg-blue hover:text-white transition duration-500 mt-5 py-3 px-4
              cursor-pointer"
              target={"_blank"}
              href={git}
              >
                See Source
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyModal;
