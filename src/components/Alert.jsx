import React from "react";

const Alert = ({ msg, setOpen }) => {
  setTimeout(() => {
    setOpen(false);
  }, 2500);

  return msg === "Your message has been sent" ? (
    <div
      className={`bg-green-300 border-t border-b border-green-500 text-green-700 px-4 py-3 mb-5`}
      role="alert"
    >
      <p className="text-sm">{msg}</p>
    </div>
  ) : (
    <div
      className={`bg-orange-700 border-t border-b border-orange-500 text-orange-300 px-4 py-3 mb-5`}
      role="alert"
    >
      <p className="text-sm">{msg}</p>
    </div>
  );
};

export default Alert;
