import { useEffect, useState } from "react";

let counterIntervals = 1;

function Child(props) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("(CDM) Component Did Mount");
  }, []);

  useEffect(() => {
    console.log("(CDU) Component Did Update");
  });
  useEffect(() => {
    console.log(`(CDU) Component Did Update - [counter] => [${counter}]}`);
  }, [counter]);
  useEffect(() => {
    console.log(
      `(CDU) Component Did Update - [props.parentCounter, counter] => [${[
        props.parentCounter,
        counter,
      ]}]`
    );
  }, [props.parentCounter, counter]);

  useEffect(() => {
    const id = crypto.randomUUID();
    const c = counterIntervals++;
    setInterval(() => {
      console.log(`timeout ${id} - ${c}`);
    }, 1000);

    return () => {
      console.log("helepo");
    };
  }, []);

  console.log("render");

  return (
    <div>
      <h1>Child</h1>
      <button
        className="btn btn-primary"
        onClick={() => setCounter((counter) => counter + 1)}
      >
        {counter}
      </button>

      <div>
        <h3>props</h3>
        <pre className="fs-2">{JSON.stringify(props, null, 2)}</pre>
      </div>
    </div>
  );
}

export default Child;
