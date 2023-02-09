import React, { memo, useCallback, useEffect, useState } from "react";

const RerenderBtn = memo(({ onIncrement, children }) => {
  useEffect(() => {
    console.log("Update button");
  });
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props === nextProps) {
  //     return false;
  //   }
  //   return true;
  // }

  return (
    <button
      onClick={onIncrement}
      className="btn p-3 btn-outline-light w-25 mx-2"
      type="button"
    >
      {children}
    </button>
  );
});

export const Rerender = () => {
  const [value, setValue] = useState(0);

  const handleIncrement = useCallback(() => {
    setValue((prev) => prev + 1);
  }, []);

  return (
    <div className="mb-5 p-5 text-white bg-dark rounded-3">
      <h2 className="text-center">Counter</h2>
      <p className="text-center my-5" style={{ fontSize: 80 }}>
        {value}
      </p>

      <div className="d-flex align-items-center justify-content-center w-100">
        <RerenderBtn onIncrement={handleIncrement}>Plus 1</RerenderBtn>
      </div>
    </div>
  );
};
