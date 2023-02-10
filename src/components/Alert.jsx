import React from "react";

const Alert = ({ msg }) => {
  return (
    <div>
      <div
        class={`bg-blue-100 border-t border-b border-${color}-500 text-${color}-700 px-4 py-3`}
        role="alert"
      >
        <p class="text-sm">{msg}</p>
      </div>
    </div>
  );
};

export default Alert;
