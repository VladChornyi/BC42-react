import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Button } from "../Button/Button";

const INTERVAL = 1000;

export const Timer = () => {
  const [date, setDate] = useState(new Date());
  const [state, setState] = useState(0);
  const testRef = useRef(0);
  const intervalRef = useRef(null);
  const textRef = useRef(null);
  const data = useContext(AuthContext);
  console.log(data);

  useEffect(() => {
    console.log("render ");
  });

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setDate(new Date());
    }, INTERVAL);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  const handleStopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      textRef.current.style.color = "red";
    }
  };
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return (
    <div className="mb-5 p-5 text-white bg-dark rounded-3">
      <h2 className="text-center">Timer</h2>
      <p ref={textRef} className="text-center my-5" style={{ fontSize: 80 }}>
        {`${hours}:${minutes}:${seconds}`}
      </p>
      <Button onClick={handleStopTimer}>Stop timer</Button>
      <Button
        onClick={() => {
          setState((prev) => prev + 1);
        }}
      >
        State
      </Button>
      <Button
        onClick={() => {
          testRef.current += 1;
        }}
      >
        Ref
      </Button>
    </div>
  );
};
