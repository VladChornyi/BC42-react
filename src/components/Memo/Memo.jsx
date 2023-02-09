import { Button } from "../Button/Button";

const cache = {};

export const Memo = () => {
  const calculate = (a, b) => {
    const key = JSON.stringify({ a, b });
    if (cache[key]) {
      console.log(cache, "from cache", cache[key]);
    } else {
      const result = a + b;
      cache[key] = result;
      console.log("calculated", result);
    }
  };

  return (
    <>
      <Button onClick={() => calculate(2, 2)}>2+2</Button>
      <Button onClick={() => calculate(3, 2)}>3+2</Button>
      <Button onClick={() => calculate(4, 5)}>4+5</Button>
    </>
  );
};
